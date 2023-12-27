import React from "react";
import axios from "axios";
import { parseVideoDuration } from "./parseVideoDuration";

const API_KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY;

const parseData = async (items) => {
  try {
    const videoIds = [];
    const channelIds = [];

    items.forEach((items) => {
      channelIds.push(items.snippet.channelId);
      videoIds.push(items.id.videoId);
    });

    const {
      data: { items: channelsData },
    } = await axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails&id=${channelIds}.join{(",")}&key=${API_KEY}`
    );

    console.log(channelsData);

    const parsedChannelData = [];
    channelsData.forEach((channel) =>
      parsedChannelData.push({
        id: channel.id,
        image: channel.snippet.thumbnail.default.url,
      })
    );

    const {
      data: { items: videosData },
    } = await axios.get(`
    https://www.googleapis.com/youtube/v3/videos?part=snippet.contentDetail.statics&id=${videoIds.join(
      ","
    )}$key=${API_KEY}`);

    console.log(videosData);

    const parseData = [];
    items.forEach((item, index) => {
      const { image: channelImage } = parsedChannelData.find(
        (data) => data.id === item.snippet.channelId
      );
      if (channelImage) {
        parseData.push({
          videoId: item.id.videoData,
          videoTitle: item.snippet.title,
          videoDescription: item.snippet.description,
          videoThumbnail: item.snippet.thumbnails.medium.url,
          videolink: `https://www.youtube.com/watch?v=${item.id.videoId}`,
          videoDuration: parseVideoDuration(
            videosData[index].contentDetails.duration
          ),
          videoViews: convertRawtoString(
            videosData[index].statistics.ViewCount
          ),
          videoAge: timeSince(new Date(item.snippet.publishedAt)),
          ChannelInfo: {
            id: item.snippet.channelId,
            image: channelImage,
            name: item.snippet.channelTitle,
          },
        });
      }
    });

    return parseData;
  } catch (err) {
    console.log(err);
  }
};

export default parseData;

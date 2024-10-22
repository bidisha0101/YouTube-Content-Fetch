// app/api/videos/route.js

import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  const API_KEY = "AIzaSyC3wW9pHJMqUb0PJ2ufI8tlQPWsF1Pd6vQ";
  const channelId = "UC3N9i_KvKZYP4F84FPIzgPQ";

  try {
    const channelRes = await axios.get(
      `https://www.googleapis.com/youtube/v3/channels`,
      {
        params: {
          part: "contentDetails",
          id: channelId,
          key: API_KEY,
        },
      }
    );

    const uploadsPlaylistId =
      channelRes.data.items[0].contentDetails.relatedPlaylists.uploads;

    const playlistRes = await axios.get(
      `https://www.googleapis.com/youtube/v3/playlistItems`,
      {
        params: {
          part: "snippet",
          playlistId: uploadsPlaylistId,
          maxResults: 100,
          key: API_KEY,
        },
      }
    );

    const videos = playlistRes.data.items.map((item) => ({
      title: item.snippet.title,
    }));

    return NextResponse.json(videos);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

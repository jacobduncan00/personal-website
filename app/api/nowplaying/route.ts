import { NextResponse } from "next/server";
import SpotifyWebApi from "spotify-web-api-node";

const api = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_ID,
  clientSecret: process.env.SPOTIFY_SECRET,
  redirectUri: process.env.SPOTIFY_REDIRECT,
});

export async function GET() {
  try {
    api.setRefreshToken(process.env.SPOTIFY_REFRESH_TOKEN!);
    const data = await api.refreshAccessToken();
    api.setAccessToken(data.body.access_token);


    const currentlyPlayingTrack = await api.getMyCurrentPlayingTrack();
    const recentTracks = await api.getMyRecentlyPlayedTracks({
      limit: 1,
    });

    return NextResponse.json(currentlyPlayingTrack.body.is_playing ? { track: currentlyPlayingTrack.body.item, isPlaying: true } : { track: recentTracks.body.items[0].track, isPlaying: false });
  } catch (err) {
    console.log("Something went wrong!", err);
  }
};

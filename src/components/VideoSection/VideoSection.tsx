import React from 'react';
import { VideoPlayer } from './VideoPlayer';

export function VideoSection() {
  return (
    <VideoPlayer
      src="/src/components/assets/AdityaBirla-Sara-full (1) (online-video-cutter.com).mp4"
      title="Financial Solutions Made Simple"
      description="Discover how we can help secure your financial future"
    />
  );
}
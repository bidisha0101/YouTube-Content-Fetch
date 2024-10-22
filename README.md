# YouTube-Content-Fetch

This project is to make a website fo# YouTube Channel Video Retriever

## Overview

This project is designed to help users retrieve all videos from a favorite educational YouTube channel and compile them into a list. The main goal of the project is to accelerate interview preparation by providing quick access to the complete list of videos from an EdTech channel, making it easier to find and review relevant content.

The website created by this project allows users to input the channel ID and fetch a complete list of video titles and links, displayed in an easily navigable format.

## Features

- **YouTube Data API Integration**: Uses the YouTube Data API to retrieve video data from a specified channel.
- **Video Listing**: Displays all videos from the channel, including the title and link to each video.
- **Paginated Requests**: Handles large channels by fetching videos in paginated batches (50 videos at a time).
- **Search and Filter**: Option to search or filter the video list based on keywords (future feature).
- **Fast Access**: Designed to speed up the process of finding useful videos for interview preparation.

## Motivation

The primary reason for building this project is to streamline interview preparation by organizing the content of a favorite educational technology channel. Instead of manually searching for relevant videos, users can quickly access a full list of videos and navigate to those that suit their study needs.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

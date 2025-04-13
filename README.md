# Onelink

Onelink is an link-in-bio tool, where the data lives in the URL.

![Screenshot2023-01-30 at 00 40 04@2x](https://user-images.githubusercontent.com/15716057/215350057-5fbf81f5-5f33-4cbe-98ba-0ced8b3c09c8.jpg)

> **Note**
> Since the URL can become very long, it's better to use a link shortener like https://dub.co

Here's a demo page https://onelink-nu.vercel.app/user?data=eyJuYW1lIjoiSm9obiBTbm93IiwiZGVzYyI6IkknbSBKb2huIFNub3csIHRoZSBraW5nIGluIHRoZSBub3J0aC4gSSBrbm93IE5vdGhpbmcuIiwiaW1hZ2UiOiJodHRwczovL3BsYWNlaG9sZC5jby8yMDA_dGV4dD1KIiwiZmFjZWJvb2siOiJodHRwczovL3d3dy5mYWNlYm9vay5jb20vam9obl9zbm93IiwidHdpdHRlciI6Imh0dHBzOi8vdHdpdHRlci5jb20vam9obl9zbm93IiwiaW5zdGFncmFtIjoiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9qb2huX3Nub3ciLCJlbWFpbCI6Im1haWxAam9obl9zbm93LmNjIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL2pvaG5fc25vdyIsInlvdXR1YmUiOiJodHRwczovL3lvdXR1YmUuY29tL0Bqb2huX3Nub3ciLCJibHVlc2t5IjoiaHR0cHM6Ly9ic2t5LmFwcC9wcm9maWxlL2pvaG5zbm93LmJza3kuc29jaWFsIiwiZGV2dG8iOiJodHRwczovL2Rldi50by9qb2huc25vdyIsInRlbGVncmFtIjoiaHR0cHM6Ly90Lm1lL2pvaG5fc25vdyIsIndoYXRzYXBwIjoiKzkxODg4ODg4ODg4OCIsImxpbmtlZGluIjoiaHR0cHM6Ly9saW5rZWRpbi5jb20vam9obl9zbm93IiwibG5rcyI6W3siaWQiOiI0bDEwdDZhYyIsImxhYmVsIjoiUG9ydGZvbGlvIiwiaWNvbiI6Im1kaTpnbG9iZSIsInVybCI6Imh0dHBzOi8vam9obnNub3cuY29tIn0seyJpZCI6IjRpYXZ0ZTEzIiwibGFiZWwiOiJSZXN1bWUiLCJpY29uIjoibWRpOmZpbGUtZG9jdW1lbnQiLCJ1cmwiOiJodHRwczovL2pvaG5zbm93LmNvbS9yZXN1bWUifV19

The data is converted to a base 64 string which we onelink uses as a query parameter. I have tried to reduce the json keys to be as small as possible

## What Next

1. Templates - make different templates, the `/user` after the host is basically a template here.
2. Load from link - user could load and edit previously published data by using url they got on-publish.

## Setup locally

Make sure to install the dependencies:

```bash
# npm
npm install

# yarn
yarn install

# pnpm
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
# npm
npm start

# yarn
yarn start

# pnpm
pnpm start
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.

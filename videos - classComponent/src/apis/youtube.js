import axios from "axios";

const KEY = "AIzaSyA9sSc-uxja3Ha5d-BfPCTBuRkDEAIXBz4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});

import axios from "axios";

const KEY = "AIzaSyDm6Gi6l4SsmBzQBDSjT8Aqrniqhwd08JE";

export default axios.create({
  baseURL: "https://www.googeapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});

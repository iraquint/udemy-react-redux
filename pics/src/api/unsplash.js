import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID e5d1d696f99e7ca24a97b1635436f3f41b29453d45c6382dab0a410350f1ddeb"
  }
});

// alternate approach: could implement a searchImages function

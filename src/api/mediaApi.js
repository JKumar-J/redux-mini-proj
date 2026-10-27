import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_KEY =
  import.meta.env.VITE_PEXELS_KEY || import.meta.env.VITE_PEXLES_KEY;
const GIPHY_KEY = import.meta.env.VITE_GIPHY_KEY;

export async function fetchPhotos(query, page = 1, per_page = 10) {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: { query, page, per_page },
    headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` },
  });
  // console.log(response.data.results);

  const data = response.data.results.map((item) => ({
    id: item.id,
    typeOfImage: "photo",
    url: item.urls.regular,
    description: item.alt_description,
  }));

  return data;
}

export async function fetchVideos(query, per_page = 10) {
  const response = await axios.get("https://api.pexels.com/v1/videos/search", {
    params: { query, per_page },
    headers: { Authorization: PEXELS_KEY },
  });
  const data = response.data.videos.map((item) => ({
    id: item.id,
    typeOfImage: "video",
    src: item.video_files[0].link,
    thumbnail: item.image,
    description: item.user.name,
  }));

  return data;
}

export async function fetchSticker(
  q,
  api_key = GIPHY_KEY,
  limit = 10
) {
  const response = await axios.get("https://api.giphy.com/v1/stickers/search", {
    params: { api_key, q, limit },
    // headers:{Authorization: PIXLES_KEY }
  });
  // console.log(response.data.data);

  const data = response.data.data.map((item) => ({
    id: item.id,
    typeOfImage: "sticker",
    url: item.images?.fixed_height?.url || item.images?.original?.url || "",
    title: item.title || "Untitled sticker",
    username: item.user?.display_name || item.user?.username || "Unknown",
  }));
  // console.log(data);

  return data;
}

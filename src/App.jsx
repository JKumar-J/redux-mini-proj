import { useState } from "react";
// import { fetchPhotos, fetchSticker, fetchVideos } from "./api/mediaApi";
import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";
import ResultGrid from "./components/ResultGrid";

function App() {
  return (
    <div className="min-h-screen min-w-screen">
      <SearchBar></SearchBar>
      <Tabs />
      <ResultGrid />
    </div>
  );
}

export default App;

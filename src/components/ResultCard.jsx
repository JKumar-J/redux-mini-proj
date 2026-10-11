import React from "react";
import { useSelector } from "react-redux";
import "./ResultCard.css";

const ResultCard = ({ id }) => {
  const elem = useSelector((store) =>
    store.search.results.find((item) => item.id === id)
  );

  if (!elem) return null;

  return (
    <div className={`result-card ${elem.typeOfImage || ""}`}>
      {elem.typeOfImage === "photo" && (
        <img src={elem.url} alt={elem.description || "Photo"} loading="lazy" />
      )}

      {elem.typeOfImage === "video" && (
        <video
          src={elem.src || elem.url}
          controls
          muted
          loop
          preload="metadata"
        />
      )}

      {elem.typeOfImage === "sticker" && (
        <img src={elem.url} alt={elem.title || "Sticker"} loading="lazy" />
      )}

      {(elem.description || elem.title) && (
        <div className="result-info">
          <p>{elem.description || elem.title}</p>
        </div>
      )}
    </div>
  );
};

export default ResultCard;

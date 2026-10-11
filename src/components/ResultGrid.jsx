import React, { useEffect } from "react";
import { fetchPhotos, fetchVideos, fetchSticker } from "../api/mediaApi";
import ResultCard from "./ResultCard";
import "./ResultGrid.css";

import { setError, setLoading, setResults } from "../redux/feature/searchSlice";

import { useDispatch, useSelector } from "react-redux";

const ResultGrid = () => {
  const dispatch = useDispatch();

  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search
  );

  useEffect(() => {
    let cancelled = false;

    const getData = async () => {
      if (!query?.trim()) {
        dispatch(setResults([]));
        dispatch(setError(null));
        dispatch(setLoading(false));
        return;
      }

      try {
        dispatch(setLoading(true));
        dispatch(setError(null));

        let data = [];

        if (activeTab === "Photos") {
          data = await fetchPhotos(query);
        } else if (activeTab === "Videos") {
          data = await fetchVideos(query);
        } else if (activeTab === "GIFs") {
          data = await fetchSticker(query);
        }

        if (!cancelled) {
          dispatch(setResults(data ?? []));
        }
      } catch (err) {
        console.error("Failed to fetch media:", err);

        if (!cancelled) {
          dispatch(setError("Failed to fetch media. Please try again."));
          dispatch(setResults([]));
        }
      } finally {
        if (!cancelled) {
          dispatch(setLoading(false));
        }
      }
    };

    getData();

    return () => {
      cancelled = true;
    };
  }, [query, activeTab, dispatch]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (!results?.length) {
    return query?.trim() ? (
      <div className="no-results">No results found.</div>
    ) : (
      <div className="no-results">
        Search for photos, videos, or GIFs to get started.
      </div>
    );
  }

  return (
    <div className="results-grid">
      {results.map((elem) => (
        <ResultCard key={elem.id} id={elem.id} />
      ))}
    </div>
  );
};

export default ResultGrid;

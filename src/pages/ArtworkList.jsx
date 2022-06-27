import React, { useState, useEffect } from "react";
import ArtworkCard from "../components/ArtworkCard/ArtworkCard";
import ArtworkListHeader from "../components/ArtworkListHeader/ArtworkListHeader";
import Pagination from "../components/Pagination/Pagination";

import "./ArtworkList.css";

import { fetchArtworks } from "../api/fetchArtworks";

// Regarding the search feature the api response sadly doesn't provide an easy way to access an image :(
// Tried to use imgSrc || (good image url), but since the imgSrc is a string it is always true, therefore this method is not available in this case

const ArtworkList = ({ setBookmarked, bookmarked }) => {
  const [artworks, setArtworks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPageCount, setItemsPerPageCount] = useState(25);

  useEffect(() => {
    fetchArtworks(currentPage, itemsPerPageCount).then((data) =>
      setArtworks(data.data)
    );
  }, [currentPage, itemsPerPageCount]);

  return (
    <>
      <ArtworkListHeader
        setArtworks={setArtworks}
        IPP={itemsPerPageCount}
        setIPP={setItemsPerPageCount}
      ></ArtworkListHeader>
      <div className="ArtworkList">
        {artworks.map((artwork) => (
          <ArtworkCard
            artwork={artwork}
            tags={artwork?.term_titles?.slice(0, 3)}
            key={artwork.id}
            title={artwork.title}
            id={artwork.image_id}
            setBookmarked={setBookmarked}
            bookmarked={bookmarked}
          ></ArtworkCard>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      ></Pagination>
    </>
  );
};

export default ArtworkList;

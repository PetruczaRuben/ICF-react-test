import React from "react";
import ArtworkCard from "../components/ArtworkCard/ArtworkCard";

const Bookmarks = ({ bookmarked, setBookmarked }) => {
  return (
    <>
      <div className="ArtworkList">
        {bookmarked.map((artwork) => (
          <ArtworkCard
            artwork={artwork}
            tags={artwork?.term_titles?.slice(0, 3)}
            key={artwork.id}
            title={artwork.title}
            id={artwork.image_id}
            bookmarked={bookmarked}
            setBookmarked={setBookmarked}
          ></ArtworkCard>
        ))}
      </div>
    </>
  );
};

export default Bookmarks;

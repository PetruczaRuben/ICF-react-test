import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import ArtworkDetails from "../ArtworkDetails/ArtworkDetails";

import "./ArtworkCard.css";

const ArtworkCard = ({
  id,
  title,
  tags,
  artwork,
  setBookmarked,
  bookmarked,
}) => {
  const imgSrc = `https://www.artic.edu/iiif/2/${id}/full/843,/0/default.jpg`;

  const handleBookmark = () => {
    if (bookmarked.includes(artwork)) {
      setBookmarked(bookmarked.filter((e) => e !== artwork));
    } else {
      setBookmarked([artwork, ...bookmarked]);
    }
  };

  return (
    <Card className="ArtworkCard" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="340"
        width="300"
        image={imgSrc}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Stack className="Chips" direction="row" spacing={1}>
          {tags?.map((tag) => (
            <Chip label={tag} key={Math.random()} />
          ))}
        </Stack>
      </CardContent>
      <CardActions className="CardCta">
        <ArtworkDetails artwork={artwork} handleBookmark={handleBookmark} />
        <Button size="small" onClick={handleBookmark}>
          Bookmark
        </Button>
      </CardActions>
    </Card>
  );
};

export default ArtworkCard;

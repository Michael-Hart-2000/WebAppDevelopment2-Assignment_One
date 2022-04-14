import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Tooltip from "@mui/material/Tooltip";

const AddToFavoritesIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToFavorites = (e) => {
    e.preventDefault();
    context.addToFavorites(movie);
  };

  return (
    <Tooltip title="Add to Favourites">
    <IconButton aria-label="add to favorites" onClick={handleAddToFavorites}>
      <FavoriteBorderIcon color="error" fontSize="large" />
    </IconButton>
    </Tooltip>
  );
};

export default AddToFavoritesIcon;

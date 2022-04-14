import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromFavoritesIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleRemoveFromFavorites = (e) => {
    e.preventDefault();
    context.removeFromFavorites(movie);
  };
  return (
    <Tooltip title="Delete">
    <IconButton
      aria-label="remove from favorites"
      onClick={handleRemoveFromFavorites}
    >
      <DeleteOutlineIcon color="error" fontSize="large" />
    </IconButton>
    </Tooltip>
  );
};

export default RemoveFromFavoritesIcon;
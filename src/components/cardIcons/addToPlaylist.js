import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import Tooltip from "@mui/material/Tooltip";

const AddToPlaylistIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToPlaylist = (e) => {
    e.preventDefault();
    context.addToPlaylist(movie);
  };

  return (
    <Tooltip title="Add to Playlist">
    <IconButton aria-label="add to favorites" onClick={handleAddToPlaylist}>
      <PlaylistAddIcon color="error" fontSize="large" />
    </IconButton>
    </Tooltip>
  );
};

export default AddToPlaylistIcon;

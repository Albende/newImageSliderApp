import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/icons-material/CheckBox";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/Favorite";
import InputSlider from "./InputSlider";
import { itemData } from "./itemData";

const NewImageCorouse = ({ photos }) => {
  return (
    <ImageList cols={3}>
      {photos.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <div style={{}}>
            <FormControlLabel
              control={
                <FavoriteBorder icon={<FavoriteBorder />} name="checkedH" />
              }
              label={`${item.likeCount} Likes`}
            />
          </div>
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default NewImageCorouse;

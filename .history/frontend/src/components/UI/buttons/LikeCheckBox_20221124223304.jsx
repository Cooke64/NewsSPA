import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function LikeCheckBox() {
    const [checked, setChecked] = React.useState(true);

    const handleChange = () => {
        setChecked(!checked)
        console.log(checked)
    };
  return (
    <div>
      <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
      <Checkbox
        checked={checked}
        onChange={handleChange}
        {...label}
        icon={<FavoriteBorder />}
        checkedIcon={<BookmarkIcon />}
        
      />
    </div>
  );
}
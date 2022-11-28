import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';


export default function LikeCheckBox({checked, handleChange}) {

  return (
    <div>
      <Checkbox
        checked={checked}
        onChange={() => handleChange()}
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}    
      />
    </div>
  );
}
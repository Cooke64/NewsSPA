import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function LikeCheckBox() {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked(!checked)
        console.log(checked)
    };
  return (
    <div>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        {...label}
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
        
      />
    </div>
  );
}
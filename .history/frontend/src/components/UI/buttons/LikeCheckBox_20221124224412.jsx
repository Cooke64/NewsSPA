import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import api from 'api';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function LikeCheckBox() {
    const [checked, setChecked] = React.useState(false);
    const {id} = React.useParams();

    const handleChange = () => {
        api.addInFavorite(id).then((res) => console.log(res))
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
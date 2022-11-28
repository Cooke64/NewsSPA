import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import api from 'api';
import { useParams} from 'react-router-dom'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function LikeCheckBox() {
    const [checked, setChecked] = React.useState(false);
    const {id} = useParams();

    const handleChange = () => {
        checked
          ? api.removeFavorite(id).then(
            () => setChecked(true))
          : api.addInFavorite(id).then(() => setChecked(false))        
    };
    React.useEffect(() =>{}, [checked])
    console.log(che)
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
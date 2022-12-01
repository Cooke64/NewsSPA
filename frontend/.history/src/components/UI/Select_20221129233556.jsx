import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import api from 'api';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 260,
    },
  },
};



export default function MultipleSelectCheckmarks({tags, handleChange, tagsSet}) {


 React.useEffect(
    ()=> {}, [tags])

  return (
    <div>
      <FormControl sx={{ m: 1, width: 320 }}>
        <InputLabel id="add-tag-to-new-post-label">Tag</InputLabel>
        <Select
          labelId="add-tag-to-new-post-label"
          id="add-tag-to-new-post"
          multiple
          value={tags}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {tagsSet.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={tagsSet.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

export default function TagsButtons(tags) {
    const [tagsList = tags
    console.log(tagsList)
  return (
    <div>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    ></Box>
    <ButtonGroup variant="text" aria-label="text button group">
        {/* {tags.map(tag => (
            <Button>{tag.title}</Button>
        ))
        } */}
      </ButtonGroup>
    </div>
  )
}

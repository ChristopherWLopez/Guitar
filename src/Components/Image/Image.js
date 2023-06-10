import React from 'react'
import { ImageList, ImageListItem } from '@mui/material';
import pics from '../Pics/Pics';


 function Image() {
  return (
      <ImageList variant='masonry' sx={{width: 500, height: 450}} cols={3} rowHeight={164}>
        {pics.map((item)=> (
            <ImageListItem>
                <img 
                    src={`${item.image}`}
                    alt={item.name}
                    loading="lazy"/>
        </ImageListItem>    
            ))}
      </ImageList>
  )
}

export default Image;
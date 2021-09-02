import React from 'react';
import ImageGallery from 'react-image-gallery';
import {createGlobalStyle} from 'styled-components';

const Global = createGlobalStyle`
  .image-gallery-svg {
    height : 60px !important
  }
`

const PostCardImage = ({images}) => {
  // const items = [{
  //     original : images[0].src,
  //     thumbnail : images[0].src,
  //   },{
  //     original : images[1].src,
  //     thumbnail : images[1].src,
  //   },{
  //     original : images[2].src,
  //     thumbnail : images[2].src,
  //   },
  // ];
  let items = images.map((data)=>{
    return(
      {original : data.src,
      thumbnail : data.src}
    )
  })

  return(
    <div style={{width:"50vw", margin:"10px", padding:"20px", border:"1px solid #f0f0f0", marginLeft:"20vw"}}>
      <Global/>
      <ImageGallery items={items} showPlayButton={false} showThumbnails={false} showBullets={true}/>
    </div>
  )
};
export default PostCardImage;
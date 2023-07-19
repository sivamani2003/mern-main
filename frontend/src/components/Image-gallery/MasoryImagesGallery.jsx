import React from 'react'
import  Mansory,{ ResponsiveMasonry } from 'react-responsive-masonry'
import galleryImages from './galleryImages'
const MasoryImagesGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{350:1,768:3,992:4}}>
        <Mansory gutter='1rem'>
            {
                galleryImages.map((item,index)=>(
                    <img className="mansory__img"
                        src={item} 
                        key={index} 
                        alt="" 
                        style={{'width':'100%','display':'flex','borderRadius':'10px'}}
                    />
                ))
            }
        </Mansory>
    </ResponsiveMasonry>
  )
}

export default MasoryImagesGallery
//For now I am Using this card for temporary propuse 
import React from 'react'
//import Jeans from '../../objects/LadiesJeans'

const Card = () => {

  //const jeans = Jeans;


  return (
    <div className='flex cards-container'>
      <img 
      src="https://i.pinimg.com/736x/bc/fa/93/bcfa93068938449f6b9ef83cbec0c841.jpg"
        alt="Tradtional Wear"
      />
      
      <img 
      src="https://cdn0.weddingwire.in/article/8280/original/1280/png/110828-indo-western-outfits-navratri-kalista.jpeg"
       alt="Indo Western Wear" /> 
        
        <img 
        src="https://i.pinimg.com/736x/79/9e/29/799e297e3130642977b12c35ee90a1fd.jpg"
         alt="Casual Wear" />

         <img 
         src="https://phenav.com/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-16-at-3.00.05-PM-1.webp" 
         alt="Party Wear" />

         <img 
         src="https://www.urbansuburban.in/image/catalog/2023/love_laddos/co-ord/LL23-COD-16-NX/1.jpg" 
         alt="Party Wear" />
      {/* {
      Jeans.map((items)=>{
       return( <div className='theCards'>
          <img src={items.img} alt='fashion pic' />
          <p className='card-title'>
            {items.title}
          </p>
          <p className='card-designer'>
            {items.designer.toUpperCase()}
          </p>
        </div>
)      })
    } */}
    </div>
  )
}

export default Card

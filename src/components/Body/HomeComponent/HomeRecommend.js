import React from 'react'

const HomeRecommend = () => {
  const suggestedProduct = [
    {
      id:1,
      img:'https://i.pinimg.com/564x/1e/8a/fd/1e8afdb1ddac4f2e3af5589bd4cc5705.jpg',
      name:'Indo Western'
    },
    {
      id:2,
      img:'https://i.pinimg.com/564x/4d/b8/cd/4db8cdf1805abf930b352155f938150a.jpg',
      name:'Summer Wear'    
    }, 
    {
      id:6,
      img:'https://i.pinimg.com/564x/ec/db/ef/ecdbefb06ee8d10bae40ac24f3ba7b8b.jpg',
      name:'Traditional '
    }, 
    {
      id:4,
      img:'https://i.pinimg.com/736x/b0/65/5c/b0655cb6c4ae7de1dc4b8fc6e8a1287a.jpg',
      name:'Grown'
    },
    {
      id:5,
      img:'https://i.pinimg.com/564x/d6/cf/3c/d6cf3c249acb7662af3bbfb26baa1dea.jpg',
      name:'Dress'
    },
    
  ]

  return (
    <div>
      <div className="homeSuggestion">
      {
        suggestedProduct.map((item)=>{
         return (<div className="suggestionCloth" key={item.id}>
          <img src={item.img} alt="Product" />
          <h3 className="suggestionName">{item.name}</h3>
          </div>)
        })
      }
         
      </div>
    </div>
  )
}

export default HomeRecommend

import React from 'react'
import Trending from '../../objects/Trending'

const Trends = () => {

  const trendWear = Trending.map((trend) => {
    return (
      <div key={trend.id} className='trendsCard'>
        <div className='trendsImg-Container'>
        <img src={trend.img} alt='product' className='trendsImage'/> 
        </div>
        <h3 className='trendsName'>{trend.name}</h3>
        <p  className='trendsColors' >{trend.color}</p>
        {/* <p className=' trendsDetail'>Detail:- {trend.detail}</p> */}
        <button className='Cart-btn'>Add To Cart </button>
      </div>
    )
  })

  return (
    <div className='TrendsContainer grid'>
      {trendWear}
    </div>
  )
}

export default Trends

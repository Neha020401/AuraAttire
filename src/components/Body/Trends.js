import React,{useState} from 'react'
import Trending from '../../objects/Trending'

const Trends = () => {
const [cartTitle,setCartTitle] = useState(false);
  const trendWear = Trending.map((trend) => {
    return (
      <div key={trend.id} className='trendsCard'>
        <div className='trendsImg-Container'>
        <img src={trend.img} alt='product' className='trendsImage'/> 
        </div>
        <h3 className='trendsName'>{trend.name}</h3>
        <p  className='trendsColors' >{trend.color}</p>
        {/* <p className=' trendsDetail'>Detail:- {trend.detail}</p> */}
        <button 
        onClick={()=>{setCartTitle(prev => !prev)}}
        className={!cartTitle?'addCart-btn':'removeCart-btn'}>
          {!cartTitle ? "Add to Cart" : " Remove from Cart"}</button>
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

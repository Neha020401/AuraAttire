import React from 'react'

const MemberShip = () => {
  const cards = [
    {
      id:1,
      backgroudColor:'blue'
    },
    {
      id:2,
      backgroudColor:'red'
    },
    {
      id:3,
      backgroudColor:'yellow'
    },
    {
      id:4,
      backgroudColor:'green'
    },
    {
      id:5,
      backgroudColor:'black'
    }


  ]
  return (
    <div className='memberShipContainer'>
    {
      cards.map((card)=>{
        return(
          <div 
          key={card.id} 
          className='memberShipTemplate' 
          style={{backgroundColor:card.backgroudColor}}
          >
              {card.id}
          </div>
        )
      })
    }
    </div>
  )
}

export default MemberShip

import React from 'react'

const MyShop = () => {
  const items = []
  return (
    <div>
      <h1>
        Your Shop
      </h1>
      <div>
        hello , Welcome to the shop 
        items in your shops is {items.length}
      </div>
      {/* <div>
        {items.map((item)=>{
          <div key={item.id}>
           <p>
          {item.name}
            </p> 
            <p>
              {item.count}
            </p>
            <p>
              {item.price}
            </p>
 <div>
  {item.total}
 </div>
          </div>

        })}
      </div> */}
    </div>
  )
}

export default MyShop

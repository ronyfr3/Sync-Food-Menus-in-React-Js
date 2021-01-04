import React from 'react'
import './FoodList.css'

const FoodList = ({food}) => {
    return (
        <div className='foodlistWrapper'>
             {
              food.map((food,i)=>{
                  const { name , img , price } = food
                  return( 
                    <div className='foodlist' key={i}>
                      <img src={img} alt={name}/>
                      <div className='namePrice'>
                        <p className='foodname'>{name}</p>
                        <p className='foodprice'>${price}</p>
                      </div>

                    </div>
              )})}
        </div>
    )
}

export default FoodList

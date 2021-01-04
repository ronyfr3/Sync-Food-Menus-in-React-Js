import React from 'react'
import './FoodHeader.css'


const FoodHeader = ({category,filterCategory}) => {
    return (
        <div className='wrapper'>
          <h3>Top Food Menus</h3>
          <div className='underline'></div>
            <div className='foodbtn'>
              {
              category.map((item,i) =>{
                return(
                  <button
                      className='btn' 
                      onClick={()=>filterCategory(item)}
                      key={i}
                      >
                      {item}
                </button>
                )
                })}
            </div>

        </div>
    )
}

export default FoodHeader

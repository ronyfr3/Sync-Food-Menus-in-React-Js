import React, {useState} from 'react'
import FoodHeader from './FoodHeader'
import data from './data'
import FoodList from './FoodList'
import Footer from './Footer'

const MainComponent = () => {

    const [ food , setFood ] = useState(data)

    const AllUniqueCategory =['All',...new Set(food.map((food)=>food.category))] 
    console.log(AllUniqueCategory)
    const [ category , setCategory ] =useState( AllUniqueCategory )
    console.log(setCategory)
    const filterCategory = (category) =>{
        if(category === 'All'){
            setFood(data)
            return;
        }
        const newItems = data.filter((item)=> item.category === category)
        setFood(newItems)
    }
    return (
        <div>
            <FoodHeader category={category} filterCategory={filterCategory}/>
            <FoodList food={food}/>
            <Footer/>
        </div>
    )
}

export default MainComponent

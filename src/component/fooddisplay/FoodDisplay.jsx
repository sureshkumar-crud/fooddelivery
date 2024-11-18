import React, { useContext } from 'react'
import '../fooddisplay/FoodDisplay.css';
import FoodItem from '../fooditem/FoodItem';
import { StoreContext } from '../storecontext/StoreContext';

function FoodDisplay({ category }) {

  const { food_list } = useContext(StoreContext);

  return (

    <div className='food-display' id='food-display'>
      <h2>Top Dishes Near You</h2>

      <div className="food-display-list">

        {food_list.map((item, index) => {

          if (category === 'All' || category === item.category) {

            return (

              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}

              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default FoodDisplay;

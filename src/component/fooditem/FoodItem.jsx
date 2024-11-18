import React, { useContext } from 'react';
import '../fooditem/FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../storecontext/StoreContext';

function FoodItem({ id, name, image, description, price }) {

    const {cartItems , addToCart , removeCart} = useContext(StoreContext);

    return (
        <div className='food-item'>

            <div className="food-item-img-container">
                <img src={image} alt="food-image" className="food-item-image" />

                {!cartItems[id]
                    ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt='add-white-icon' />
                    : <div className="food-item-counter">

                        <img onClick={() => removeCart(id)} src={assets.remove_icon_red} alt='remove-icon'/>
                        <p>{cartItems[id]}</p>
                        <img onClick={() => addToCart(id)}  src={assets.add_icon_green} alt="add-green-icon" />
                        
                    </div>
                }

            </div>

            <div className="food-item-info">

                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="rating-stars" />
                </div>

                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">${price}</p>
            </div>
        </div>
    )
}

export default FoodItem;
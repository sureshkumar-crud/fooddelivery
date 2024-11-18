import React from 'react';
import '../ExploreMenu/ExploreMenu.css';
import {menu_list} from '../../assets/assets';


function ExploreMenu({category , setCategory}) {



  return (

    <div className='explore-menu' id='explore-menu'>

        <h2>Explore Our Menu</h2>
        <p className='explore-menu-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem assumenda architecto harum aut qui. Sit ducimus doloremque inventore repellat et.</p>

        <div className="explore-menu-list">

            {menu_list.map((item,index) =>{

                return (
                    <div key={index} onClick={() => setCategory(prev => prev === item.menu_name ? "All" :item.menu_name)} className='explore-menu-list-item'>

                        <img className={category === item.menu_name ?"active" :""} src={item.menu_image} alt="menu-image" />
                        <p>{item.menu_name}</p>

                    </div>
                )
            })}

        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu
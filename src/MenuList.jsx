import React from 'react';
import { useNavigate } from 'react-router-dom';

import ListItem from './ListItem';

import vegsoup from './assets/vegsoup.jpg'
import nonvegsoup from './assets/nonvegsoup.jpg'
import vegstarter from './assets/vegstarter.jpg'
import chickenstarter from './assets/chickenstarter.jpg'
import muttonstarter from './assets/muttonstarter.jpg'
import fishstarter from './assets/fishstarter.jpg'
import prawnstarter from './assets/prawnstarter.jpg'
import egg from './assets/egg.jpg'
import vegbiryani from './assets/vegbiryani.jpg'
import nonvegbieyani from './assets/nonvegbiryani.jpg'
import vegtandoori from './assets/vtandoori.jpg'
import nvtandoori from './assets/nvtandoori.jpg'
import rice from './assets/riceitems.jpg'
import vegfriedrice from './assets/vfriedrice.jpg'
import nvfriedrice from './assets/nvfriedrice.jpg'
import rotiitems from './assets/rotiitems.jpg'
import vegcurry from './assets/vcurrys.jpg'
import nvcurry from './assets/nvcurry.jpg'
import deserts from './assets/deserts.jpg'

const MenuList = () => {
    // const navigate = useNavigate();
    const images = [
        vegsoup,
        nonvegsoup,
        vegstarter,
        chickenstarter,
        muttonstarter,
        fishstarter,
        prawnstarter,
        egg,
        vegbiryani,
        nonvegbieyani,
        vegtandoori,
        nvtandoori,
        rice,
        vegfriedrice,
        nvfriedrice,
        rotiitems,
        vegcurry,
        nvcurry,
        deserts
    ];
      
const itemlist = [
    "Veg Soups",
    "Non Veg Soups",
    "Veg Starters",
    "Chicken Starters",
    "Mutton Starters",
    "Fish Starters",
    "Prawn Starters",
    "Egg",
    "Veg Biryani",
    "Non Veg Biryani",
    "Veg Tandoori",
    "Non Veg Tandoori",
    "Rice Items",
    "Veg Fried Rice",
    "Non Veg Fried Rice",
    "Roti Items",
    "Veg Currys",
    "Non Veg Currys",
    "Desserts"
  ]

    return (
        <div className='menuList '>
            <marquee behavior="alternate" scrollamount="15"><h3>SV FOOD COURT MENU CARD</h3></marquee>
          <div className="container">
            <div className="row ">
                    {itemlist.map((title, index) => (
                            <div className="col-sm-6 col-md-6 col-lg-4 my-4">
                                <ListItem key={index+1}  src={images[index]} title={title} />
                            </div>
                        ))
                    }
            </div>
          </div>
        </div>
    );
}

export default MenuList;

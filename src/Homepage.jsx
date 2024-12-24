import React,{ useState } from 'react';
import { useNavigate,BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuList from './MenuList'
import ListItem from './ListItem';

const Homepage = () => {
    const [isVisible, setIsVisible ] = useState(false);
    const navigate = useNavigate();
    const handleClick = (item) => {
        navigate('/MenuList')
      }

    const handleVisible = () => {
        setIsVisible(true) ;
    }
    const closeButton = () =>{
        setIsVisible(false);
    }
    return (
        <div className='homeC'>
          
            <div className='titlehead'>
               <span className='text-start fs-1'> <h2 >Welcome To</h2></span>
                <h1 className='svtext'><span className="heading">SV</span> Food Court</h1> 
                <h4 >Balabadhrapuram</h4>
            </div>
            <div>
            <div>
                    <button className='btn btn-primary px-5 ' onClick={handleClick}>MENU CARD</button>
                </div>
                <h5 className=' '>Wishing you a Merry Christmas, a Happy New Year, and a Joyous Sankranti!
                    Celebrate this festive season with us at SV Food Court . Indulge in delightful flavors,
                    warm hospitality, and moments of togetherness.
                    We look forward to making your visit a cherished memory!
                </h5>
               
            </div>
           
        </div>
    );
}

export default Homepage;

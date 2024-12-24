import React from 'react';
import { useNavigate } from 'react-router-dom';

const ListItem = ({src,title}) => {
    const navigate = useNavigate();
    const handleClick = (item) => {
        navigate('/item',{state:{clickedName:item}})
      }

    return (
        <div className='listItemC'  onClick={() => handleClick(title)} data-aos='zoom-in' data-aos-duration='1000'>
            <div className='py-3'>
                <img src={src} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title mt-4  fst-italic">{title}</h5>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        </div>
    );
}

export default ListItem;

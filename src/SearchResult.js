import React from 'react'
import './SearchResult.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star';

function SPCard({
    src,
    location,
    title,
    description,
    star,
    price,
    total
}) {
    return (
        <div className="searchResult">
            
            <img src={src} alt="" />

            <FavoriteBorderIcon className="searchResult__heart" />

            <div className="searchResult__info">
                
                <div className="searchResult__infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{description}</p>
                </div>

                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                        <StarIcon className="searchResult__star" />
                        <p>{star}</p>
                    </div>
                    <div className="searchResult__price">
                        <h4>{price}</h4>
                        <p>{total}</p>
                    </div>
                </div>
                
            </div>
        
        </div>
    )
}

export default SPCard

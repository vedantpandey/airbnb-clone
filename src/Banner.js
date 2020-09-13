import React, {useState} from 'react'
import './Banner.css'
import { Button } from "@material-ui/core";
import Search from './Search'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Banner() {
    const history = useHistory()
    const [showSearch, setShowSearch] = useState(false)
    
    return (
        <div className="banner">
            <div className="banner__search">
                {showSearch && <Search />}
                <Button onClick={() => setShowSearch(!showSearch)} className="banner__searchButton" variant="outlined">
                    {showSearch? "Hide" : "Search Dates"}
                </Button>
            </div>
            <div className="banner__left">
                <div className="pcont">
                    <p className="large">Get out and stretch your imagination</p>
                </div>
                <p className="small">Plan a different kind of getaway to uncover the hidden gems near you</p>
                <Button variant="outlined" onClick={() => history.push('./searchPage')}>
                    Explore nearby
                </Button>
            </div>
        </div>
    )
}

export default Banner

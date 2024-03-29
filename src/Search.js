import React, {useState} from 'react'
import './Search.css'
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import {DateRangePicker} from "react-date-range"
import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

//date picker
function Search() {
    const history=useHistory()
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

    const selectionRange={
        startDate:startDate,
        endDate:endDate,
        key:"selection"
    }

    function handleSelect(ranges){
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate)
    }
    return (
        <div className="search">
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />

            <h3>
                Number of Guests
                <PeopleIcon />
            </h3>
            <input min={0} defaultValue={2} type="number" />

        
            <Button onClick={() => history.push('./searchPage')}>
                    Search Airbnb
            </Button>

        </div>
    )
}

export default Search


// Make black part padding or magin in terms of % for responsive
//DO something for extra right white part when date picker opens up
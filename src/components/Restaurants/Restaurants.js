import { TextField } from '@material-ui/core';
import { Box } from '@material-ui/system';
import React, { useState, useEffect } from 'react';
import Restaurant from '../Restaurant/Restaurant';

const Restaurants = () => {
    const [searchValue, setSearchValue] = useState('')
    const [meals, setMeals] = useState([])

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))

    }, [searchValue])


    const handleSearch = (e) => {
        const searchText = e.target.value;
        setSearchValue(searchText);
    }
    return (
        <div>
            <Box

                sx={{

                    maxWidth: '100%',
                }}
            >
                <TextField onChange={handleSearch} fullWidth label="Search your Food Name" id="fullWidth" />
            </Box>
            <div className="row">


                {
                    meals.map(meal => <Restaurant key={meal.idMeal} meal={meal}></Restaurant>)
                }



            </div>

        </div>
    );
};

export default Restaurants;
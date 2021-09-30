import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const MealDetails = () => {
    let { mealId } = useParams();
    const [meal, setMeal] = useState([])

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMeal(data.meals))

    }, [meal])
    console.log(meal[0]);
    return (
        <div className="container">
            <div className="card" >
                <img
                    src={meal[0]?.strMealThumb}
                    className="card-img-top"
                    alt="..."
                    style={{ "height": "600px", "width": "600px", "borderRadius": "10px", "margin": "auto" }}
                />
                <div className="card-body">
                    <h5>Name: {meal[0]?.strMeal}</h5>
                    <h6>Category: {meal[0]?.strCategory}</h6>
                    <p className="card-text">
                        {meal[0]?.strInstructions}
                    </p>

                </div>
            </div>
        </div>
    );
};

export default MealDetails;
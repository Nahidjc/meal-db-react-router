import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const Restaurant = (props) => {

    const { strMeal, idMeal, strCategory, strMealThumb, strInstructions, strArea } = props.meal;
    console.log(props);
    return (
        <div className="mt-4 col-md-3">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={strMealThumb}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <div className="text-primary">
                            {strMeal}
                        </div>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {strInstructions.slice(0, 200)}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Buy</Button>
                    <Button size="small">More Details</Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default Restaurant;
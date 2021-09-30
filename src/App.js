import './App.css';
import Restaurants from './components/Restaurants/Restaurants';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MealDetails from './components/MealDetails/MealDetails';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Restaurants></Restaurants>
          </Route>
          <Route path="/food/:mealId">
            <MealDetails></MealDetails>
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;

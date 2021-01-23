import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./../Pages/Home";
import Header from "./../Components/Header/Header";
import Products from "./../Pages/Products";


const Routes = () => {
    return ( 
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/products" component={Products}/>
            </Switch>
        </Router>
     );
}
 
export default Routes;
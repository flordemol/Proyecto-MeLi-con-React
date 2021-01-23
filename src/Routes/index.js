import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = () => {}
const Products = () => {}

const Routes = () => {
    return ( 
        <Router>
            <Switch>
                <Route path="/" component={Home}/>
                <Route path="/products" component={Products}/>
            </Switch>
        </Router>
     );
}
 
export default Routes;
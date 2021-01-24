import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./../Pages/Home";
import Header from "./../Components/Header/Header";
import Products from "./../Pages/Products";


const Routes = ({ search, handlerSearch }) => {
    return ( 
        <Router>
            <Header handlerSearch={handlerSearch} />
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/products">
                    <Products search={search}/>
                </Route>
            </Switch>
        </Router>
     );
}
 
export default Routes;
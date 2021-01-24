import { useEffect, useReducer } from 'react';
import { initialState, productsReducer } from './../../reducers/products';
import { FETCHING, FETCH_SUCCESS } from './../../reducers/actions/products';
import {BASE_URL} from './../../constants';
import axios from 'axios';
import PropTypes from "prop-types";

const Products = ({search}) => {
    
    const [state, dispatch] = useReducer(productsReducer, initialState);

    const getProducts = async () => {
        try {
            const {data : info} = await axios.get(`${BASE_URL}/sites/MLA/search?q=${search}&limit=8`);
            dispatch({type: FETCH_SUCCESS, payload: {data : info.results}});
            console.log(info);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        // Petición HTTP
        getProducts();
    }, [search]);
    
    return ( 
        <>
            <h3>Producto a buscar: {search}</h3>
        </>
     );
}
 
Products.propTypes = {
    search: PropTypes.string,
}
export default Products;
import PropTypes from "prop-types";

const Products = ({search}) => {
    
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
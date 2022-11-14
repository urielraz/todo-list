import { useContext } from 'react';
import ProductsContext from '../../../Context/ProductsContext';
import Clock from '../../Dashboard/Clock/Clock';
import './Footer.css';

function Footer() {

    const { products } = useContext(ProductsContext)

    return (
        <footer className='Footer'>
            <Clock />
            Products: {products.length}
        </footer>
    )
}

export default Footer;
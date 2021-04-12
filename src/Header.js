import React from 'react'
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';

import './Header.css'

function Header() {

    const [{ basket }] = useStateValue();

    return (
        <nav className="header">
            <Link to="/">
                <img className="header__logo" 
                src="https://pngimg.com/uploads/amazon/amazon_PNG20.png" 
                alt="logo" />
            </Link>
            
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon"  />
            </div>
            
            <div className="header__nav">
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__option_one">Hello</span>
                        <span className="header__option_two">Sign in</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__option_one">Return</span>
                        <span className="header__option_two">& Orders</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__option_one">Your</span>
                        <span className="header__option_two">prime</span>
                    </div>
                </Link>
                <Link to="/checkout" className="header__link">
                    <div className="header__option_basket">
                        <ShoppingBasketIcon />
                        <span className="header__option_two header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>




        </nav>
    )
}

export default Header

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Exclusive.svg';
import CartIcon from './Cart.svg';

const Navbar = ({ cartItemCount }) => {
    const [active, setActive] = useState('Home');

    return (
        <div className='shadow-xl h-20 flex'>
            <div className='w-5/6 m-auto flex justify-between items-center'>
                {/* logo */}
                <div>
                    <img src={Logo} alt="Logo" />
                </div>
                {/* buttons */}
                <div>
                    <Link to='/' className={`text-2xl font-medium mx-4 ${active === "Home" ? "border-b-4 border-blue-500" : ""}`} onClick={() => setActive("Home")}>Home</Link>
                    <Link to='/Contact' className={`text-2xl font-medium mx-4 ${active === "Contact" ? "border-b-4 border-blue-500" : ""}`} onClick={() => setActive("Contact")}>Contact</Link>
                    <Link to='/About' className={`text-2xl font-medium mx-4 ${active === "About" ? "border-b-4 border-blue-500" : ""}`} onClick={() => setActive("About")}>About</Link>                </div>
                {/* cart */}
                <div>
                    <div className="relative py-2">
                        <div className="t-0 absolute left-3">
                            <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">{cartItemCount}</p>
                        </div>
                        <Link to="/cart">
                            <img src={CartIcon} alt="Cart" className="mt-4 h-12 w-8" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

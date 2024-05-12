import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cart = ({ cartItems, removeFromCart, history }) => {
    const [quantities, setQuantities] = useState([]);
    const [subtotalPrices, setSubtotalPrices] = useState([]);

    useEffect(() => {
        // Initialize quantities state with default values
        const initialQuantities = cartItems.map(item => 1);
        setQuantities(initialQuantities);
    }, [cartItems]);

    useEffect(() => {
        // Calculate subtotal prices
        const subtotals = cartItems.map((item, index) => item.price * quantities[index]);
        setSubtotalPrices(subtotals);
    }, [cartItems, quantities]);

    const handleQuantityChange = (index, quantity) => {
        const newQuantities = [...quantities];
        newQuantities[index] = quantity;
        setQuantities(newQuantities);
    };

    const calculateTotal = () => {
        let total = 0;
        subtotalPrices.forEach(price => {
            total += price;
        });
        return total.toFixed(2); // Return total with 2 decimal places
    };

    return ( 
        <div className='mt-10 w-5/6 m-auto'>
            <div className="mt-10 lg:mt-0">
                <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
                {cartItems.map((item, index) => (
                    <ul key={index} role="list" className="divide-y divide-gray-200">
                        <li className="flex py-6 px-4 sm:px-6">
                            <div className="flex-shrink-0">
                                <img src={item.url} alt="Front of men's Basic Tee in black." className="w-20 rounded-md" />
                            </div>

                            <div className="ml-6 flex-1 flex flex-col">
                                <div className="flex">
                                    <div className="min-w-0 flex-1">
                                        <h4 className="text-sm">
                                            <a href="#" className="font-medium text-gray-700 hover:text-gray-800"> {item.name} </a>
                                        </h4>
                                    </div>

                                    <div className="ml-4 flex-shrink-0 flow-root">
                                        <button onClick={() => removeFromCart(index)} type="button" className="-m-2.5 bg-white p-2.5 flex items-center justify-center text-gray-400 hover:text-gray-500">
                                            <span className="sr-only">Remove</span>
                                            {/* <!-- Heroicon name: solid/trash --> */}
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <div className="flex-1 pt-2 flex items-end justify-between">
                                    <p className="mt-1 text-sm font-medium text-gray-900">${item.price}</p>

                                    <div className="ml-4">
                                        <label htmlFor={`quantity-${index}`} className="sr-only">Quantity</label>
                                        <select id={`quantity-${index}`} name={`quantity-${index}`} className="w-20 rounded-md border border-gray-300 text-base font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={quantities[index]} onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}>
                                            {[...Array(10).keys()].map(i => (
                                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                ))}
                <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                    <h3 className="sr-only">Items in your cart</h3>
                    <dl className="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
                        <div className="flex items-center justify-between">
                            <dt className="text-sm">Subtotal</dt>
                            <dd className="text-sm font-medium text-gray-900">${calculateTotal()}</dd>
                        </div>
                        <div className="flex items-center justify-between">
                            <dt className="text-sm">Discount</dt>
                            <dd className="text-sm font-medium text-gray-900">50%</dd>
                        </div>
                        <div className="flex items-center justify-between">
                            <dt className="text-sm">Shiping</dt>
                            <dd className="text-sm font-medium text-gray-900">Free</dd>
                        </div>  
                        <div className="flex items-center justify-between">
                            <dt className="text-sm">Total</dt>
                            <dd className="text-sm font-medium text-gray-900">${calculateTotal()/2}</dd>
                        </div>
                        {/* Add shipping, taxes, and total here */}
                    </dl>
                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                        <Link to="/"><button type="submit" className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">Confirm order</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;

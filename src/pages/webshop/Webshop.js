import React, {useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const Webshop = () => {

useEffect(() => {
    async function fetchData() {
        try {
            const result = await axios.get('https://fakestoreapi.com/products');
            console.log(result.data);
        } catch (e) {
            console.error(e);
        }
    }
    fetchData();
},[]);

    return (
        <div>
            <h1>Dit wordt een prachtige webshop</h1>
            <Link to="/">Terug naar home</Link>
        </div>
    );
};

export default Webshop;
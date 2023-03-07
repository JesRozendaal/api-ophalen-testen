import React, {useEffect}  from 'react';
import axios from "axios";

// voor de test: https://api.punkapi.com/v2/beers
// Marvel API base endpoint: http(s)://gateway.marvel.com/


const Home = () => {
    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://gateway.marvel.com/v1/public/characters?ts=a&apikey=8af1f5447746327c2fe42e2f8ac85230&hash=0f6f327f0372f93add8a2596941907ff`);
                console.log(result.data);
            } catch (e) {
                console.error(e);
            }
        }
        fetchData();
        },[]);

    return (
        <div>
            <h1>Testing 1 2 3</h1>
        </div>
    );
};

export default Home;
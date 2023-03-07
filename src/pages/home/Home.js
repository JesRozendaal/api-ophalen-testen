import React, {useEffect, useState}  from 'react';
import axios from "axios";

// Marvel API base endpoint: http(s)://gateway.marvel.com/

const Home = () => {
const[Marvel, setMarvel] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://gateway.marvel.com/v1/public/characters?ts=a&apikey=${process.env.REACT_APP_API_KEY}&hash=fe4d63f4249748eb801bd839c42a624f`);
                console.log(result.data.data.results);
                setMarvel(result.data.data.results);
            } catch (e) {
                console.error(e);
            }
        }
        fetchData();
        },[]);

    return (
        <>
            <h1>Testing 1 2 3</h1>
            {Marvel &&
                <article>
                    <h1>er is data!</h1>
                    {Marvel.map((characters) => {
                        return(
                            <ul key={characters.id}>
                                <li>
                                    <p>{characters.name}</p>
                                </li>
                            </ul>
                        )})
                    }
                </article>
            }
        </>
    );
};

export default Home;
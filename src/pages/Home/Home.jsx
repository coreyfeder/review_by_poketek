import { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";

export default () => {
    const [pokemon, setPokemon] = useState([]);
    const [types, setTypes] = useState(["fire", "water", "grass"]);
    // const [selectedType, setselectedType] = useState('Water');

    //#region --- Data Fetching
    useEffect(() => {
        async function fetchData() {
            axios.get(`https://pokeapi.co/api/v2/type`).then( (res) => {setTypes(res.data.results);} )
        };
        fetchData();
    }, []);

    const handleClick = async (typeTitle) => {
        axios.get(`https://pokeapi.co/api/v2/type/${typeTitle}`).then((res) => {
            console.log(res.data.pokemon);
            setPokemon(res.data.pokemon);
        });
    };


    return (
        <div className="Home page">
          {types.map((item) => {
            return (
              <button name={item.name}
                onClick={() => {
                  handleClick(item.name);
                }}
              >
                {item.name}
              </button>
            );
          })}

          {pokemon ? (
            pokemon.map((item) => {
              return <h1>{item.pokemon.name}</h1>;
            })
          ) : (
            <div>
              <p>Loading...</p>
            </div>
          )}
        </div>
      );
    };

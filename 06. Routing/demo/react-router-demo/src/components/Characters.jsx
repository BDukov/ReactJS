import { useEffect, useState } from "react"
import Cards from "./Cards";
import style from './Characters.module.css' 

const baseURL = 'https://swapi.dev/api'

export default function Characters() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const abortController = new AbortController();

        fetch(`${baseURL}/people`, {signal: abortController.signal}) //unmounted
            .then(res => res.json())
            .then(data => {
                setCharacters(data.results)
            
            });
            return () => {
                abortController.abort();
            }
    })

    return (
        <div className={style.charList}>
            {characters.map((character, index) => <Cards key={character.name} id={index+1} {...character}/>)}
        </div>
    )
}
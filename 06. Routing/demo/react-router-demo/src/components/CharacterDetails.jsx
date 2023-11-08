import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CharacterDetails() {
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${id}`)
            .then(res => res.json())
            .then(setCharacter)
    }, [id]);
    
    return(
        <>
            <h1>{character.name}</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta quo dolor est consequuntur, maiores nam quaerat iste alias eaque doloremque eius deserunt laboriosam expedita laborum, voluptatem magnam adipisci corrupti enim?</p>
        </>
    );
}
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function CharacterDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${id}`)
            .then(res =>{
                if(!res.ok) {
                    throw new Error('Something went wrong')
                }
                return res.json()
            })
            .then(setCharacter)
            .catch((err) => {
                navigate('/characters')
            })
    }, [id]);

    return(
        <>
            <h1>{character.name}</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta quo dolor est consequuntur, maiores nam quaerat iste alias eaque doloremque eius deserunt laboriosam expedita laborum, voluptatem magnam adipisci corrupti enim?</p>
        </>
    );
}
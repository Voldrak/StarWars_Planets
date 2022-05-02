import styles from './PlanetsPreview.module.scss';
import { useState, useEffect } from "react";


const PlanetsPreview = (props) => {

    const [filmsCard, setFilmsCard] = useState([]);

    const data = props.data || {
        name: "Pippo",
        population: 100,
        diameter: 3300,
        terrain: "jungle",
        films: ["primo film"],
    }

    useEffect(() =>{
        Promise.all(data.films.map(url =>fetch(url)
            .then(resp => resp.json())
            .then(data => setFilmsCard(data.title))
            ))
},[])
console.log(filmsCard)
   

    return (
        <div className={styles.PlanetsPreview} >
            <p> Name: {data.name}</p>
            <p> Population: {data.population}</p>
            <p> Diameter: {data.diameter}</p>
            <p> Terrain: {data.terrain}</p>
            <p> Film:{filmsCard}</p>
        </div>
    )
}

export default PlanetsPreview;
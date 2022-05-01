import { useState, useEffect, createContext } from "react";
import Header from "../../Components/Header";

import PlanetsPreview from "../../Components/PlanetsPreview";
import Pagination from "./../../Components/Pagination";
import styles from "./Home.module.scss";

export const Context = createContext({ value: "", setValue: () => {} });
const planet = [];


const Planets = () => {

    const [value, setValue] = useState("");
    const [planetsCard, setPlanetsCard] = useState(planet);
    const [currentPage, setCurrentPage] = useState(1);


    const goToNextPage = () => {
        if (currentPage !== 6){
        setCurrentPage((page) => page + 1);
        }
      }
    
        const goToPreviousPage = () => {
          if (currentPage !== 1) {
            setCurrentPage((page) => page - 1);
            }
        }
    
        const changePage = (e) => {
            const pageNumber = Number(e.target.textContent)
            setCurrentPage(pageNumber);
        }


    useEffect(() =>{
        fetch("https://swapi.dev/api/planets/?page=" + currentPage)
        .then((response) => response.json())
        .then((data) => setPlanetsCard(data.results));
        
    },[currentPage])

    // console.log(planetsCard);

    return(
        <div>
            <Context.Provider value={{ value, setValue }}>
            <Header/>
                <h1>Planets</h1>
                <div className={styles.wrapper_Planets}>
                {planetsCard.map(( planet,index) =>
                      planet.name.toLowerCase().includes(value.toLowerCase()) && (
                <PlanetsPreview key={index} data={planet} />
                
            ))}
            <Pagination goToPreviousPage={goToPreviousPage} changePage={changePage} goToNextPage={goToNextPage}/>
                </div>
            </Context.Provider>

        </div>
        )
}

export default Planets;
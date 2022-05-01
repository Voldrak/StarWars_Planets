import SearchBar from "./searchBar";
import style from "./Header.module.scss";


const Header = () => {
    return(

        <div className={style.Header}>
            <div className={style.container_Title}>
            <h1 className={style.title}>Star Wars</h1>
            </div>
            <SearchBar />
        </div>

    )
}

export default Header;
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [nameUtente, setNameUtente] = useState("")
    const [password, setPassword] = useState("");

    let navigate = useNavigate();

    const loginFunction = (event) => {
        event.preventDefault();

        if (nameUtente === "Luke" && password === "skywalker") {
            navigate('/planets')
        } else {
            alert("Nome Utente o/e Password sbagliate")
        }
    }


    return(
        <div className={styles.Login_Page}>
            <form className={styles.Login_form}>
                <h1>Accedi</h1>

                <label htmlFor="nome_utente">Nome Utente</label>
                <input
                    value={nameUtente}
                    onChange={(event) => setNameUtente(event.target.value)}
                    type="text"
                    name="nome_utente"
                    autoComplete="off"
                    placeholder="Nome utente"
                    required
                />

                <label htmlFor="password">Password</label>
                <input
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                />
                <div>
                    <button className={styles.register}>
                    <Link to="/register"> Registrati</Link>
                    </button>
                        o
                    <button
                        type="submit"
                        onClick={loginFunction}
                    >
                        Accedi
                    </button>
                </div>
            </form>


        </div>
        )
}

export default Login;
import { useState } from "react";
import styles from "./Login.module.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [nameUtente, setNameUtente] = useState("")
    const [password, setPassword] = useState("");

    let navigate = useNavigate();

    const registration = () => {
        navigate('/register');
    }

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

                <label htmlFor="nome_utente">Nome Utente
                <input
                    value={nameUtente}
                    onChange={(event) => setNameUtente(event.target.value)}
                    type="text"
                    name="nome_utente"
                    autoComplete="off"
                    placeholder="Nome utente"
                    className={styles.inputLogin}
                    required
                /></label>

                <label htmlFor="password">Password
                <input
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    type="password"
                    name="password"
                    placeholder="Password"
                    className={styles.inputLogin}
                    required
                /></label>
                <div className={styles.wrapper_btnLogin}>
                    <button
                        className={styles.btnLog}
                        type="submit"
                        onClick={loginFunction}
                    >
                        Accedi
                    </button>
                    <button className={styles.btnLog} onClick={registration}>
                        Registrati
                    </button>
                        
                </div>
            </form>


        </div>
        )
}

export default Login;
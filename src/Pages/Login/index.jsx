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
                    <button className={styles.register} onClick={registration}>
                        Registrati
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
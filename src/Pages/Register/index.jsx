import { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";
import { httpPOST } from "../../Libs/http";
import styles from "./Register.module.scss";


const Register = () => {
    
    const [nomeUtente, setNomeUtente] = useState("");
    const [password, setPassword] = useState("");
    const [nome, setNome] = useState("");
    const [cognome, setCognome] = useState("");
    const [registerUser, setRegisterUser] = useState({})

    let navigate = useNavigate();

    const returnLogin = () => {
        navigate('/')
    }

    // Registrazione account
    const handleRegister = (event) => {
        event.preventDefault();
        httpPOST("/registration/", registerUser);
        alert("account creato")
        navigate('/')

    }

    // Check dell'username
    const checkUsername = event => {
        event.preventDefault();
        httpPOST("/check-username/");
        if (nomeUtente === "prova"){
            alert("Username non valido")
        } else {
            alert("Success")
        }
    }
        


    useEffect(() => {
        setRegisterUser({
            "username": nomeUtente,
            "password": password,
            "nome": nome,
            "cognome": cognome,
        })
    }, [nome, cognome, nomeUtente, password]);

    return(
        <div className={styles.register_Page}>
            <form className={styles.register_Form}>
                <h2>Registrati</h2>
                <label htmlFor="Nome_Utente">Nome Utente
                <input        
                    value={nomeUtente}
                    onChange={(event) => setNomeUtente(event.target.value)}
                    type="text"
                    name="Nome_Utente"
                    placeholder="Nome Utente"
                    className={styles.inputRegister}
                    required
                /> <button onClick={checkUsername}>Check</button></label>

                <label htmlFor="password">Password
                <input        
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    type="password"
                    name="password"
                    placeholder="password"
                    className={styles.inputRegister}
                    required
                /></label>

                <label htmlFor="Nome">Nome
                <input
                    value={nome}
                    onChange={(event) => setNome(event.target.value)}
                    type="text"
                    name="Nome"
                    placeholder="Nome"
                    className={styles.inputRegister}
                    required
                /></label>

                <label htmlFor="Cognome">Cognome
                <input
                    value={cognome}
                    onChange={(event) => setCognome(event.target.value)}
                    type="text"
                    name="Cognome"
                    placeholder="Cognome"
                    className={styles.inputRegister}
                    required
                /></label>

                <div className={styles.wrapper_btnRegister}>
                    <button className={styles.btnRegister} type="submit" onClick={handleRegister}>Register</button>
                    <button className={styles.btnRegister} onClick={returnLogin}>Torna al login</button>
                </div>
            </form>
        
        </div>
        )
}

export default Register;
import { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";
import { httpPOST } from "../../Libs/http";
import styles from "./Register.module.scss";


const Register = () => {
    
    const [nomeUtente, setNomeUtente] = useState("");
    const [password, setPassword] = useState("");
    const [nome, setNome] = useState("");
    const [cognome, setCognome] = useState("");
    const [checkName, setCheckName] = useState();
    // const [error, setError] = useState("");

    let navigate = useNavigate();

    const returnLogin = () => {
        navigate('/')
    }

    const register = (event) => {
        event.preventDefault();
    }

    const checkUsername = (event) => {
        setNomeUtente(event.target.value);
        // httpPOST("/check-username", checkName);
      };

      console.log(nomeUtente);

    useEffect(() => {
        }, []);

    return(
        <div className={styles.register_Page}>
            <form>
                <h2>Registrati</h2>
                <label htmlFor="Nome_Utente">Nome Utente</label>
                <input        
                    value={nomeUtente}
                    onChange={checkUsername}
                    type="text"
                    name="Nome_Utente"
                    placeholder="Nome Utente"
                    required
                />

                <label htmlFor="password">Password</label>
                <input        
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    type="password"
                    name="password"
                    placeholder="password"
                    required
                />

                <label htmlFor="Nome">Nome</label>
                <input
                    value={nome}
                    onChange={(event) => setNome(event.target.value)}
                    type="text"
                    name="Nome"
                    placeholder="Nome"
                    required
                />

                <label htmlFor="Cognome">Cognome</label>
                <input
                    value={cognome}
                    onChange={(event) => setCognome(event.target.value)}
                    type="text"
                    name="Cognome"
                    placeholder="Cognome"
                    required
                />

                <button onClick={returnLogin}>Torna al login</button>
                <button onClick={register}>Register</button>

            </form>
        
        </div>
        )
}

export default Register;
import "./Register.css"
import { useState } from 'react'
import { Link } from 'react-router-dom';

function Register() {

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [cadastro, setCadastro] = useState(false); //o user tá deslogado

    function novoUsuario() {

        setCadastro(true) //agora o user está logado
        setUser('')
        setEmail('')
        setFirstName('')
        setLastName('')
    }
    return (

        <div className="container">

            <div className="login">

                <label>Usuário</label>
                <input type="text" value={user}
                    onChange={(e) => setUser(e.target.value)} />

                <label>Email</label>
                <input value={email}
                    onChange={(e) => setEmail(e.target.value)} />

                <label>Primeiro Nome</label>
                <input type='text' value={firstName}
                    onChange={(e) => setFirstName(e.target.value)} />

                <label>Segundo Nome</label>
                <input type='text' value={lastName}
                    onChange={(e) => setLastName(e.target.value)} />

                <button onClick={novoUsuario}>Registrar</button>

                <Link to={`/`}>Já possuo conta</Link>
            </div>
        </div>
    )
}

export default Register
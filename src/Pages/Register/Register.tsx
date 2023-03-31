import "./Register.css"
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';


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
            <div className="fitting" />

            <div className="reg">
                <div className="pull-everybody">

                    <label>Usuário</label>
                    <InputText value={user} onChange={(e) => setUser(e.target.value)} />


                    <label>Email</label>
                    <InputText value={email} onChange={(e) => setEmail(e.target.value)} />

                    <label>Primeiro Nome</label>
                    <InputText value={firstName} onChange={(e) => setFirstName(e.target.value)} />

                    <label>Segundo Nome</label>
                    <InputText value={lastName} onChange={(e) => setLastName(e.target.value)} />

                    <Button label="Registrar" style={{ marginTop: "10%" }} />

                    <div className="go-to-login" style={{ marginTop: "5%" }}>
                    <Link to={`/`}>Já possuo conta</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
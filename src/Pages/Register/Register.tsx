import "./Register.css"
import { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast'
import axios from "axios";
import Severity from '../../Shared/Show'



function Register() {

    let navigate = useNavigate()
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [confirmationPassword, setConfirmationPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const novoUsuario = async () => {

        if (user !== '' && password !== '' && firstName !== "" && lastName !== '' && confirmationPassword !== '') {

            if (password === confirmationPassword) {
                try {
                    const result = await axios.post('https://dev-api.pjx.f3ssoftware.com/users', {

                        email: user,
                        password: password,
                        firstName: firstName,
                        lastName: lastName,

                    })


                    navigate('/', { replace: true })

                }

                catch {
                    alert('Falha ao registrar usuário.`')
                    // <Severity severity:error />

                }
            }
            else{
                alert('Favor inserir senha e confirmação de senha iguais.')
            }
        }
        else {
            alert('Insira os dados em todos os campos.')
        }
    }


return (

    <div className="container">
        <div className="fitting" />

        <div className="reg">
            <div className="pull-everybody" >

                <label>Email</label>
                <InputText value={user} onChange={(e) => setUser(e.target.value)} />

                <label>Senha</label>
                <Password value={password} onChange={(e) => setPassword(e.target.value)} feedback={false} />

                <label>Confirmar Senha</label>
                <Password value={confirmationPassword} onChange={(e) => setConfirmationPassword(e.target.value)} feedback={false} />

                <label>Primeiro Nome</label>
                <InputText value={firstName} onChange={(e) => setFirstName(e.target.value)} />

                <label>Segundo Nome</label>
                <InputText value={lastName} onChange={(e) => setLastName(e.target.value)} />

                <Button label="Registrar" onClick={novoUsuario} style={{ marginTop: "10%" }} />

                <div className="go-to-login" style={{ marginTop: "5%" }}>
                    <Link to={`/`}>Já possuo conta</Link>
                </div>
            </div>
        </div>
    </div>
);
}

export default Register;
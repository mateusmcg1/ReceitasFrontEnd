import "./Login.css"
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';


export default function Login() {

    const [user, setUser] = useState('');
    const [senha, setSenha] = useState('');
    const [usuario, setUsuario] = useState(false); //o user tá deslogado


    return (

        <div className="container">
            <div className="fitting" />
            <div className="login">
                <div className="pull-everybody">
                    <div style={{ marginTop: "2%", width:"100%" }}>
                        <label>Usuário</label>
                        <InputText value={user} onChange={(e) => setUser(e.target.value)} />
                        {/* <input type="email" value={user}
                            onChange={(e) => setUser(e.target.value)} /> */}
                    </div>
                    <div style={{ marginTop: "1%", width:"100%" }}>
                        <label>Senha</label>
                        <Password value={senha} onChange={(e) => setSenha(e.target.value)} feedback={false} />
                        {/* <input value={senha}
                            onChange={(e) => setSenha(e.target.value)} /> */}
                    </div>
                    <Button label="Entrar" style={{ marginTop: "10%" }} />
                    {/* <button onClick={logUser}>Entrar</button> */}
                    <div className="Register" style={{ marginTop: "5%" }}>
                        <Link to={`/register`}>Não possuo conta</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}


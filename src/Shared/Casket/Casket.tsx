import { Menu } from "primereact/menu";
import { Outlet, Routes, useNavigate } from "react-router-dom";
import Rotas from "../../Routes/routes";
import './Casket.css';
import { Avatar } from "primereact/avatar";
import { useState } from "react";

export function Casket({ children }: { children?: any }) {
    const [userName, setUserName] = useState('User');
    const navigate = useNavigate();
    let items = [
        { label: 'Balanço', icon: 'pi pi-dollar', command: () => { navigate('balance') } },
        { label: 'Gestão de Carteiras', icon: 'pi pi-wallet', command: () => { navigate('wallet') } },
        { label: 'Gestão de Acessos', icon: 'pi pi-user' }
    ];
    return (<div className="container">
        <div>
            <ul>
                <Avatar label={userName.substring(0, 1)} style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} />
                <li key={userName} style={{ marginRight: "5%" }}>
                    <span>{userName}</span>
                </li>
                <li>
                    <span>Sair</span>
                </li>
            </ul>
        </div>
        <div className='menu'>
            <Menu model={items} />
        </div>
        <div className="main-content">
            <Outlet></Outlet>
        </div>
    </div>

    )
}
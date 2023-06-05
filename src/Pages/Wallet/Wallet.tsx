import { Menu } from 'primereact/menu';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import './wallet.css'

export default function Wallet() {

    const [userName, setUserName] = useState('User');
    const [text1, setText1] = useState('');
    let navigate = useNavigate()

    let items = [
        { label: 'Balanço', icon: 'pi pi-dollar' },
        { label: 'Gestão de Carteiras', icon: 'pi pi-wallet' },
        { label: 'Gestão de Acessos', icon: 'pi pi-user' }
    ]; 

    return (
        <div className='wallet-container'>
            <div className='top-nav'>
                <div className='margin-left'></div>
                <ul>
                <Avatar label={userName.substring(0,1)} style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} /> 
                    <li key={userName} style={{ marginRight: "5%" }}>
                        <span>{userName}</span>
                    </li>
                    <li>
                        <span>Sair</span>
                    </li>
                </ul>
            </div>
            <div className='container'>

                <h1>Carteiras</h1>

                <div className='menu'>
                    <Menu model={items} />
                </div>

                <div className="main-content">
                    <div className='filtering-data'>
                        <label htmlFor="text1">Periodo</label>
                        <InputText value={text1} onChange={(e) => setText1(e.target.value)} />

                        {<Button label="FILTRAR" /*style={{ marginTop: "10%" }}*/ />}
                        {<Button label="FILTROS AVANÇADOS" /*style={{ marginTop: "10%" }}*/ />}
                        {<Button label="AÇÕES" /*style={{ marginTop: "10%" }}*/ />}
                        {<Button label="INCLUIR" /*style={{ marginTop: "10%" }}*/ />}
                    </div>

                    <div className='data-table'>

                        <DataTable tableStyle={{ minWidth: '50rem' }}>
                            <Column field="data" header="Data de Criação"></Column>
                            <Column field="name" header="Nome"></Column>
                            <Column field="currency" header="Moeda"></Column>
                        </DataTable>

                    </div>
                </div>
            </div>
        </div>

    )
}
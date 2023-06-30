import './wallet.css'
import { Menu } from 'primereact/menu';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';


export default function Wallet() {

    const [userName, setUserName] = useState('User');
    const [text1, setText1] = useState('');
    let navigate = useNavigate()

    return (
        <div className='wallet-container'>
            <div className='wallet-main-content'>

                <h1>Carteiras</h1>


                <label htmlFor="text1">Nome</label>

                <div id='label-input-frame'>

                    <InputText value={text1} onChange={(e) => setText1(e.target.value)} />

                    {<Button label="FILTRAR" style={{ marginLeft: "-1%" }} />}
                    <Link to={`/advancedfilter`}>{<Button id='advanced-filter' label="FILTROS AVANÇADOS" style={{ marginLeft: "-3%" }} />}</Link>

                    {<Button label="AÇÕES" style={{ marginRight: "-5%", marginLeft: "10%" }} />}

                    <Link to={`/addwallet`}>{<Button id='inclusao' label="INCLUIR"  /*style={{ marginTop: "10%" }}*/ />}</Link>
                </div>


                <DataTable tableStyle={{ minWidth: '50rem' }}>
                    <Column field="data" header="Data de Criação"></Column>
                    <Column field="name" header="Nome"></Column>
                    <Column field="currency" header="Moeda"></Column>
                </DataTable>
            </div>
        </div>
    )
}
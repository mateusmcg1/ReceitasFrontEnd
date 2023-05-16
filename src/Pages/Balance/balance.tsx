import './balance.css'
import { Menu } from 'primereact/menu';
import { useState, useEffect, SetStateAction } from 'react';
import 'primeicons/primeicons.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { InputNumber } from 'primereact/inputnumber';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

// interface Product {
//     data: string;
//     fornecedor: string;
//     valor: number;
//     pago: string;
//     observacao: string;
//     parcela: number;
// }


export default function Admin() {

    let navigate = useNavigate()

    const [userName, setUserName] = useState('Magnamio De Amorim');
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [value3, setValue3] = useState(0);
    const [text1, setText1] = useState('');

    let items = [
        { label: 'Balanço', icon: 'pi pi-user' },
        { label: 'Contas a pagar', icon: 'pi pi-user' },
        { label: 'Contas a receber', icon: 'pi pi-user' },
        { label: 'Gestão de Carteiras', icon: 'pi pi-user' },
        { label: 'Gestão de Acessos', icon: 'pi pi-user' }
    ];
    
    return (
        <div className="container">
            <div className="menu">
                <Menu model={items} />
            </div>
            {/* { <header className='balance-header'> */}
            <ul>
                <li key={userName}>
                    <span>{userName}</span>
                </li>
                <li>
                    <span>Sair</span>
                </li>
            </ul>
            {/* </header>} */}
            {/* <main> */}

            <div className="main-content">
                <h1>Balanço</h1>

                <div className='finantial-balance'>
                    <label htmlFor="value1">Saldo BRL</label>
                    <InputNumber value={value1} onValueChange={(e) => setValue1(e.value!)} minFractionDigits={2} maxFractionDigits={2} />
                    <label htmlFor="value2">Saldo USD</label>
                    <InputNumber value={value2} onValueChange={(e) => setValue2(e.value!)} minFractionDigits={2} maxFractionDigits={2} />
                    <label htmlFor="value3">Saldo TC</label>
                    <InputNumber value={value3} onValueChange={(e) => setValue3(e.value!)} minFractionDigits={2} maxFractionDigits={2} />
                </div>
                <div className='filtering-data'>
                    <label htmlFor="text1">Periodo</label>
                    <InputText value={text1} onChange={(e) => setText1(e.target.value)} />

                    {<Button label="FILTRAR" /*style={{ marginTop: "10%" }}*/ />}
                    {<Button label="FILTROS AVANÇADOS" /*style={{ marginTop: "10%" }}*/ />}
                    {<Button label="AÇÕES" /*style={{ marginTop: "10%" }}*/ />}
                    {<Button label="INCLUIR" /*style={{ marginTop: "10%" }}*/ />}
                </div>
                <div className='data-table'>
                   
                   <h1>Inserir tabela</h1>

                </div>

            </div>
            {/* </main> */}
        </div>
    )
}
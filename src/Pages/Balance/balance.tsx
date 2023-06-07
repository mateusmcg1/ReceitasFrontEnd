import './balance.css'
import { Menu } from 'primereact/menu';
import { useState, useEffect, SetStateAction } from 'react';
import 'primeicons/primeicons.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Avatar } from 'primereact/avatar';

export default function Balance() {

    let navigate = useNavigate()

    const [userName, setUserName] = useState('Nome');

    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [value3, setValue3] = useState(0);
    const [value4, setValue4] = useState(0);
    let [vencidas, setVencidas] = useState(0);
    let [aPagar, setAPagar] = useState(0);
    let [aReceber, setAReceber] = useState(0);
    const [text1, setText1] = useState('');
    const [walletName, setWalletName] = useState('Example')


    let items = [
        { label: 'Balanço', icon: 'pi pi-dollar', command: () => navigate('/balance') },
        { label: 'Gestão de Carteiras', icon: 'pi pi-wallet', command: () => navigate('/wallet') },
        { label: 'Gestão de Acessos', icon: 'pi pi-user' }
    ];

    return (

        <div className="balance-container">
            <div className='top-nav'>
                <div className='margin-left'></div>
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

            <div className='container'>
                <div className="menu">
                    <Menu model={items} />
                </div>


                <div className="main-content">
                    <h1>Balanço</h1>

                    <div className='finantial-balance'>

                        <div className='wallet-name'>
                            <span>{walletName}</span>
                        </div>

                        <div className='finantial-organization'>

                            <div className='finantial-framework'>
                                <label htmlFor="value1">Saldo (BRL)</label>
                                <span>R$ {value1}</span>
                            </div>
                            <div className='finantial-framework'>
                                <label htmlFor="value2">Vencidas ({vencidas})</label>
                                <span>R$ {vencidas}</span>
                            </div>
                            <div className='finantial-framework'>
                                <label htmlFor="value3">A pagar ({aPagar})</label>
                                <span>R$ {aPagar}</span>
                            </div>
                            <div className='finantial-framework'>
                                <label htmlFor="value4">A receber ({aReceber})</label>
                                <span>R$ {aReceber}</span>
                            </div>

                        </div>
                    </div>

                    <div className='filtering-data'>

                        <div className='period'>
                            <label htmlFor="text1">Período</label>
                        </div>

                        <div className='botoes'>
                            <InputText value={text1} onChange={(e) => setText1(e.target.value)} />

                            {<Button label="FILTRAR" style={{ marginLeft: "-2%" }} />}
                            <Link to={`/advancedfilter`}>
                            {<Button id='advanced-filter' label="FILTROS AVANÇADOS" />}
                                </Link>
                            {<Button label="AÇÕES" style={{ marginLeft: "10%", marginRight: "-8%" }} />}
                            {<Button label="INCLUIR" /*style={{ marginTop: "10%" }}*/ />}

                        </div>

                    </div>

                    <div className='data-table'>

                        <DataTable tableStyle={{ minWidth: '50rem' }}>
                            <Column field="data" header="Data"></Column>
                            <Column field="referencia" header="Referência"></Column>
                            <Column field="valor" header="Valor"></Column>
                            <Column field="pago" header="Pago"></Column>
                            <Column field="observacao" header="Observação"></Column>
                            <Column field="parcela" header="Parcela"></Column>
                        </DataTable>

                    </div>

                </div>
                {/* </main> */}
            </div>
        </div>
    )
}
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
import { Dialog } from 'primereact/dialog'
import { Dropdown } from 'primereact/dropdown';
import AdvancedFilter from '../Filtros Avançados/advanced-filter'

export default function Balance() {

    let navigate = useNavigate()

    const [userName, setUserName] = useState('Nome');
    const [wallets, setWallets] = useState<any[]>([]);
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [value3, setValue3] = useState(0);
    const [value4, setValue4] = useState(0);
    let [vencidas, setVencidas] = useState(0);
    let [aPagar, setAPagar] = useState(0);
    let [aReceber, setAReceber] = useState(0);
    const [text1, setText1] = useState('');
    const [walletName, setWalletName] = useState('Example')
    const [visible, setVisible] = useState<boolean>(false);
    const [showFilter, setShowFilter] = useState(false);

    const fetchWallets = async () => {
        try {
            const result = await axios.get(`${process.env.REACT_APP_API_URL}/v1/wallets`, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('access_token')!}`,
                },
            });
            setWallets(result.data);
        } catch (err) {
            alert(err);
        }

    }
    useEffect(() => {
        fetchWallets();
    }, []);

    return (

        <div className="balance-container">
            <div className="main-content">
                <h1>Balanço</h1>

                <div className='finantial-balance'>

                    <div className='wallet-name'>
                        <Button label={walletName} onClick={() => setVisible(true)} />
                        <Dialog header="Selecionar Carteira" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                            {wallets.map((wallet, index) => <div key={index}>
                                {wallet?.name}
                            </div>)}
                        </Dialog>
                        {/*  */}
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

                        {<Button label="FILTRAR" />}

                        {<Button id='advanced-filter' label="FILTROS AVANÇADOS" onClick={() => setShowFilter(true)} />}

                        {<Button label="AÇÕES" style={{ marginLeft: "10%", marginRight: "-5%" }} />}
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
                <Dialog visible={showFilter} style={{ width: '50vw' }} onHide={() => setShowFilter(false)}>
                    <AdvancedFilter></AdvancedFilter>
                </Dialog>
            </div>
        </div>
    )
}
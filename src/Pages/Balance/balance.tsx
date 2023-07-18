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
import { Calendar, CalendarChangeEvent } from "primereact/calendar";
import AdvancedFilter from '../Filtros Avançados/advanced-filter'
import NewTransaction from '../New_transaction/new_transaction';
import { SelectWallet } from './SelectWallet/SelectWallet';
import { WalletDto } from '../../models/wallet.dto';

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
    const [walletName, setWalletName] = useState('Selecionar Carteira')
    const [visible, setVisible] = useState<boolean>(false);
    const [showFilter, setShowFilter] = useState(false);
    const [showIncludeTransaction, setShowIncludeTransaction] = useState(false);
    const [selectedWallet, setSelectedWallet] = useState<WalletDto>();
    const [transactions, setTransactions] = useState<any[]>([]);
    const [dates, setDates] = useState<any[]>([])


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
    const fetchTransactions = async (params?: any) => {

        if (dates) {
            try {
                var result = await axios.get(`${process.env.REACT_APP_API_URL}/v1/transactions/${selectedWallet?.id}`, {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
                    },
                    params: {
                        startDate: dates[0],
                        endDate: dates[1]
                    }
                });
                
                setTransactions(result.data)


            } catch (err) {
                alert(err);
            }
        }

        else {
            try {
                result = await axios.get(`${process.env.REACT_APP_API_URL}/v1/transactions/${selectedWallet?.id}`, {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
                    },

                });
                
                setTransactions(result.data)
                console.log(result.data)
            } catch (err) {
                alert(err);
            }
        }
    }
    useEffect(() => {
        fetchWallets();
    }, []);

    useEffect(() => {
        if (selectedWallet) {
            console.log('selecionada: ', selectedWallet);
            setWalletName(selectedWallet?.name!);
            fetchTransactions();
        }
    }, [selectedWallet])

    return (

        <div className="balance-container">
            <div className="main-content">
                <h1>Balanço</h1>

                <div className='finantial-balance'>

                    <div className='wallet-name'>
                        <Button label={walletName} onClick={() => setVisible(true)} />
                        <Dialog header="Selecionar Carteira" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                            <SelectWallet wallets={wallets} onUpdate={(selectedWallet: WalletDto) => {
                                setSelectedWallet(selectedWallet);
                                setVisible(false);
                            }}></SelectWallet>

                        </Dialog>
                        {/*  */}
                    </div>

                    <div className='finantial-organization'>

                        <div className='finantial-framework'>
                            <label htmlFor="value1">Saldo ({selectedWallet?.currency})</label>
                            <span>{value1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
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
                        <label htmlFor="date">Período</label>
                    </div>

                    <div className='botoes'>


                        <Calendar
                            value={dates}
                            onChange={(e: any) => {
                                setDates(e.value);
                            }}

                            selectionMode="range"
                            locale="en"
                            dateFormat="dd/mm/yy"
                        />



                        {/* <InputText value={text1} onChange={(e) => setText1(e.target.value)} /> */}

                        {<Button label="FILTRAR" onClick={() => fetchTransactions({ reference: dates })} />}

                        {<Button id='advanced-filter' label="FILTROS AVANÇADOS" onClick={() => setShowFilter(true)} />}

                        {<Button label="AÇÕES" style={{}} />}
                        {<Button label="INCLUIR" onClick={(e) => {
                            setShowIncludeTransaction(true);
                        }} /*style={{ marginTop: "10%" }}*/ />}

                    </div>

                </div>

                <div className='data-table'>

                    <DataTable value={transactions} tableStyle={{ minWidth: '50rem' }}>
                        <Column body={(data) => {
                            return <span>{new Date(data.createdAt).toLocaleDateString('pt-BR')}</span>
                        }} header="Data"></Column>
                        <Column field="reference" header="Referência"></Column>
                        <Column body={(transaction) => <span style={{ color: (transaction.type === 'BILLING' ? 'green' : 'red') }}>{Math.abs(transaction?.amount).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>} header="Valor"></Column>
                        <Column body={(transaction) => <span>{transaction.paid ? 'Pago' : 'Não Pago'}</span>} header="Pago"></Column>
                        <Column field="observation" header="Observação"></Column>
                    </DataTable>

                </div>
                <Dialog header="Nova Transação" visible={showIncludeTransaction} style={{ width: '50vw' }} onHide={() => setShowIncludeTransaction(false)}>
                    <NewTransaction walletId={selectedWallet?.id!}></NewTransaction>
                </Dialog>
                <Dialog header="Filtros Avançados" visible={showFilter} style={{ width: '50vw' }} onHide={() => setShowFilter(false)}>
                    <AdvancedFilter></AdvancedFilter>
                </Dialog>
            </div>
        </div>
    )
}
import { Column } from 'primereact/column'
import './style.css'
import { DataTable } from 'primereact/datatable'
import { useState } from 'react';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { WalletDto } from '../../models/wallet.dto';
import { Button } from 'primereact/button';

export default function Due_Dated() {

    const [transactions, setTransactions] = useState<any[]>([]);
    const [dates, setDates] = useState<any[]>([])
    const [selectedWallet, setSelectedWallet] = useState<WalletDto>();

    return (
        <div style={{ width: '80%' }}>
            <h1>A Receber</h1>
                <div className='filtering' style={{ width: '80%', marginBottom:'2%'}}>

                    <div className='filtering-inputs' style={{ width: '50%' }}>
                    <span className="p-float-label" style={{ width: '45%'}}>
                        <Dropdown value={selectedWallet} onChange={(e) => setSelectedWallet(e.value)} />
                        <label htmlFor="date">Carteira</label>
                    </span>


                    <span className="p-float-label" style={{ width: '45%' }}>
                        <Calendar
                            id='date'
                            value={dates}
                            onChange={(e: any) => {
                                setDates(e.value);
                            }}

                            selectionMode="range"
                            locale="en"
                            dateFormat="dd/mm/yy"
                        />
                        <label htmlFor="date">Período</label>
                    </span>
                    </div>

                    <div className='buttons' style={{ width: '50%' }}>
                        <Button label="FILTRAR" style={{ width: '25%' }}/>

                        <Button label="AÇÕES" style={{ width: '25%' }}/>

                        <Button label="INCLUIR" style={{ width: '25%' }}/>

                    </div>
                </div>
            <div className='data-table'>

                <DataTable value={transactions} tableStyle={{ minWidth: '50rem' }}>
                    <Column body={(data) => {
                        return <span>{new Date(data.createdAt).toLocaleDateString('pt-BR')}</span>
                    }} header="Data"></Column>
                    <Column field="reference" header="Referência"></Column>
                    <Column body={(transaction) => <span style={{ color: (transaction.type === 'BILLING' ? 'green' : 'red') }}>{Math.abs(transaction?.amount).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>} header="Valor"></Column>
                    <Column field="observation" header="Observação"></Column>
                    <Column field="fees" header="Juros"></Column>
                    <Column field="assessment" header="Multa"></Column>
                </DataTable>

            </div>
        </div>

    )
}
import './wallet.css'
import { Menu } from 'primereact/menu';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import { SplitButton } from 'primereact/splitbutton';
import { WalletDto } from '../../models/wallet.dto';
import { MenuItem } from 'primereact/menuitem';
import { Dialog } from 'primereact/dialog';
import IncludeWallet from './Incluir Carteira/IncludeWallet';
import EditWallet from './Editar Carteira/editWallet'

export default function Wallet() {

    const [find, setFind] = useState('')
    const [loading, setLoading] = useState(false);
    const [selectedWallet, setSelectedWallet] = useState<any>();
    const [wallets, setWallets] = useState<WalletDto[]>([]);
    const [showNewWallet, setShowNewWallet] = useState(false);
    const [showEditWallet, setShowEditWallet] = useState(false);


    const actions: MenuItem[] = [
        {
            label: 'Editar',
            icon: 'pi pi-pencil',
            command: async () => {

                console.log(selectedWallet);
                sessionStorage.setItem('oldData', selectedWallet.id)
                setShowEditWallet(true); //Basically I set this to call a dialog which invokes the editWallet component so the user can edit the infos 
                                         //from the selected row in the table. At the moment, user needs to refresh the page to see the result.
                
            }
        },
        {
            label: 'Deletar',
            icon: 'pi pi-trash',
            command: async () => {
                console.log(selectedWallet);
               
                try {
                    await axios.delete(`${process.env.REACT_APP_API_URL}/v1/wallets/${selectedWallet.id}`, {
                        headers: {
                            Authorization: `Bearer ${sessionStorage.getItem('access_token')}`
                        }
                    })
                }
                catch (err) {
                    alert(err);
                }
            }
        }
    ];

    useEffect(() => {
        fetchWallets();
    }, []);

    const fetchWallets = async () => {
        try {
            const result = await axios.get(`${process.env.REACT_APP_API_URL}/v1/wallets`, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('access_token')}`
                }
            });
            setWallets(result.data);
        } catch (err) {

        }
    }


    return (
        <div className='wallet-container'>
            <div className='wallet-main-content'>

                <h1>Carteiras</h1>


                <label htmlFor="text1">Nome</label>

                <div id='label-input-frame'>

                    <InputText value={find} onChange={(e) => setFind(e.target.value)} />

                    {<Button label="FILTRAR" style={{ marginLeft: "-1%" }} />}

                    <SplitButton label="AÇÕES" icon="pi pi-plus" onClick={() => {
                        console.log('clicked');
                    }} model={actions} />
                    {/* {<Button label="AÇÕES" style={{ marginRight: "-5%", marginLeft: "10%" }} />} */}

                    <Button id='inclusao' label="INCLUIR" onClick={() => setShowNewWallet(true)} />
                </div>

                <DataTable loading={loading} selectionMode='single' selection={selectedWallet} onSelectionChange={(e) => setSelectedWallet(e.value)} tableStyle={{ minWidth: '50rem' }} value={wallets}>
                    <Column body={(data) => {
                        return <span>{new Date(data.createdAt).toLocaleDateString('pt-BR')}</span>
                    }} header="Data de Criação"></Column>
                    <Column field="name" header="Nome"></Column>
                    <Column field="currency" header="Moeda"></Column>
                </DataTable>
            </div>
            <Dialog visible={showNewWallet} style={{ width: '50vw' }} onHide={() => setShowNewWallet(false)}>
                <IncludeWallet></IncludeWallet>
            </Dialog>
            <Dialog visible={showEditWallet} style={{ width: '50vw' }} onHide={() => setShowEditWallet(false)}>
                <EditWallet></EditWallet>
            </Dialog>
        </div>
    )
}
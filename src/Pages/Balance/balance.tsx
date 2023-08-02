import "./balance.css";
import { Menu } from "primereact/menu";
import { useState, useEffect, SetStateAction, useRef } from "react";
import "primeicons/primeicons.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Avatar } from "primereact/avatar";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import { Calendar, CalendarChangeEvent } from "primereact/calendar";
import AdvancedFilter from "../Filtros Avançados/advanced-filter";
import NewTransaction from "../New_transaction/new_transaction";
import { SelectWallet } from "./SelectWallet/SelectWallet";
import { WalletDto } from "../../models/wallet.dto";
import { SplitButton } from "primereact/splitbutton";
import { MenuItem } from "primereact/menuitem";
import PaymentAction from "./Components/PaymentAction";
import { Toast, ToastMessage } from "primereact/toast";

export default function Balance() {
  
  let navigate = useNavigate();
  const [wallets, setWallets] = useState<any[]>([]);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);
  let [vencidas, setVencidas] = useState(0);
  let [aPagar, setAPagar] = useState(0);
  let [aReceber, setAReceber] = useState(0);
  const [walletName, setWalletName] = useState("Selecionar Carteira");
  const [visible, setVisible] = useState<boolean>(false);
  const [showFilter, setShowFilter] = useState(false);
  const [showIncludeTransaction, setShowIncludeTransaction] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState<WalletDto>();
  const [transactions, setTransactions] = useState<any[]>([]);
  const [dates, setDates] = useState<any[]>([]);
  const toast = useRef<Toast>(null);
  const [showPaymentAction, setShowPaymentAction] = useState(false);
  const actions: MenuItem[] = [
    {
      label: "Pagamento",
      icon: "pi pi-money-bill",
      command: async () => {
        console.log(selectedWallet);
        setShowPaymentAction(true);
      },
    },
  ];

  const showToast = (
    severity: ToastMessage["severity"],
    summary: string,
    detail: string
  ) => {
    toast.current?.show([{ severity, summary, detail }]);
  };

  const walletsBill = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_API_URL}/v1/wallets/${selectedWallet?.id}`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
          },
        }
      );
      setValue1(result.data.stats.walletBalance);
      setVencidas(result.data.stats.walletExpiredBillingQuantity);
      setValue2(result.data.stats.walletExpiredBillingAmount);
      setValue3(result.data.stats.walletOutcomeBillingAmount);
      setAPagar(result.data.stats.walletOutcomeBillingQuantity);
      setAReceber(result.data.stats.walletIncomeBillingQuantity);
      setValue4(result.data.stats.walletIncomeBillingAmount);
    } catch (err) {
      alert(err);
    }
  };

  const fetchWallets = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_API_URL}/v1/wallets`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("access_token")!}`,
          },
        }
      );
      setWallets(result.data);
    } catch (err) {
      alert(err);
    }
  };

  const fetchTransactions = async (params?: any) => {

    if (params) {
      try {
        var result = await axios.get(`${process.env.REACT_APP_API_URL}/v1/transactions/${selectedWallet?.id}`, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
          },
          params
        });

        setTransactions(result.data)


      } catch (err) {
        alert(err);
      }
    }

    else {
      try {
        var result = await axios.get(`${process.env.REACT_APP_API_URL}/v1/transactions/${selectedWallet?.id}`, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
          },

        });

        setTransactions(result.data)


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
      // console.log('selecionada: ', selectedWallet);
      setWalletName(selectedWallet?.name!);
      fetchTransactions();
      walletsBill();
    }
  }, [selectedWallet]);

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
              <label htmlFor="value1" >Saldo ({selectedWallet?.currency})</label>
              <span>{value1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            </div>
            <div className='finantial-framework'>
              <label htmlFor="value2">Vencidas ({vencidas})</label>
              <span>{value2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            </div>
            <div className='finantial-framework'>
              <label htmlFor="value3">A pagar ({aPagar})</label>
              <span>{value3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            </div>
            <div className='finantial-framework'>
              <label htmlFor="value4">A receber ({aReceber})</label>
              <span>{value4.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            </div>

          </div>
        </div>

        <div className='filtering-data'>


          <div className='botoes'>

            <span className="p-float-label">
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

            {/* <InputText value={text1} onChange={(e) => setText1(e.target.value)} /> */}

            {<Button label="FILTRAR" onClick={() => dates ? fetchTransactions({ startDate: dates[0], endDate: dates[1] }) : fetchTransactions()} />}

            {<Button id='advanced-filter' label="FILTROS AVANÇADOS" onClick={() => setShowFilter(true)} />}

            {<Button label="AÇÕES" />}
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
        <Dialog header="Filtros Avançados" className='filter-dialog' visible={showFilter} style={{ width: '50vw' }} onHide={() => setShowFilter(false)}>
          <AdvancedFilter walletId={selectedWallet?.id!} fetch={fetchTransactions} closeDialog={() => {
            setShowFilter(false)
          }}></AdvancedFilter>
        </Dialog>
      </div>
    </div>
  )
}

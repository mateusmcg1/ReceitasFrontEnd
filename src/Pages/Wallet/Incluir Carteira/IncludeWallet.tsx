import { useRef, useState } from 'react';
import './inclusao.css'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import axios from "axios";
import { Toast, ToastMessage } from 'primereact/toast';
import { Dropdown } from 'primereact/dropdown';
import { CurrencyDto } from '../../../models/currenty.dto';
import { CurrencyEnum } from '../../../Shared/enums/CurrencyEnum';


export default function IncludeWallet() {

    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const toast = useRef<Toast>(null);
    const [selectedCurrency, setSelectedCurrency] = useState('');
    //É AQUI ONDE EU NAO SEI O QUE FAZER!
    var currencyTypes = Object.values(CurrencyEnum); // como chamar essa variável currencyTypes corretamente para que liste as moedas?// 

    const show = (severity: ToastMessage["severity"], summary: string, detail: string) => {
        toast.current?.show({ severity, summary, detail });
    };

    const addWallets = async () => {
        try {
            const result = await axios.post(`${process.env.REACT_APP_API_URL}/v1/wallets`, {
                currency: selectedCurrency,
                name: text1,
                createdAt: new Date()
            },
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`
                    }

                })
            show('success', 'Success', 'Carteira adicionada com sucesso.');
            const interval = setInterval(() => {
                window.location.reload();;
            }, 2 * 1000);
            return () => clearInterval(interval);
        }
        catch (err) {
            if (err = 400) {
                show('error', 'Erro', 'Invalid currency');
            }
        }
    }

    return (
        <div className='inclusao-container'>

            <Toast ref={toast} />
            <h1>Incluir Carteira</h1>

            <div className='inclusao-frame'>
                <label htmlFor="text1" style={{ marginBottom: "1%" }}>Título</label>
                <InputText value={text1} onChange={(e) => setText1(e.target.value)} />

                <label htmlFor="text2" style={{ marginBottom: "1%" }}>Moeda</label>
                <Dropdown value={selectedCurrency} onChange={(e) => setSelectedCurrency(e.value)} options={currencyTypes}
                    className="w-full md:w-14rem" />
                {/* <InputText value={text2} onChange={(e) => setText2(e.target.value)} /> */}


                <div className='inclusao-button'>
                    {<Button label="INCLUIR" onClick={addWallets} />}
                </div>
            </div>

        </div>
    )
}
import { useState, useEffect, useRef } from 'react';
import './editFuncionario.css'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import axios from "axios";
import { Toast, ToastMessage } from 'primereact/toast'
import { Dropdown } from 'primereact/dropdown';
import { FuncionarioDTO } from '../../../models/FuncionarioDTO';

export default function EditarFuncionario({ closeDialog, funcionario, onSuccess, onError }: { closeDialog: any, funcionario: FuncionarioDTO, onSuccess: Function, onError: Function }) {

    const [text1, setText1] = useState('');
    // const [text2, setText2] = useState('');
    const [selectedCurrency, setSelectedCurrency] = useState('');
    const Edittoast = useRef<Toast>(null);
    const show = (severity: ToastMessage["severity"], summary: string, detail: string) => {
        Edittoast.current?.show({ severity, summary, detail });
    };

 

    // const ChangeWallet = async () => {
    //     try {
    //         const result = await axios.put(`${process.env.REACT_APP_API_URL}/v1/wallets/${wallet?.id}`, {
    //             currency: selectedCurrency,
    //             name: text1,
    //             createdAt: new Date()
    //         },
    //             {
    //                 headers: {
    //                     Authorization: `Bearer ${sessionStorage.getItem('access_token')}`
    //                 }
    //             })

    //         onSuccess('success', 'Success', 'Editado com sucesso.');


    //         closeDialog();

    //     }
    //     catch (err) {
    //         if (err = 400) {
    //             onError('error', 'Erro', 'Invalid currency');
    //         }
    //     }
    // }

    return (
        <div className='inclusao-container'>
            <Toast ref={Edittoast} />
            <h1>Editar Carteira</h1>

            <div className='inclusao-frame'>
                <label htmlFor="text1" style={{ marginBottom: "1%" }}>Título</label>
                <InputText value={text1} onChange={(e) => setText1(e.target.value)} />
                <label htmlFor={selectedCurrency} style={{ marginBottom: "1%" }}>Moeda</label>
                {/* <Dropdown value={selectedCurrency} onChange={(e) => setSelectedCurrency(e.value)} options={currencyTypes}
                    className="w-full md:w-14rem" /> */}
                {/* 
                <InputText value={text2} onChange={(e) => setText2(e.target.value)} /> */}
                <div className='inclusao-button'>
                    {/* {<Button label="EDITAR" onClick={ChangeWallet} />} */}
                </div>
            </div>

        </div>
    )
}
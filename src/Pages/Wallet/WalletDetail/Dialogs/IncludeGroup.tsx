import { useEffect, useRef, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import axios from "axios";
import { Toast, ToastMessage } from 'primereact/toast';


export default function IncludeGroup({ closeDialog, onSuccess, onError, walletId }: { closeDialog: any, onSuccess: Function, onError: Function, walletId: string }) {

    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
 
    const addGroups = async () => {
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/v1/groups/${walletId}`, {
                name: text1,
                label: text2,
                color: ''
            },
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`
                    }

                })
            onSuccess('success', 'Success', 'Grupo criado com sucesso.');
            closeDialog();
        }
        catch (err) {
            if (err = 400) {
                onError('error', 'Erro', 'Erro ao criar grupo');
            }
        }
    }

    return (
        <div className='inclusao-container'>
            <h1>Incluir Carteira</h1>

            <div className='inclusao-frame'>
                <label htmlFor="text1" style={{ marginBottom: "1%" }}>Nome</label>
                <InputText value={text1} onChange={(e) => setText1(e.target.value)} />

                <label htmlFor="text2" style={{ marginBottom: "1%" }}>Label</label>
                <InputText value={text2} onChange={(e) => setText2(e.target.value)} />

                <div className='inclusao-button'>
                    {<Button label="INCLUIR" onClick={() => addGroups()} />}
                </div>
            </div>
        </div>
    )
}
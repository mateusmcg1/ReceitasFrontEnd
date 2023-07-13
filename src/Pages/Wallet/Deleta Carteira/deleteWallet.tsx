import { useRef, useState } from 'react';
import './deleteWallet.css'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import axios from "axios";
import { Toast, ToastMessage } from 'primereact/toast';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';



export default function DeleteWallet({ closeDialog }: { closeDialog: any }) {


    const toast = useRef<Toast>(null);

    const show = (severity: ToastMessage["severity"], summary: string, detail: string) => {
        toast.current?.show({ severity, summary, detail });
    };
    const accept = () => {
        toast.current?.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    }

    const reject = () => {
        toast.current?.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }


    const deleteWallets = async () => {

        try {

            await axios.delete(`${process.env.REACT_APP_API_URL}/v1/wallets/${sessionStorage.getItem('oldData')}`, {

                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('access_token')}`
                }
            })
            show('success', 'Success', 'Deletado com sucesso.');
            closeDialog();
        }
        catch (err) {
            if (err = 401) {
                show('error', 'Unauthorized', 'Acesso negado! O token de acesso informado é inválido.');
            }
        }


    }


    return (
        <ConfirmDialog header="hauahaha" />
    )
}
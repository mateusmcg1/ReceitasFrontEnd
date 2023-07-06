import { useState } from 'react';
import './inclusao.css'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import axios from "axios";

export default function IncludeWallet() {

    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');


    const addWallets = async () => {
        try {
            const result = await axios.post(`${process.env.REACT_APP_API_URL}/v1/wallets`, {
                currency: text2,
                name: text1,
                createdAt: new Date()
            },
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`
                    }
                })
        }
        catch (err) {
            alert(err);
        }  
    }

    return (
        <div className='inclusao-container'>

            <h1>Incluir Carteira</h1>

            <div className='inclusao-frame'>
                <label htmlFor="text1" style={{ marginBottom: "1%" }}>Título</label>
                <InputText value={text1} onChange={(e) => setText1(e.target.value)} />
                <label htmlFor="text2">Moeda</label>
                <InputText value={text2} onChange={(e) => setText2(e.target.value)} />
                <div className='inclusao-button'>
                    {<Button label="INCLUIR" onClick={addWallets} />}
                </div>
            </div>

        </div>
    )
}
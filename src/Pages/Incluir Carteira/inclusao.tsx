import { useState } from 'react';
import './inclusao.css'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export default function InclusaoCarteira() {

    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');

    return (
        <div className='inclusao-container'>

            <h1>Incluir Carteira</h1>

            <div className='inclusao-frame'>
                <label htmlFor="text1" style={{ marginBottom: "1%" }}>Título</label>
                <InputText value={text1} onChange={(e) => setText1(e.target.value)} />
                <label htmlFor="text2">Moeda</label>
                <InputText value={text2} onChange={(e) => setText2(e.target.value)} />
                <div className='inclusao-button'>
                {<Button label="INCLUIR" />}
                </div>
            </div>

        </div>
    )
}
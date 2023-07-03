import './new_transaction.css';
import { useState } from 'react';
import { InputText } from 'primereact/inputtext';


//FALTA IMPLEMENTAR O CSS DE ACORDO COM O PROTÓTIPO//

export default function New_Transaction() {

    const [toggleState, setToggleState] = useState(1);
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [value3, setValue3] = useState("");
    const [value4, setValue4] = useState("");
    const toggleTab = (index: any) => {
        setToggleState(index);
    };

    return (
        <div className="container">
            <div className="bloc-tabs">
                <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                >
                    Avulsa
                </button>
                <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                >
                    Recorrente
                </button>

            </div>

            <div className="content-tabs">
                <div
                    className={toggleState === 1 ? "content active-content" : "content"}
                >

                    <div className='card flex justify-content-center'>
                        <span>Valor</span>
                        <InputText value={value1} onChange={(e) => setValue1(e.target.value)} />
                    </div>
                    <div className='card flex justify-content-center'>
                        <span>Referência</span>
                        <InputText value={value2} onChange={(e) => setValue2(e.target.value)} />
                    </div>
                </div>

                <div className={toggleState === 2 ? "content active-content" : "content"}>

                    <div className='card flex justify-content-center'>
                        <span>Valor</span>
                        <InputText value={value3} onChange={(e) => setValue3(e.target.value)} />
                    </div>
                    <div className='card flex justify-content-center'>
                        <span>Referência</span>
                        <InputText value={value4} onChange={(e) => setValue4(e.target.value)} />
                    </div>

                </div>

            </div>
        </div>
    );
}

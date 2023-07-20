import { Slider, SliderChangeEvent } from 'primereact/slider';
import './advanced-filter.css'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';

export default function AdvancedFilter() {

    let navigate = useNavigate()
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [range, setRange] = useState<any>([0, 100]);
    const [checked1, setChecked1] = useState<boolean>(false);
    const [checked2, setChecked2] = useState<boolean>(false);
    const [checked3, setChecked3] = useState<boolean>(false);

    return (

        <div className='filter-container'>

            {/* <h1>Filtros Avançados</h1> */}

            <div id='enquadramento-full'>
                <div id='enquadramento'>
                    <div className='inputs'>

                        <span style={{ marginBottom: '1%' }}> Período</span>
                        <div className='card flex justify-content-center'>
                            <InputText value={value1} onChange={(e) => setValue1(e.target.value)} />
                        </div>

                        <span style={{ marginBottom: '1%' }}>Nome da Referência</span>
                        <div className='card flex justify-content-center'>
                            <InputText value={value2} onChange={(e) => setValue2(e.target.value)} />
                        </div>

                        <div id='range-title'>
                            <span style={{ marginBottom: '1%' }}>Valor Mínimo</span>
                            <span style={{ marginBottom: '1%' }}>Valor Máximo</span>
                        </div>

                        <div id='range'>

                            <InputText value={value2} onChange={(e) => setValue2(e.target.value)} />

                            <InputText value={value2} onChange={(e) => setValue2(e.target.value)} />
                        </div>

                    </div>


                    <div className="card1 flex justify-content-left">
                        <Checkbox inputId="pagar" onChange={e => setChecked1(e.checked!)} checked={checked1} />
                        <label htmlFor="pagar" className="ml-2">Contas a Pagar</label>
                    </div>
                    <div className="card1 flex justify-content-left">
                        <Checkbox inputId='receber' onChange={e => setChecked2(e.checked!)} checked={checked2} />
                        <label htmlFor="receber" className="ml-2">Contas a Receber</label>
                    </div>
                    <div className="card1 flex justify-content-left">
                        <Checkbox inputId='vencidas' onChange={e => setChecked3(e.checked!)} checked={checked3} />
                        <label htmlFor="vencidas" className="ml-2">Contas Vencidas</label>
                    </div>
                </div>

                <div className='enquadramento-filtro'>
                    {<Button label="FILTRAR" /*style={{ marginTop: "10%"}}*/ />}
                </div>

            </div>

        </div>
    )

}
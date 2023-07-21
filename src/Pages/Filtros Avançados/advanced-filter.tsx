import './advanced-filter.css'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';

export default function AdvancedFilter() {

    let navigate = useNavigate()
    const [dates, setDates] = useState<any[]>([])
    // const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [value3, setValue3] = useState("");
    const [value4, setValue4] = useState("");
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

                        <span className="p-float-label" style={{ marginTop: '1%', fontSize: '90%' }}>

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
                            <label htmlFor="value1">Período</label>

                        </span>

                        <span className="p-float-label" style={{ marginTop: '6%', fontSize: '90%' }}>

                            <InputText id='value2' value={value2} onChange={(e) => setValue2(e.target.value)} />
                            <label htmlFor="value2">Nome da Referência</label>

                        </span>

                        <div id='range'>
                            <span className="p-float-label" style={{ width: '48%', marginTop: '6%', fontSize: '90%' }} >
                                <InputText id='value3' value={value3} onChange={(e) => setValue3(e.target.value)} />
                                <label htmlFor="value3">Valor Mínimo</label>
                            </span>
                            <span className="p-float-label" style={{ width: '48%', marginTop: '6%', fontSize: '90%' }}>
                                <InputText value={value4} onChange={(e) => setValue4(e.target.value)} style={{ marginTop: '1%' }} />
                                <label htmlFor="value4">Valor Máximo</label>
                            </span>
                        </div>

                    </div>


                    <div className="card1 flex justify-content-left" style={{ marginTop: '5%' }}>
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
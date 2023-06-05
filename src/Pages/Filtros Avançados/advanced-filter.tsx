import { Slider, SliderChangeEvent  } from 'primereact/slider';
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
    const [range, setRange] = useState<any>([0,100]);
    const [checked1, setChecked1] = useState<boolean>(false);
    const [checked2, setChecked2] = useState<boolean>(false);
    const [checked3, setChecked3] = useState<boolean>(false);

    return (

        <div className='filter-container'>

            <h1>Filtros Avançados</h1>

            <div id='enquadramento-full'>
                <div id='enquadramento'>
                    <div className='inputs'>

                        <div className='card flex justify-content-center'>
                            <span>Período</span>
                            <InputText value={value1} onChange={(e) => setValue1(e.target.value)} />
                        </div>
                        <div className='card flex justify-content-center'>
                            <span>Nome da Referência</span>
                            <InputText value={value2} onChange={(e) => setValue2(e.target.value)} />
                        </div>
                        <div className="card flex justify-content-center">
                            <div id='range'>
                                <span>Range de Valor</span>
                            </div>
                            <Slider value={range} onChange={(e: SliderChangeEvent) => setRange(e.value)} className="w-full" range />
                        </div>
                    </div>


                    <div className="card1 flex justify-content-center">
                        <Checkbox inputId="pagar" onChange={e => setChecked1(e.checked!)} checked={checked1} />
                        <label htmlFor="pagar" className="ml-2">Contas a Pagar</label>
                    </div>
                    <div className="card1 flex justify-content-center">
                        <Checkbox inputId='receber' onChange={e => setChecked2(e.checked!)} checked={checked2} />
                        <label htmlFor="receber" className="ml-2">Contas a Receber</label>
                    </div>
                    <div className="card1 flex justify-content-center">
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
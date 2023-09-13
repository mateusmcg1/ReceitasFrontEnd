import LogoSVGWithoutPJXWritten from '../../../Shared/img/LogoSVGWithoutPJXWritten'
import { useState } from "react";
import "primeicons/primeicons.css";
import './StoreMainPage.css'
import { Button } from 'primereact/button';
import { Link, useNavigate } from 'react-router-dom';


export default function StoreMainPage() {

    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [value3, setValue3] = useState(0);
    let navigate = useNavigate();

    return (
        <div className="store-container">
            <div className="store-main-content">
                <h1>Loja</h1>

                <div className='store-container'>
                    <div className="grid">
                        <div className='col-4'>
                            <div className='store-card'>

                                <div className='grid'>

                                    <div className='col'>
                                        <LogoSVGWithoutPJXWritten width="50%" height='100%' />
                                    </div>
                                    <div className='col-12'>
                                        <h4>Assinatura 30 dias</h4>
                                    </div>
                                    <div className='col-12'>
                                        <h3>{value1.toLocaleString("pt-BR", {
                                            style: "currency",
                                            currency: 'BRL',
                                        })} 
                                        </h3>
                                    </div>
                                    <div className='col-12'>
                                        <Button label="COMPRAR" onClick={ () => navigate('/store&steps')} style={{ marginTop: '20%' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='store-card'>

                                <div className='grid'>

                                    <div className='col'>
                                        <LogoSVGWithoutPJXWritten width="50%" height='100%' />
                                    </div>
                                    <div className='col-12'>
                                        <h4>Assinatura 180 dias</h4>
                                    </div>
                                    <div className='col-12'>
                                        <h3>{value2.toLocaleString("pt-BR", {
                                            style: "currency",
                                            currency: 'BRL',
                                        })}</h3>
                                    </div>

                                    <div className='col-12'>
                                        <Button label="COMPRAR" onClick={ () => navigate('/store&steps')} style={{ marginTop: '20%' }} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-4'>
                            <div className='store-card'>
                                <div className='grid'>
                                    <div className='col'>
                                        <LogoSVGWithoutPJXWritten width="50%" height='100%' />
                                    </div>
                                    <div className='col-12'>
                                        <h4>Assinatura 360 dias</h4>
                                    </div>
                                    <div className='col-12'>
                                        <h3>{value3.toLocaleString("pt-BR", {
                                            style: "currency",
                                            currency: 'BRL',
                                        })}</h3>
                                    </div>

                                    <div className='col-12'>
                                        <Button label="COMPRAR" onClick={ () => navigate('/store&steps')} style={{ marginTop: '20%' }} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    )

}
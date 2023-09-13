import { useRef, useState } from "react";
import './Store2ndPage.css'
import "primeicons/primeicons.css";
import './StoreMainPage.css'
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { MenuItem } from 'primereact/menuitem';
import { Steps } from 'primereact/steps';
import { Toast, ToastMessage } from 'primereact/toast';
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'


export default function Store2ndPage() {

    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [value3, setValue3] = useState(0);
    let [activeIndex, setActiveIndex] = useState(0);
    const toast = useRef<Toast>(null);
    let navigate = useNavigate();

    const showToast = (
        severity: ToastMessage["severity"],
        summary: string,
        detail: string
    ) => {
        toast.current?.show([{ severity, summary, detail }]);
    };

    const items: MenuItem[] = [
        {
            label: 'Resumo',
            command: (event) => {
                // showToast('info', 'First Step', 'deu certo');
                <Step1 />
            }

        },
        {
            label: 'Pagamento',
            command: (event) => {
                // showToast('info', 'Second Step', 'deu certo');
                <Step2 />
            }
        },
        {
            label: 'Conclusão',
            command: (event) => {
                // showToast('info', 'Third Step', 'deu certo');
                <Step3 />
            }
        }
    ];
    const RenderingPage = () => {
        switch (activeIndex) {
            case 0:
                return (<Step1 />)
                break;

            case 1:
                return (<Step2 />)
                break;

            case 2:

                return (<Step3 />)
                break;
            default:
                console.log(`Sorry, we are out of ${activeIndex}.`);
                return (<></>)
        }
    }


    return (
        <div className="store-container">
            <Toast ref={toast} />
            <div className="store-main-content">
                <h1>Loja</h1>

                <div className='store-container'>

                    <div className='steps' style={{ marginBottom: '1%', width: '92%' }}>
                        <Steps model={items} activeIndex={activeIndex} onSelect={(e) => setActiveIndex(e.index)} readOnly={false} style={{ marginBottom: '5%' }} />

                    </div>
                    <div>
                        <RenderingPage />
                    </div>
                  
                        <div className='grid' style={{ marginTop: '5%', width: '93%' }} >
                            <div className='col-11'>
                            </div>
                            
                            <div className='col-1'>
                            <div className="secondButton">
                                <Button label="PRÓXIMO" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
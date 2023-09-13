import LogoSVGWithoutPJXWritten from '../../Shared/img/LogoSVGWithoutPJXWritten'
import { useRef, useState } from "react";
import "primeicons/primeicons.css";
import './StoreMainPage.css'
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { MenuItem } from 'primereact/menuitem';
import { Steps } from 'primereact/steps';
import { Toast, ToastMessage } from 'primereact/toast';


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
                showToast('info', 'First Step', 'deu certo');

            }

        },
        {
            label: 'Pagamento',
            command: (event) => {
                showToast('info', 'Second Step', 'deu certo');

            }
        },
        {
            label: 'Conclusão',
            command: (event) => {
                showToast('info', 'Third Step', 'deu certo');
            }
        }
    ];
    // const ShowingPage = {
    //     switch(activeIndex: number) {
    //         case 0:
    //     console.log('Oranges are $0.59 a pound.');
    //     break;
    //     case 1: 
    //     console.log('Deu')
    //     case 2:
    //     console.log('Mangoes and papayas are $2.79 a pound.');
    //     // Expected output: "Mangoes and papayas are $2.79 a pound."
    //     break;
    //     default:
    //         console.log(`Sorry, we are out of ${activeIndex}.`);
    // }





    return (
        <div className="store-container">
            <Toast ref={toast} />
            <div className="store-main-content">
                <h1>Loja</h1>

                <div className='store-container'>

                    <div className='steps' style={{ marginBottom: '2%' }}>
                        <Steps model={items} activeIndex={activeIndex} onSelect={(e) => setActiveIndex(e.index)} readOnly={false} />
                    
                    </div>





                    <div className='grid' style={{ marginTop: '20%' }} >
                        <div className='col-11'>
                        </div>
                        <div className='col-1'>
                            <Button label="PRÓXIMO" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
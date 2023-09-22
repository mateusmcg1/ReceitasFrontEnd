import { Button } from "primereact/button";
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
// import { Dropdown } from "primereact/dropdown";
import { useEffect, useState } from "react";
import { RadioButton, RadioButtonChangeEvent } from 'primereact/radiobutton';
import Step2Form from "./Step2NaturalPerson";
import Step2NaturalPerson from "./Step2NaturalPerson";
import Step2LegalPerson from "./Step2LegalPerson";


export default function Step2() {

    const [personChosed, setPersonChosed] = useState<any>('');
    const categories = [
        { name: 'Pix', key: 'PIX' },
        { name: 'Credit Card', key: 'CREDIT_CARD' }
    ];
    const personType = [
        { name: 'Pessoa Física' },
        { name: 'Pessoa Jurídica' }
    ];
    const [selectedCategory, setSelectedCategory] = useState<any>(categories[0]);

    const RenderingPage = () => {
        switch (personChosed.name) {
            case 'Pessoa Física':
                return (

                    <Step2NaturalPerson />

                )
                break;

            case 'Pessoa Jurídica':
                return (<Step2LegalPerson />)
                break;

            default:

                console.log(personChosed.name)
                return (<></>)
        }
    }

    useEffect(() => {
        console.log(personChosed);
    }, []);



    return (

        <div className="grid">
            <div className="col-12">
                <h4 style={{ marginBottom: '3%', fontSize: '20px' }}>Escolha um Método de Pagamento</h4>


                {categories.map((category) => {
                    return (
                        <div key={category.key} className="flex align-items-center">
                            <RadioButton inputId={category.key} name="category" value={category} onChange={(e: RadioButtonChangeEvent) => setSelectedCategory(e.value)} checked={selectedCategory.key === category.key} />
                            <label htmlFor={category.key} className="ml-2">{category.name}</label>
                        </div>
                    );
                })}

                <h4 style={{ marginBottom: '3%', marginTop: '3%' }}>Informações Pessoais</h4>

                <div className="grid">
                    <div className="col-8 md:col-4 lg:col-2" style={{marginTop:'1%', marginBottom:'3%'}}>                   <span className="p-float-label">
                        <Dropdown value={personChosed} onChange={(e: DropdownChangeEvent) => setPersonChosed(e.value)} options={personType} optionLabel="name" editable></Dropdown>
                        <label htmlFor="date">Tipo de Pessoa</label>
                    </span>
                    </div>
                </div>

                <div>
                    <RenderingPage />
                </div>

            </div>

        </div>
    )
}
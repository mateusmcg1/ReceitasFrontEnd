import { Button } from "primereact/button";
// import { Dropdown } from "primereact/dropdown";
import { useState } from "react";
import { RadioButton, RadioButtonChangeEvent } from 'primereact/radiobutton';


export default function Step2() {

    const categories = [
        { name: 'Pix', key: 'PIX' },
        { name: 'Credit Card', key: 'CREDIT_CARD' }
    ];
    const [selectedCategory, setSelectedCategory] = useState<any>(categories[0]);

    return (

        <div className="grid">
            <div className="col-12">
                <h4 style={{marginBottom:'3%', fontSize:'20px'}}>Escolha um Método de Pagamento</h4>


                {categories.map((category) => {
                    return (
                        <div key={category.key} className="flex align-items-center">
                            <RadioButton inputId={category.key} name="category" value={category} onChange={(e: RadioButtonChangeEvent) => setSelectedCategory(e.value)} checked={selectedCategory.key === category.key} />
                            <label htmlFor={category.key} className="ml-2">{category.name}</label>
                        </div>
                    );
                })}


            </div>
            <div className="col-10">
            </div>




            {/* ----------------------------------------------------------------------------------------- */}
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
    )
}
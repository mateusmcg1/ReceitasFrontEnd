import { Dropdown } from "primereact/dropdown";


export default function Step2() {


    return (

        <div className="grid">
            <div className="col-2">
                <span className="p-float-label" >
                    <Dropdown
                    //    value={selectedWallet} options={wallets} optionLabel="name" 

                    />
                    <label htmlFor="payment">Método de Pagamento</label>
                </span>
            </div>
            <div className="col-10">

            </div>
        </div>
    )
}
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useState } from "react";




export default function Step1(){

    const [transactions, setTransactions] = useState<any[]>([]);
    const [selectedTransaction, setSelectedTransaction] = useState<any>();
   


    return(

        <div className="data-table">
        <DataTable
          value={transactions}
          selectionMode="single"
        //   selection={selectedTransaction}
        //   onSelectionChange={(e:any) => {
        //     setSelectedTransaction(e.value);
        //   }}
          tableStyle={{ width:'92%' }}
        >
          <Column field="itemName" header="Nome do Item"></Column>

          <Column
            field="drescription" header="Descrição"
          ></Column>

          <Column
            field="value" header="Valor"
          ></Column> 

        </DataTable>
            

      </div>
      
    )
}
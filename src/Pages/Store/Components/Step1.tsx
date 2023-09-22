import axios from "axios";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useState } from "react";




export default function Step1({productId} : {productId:any}){

    const [transactions, setTransactions] = useState<any[]>([]);
    const [selectedTransaction, setSelectedTransaction] = useState<any>();

    const fetchProduct = async () => {
      try {
          const result = await axios.get(
              `${process.env.REACT_APP_API_URL}/v1/store/product/${productId}`,
              {
                  headers: {
                      Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
                  }
              }
          );
         

      } catch (err) {
          alert(err);
      }
  };


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
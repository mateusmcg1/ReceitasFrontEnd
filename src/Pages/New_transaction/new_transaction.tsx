import "./new_transaction.css";
import { useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import TransactionForm from "./Components/TransactionForm";
import RecurrencyForm from "./Components/RecurrencyFrom";
import InterForm from "./Components/InterForm";

//FALTA IMPLEMENTAR O CSS DE ACORDO COM O PROTÓTIPO//

export default function NewTransaction({walletId}:{walletId:string}) {
  return (
    <div>
        <TabView>
      <TabPanel header="Avulsa">
        <TransactionForm walletId={walletId}></TransactionForm>
      </TabPanel>
      <TabPanel header="Recorrente">
      <RecurrencyForm walletId={walletId}></RecurrencyForm>
      </TabPanel>
      <TabPanel header="Inter Carteira">
      <InterForm walletId={walletId}></InterForm>
      </TabPanel>
    </TabView>
    </div>
    
  );
}

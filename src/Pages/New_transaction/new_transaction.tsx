import "./new_transaction.css";
import { useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import TransactionForm from "./Components/TransactionForm";
import RecurrencyForm from "./Components/RecurrencyFrom";

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
        <p className="m-0">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit,
          sed quia non numquam eius modi.
        </p>
      </TabPanel>
    </TabView>
    </div>
    
  );
}

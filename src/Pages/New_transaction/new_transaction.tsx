import "./new_transaction.css";
import { useRef } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import TransactionForm from "./Components/TransactionForm";
import RecurrencyForm from "./Components/RecurrencyFrom";
import InterForm from "./Components/InterForm";
import { Toast, ToastMessage } from 'primereact/toast';
import { CurrencyEnum } from "../../Shared/enums/CurrencyEnum";

//FALTA IMPLEMENTAR O CSS DE ACORDO COM O PROTÓTIPO//

export default function NewTransaction({walletId, closeDialog,walletCurrency }:{walletId:string, closeDialog: any, walletCurrency: CurrencyEnum}) {
  const toast = useRef<Toast>(null);

  const showToast = (severity: ToastMessage["severity"], summary: string, detail: string) => {
    toast.current?.show([{ severity, summary, detail }]);
};

  return (
    <div>
      <Toast ref={toast} />
        <TabView>
      <TabPanel header="Avulsa">
        <TransactionForm walletId={walletId} onSuccess={showToast} onError={showToast} closeDialog = {closeDialog} walletCurrency={walletCurrency}></TransactionForm>
      </TabPanel>
      <TabPanel header="Recorrente">
      <RecurrencyForm walletId={walletId} onSuccess={showToast} onError={showToast} closeDialog = {closeDialog} walletCurrency={walletCurrency}></RecurrencyForm>
      </TabPanel>
      <TabPanel header="Inter Carteira">
      <InterForm walletId={walletId} onSuccess={showToast} onError={showToast} closeDialog = {closeDialog} walletCurrency={walletCurrency}></InterForm>
      </TabPanel>
    </TabView>
    </div>
    
  );
}

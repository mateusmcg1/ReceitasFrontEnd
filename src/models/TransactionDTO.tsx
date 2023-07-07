import { Installment } from "./Installment";


export interface TransactionDTO {
    amount?: number,
    type?: string,
    reference?: string,
    due_date?: string,
    paid?: boolean,
    installments?:Installment[],
    observation?: string,
    wallet_id?: string
}
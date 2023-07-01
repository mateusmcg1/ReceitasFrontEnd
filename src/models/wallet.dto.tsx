import { CurrencyEnum } from "../enums/CurrencyEnum";

export interface WalletDto {
    currency?: CurrencyEnum;
    user_id?: string;
    active?: boolean;
    createdAt?: Date;
    id?: string;
    name?: string;
}
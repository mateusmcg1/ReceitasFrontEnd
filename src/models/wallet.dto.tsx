import { CurrencyEnum } from "../Shared/enums/CurrencyEnum";

export interface WalletDto {
    currency?: CurrencyEnum;
    user_id?: string;
    active?: boolean;
    createdAt?: Date;
    id?: string;
    name?: string;
}
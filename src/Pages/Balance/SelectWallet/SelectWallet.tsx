import { Dropdown } from "primereact/dropdown";
import { WalletDto } from "../../../models/wallet.dto";
import { useState } from "react";

export function SelectWallet({ wallets, onUpdate }: { wallets: WalletDto[], onUpdate: any }) {
    const [selectedWallet, setSelectedWallet] = useState<WalletDto>();

    return <div>
        <Dropdown value={selectedWallet} onChange={(e) => onUpdate(e.value)} options={wallets} optionLabel="name"
            placeholder="Selecione uma carteira" />
    </div>
}
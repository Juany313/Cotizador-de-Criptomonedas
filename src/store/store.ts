import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { Cryptocurrency } from "../types";
import { getCryptos } from "../services/Cryptoservice";


type CryptoStore ={
    cryptourrencies:Cryptocurrency[]
    fetchCryptos: () => Promise<void>
}


export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    cryptourrencies: [],
    fetchCryptos:async () => {
        const cryptourrencies = await getCryptos()
        //seteo en el state cryptourrencies
        set(()=>({
            cryptourrencies
        }))
        
    }
})))
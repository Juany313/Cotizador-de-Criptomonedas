import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { Cryptocurrency, CryptoPrice, Pair } from "../types";
import { fetchCurrentCryptoPrice, getCryptos } from "../services/Cryptoservice";


type CryptoStore ={
    cryptourrencies:Cryptocurrency[]
    result: CryptoPrice
    fetchCryptos: () => Promise<void>
    fetchData: (pair: Pair) => Promise<void>
}


export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    cryptourrencies: [],
    result: {} as CryptoPrice,
    fetchCryptos:async () => {
        const cryptourrencies = await getCryptos()
        //seteo en el state cryptourrencies
        set(()=>({
            cryptourrencies
        }))
        
    },
    fetchData: async (pair) => {

        const result = await fetchCurrentCryptoPrice(pair)
        set(()=> ({
            result
        }))
        
    }
})))
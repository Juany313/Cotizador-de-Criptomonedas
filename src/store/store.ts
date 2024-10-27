import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { Cryptocurrency, CryptoPrice, Pair } from "../types";
import { fetchCurrentCryptoPrice, getCryptos } from "../services/Cryptoservice";


type CryptoStore ={
    cryptourrencies:Cryptocurrency[]
    result: CryptoPrice
    loading: boolean
    fetchCryptos: () => Promise<void>
    fetchData: (pair: Pair) => Promise<void>
}


export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    cryptourrencies: [],
    result: {
        IMAGEURL: '',
        PRICE: '',
        HIGHDAY: '',
        LOWDAY: '',
        CHANGEPCT24HOUR: '',
        LASTUPDATE: ''
    },
    loading: false,
    fetchCryptos:async () => {
        const cryptourrencies = await getCryptos()
        //seteo en el state cryptourrencies
        set(()=>({
            cryptourrencies
        }))
        
    },
    fetchData: async (pair) => {
        set(()=> ({
            loading:true
        }))
        const result = await fetchCurrentCryptoPrice(pair)
        set(()=> ({
            result,
            loading: false
        }))
        
    }
})))
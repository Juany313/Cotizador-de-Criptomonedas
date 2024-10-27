import { string, z } from 'zod'

export const CurrencySchema = z.object({
    code: z.string(),
    name: z.string()
})

export const CryptoCurrencyResponseSchema = z.object({
    CoinInfo: z.object({
        //anoto solo las propiedades que voy a utilizar
        FullName: string(),
        Name: string()
    })
})

export const CryptoCurrenciesResponseSchema = z.array(CryptoCurrencyResponseSchema)

export const PairSchema = z.object({
    currency: string(),
    criptocurrency: string()
})

export const ErrorSchema = string()

export const CryptoPriceSchema =z.object({
    IMAGEURL: string(),
    PRICE: string(),
    HIGHDAY: string(),
    LOWDAY: string(),
    CHANGEPCT24HOUR: string(),
    LASTUPDATE: string(),
})
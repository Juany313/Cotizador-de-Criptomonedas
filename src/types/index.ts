import { z } from "zod";
import { CurrencySchema, CryptoCurrencyResponseSchema, PairSchema, ErrorSchema, CryptoPriceSchema } from "../schema/crypto-schema";

export type Currency = z.infer<typeof CurrencySchema>
export type Cryptocurrency = z.infer<typeof CryptoCurrencyResponseSchema>
export type Pair = z.infer<typeof PairSchema>
export type ErrorType = z.infer<typeof ErrorSchema>
export type CryptoPrice = z.infer<typeof CryptoPriceSchema>
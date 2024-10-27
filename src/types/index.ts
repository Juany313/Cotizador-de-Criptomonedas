import { z } from "zod";
import { CurrencySchema, CryptoCurrencyResponseSchema, PairSchema, ErrorSchema } from "../schema/crypto-schema";

export type Currency = z.infer<typeof CurrencySchema>
export type Cryptocurrency = z.infer<typeof CryptoCurrencyResponseSchema>
export type Pair = z.infer<typeof PairSchema>
export type ErrorType = z.infer<typeof ErrorSchema>
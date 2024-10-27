import { useCryptoStore } from "../store/store"
import { currencies } from "../data"
import { ChangeEvent, FormEvent, useState } from "react"
import { ErrorType, Pair } from "../types"
import ErrorMessage from "./ErrorMessage"

const CriptoSearchForm = () => {
    //Estado global
    const cryptourrencies = useCryptoStore((state)=> state.cryptourrencies)

    //Estados locales
    const [pair, setPair] = useState<Pair>({
        currency: '',
        criptocurrency: ''
    })
    const [error, setError] = useState<ErrorType>('')

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setError('')
        setPair({
            ...pair,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>)=> {
        e.preventDefault()

        if(Object.values(pair).includes('')) {
            setError('Todos los campos son obligatorios')
            return
        }
        setError('')
        //Consultar la API

    }


  return (
    <form
        className="form"
        onSubmit={handleSubmit}
    >
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <div className="field">
            <label htmlFor="currency">Moneda:</label>
            <select 
                name="currency" 
                id="currency"
                value={pair.currency}
                onChange={handleChange}
            >
                <option value="">-- Seleccione --</option>
                {currencies.map(currency => (
                    <option
                        key={currency.code}
                        value={currency.code}
                    >
                        {currency.name}
                    </option>
                ))}
            </select>
        </div>

        <div className="field">
            <label htmlFor="criptocurrency">Criptomoneda:</label>
            <select 
                name="criptocurrency" 
                id="criptocurrency"
                value={pair.criptocurrency}
                onChange={handleChange}
            >
                <option value="">-- Seleccione --</option>
                {cryptourrencies.map(crypto => (
                    <option
                        key={crypto.CoinInfo.FullName}
                        value={crypto.CoinInfo.Name}
                    >
                        {crypto.CoinInfo.FullName}
                    </option>
                ))}
            </select>
        </div>

        <input type="submit" />
    </form>
  )
}

export default CriptoSearchForm
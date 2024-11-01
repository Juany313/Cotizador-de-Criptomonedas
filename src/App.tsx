import { useEffect } from "react"
import CriptoSearchForm from "./component/CriptoSearchForm"
import { useCryptoStore } from "./store/store"
import CryptoPriceDisplay from "./component/CryptoPriceDisplay"


function App() {

  const fetchCryptos = useCryptoStore((state) => state.fetchCryptos)

  useEffect(() => {
    fetchCryptos()
  },[])

  return (
    <>
      <div className="container">
          <h1 className="app-title">
              Cotizador de <span>Criptomonedas</span>
          </h1>

          <div className="content">
              <CriptoSearchForm/>
              <CryptoPriceDisplay/>
          </div>
      </div>
    </>
  )
}

export default App

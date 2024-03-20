import { useState } from 'react'
import { Input } from './Components'
import useCurrencyInfo from './Hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [amount, setAmount ] = useState(0)
  const  [ from , setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  //using custo hook
  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
  const swap = () =>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert =() =>{
    setConvertedAmount(amount * currencyInfo[to])
  }
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://cdn3.vectorstock.com/i/1000x1000/43/92/stock-market-or-forex-trading-graph-in-graphic-vector-23614392.jpg')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                       convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <Input
                            label="From"
                            amount ={amount}
                            currencyOption ={options}
                            onCurrencyChange = {(currency) => setFrom(currency)}
                            onAmountChange={(amount) =>setAmount(amount)}
                            selectCurrency = {from}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-yellow-300  text-black  px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <Input
                            label="To"
                            amount ={convertedAmount}
                            currencyOption ={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency = {to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-yellow-300 text-black text-black-700 px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App

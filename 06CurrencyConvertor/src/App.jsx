import { useState } from "react"
import Inputs from "./Components/InputBox"
import useCurrencyInfo from "./Hooks/CustomHook"



function App() {
  const [amount, setAmount] = useState("")
  const [from, setfrom] = useState("PKR")
  const [to, setTo] = useState("INR")
  const [convertedAmount, setconvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swaper = () => {
    setfrom(to)
    setTo(from)
    setconvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert = () => {
    const rate = currencyInfo[to]
    if (!rate) {
      "Pleae select the  currency in which you want to change your amount."

    }
    else {
      const value = parseFloat(amount)
      setconvertedAmount(rate * value)
    }
  }




  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        convert()
      }}
    >
      <div
        className="flex justify-center items-center sm:p-3 w-full h-screen bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
        }}
      >
        <div className="w-full max-w-md mx-auto p-4 rounded-xl border border-gray-60   backdrop-blur-sm  bg-white/30">

          <h1 className="text-4xl text-center text-red-800 font-semibold underline decoration-black">Currency Converter</h1>

          <div>
            <Inputs className="mt-5"
              label="From"
              amount={amount}
              onAmountChange={(value) => setAmount(value)}
              selectedCurrency={from}
              onCurrencyChange={(currency) => setfrom(currency)}
              currencyOptions={options}
            />
          </div>





          <div className="relative">
            <button type="button" className="border-white absolute -translate-x-1/2 -translate-y-[30%] hover:opacity-80  left-1/2 bg-blue-600 text-white px-3 rounded py-1"
              onClick={swaper}>
              Swap <span className="text-black font-extrabold">↓↑</span>
            </button>
          </div>





          <div>
            <Inputs className="mt-3"
              amountInputDisable
              label="To"
              amount={convertedAmount}
              selectedCurrency={to}
              onCurrencyChange={(currency) => setTo(currency)}
              currencyOptions={options}



            />

          </div>

          <div className="mt-2">
            <button className="w-full bg-blue-600 hover:opacity-80  text-white py-2 rounded-lg  " type="submit">
              Convert {from} to {to}
            </button>
          </div>





        </div>

      </div >
    </form>
  )
}
export default App

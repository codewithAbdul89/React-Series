import { useState, useRef, useEffect } from "react"
import Inputs from "./Components/InputBox"
import useCurrencyInfo from "./Hooks/CustomHook"
import MessageBox from "./Components/show Messsge"



function App() {

  const [amount, setAmount] = useState("")
  const [from, setfrom] = useState("PKR")
  const [to, setTo] = useState("INR")
  const [convertedAmount, setconvertedAmount] = useState(0)
  const [message, setMessage] = useState('');
  const msgRef = useRef(null)


  


  useEffect(() => {
    if (!message == "") {
      msgRef.current.className = "hidden"
    }
   

  }, [message,amount])

  const currencyInfo = useCurrencyInfo(from, setMessage)
  const options = Object.keys(currencyInfo)

  const swaper = () => {
    setfrom(to)
    setTo(from)
    setconvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert = () => {
    const rate = currencyInfo[to]
    // const value = parseFloat(amount)
    const value=amount


    if (value === "" || isNaN(Number(value))) {
      setMessage("Please First Write the Currency.")
    }
    if (!rate) {
      setMessage("Conversion does not possible. Please make sure your API or Network connection is correct!")
    }

    else {
      setconvertedAmount(rate * value)

    }
  }




  return (

    <div>
      <div ref={msgRef}>
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
                  messsage={message}
                />
              </div>





              <div className="relative">
                <button type="button" className="border-white w-auto border-[2px] absolute text-xl -translate-x-1/2 -translate-y-[30%] hover:opacity-80  left-1/2 bg-blue-600 text-white px-2  rounded-lg sm:px-3  sm:py-[4px] py-[2px]" 
                  onClick={swaper}>
                  Swap <span className="sm:hidden text-white text-2xl ] font-extrabold"
                    style={{
                      letterSpacing: "0.0001px"
                    }}>↓↑</span>
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
                  messsage={message}




                />

              </div>

              <div className="mt-2">
                <button className="w-full bg-blue-600 hover:opacity-80 border-white border-[2px]  text-white py-2 rounded-lg  " type="submit">
                  Convert {from} to {to}
                </button>
              </div>





            </div>

          </div >
        </form>
      </div>
      <div className="p-4">
        <MessageBox message={message}  onClose={() => {
          setMessage('')
          msgRef.current.className = "block"
        }
        } />

      </div>
    </div>

  )
}
export default App

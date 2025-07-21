import { useRef, useEffect } from "react";

function Inputs({
    className,
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "PKR",
    amountInputDisable = false,
    messsage


}) {

    const inputref = useRef(null)
    function focuser() {
        inputref.current.select()
    }
    useEffect(() => {
        inputref.current.focus()
    }, [messsage])

    return (
        <div className={`flex flex-col h-auto gap-5 rounded-lg  bg-white p-2 sm:py-4 ${className}`} >
            <div className=" items-center flex justify-between">
                <div className="font-semibold">
                    {label}
                </div>
                <div className="text-sm">
                    Currency Type
                </div>
            </div>
            <div className="items-center  flex justify-between">

                <div>
                    <input type="number"
                        onFocus={focuser}
                        step={"any"}
                        ref={inputref}
                        placeholder="Amount"
                        className="border-none bg-transparent  outline-none"
                        value={amount}
                        disabled={amountInputDisable}
                        onChange={(e) => {
                            let value = e.target.value
                            onAmountChange(value)
                        }}

                    />
                </div>
                <div >
                    <select
                        value={selectedCurrency}

                        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                        className="bg-gray-100 rounded p-[2px] py-[4px]" >
                            

                        {currencyOptions.map((currency) => (
                            <option value={currency} key={currency}>

                                {currency}
                            </option>
                        ))

                        }

                    </select>

                </div>
            </div>
        </div>
    )
}


export default Inputs
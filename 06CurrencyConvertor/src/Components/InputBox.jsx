import React from "react";
import {useRef} from "react";

function Inputs({
    className,
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "PKR",
    amountInputDisable = false,


}) {

    const inputref=useRef(null)
    function focuser(){
        inputref.current.select()
    }

    return (
        <div className={`flex flex-col h-auto gap-5 rounded-lg  bg-white p-2 ${className}`} >
            <div className=" items-center flex justify-between">
                <div className="font-semibold">
                    {label}
                </div>
                <div className="text-sm">
                    Currency Type
                </div>
            </div>
            <div className="items-center placeholder:text-black placeholder:font-bold flex justify-between">

                <div>
                    <input type="number"
                    onFocus={focuser}
                    step={"Any"}
                    ref={inputref}
                        placeholder="Amount"
                        className="border-none  outline-none"
                        value={amount}
                        disabled={amountInputDisable}
                        onChange={(e) => {
                            let value = e.target.value
                            // value = value.replace(/\D/g, '')
                            onAmountChange(value)
                        }}

                    />
                </div>
                <div >
                    <select
                        value={selectedCurrency}
                        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                        className="bg-gray-100 rounded p-[2px]" >

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
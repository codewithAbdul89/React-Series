import { useEffect, useState } from "react";




function useCurrencyInfo(currency, setMessage) {
    const [data, setData] = useState({}); // better default as object

    useEffect(() => {
        let url = `https://v6.exchangerate-api.com/v6/58dd0da7bb8c18b0060d31bc/latest/${currency}`;

        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                if (res.conversion_rates) {
                    setData(res.conversion_rates);
                } else {
                    setMessage("Conversion rates not available. Please try again later.");
                    setData({ USD: 1, });
                    //                     setData({
                    //   USD: 1,      // US Dollar
                    //   EUR: 0.85,   // Euro
                    //   GBP: 0.75,   // British Pound
                    //   JPY: 110,    // Japanese Yen
                    //   CNY: 7.2,    // Chinese Yuan
                    //   AUD: 1.45,   // Australian Dollar
                    //   CAD: 1.35,   // Canadian Dollar
                    //   CHF: 0.91,   // Swiss Franc
                    //   INR: 83,     // Indian Rupee
                    //   PKR: 280,    // Pakistani Rupee
                    //   AED: 3.67,   // UAE Dirham
                    //   SAR: 3.75,   // Saudi Riyal
                    //   BDT: 117,    // Bangladeshi Taka
                    //   IDR: 15500,  // Indonesian Rupiah
                    //   KRW: 1380,   // South Korean Won
                    //   TRY: 30.5,   // Turkish Lira
                    //   ZAR: 18.5,   // South African Rand
                    //   NGN: 1500,   // Nigerian Naira
                    //   RUB: 92,     // Russian Ruble
                    //   MXN: 17.2,   // Mexican Peso
                    //   BRL: 5.3,    // Brazilian Real
                    //   MYR: 4.7,    // Malaysian Ringgit
                    //   THB: 36,     // Thai Baht
                    //   SGD: 1.35,   // Singapore Dollar
                    //   HKD: 7.8,    // Hong Kong Dollar
                    //   EGP: 48      // Egyptian Pound
                    // });

                }
            })
            .catch((err) => {
                console.log("Something went wrong during fetching API.......", err);
                setMessage("Failed to fetch currency data. Please check your internet or API key.");

                setData({ USD: 1, });
                //                 setData({
                //   USD: 1,      // US Dollar
                //   EUR: 0.85,   // Euro
                //   GBP: 0.75,   // British Pound
                //   JPY: 110,    // Japanese Yen
                //   CNY: 7.2,    // Chinese Yuan
                //   AUD: 1.45,   // Australian Dollar
                //   CAD: 1.35,   // Canadian Dollar
                //   CHF: 0.91,   // Swiss Franc
                //   INR: 83,     // Indian Rupee
                //   PKR: 280,    // Pakistani Rupee
                //   AED: 3.67,   // UAE Dirham
                //   SAR: 3.75,   // Saudi Riyal
                //   BDT: 117,    // Bangladeshi Taka
                //   IDR: 15500,  // Indonesian Rupiah
                //   KRW: 1380,   // South Korean Won
                //   TRY: 30.5,   // Turkish Lira
                //   ZAR: 18.5,   // South African Rand
                //   NGN: 1500,   // Nigerian Naira
                //   RUB: 92,     // Russian Ruble
                //   MXN: 17.2,   // Mexican Peso
                //   BRL: 5.3,    // Brazilian Real
                //   MYR: 4.7,    // Malaysian Ringgit
                //   THB: 36,     // Thai Baht
                //   SGD: 1.35,   // Singapore Dollar
                //   HKD: 7.8,    // Hong Kong Dollar
                //   EGP: 48      // Egyptian Pound
                // });


            });
    }, [currency]);

    return data;
}



export default useCurrencyInfo;

import { useEffect, useState } from "react";
function useCurrencyInfo(currency) {
    const [data, setData] = useState(0)
    useEffect(() => {
        let url = `https://v6.exchangerate-api.com/v6/58dd0da7bb8c18b0060d31bc/latest/${currency}`
        fetch(url)
            .then((res) => res.json())
            .then((res) => setData(res.conversion_rates || {}))
            .catch((err) => console.log("Something wring in during fetching API.......", err))
    }, [currency])
    return data
}
export default useCurrencyInfo
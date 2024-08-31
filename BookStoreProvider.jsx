
import BookStoreContext from "./BookStoreContext.js"

function BookStoreProvider ({children}) {

    const currencies = {
        euro: {
            symbol: "€",
            label: "EUR",
            conversionRate: 1,
        },
        usd: {
            symbol: "$",
            label: "USD",
            conversionRate: 1.19,
        },
        forint: {
            symbol: "Ft",
            label: "HUF",
            conversionRate: 380,
        },
    };
      
    return (
        <BookStoreContext.Provider  value={{currencies}}>
            {children}
        </BookStoreContext.Provider>
    )

}

export default BookStoreProvider;
import { useState } from "react";
import BookStoreProvider from "./BookStoreProvider.jsx";
import BookCard from "./BookCard.jsx";

function BookStore() {
  const books = [
    {
      id: 1,
      title: "The Road to React",
      price: 19.99,
    },
    {
      id: 2,
      title: "The Road to GraphQL",
      price: 29.99,
    },
  ];

  const [currency, setCurrency] = useState("euro");

  return (
    <BookStoreProvider>
      <div>
        <button onClick={() => setCurrency("euro")}>EUR</button>
        <button onClick={() => setCurrency("usd")}>USD</button>
        <button onClick={() => setCurrency("forint")}>HUF</button>

        {books.map((book) => (
          <BookCard key={book.id} book={book} currentCurrency={currency} />
        ))}
      </div>
    </BookStoreProvider>
  );
}

export default BookStore;

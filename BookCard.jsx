import { useContext, useState } from "react";
import BookStoreContext from "./BookStoreContext.js";

function BookCard({ book, currentCurrency }) {
  const { currencies } = useContext(BookStoreContext);
  const [read, setRead] = useState(false);

  return (
    <div className="bookcard">
      <h2>{book.title}</h2>
      <p>
        {Math.round(
          book.price * currencies[currentCurrency].conversionRate * 100
        ) / 100}{" "}
        {currencies[currentCurrency].symbol}
      </p>
      <button onClick={() => setRead(!read)}>{read ? "Elolvastam" : "Még nem olvastam"}</button>
    </div>
  );
}

export default BookCard;

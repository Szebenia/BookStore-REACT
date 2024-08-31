import { useState, useRef } from "react";
import BookStoreProvider from "./BookStoreProvider.jsx";
import BookCard from "./BookCard.jsx";

function BookStore() {
	const [books, setBooks] = useState([]);
	fetch("http://localhost:3000/books/")
		.then((response) => response.json())
		.then((books) => {
			setBooks(books);
			console.log("books : ", books);
		});

	// const downloadPosts = () => {
	// 	fetch("https://jsonplaceholder.typicode.com/posts")
	// 		.then((response) => response.json())
	// 		.then((postsData) => setPosts(postsData));
	// };

	const inputRef = useRef(null);
	const inputCheckboxRef = useRef(null);

	const [inputText, setInputText] = useState("");
	const [inputCheckbox, setCheckbox] = useState(false);

	const [currency, setCurrency] = useState("euro");

	return (
		<BookStoreProvider>
			<div>
				<div>
					<input
						ref={inputRef}
						onChange={() => setInputText(inputRef.current.value)}
						type="text"
						placeholder="A keresett könyv címe"
					/>
				</div>
				<div>
					<input
						ref={inputCheckboxRef}
						onChange={() => {
							setCheckbox(inputCheckboxRef.current.checked);
							console.log(inputCheckboxRef.current.checked);
						}}
						type="checkbox"
					/>
				</div>
				<button onClick={() => setCurrency("euro")}>EUR</button>
				<button onClick={() => setCurrency("usd")}>USD</button>
				<button onClick={() => setCurrency("forint")}>HUF</button>

				{books
					.filter((book) => book.title.includes(inputText))
					.map((book) => (
						<BookCard key={book.id} book={book} currentCurrency={currency} inputCheckbox={inputCheckbox} />
					))}
			</div>
		</BookStoreProvider>
	);
}

export default BookStore;

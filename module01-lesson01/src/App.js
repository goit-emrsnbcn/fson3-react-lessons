//this is not html its JSX - JavaScript XML
//
import TopNav from "./TopNav";
import Content from "./Content";
function App() {
	const imageUrl = "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640";
	const productPrice = 10.99;
	const message = "Hello World From App.js";
	const isLogin = false;

	const favoriteBooks = [
		{ id: "id-1", name: "JS for beginners" },
		{ id: "id-2", name: "React basics" },
		{ id: "id-3", name: "React Router overview" },
		{ id: "id-4", name: "Redux in depth" },
	];
	//passing data thru props check line 34
	return (
		<div>
			<TopNav />
			<h2>{1 + 1}</h2>
			<img src={imageUrl} />
			<h1>Taco With Lime</h1>
			<p>Price: {productPrice}</p>
			{isLogin ? <button>Add to Cart</button> : <a href="#">Login</a>}

			<hr />
			<ul>
				{favoriteBooks.map((book) => (
					<li key={book.id}>{book.name}</li>
				))}
			</ul>

			<Content data={message} age={42} />
		</div>
	);
}

export default App;

import "./App.css";
// <link rel="stylesheet" href="App.css"/>
// <link rel="stylesheet" href="Component.css"/>
import Component from "./Component";
import ThirdComponent from "./ThirdComponent";
function App() {
	// let divStyle = {
	// 	backgroundColor: "red",
	// 	border: "2px solid black",
	// 	color: "white",
	// };
	return (
		<>
			<div className="divStyle">
				<h1>Hello World</h1>
			</div>
			<Component />
			<ThirdComponent />
		</>
	);
}

export default App;

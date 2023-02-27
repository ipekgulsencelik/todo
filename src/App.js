import React from "react";
import "./App.css";

// contexts
import { TodoProvider } from "./context/TodoContext";

import Content from "./components/content/Content";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
	return (
		<TodoProvider>
			<section className="todoapp">
				<Header />
				<Content />
			</section>
			<Footer />
		</TodoProvider>
	);
}

export default App;
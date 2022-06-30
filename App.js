import { useState } from "react";
import Loader from "./components/Loader/Loader";
import NavbarLg from "./components/Navbar/navbarLg";
import NavbarSm from "./components/Navbar/navbarSm";
import Home from "./components/Home/Home";
import AboutMe from "./components/About/AboutMe";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/contact";
import "./css/App.css";

function App() {
	const [isLoading, setIsLoading] = useState(true);
	return (
		<>
			{isLoading ? (
				<Loader setIsLoading={setIsLoading} />
			) : (
				<div className="ManContetnt">
					<NavbarLg />
					<NavbarSm />
					<Home />
					<AboutMe />
					<Skills />
					<Projects />
					<Contact />
				</div>
			)}
		</>
	);
}

export default App;

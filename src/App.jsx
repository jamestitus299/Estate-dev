import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import "./App.css";
import Values from "./components/values/Values";
import Contact from "./components/Contact/Contact";	
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<div className="App">
			<div>
				<div className="white-gradient" />
				<Header></Header>
				<Hero></Hero>
			</div>
			<Companies />
			<Residencies />
			<Values/>
			<Contact/>
			<GetStarted/>
			<Footer/>
		</div>
	);
}

export default App;

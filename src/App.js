import Navbar from "./Components/Navbar";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Apartments from "./Components/Apartments/Apartments";
import Works from "./Components/Works";
import Services from "./Components/Services";
import Agents from "./Components/Agents";
import Adverts from "./Components/Adverts";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
	return (
		<>
			<Navbar />
			<Header />
			<About />
			<Apartments />
			<Works />
			<Services />
			<Agents />
			<Adverts />
			<Footer />
		</>
	);
}

export default App;

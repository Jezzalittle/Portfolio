import About from "./components/About";
import Contact from "./components/Contact";
import Custom_Navbar from "./components/Custom_Navbar";
import Footer from "./components/Footer";
import Hero_Section from "./components/Hero_Section";
import Projects from "./components/Projects";

function App() {
	return (
		<div className="App">
			<Custom_Navbar />
			<Hero_Section />
			<About />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;

import "./App.styles/App.scss";
import HeroSection from "../Sections/Hero/HeroSection.jsx";
import WelcomeComponent from "../Sections/Welcome/WelcomeComponent";
import NewEraComponent from "../Sections/NewEra/NewEraComponent";
import GrandOpening from "../Sections/GrandOpening/GrandOpening";
import BookYourStayComponent from "../Sections/BookYourStay/BookYourStayComponent";

function App() {
	return (
		<>
			<header>
				<HeroSection />
			</header>
			<WelcomeComponent />
			<NewEraComponent />
			<GrandOpening />
			<BookYourStayComponent />
		</>
	);
}

export default App;

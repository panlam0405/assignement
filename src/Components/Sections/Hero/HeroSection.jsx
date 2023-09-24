import styles from "./HeroSection.styles/heroStyles.module.scss";
import Button from "../UiButton/Button";

export default function HeroSection() {
	return (
		<div className='hero-container'>
			<div id='hero-button-container'>
				<Button text={"Book Your Stay"} />
			</div>
			<div
				id='hero-picture-container'
				className={styles["hero-picture-container"]}
			></div>
			<div id='hero-text-conteiner'></div>
		</div>
	);
}

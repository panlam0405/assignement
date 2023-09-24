import styles from "./BookYourStay.styles/bookYourStay.module.scss";
import Button from "../../Sections/UiButton/Button";

export default function BookYourStayComponent() {
	return (
		<div id={styles["footer-button-container"]}>
			<div id={styles["hero-button-decorator"]}></div>
			<Button text={"Book Your Stay"} />
			<div id={styles["hero-button-decorator"]}></div>
		</div>
	);
}

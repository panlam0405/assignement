import styles from "./HeroSection.styles/heroStyles.module.scss";
import Button from "../UiButton/Button";

export default function HeroSection() {
	return (
		<div className={styles["hero-container"]}>
			<div className={styles.frame}>
				<div id={styles["hero-button-container"]}>
					<div id={styles["hero-button-decorator"]}></div>
					<Button text={"Book Your Stay"} />
					<div id={styles["hero-button-decorator"]}></div>
				</div>
				<div
					id='hero-picture-container'
					className={styles["hero-picture-container"]}
				>
					<div className={styles.text}>
						<h1>Grand opening</h1>
						<p>
							We are in great anticipation of the moment when our doors open to
							welcome you.
						</p>
					</div>
				</div>
			</div>
			<div id={styles["hero-text-container"]}>
				<div id='hero-text-rect'>
					<img src='logo.svg' alt='' />
				</div>
			</div>
		</div>
	);
}

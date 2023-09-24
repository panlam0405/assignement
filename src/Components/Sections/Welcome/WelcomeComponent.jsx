import styles from "./Welcome.styles/welcome.module.scss";

export default function WelcomeComponent() {
	return (
		<section className={styles["welcome-container"]}>
			<div className={styles.frame}>
				<div id={styles["welcome-picture-container"]}>
					<img src='welcome.png' alt='hotel image' />
				</div>
			</div>
			<div id={styles["welcome-text-container"]}>
				<h2>Welcome</h2>
				<p>
					Donec laoreet lacus quam, eget ornare dolor fringilla sed. Donec
					venenatis lacinia neque, quis vehicula sem varius in. Nulla
					scelerisque neque magna, sed mollis mi accumsan et. Vestibulum porta
					rutrum justo vitae molestie. Vestibulum ante ipsum primis in faucibus
					orci luctus et ultrices posuere cubilia curae; Mauris tempor sagittis
					ex, a tincidunt est iaculis eget. Nunc in semper ex.
				</p>
			</div>
		</section>
	);
}

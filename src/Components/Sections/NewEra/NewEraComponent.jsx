import styles from "./NewEra.styles/New-era.module.scss";

export default function NewEraComponent() {
	return (
		<section className={styles["new-era-container"]}>
			<div id={styles["new-era-picture-container"]}>
				<div id={styles.rectangle}>
					<div id={styles["rectangle-shape"]}></div>
					<div className={styles["photo-container"]}>
						<div id={styles.photo1}>
							<img src='pool.jpg' alt='pool' />
						</div>
					</div>
					<div className={styles["photo-container"]}>
						<div id={styles.photo2}>
							<img src='lobby.jpg' alt='lobby' />
						</div>

						<div id={styles.photo3}>
							<img src='sofa.jpg' alt='sofa' />
						</div>
					</div>
				</div>
			</div>

			<div id={styles["new-era-text-container"]}>
				<h2>We enter a new era…</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
					interdum magna id euismod semper. In ut felis vel justo rutrum
					hendrerit. Class aptent taciti sociosqu ad litora torquent per conubia
					nostra, per inceptos himenaeos. Proin nec consequat enim, a volutpat
					nibh. Nam aliquam ipsum et sem dapibus dapibus. Integer vulputate
					consectetur arcu, vel mattis sem dignissim eget. Curabitur non massa
					sit amet diam molestie sollicitudin. Quisque pellentesque efficitur
					urna, nec consectetur quam efficitur a. Aliquam lacinia odio pretium
					massa imperdiet, id vestibulum nulla molestie. Sed finibus orci vitae
					venenatis laoreet. Vivamus venenatis tellus justo, vel egestas lectus
					lobortis sit amet. Etiam ultrices cursus elementum.
				</p>
			</div>
		</section>
	);
}

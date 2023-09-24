import styles from "./GrandOpening.styles/grandopening.module.scss";
export default function GrandOpening() {
	return (
		<section className={styles["grand-opening-container"]}>
			<div className='grand-opening-text-container'>
				<h2 className={styles["grand-opening-title"]}>Grand Opening</h2>
				<p className={styles["grand-opening-description"]}>
					We are in great anticipation of the moment when our doors open to
					welcome you.
				</p>
			</div>
			<div className='grand-opening-picture-container'></div>
		</section>
	);
}

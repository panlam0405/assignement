import styles from "./Button.styles/buttonStyles.module.scss";

export default function Button({ text }) {
	return <button className={styles.button}>{text}</button>;
}

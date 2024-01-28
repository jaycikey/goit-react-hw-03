import styles from "./Button.module.css";

export const Button = ({ children, id, onClick }) => {
  return <button className={styles.button} onClick={() => onClick(id)}>{children}</button>;
};

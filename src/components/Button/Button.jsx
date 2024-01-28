import styles from "./Button.module.css";

export const Button = ({ children, id, className, onClick }) => {
  const buttonClass = `${styles.button} ${className || ""}`;

  return <button className={buttonClass} onClick={() => onClick(id)}>{children}</button>;
};

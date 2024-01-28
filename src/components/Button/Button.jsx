import styles from "./Button.module.css";

export const Button = ({ children, className }) => {
  const buttonClass = `${styles.button} ${className || ""}`;

  return <button className={buttonClass}>{children}</button>;
};

import { FaUserAlt } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { Button } from "../Button/Button";
import styles from "./Contact.module.css";

export const Contact = ({ id, name, number }) => {
  return (
    <li className={styles.contactItem}>
      <div className={styles.contactInfo} id={`contact-${id}`}>
        <div className={styles.contactRow}>
          <FaUserAlt className={styles.contactIcon} />
          <p>{name}</p>
        </div>
        <div className={styles.contactRow}>
          <MdPhone className={styles.phoneIcon} />
          <p>{number}</p>
        </div>
      </div>
      <Button className="button">Delete</Button>
    </li>
  );
};
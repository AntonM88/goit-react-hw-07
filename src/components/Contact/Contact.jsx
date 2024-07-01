import { TbSquareX } from "react-icons/tb";
import s from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa";

export const Contact = ({ item, onDelete }) => {
  return (
    <li className={s.item}>
      <p className={s.name}>
        <FaUser className={s.icon} />
        {item.name}
      </p>
      <p className={s.number}>
        <FaPhone className={s.icon} />
        {item.number}
      </p>
      <button onClick={onDelete} className={s.btn}>
        <TbSquareX color="#750b0b" />
      </button>
    </li>
  );
};

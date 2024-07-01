import { useSelector, useDispatch } from "react-redux";
import s from "./ContactList.module.css";
import { Contact } from "../Contact/Contact";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import { deleteThunk } from "../../redux/operations";

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const nameFilter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(nameFilter)
  );
  return (
    <ul className={s.list}>
      {filteredContacts.map((contact) => (
        <Contact
          item={contact}
          key={contact.id}
          onDelete={() => dispatch(deleteThunk(contact.id))}
        />
      ))}
    </ul>
  );
};

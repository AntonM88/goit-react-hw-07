import { useDispatch, useSelector } from "react-redux";
import { ContactList, SearchBox, ContactForm } from ".";
import { selectIsError, selectIsLoading } from "../redux/contactsSlice";
import { fetchContacts } from "../redux/contactsOps";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      {isLoading && (
        <span className="loading loading-spinner text-primary absolute right-5 top-5"></span>
      )}
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {isError && <p>Something went wrong!</p>}
    </div>
  );
};

export default App;

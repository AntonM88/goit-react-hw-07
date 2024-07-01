import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { addContact } from "../../redux/contactsSlice";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "To short name")
    .max(50, "To long name")
    .required("Required"),
  number: Yup.string()
    .matches(/^[0-9]+$/, "Only digits are allowed")
    .min(3, "To short number")
    .max(50, "To long number")
    .required("Required"),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const initialValues = { name: "", number: "" };

  const handleSubmit = (values, actions) => {
    const newUser = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newUser));
    actions.resetForm();
  };

  return (
    <div className={s.form_box}>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <Field className={s.input} type="text" name="name" />
          <ErrorMessage name="name" component="div" className={s.error} />
          <Field className={s.input} type="text" name="number" />
          <ErrorMessage name="number" component="div" className={s.error} />
          <button className={s.btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

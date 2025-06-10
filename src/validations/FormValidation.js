import * as Yup from "yup";
const FormValidation = Yup.object().shape({
  firstName: Yup.string().required("Please type your first name"),
  lastName: Yup.string().required("Please type your last name"),
  email: Yup.string().required("Please type your email"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required(`Please type phone number`),
  message: Yup.string().required("Please type your message"),
});
export default FormValidation;

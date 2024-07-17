import {} from "formik"
import * as Yup from "yup";

import Input from "components/Input/Input";
import Button from "components/Button/Button";

import { ContactUsWrapper, Title, InputsContainer } from "./styles";
import { CONTUCT_US_NAMES } from "./types";
import { useFormik } from "formik";

function ContactUsForm() {

// Валидация
const validationSchema = Yup.object().shape({
    [CONTUCT_US_NAMES.FULLNAME]: Yup.string()
    .required("Name field is required")
    .min(3, "Full name should contain minimum 3 characters")
    .max(50, "Full name should contain maximum 50 characters"),
    [CONTUCT_US_NAMES.PHONE]: Yup.string()
      .required("Phone number field is required")
      .min(4, "Phone number should contain minimum 4 characters")
      .max(20, "Phone number should contain maximum 20 characters"),
      [CONTUCT_US_NAMES.EMAIL]: Yup.string()
      .min(6, "Email should contain minimum 6 characters")
      .max(60, "Email should contain maximum 60 characters"),
  });

  const formik = useFormik({
    initialValues: {
      [CONTUCT_US_NAMES.FULLNAME]: "",
      [CONTUCT_US_NAMES.PHONE]: "",
      [CONTUCT_US_NAMES.EMAIL]: "",
    },
    validationSchema: validationSchema,
    
    validateOnMount: false,
    validateOnChange: false,
    onSubmit: async (values, helpers) => {
      console.log(values);
         },
  });

  return (
    <ContactUsWrapper onSubmit={formik.handleSubmit}>
      <Title>Contact us</Title>
      <InputsContainer>
        <Input
          id="fullName-id"
          name={CONTUCT_US_NAMES.FULLNAME}
          type="text" 
          placeholder="Your full name"
          label="Full name"
          value={formik.values[CONTUCT_US_NAMES.FULLNAME]}
          onChange={formik.handleChange}
          error={formik.errors[CONTUCT_US_NAMES.FULLNAME]}
        />
        <Input
          id="Phone-id"
          name={CONTUCT_US_NAMES.PHONE}
          type="text"
          placeholder="Your phone number"
          label="Phone"
          value={formik.values[CONTUCT_US_NAMES.PHONE]}
          onChange={formik.handleChange}
          error={formik.errors[CONTUCT_US_NAMES.PHONE]}
        />

        <Input
          id="email-id"
          name={CONTUCT_US_NAMES.EMAIL}
          type="text"
          placeholder="Your email"
          label="Email"
          value={formik.values[CONTUCT_US_NAMES.EMAIL]}
          onChange={formik.handleChange}
          error={formik.errors[CONTUCT_US_NAMES.EMAIL]}
        />
      </InputsContainer>
      <Button disabled={formik.isSubmitting} name="SEND REQUEST" type="submit" />
    </ContactUsWrapper>
  );
}

export default ContactUsForm;
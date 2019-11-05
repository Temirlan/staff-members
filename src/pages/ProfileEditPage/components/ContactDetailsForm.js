import React from "react";
import { Form, Field } from "react-final-form";

import Input from "../../../components/form-fields/Input";
import Button from "../../../components/Button/Button";

const ContactDetailsForm = props => {
  const {
    onSubmit,
    staffMember: { email, phoneNumber, address, postcode, country, county }
  } = props;

  return (
    <>
      <Form
        onSubmit={onSubmit}
        initialValues={{
          email,
          phoneNumber,
          address,
          postcode,
          country,
          county
        }}
        render={({ handleSubmit, submitting }) => (
          <>
            <Field textLabel="Email" name="email" component={Input} />
            <Field
              textLabel="Phone number"
              name="phoneNumber"
              component={Input}
            />
            <Field textLabel="Address" name="address" component={Input} />
            <Field textLabel="Postcode" name="postcode" component={Input} />
            <Field textLabel="Country" name="country" component={Input} />
            <Field textLabel="County" name="county" component={Input} />

            <div className="boss-form__field boss-form__field_justify_end">
              <Button disabled={submitting} onClick={handleSubmit} type="form">
                Save
              </Button>
            </div>
          </>
        )}
      />
    </>
  );
};

export default ContactDetailsForm;

import React from "react";
import classes from "./styles.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { number, object } from "yup";

const schema = object().shape({
  firstOctetCard: number().max(4).min(1).default(undefined),
});

export const Payment = () => {
  return (
    <div className={classes.paymentWrap}>
      <div className={classes.paymentTittle}>
        <p>Оплатить</p>
      </div>
      <div className={classes.paymentCardInfo}>
        <p>visa</p>
      </div>
      <div className={classes.paymentFormikWrap}>
        <Formik
          validationSchema={schema}
          initialValues={{ schema.default() }}
          className={classes.paymentFormicStyle}
        >
          <Form className={classes.paymentFormWrap}>
            <Field
              type="text"
              id="firstOctetCard"
              name="firstOctetCard"
              className={classes.paymentOctet}
            />
            <ErrorMessage
              name="firstOctetCard"
              component="div"
              className={classes.paymentOctetErrorMessage}
            />

            <button type="submit">Оплатить</button>
            <button type="reset">Сбросить</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

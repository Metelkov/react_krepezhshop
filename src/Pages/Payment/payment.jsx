import React, { useState } from "react";
import classes from "./styles.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { number, object } from "yup";
import { InputMask, useMask } from "@react-input/mask";
import { calculateCardType } from "./cardWatch";
import { calculateBank } from "./bankWatch";

const schema = object().shape({
  firstOctetCard: number().default(undefined),
});

export const Payment = () => {
  const inputRef = useMask({
    mask: "____ ____ ____ ____",
    replacement: { _: /\d/ },
  });

  const [cardType, setCardType] = useState("");
  const [bankType, setBankType] = useState("");

  return (
    <div className={classes.paymentWrap}>
      <div className={classes.paymentTittle}>
        <p>Оплатить</p>
      </div>
      <div id="cardIdentificatorShow" className={classes.paymentCardInfo}>
        <div className={classes.paymentCardInfoCredentals}>
          <span>{cardType}</span>
        </div>

        <div className={classes.paymentCardInfoCredentals}>
          <span>{bankType}</span>
        </div>
      </div>
      <div className={classes.paymentFormikWrap}>
        <Formik
          validationSchema={schema}
          initialValues={schema.default()}
          className={classes.paymentFormicStyle}
          onSubmit={(valOfInput) => {
            // console.log(valOfInput);
          }}
        >
          <Form className={classes.paymentFormWrap}>
            <Field
              type="text"
              id="firstOctetCard"
              name="firstOctetCard"
              className={classes.paymentOctet}
            >
              {({ field, form: { setError }, meta }) => {
                return (
                  <div>
                    {/* <div>{cardType}</div> */}
                    <input
                      {...field}
                      ref={inputRef}
                      onChange={(e) => {
                        const cardType = calculateCardType(e.target.value);
                        setCardType(cardType);

                        const bankType = calculateBank(e.target.value);
                        setBankType(bankType);

                        // if (e.target.value === "4242") {
                        //   alert("visa");
                        // } else {
                        //   field.onChange(e);
                        // }
                      }}
                    />
                    {meta.touched && meta.error && (
                      <div className="error">{meta.error}</div>
                    )}
                  </div>
                );
              }}
            </Field>
            <ErrorMessage
              name="firstOctetCard"
              component="div"
              className={classes.paymentOctetErrorMessage}
            />

            <button id="submitbtn" type="submit">
              Оплатить
            </button>
            <button type="reset">Сбросить</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

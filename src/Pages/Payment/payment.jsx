import React, { useState } from "react";
import classes from "./styles.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { number, object } from "yup";
import { InputMask, useMask } from "@react-input/mask";
import { calculateCardType } from "./cardWatch";
import { calculateBank } from "./bankWatch";
import { algorithmLun } from "./lun";

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
  const [cardDigit, setCardDigit] = useState("");
  const [formReset, setFormReset] = useState("");
  const [enableBtn, setEnableBtn] = useState("");

  const formResetFunc = (e) => {
    e.preventDefault();
    setValue("");
  };

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
        <div className={classes.paymentCardInfoCredentals}>
          <span>{cardDigit}</span>
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
          <Form className={classes.paymentFormWrap} name="paymentForm">
            <Field
              type="text"
              id="firstOctetCard"
              name="firstOctetCard"
              className={classes.paymentOctet}
            >
              {({ field, form: { setError }, meta }) => {
                return (
                  <div>
                    <input
                      {...field}
                      ref={inputRef}
                      onChange={(e) => {
                        const cardType = calculateCardType(e.target.value);
                        setCardType(cardType);

                        const bankType = calculateBank(e.target.value);
                        setBankType(bankType);

                        const cardDigit = algorithmLun(e.target.value);
                        setCardDigit(cardDigit);

                        //
                        //
                        //
                      }}
                      className={classes.inputForm}
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

            <button
              id="submitbtn"
              type="submit"
              disabled={disabledBtnForm}
              className={`${classes.btnForm} ${classes.disableEnable}`}
            >
              Оплатить
            </button>
            <button
              type="reset"
              className={classes.btnForm}
              onClick={formResetFunc}
            >
              Сбросить
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

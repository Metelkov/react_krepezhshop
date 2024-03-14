import React, { useState } from "react";
import classes from "./styles.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { number, object } from "yup";
import { InputMask, useMask } from "@react-input/mask";
import { calculateCardType } from "./cardWatch";

const schema = object().shape({
  firstOctetCard: number().default(undefined),
});

export const Payment = () => {
  const inputRef = useMask({
    mask: "____ ____ ____ ____",
    replacement: { _: /\d/ },
  });

  const [cardType, setCardType] = useState("");

  return (
    <div className={classes.paymentWrap}>
      <div className={classes.paymentTittle}>
        <p>Оплатить</p>
      </div>
      <div id="cardIdentificatorShow" className={classes.paymentCardInfo}>
        <p></p>
      </div>
      <div className={classes.paymentFormikWrap}>
        <Formik
          validationSchema={schema}
          initialValues={schema.default()}
          className={classes.paymentFormicStyle}
          onSubmit={(valOfInput) => {
            // console.log(valOfInput);
          }}
          //   const valOfInputToStr = Object.values(valOfInput) //вероятно нужно куда то вынести и тут не писать и вообще создать массивы по которым будут определяться значения
          //     .join() //оказалось - переписал по своему
          //     .replaceAll(" ", "");
          //   if (valOfInputToStr.length != 16) {
          //     console.log("не все цифры введены");
          //     document.getElementById("submitbtn").disabled = true; //а обратно не вернем - нужно отслеживать в реальн времени
          //   }

          //   if (valOfInputToStr.substr(1, 1) == 1 || 2) {
          //     console.log("avia");
          //     const div = document.createElement("div"); //название карты дуюдируется, не стирается при нажатие на Оплатить
          //     div.innerHTML = "Avia";
          //     document.getElementById("cardIdentificatorShow").append(div);
          //   }
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
                    <div>{cardType}</div>
                    <input
                      {...field}
                      ref={inputRef}
                      onChange={(e) => {
                        const cardType = calculateCardType(e.target.value);
                        setCardType(cardType);

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

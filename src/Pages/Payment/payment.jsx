import React from "react";
import classes from "./styles.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { number, object } from "yup";
import { InputMask, useMask } from "@react-input/mask";

const schema = object().shape({
  firstOctetCard: number().default(undefined),
});

export const Payment = () => {
  const inputRef = useMask({
    mask: "____ ____ ____ ____",
    replacement: { _: /\d/ },
  });

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
            const valOfInputToStr = Object.values(valOfInput) //вероятно нужно куда то вынести и тут не писать и вообще создать массивы по которым будут определяться значения
              .join() //оказалось - переписал по своему
              .replaceAll(" ", "");
            if (valOfInputToStr.length != 16) {
              console.log("не все цифры введены");
              document.getElementById("submitbtn").disabled = true; //а обратно не вернем - нужно отслеживать в реальн времени
            }

            if (valOfInputToStr.substr(1, 1) == 1 || 2) {
              console.log("avia");
              const div = document.createElement("div"); //название карты дуюдируется, не стирается при нажатие на Оплатить
              div.innerHTML = "Avia";
              document.getElementById("cardIdentificatorShow").append(div);
            }
            if (valOfInputToStr.substr(1, 1) == 3) {
              const div = document.createElement("div");
              div.innerHTML = "American Express";
              document.getElementById("cardIdentificatorShow").append(div);
              console.log("American Express");
            }
            if (valOfInputToStr.substr(1, 1) == 4) {
              const div = document.createElement("div");
              div.innerHTML = "visa";
              document.getElementById("cardIdentificatorShow").append(div);
              console.log("visa");
            }
            // console.log(valOfInputToStr);
          }}
        >
          <Form className={classes.paymentFormWrap}>
            <Field
              innerRef={inputRef}
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

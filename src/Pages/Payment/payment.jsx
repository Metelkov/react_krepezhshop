import React from "react";
import classes from './styles.module.css'
import { Formik } from "formik";

export const Payment = () => {
    return (
        <div className={classes.paymentWrap}>
            <div className={classes.paymentTittle}>

            </div>
            <div className={classes.paymentCardInfo}>

            </div>
            <Formik className={classes.paymentFormicStyle}>
                <Form>
                    <Field type="text" id="firstOctetCard" name="firstOctetCard" className={classes.paymentOctet} />
                    <ErrorMessage name="firstOctetCard" component="div" className={classes.paymentOctetErrorMessage} />

                    <Field type="text" id="secondOctetCard" name="secondOctetCard" className={classes.paymentOctet} />
                    <ErrorMessage name="secondOctetCard" component="div" className={classes.paymentOctetErrorMessage} />

                    <Field type="text" id="threeOctetCard" name="threeOctetCard" className={classes.paymentOctet} />
                    <ErrorMessage name="threeOctetCard" component="div" className={classes.paymentOctetErrorMessage} />

                    <Field type="text" id="quadOctetCard" name="quadOctetCard" className={classes.paymentOctet} />
                    <ErrorMessage name="quadOctetCard" component="div" className={classes.paymentOctetErrorMessage} />

                    <button type="submit">Оплатить</button>
                    <button type="reset">Сбросить</button>
                </Form>
            </Formik>

        </div>
    )
}
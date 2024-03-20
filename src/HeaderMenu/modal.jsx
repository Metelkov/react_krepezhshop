import React from "react";
import classes from "../HeaderMenu/styles.module.css";

export const ModalWind = () => {
  const modalContent = (
    <div className={classes.headerModal}>
      <h2 className={classes.headerModalTitle}>Авторизируйтесь</h2>

      <div className={classes.headerModalForm}>
        <Formik className={classes.paymentFormicStyle}>
          <Form>
            <p className={classes.paymentFormicLoginP}>Логин</p>
            <Field
              type="text"
              id="headerModalLogin"
              name="headerModalLogin"
              className={classes.headerModalLogin}
            />
            <ErrorMessage
              name="headerModalLogin"
              component="div"
              className={classes.headerModalLoginErrorMessage}
            />
            <p className={classes.paymentFormicLoginP}>Пароль</p>
            <Field
              type="text"
              id="headerModalPass"
              name="headerModalPass"
              className={classes.headerModalPass}
            />
            <ErrorMessage
              name="headerModalPass"
              component="div"
              className={classes.headerModalPassErrorMessage}
            />
            <div className={classes.modalFormBtnLocation}>
              <button className={classes.headerModalRegBtn} type="submit">
                Войти
              </button>
              <button className={classes.headerModalRegBtn} type="reset">
                Отмена
              </button>
            </div>
          </Form>
        </Formik>
      </div>

      <div className={classes.headerModalBottomButton}>
        <button className={classes.headerModalBtn}>Забыли пароль</button>
        <button className={classes.headerModalBtn}>Регистрация</button>
      </div>
      <div className={classes.headerModalBottomButton}>
        <button className={classes.headerModalBtn} onClick={closeModal}>
          Закрыть
        </button>
      </div>
    </div>
  );

  return modalContent;
};

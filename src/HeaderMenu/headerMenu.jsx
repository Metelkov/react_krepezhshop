import React from "react";
import classes from "../HeaderMenu/styles.module.css";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import Modal from "react-modal";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const HeaderMenu = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const modalContent = (
    <div className={classes.headerModal}>
      <h2 className={classes.headerModalTitle}>Авторизируйтесь</h2>

      <div className={classes.headerModalForm}>
        <Formik initialValues={{}} className={classes.paymentFormicStyle}>
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

  return (
    <div className={classes.headerMenu}>
      <div className={` ${classes.headerMenuAbout} ${classes.headerMenuLink}`}>
        {/* <NavLink target="_blank" to="/about">о компании</NavLink> */}
        <NavLink to="/about">о компании</NavLink>
      </div>
      <div className={` ${classes.headerMenuPrice} ${classes.headerMenuLink}`}>
        <p>
          <Link
            to="https://krep-komp.ru/service/krep-komp_price.xlsx"
            target="_blank"
            download
          >
            прайс-лист
          </Link>
        </p>
      </div>
      <div className={` ${classes.headerMenuPay} ${classes.headerMenuLink}`}>
        <NavLink to="/payment">оплата</NavLink>
      </div>
      <div
        className={` ${classes.headerMenuDelivery} ${classes.headerMenuLink}`}
      >
        <NavLink to="/stub">доставка</NavLink>
      </div>
      <div
        className={` ${classes.headerMenuContacts} ${classes.headerMenuLink}`}
      >
        <NavLink to="/Contacts">контакты</NavLink>
      </div>
      <div
        className={` ${classes.headerMenuRegister} ${classes.headerMenuLink}`}
      >
        <div>
          <div
            className={classes.headerModalWrapMenuString}
            onClick={openModal}
          >
            Вход / регистрация
          </div>
          <Modal
            className={classes.modalMain}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
          >
            {modalContent}
          </Modal>
        </div>
      </div>
      <div className={classes.headerMenuTel}>
        <div className={classes.headerMenuTelPic}></div>
        <div className={classes.headerMenuTelTel}>+7 (111) 222-33-44</div>
      </div>
    </div>
  );
};

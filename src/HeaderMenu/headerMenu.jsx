import React from "react";
import classes from "../HeaderMenu/styles.module.css";
import { NavLink } from "react-router-dom";
// import { price } from "../Pages/price/price.odt"
import { useState } from 'react';
import Modal from 'react-modal';
import { Formik, Form, Field, ErrorMessage } from "formik";


export const HeaderMenu = () => {

  // let pathToFile = "../Pages/price/price.odt";
  //     downloadFile(file) {
  //     location.href = pathToFile + file;
  // };


  const download = async () => {
    console.log('asdasdsd')
    const response = await fetch('../Pages/price/price.odt', {
        method: 'GET',
        headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest',},
        credentials: 'include',
    });
    const content = await response.json();
    console.log(content)
};


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
      <Formik className={classes.paymentFormicStyle}>
        <Form>
          <p className={classes.paymentFormicLoginP}>Логин</p>
            <Field type="text" id="headerModalLogin" name="headerModalLogin" className={classes.headerModalLogin} />
            <ErrorMessage name="headerModalLogin" component="div" className={classes.headerModalLoginErrorMessage} />
          <p className={classes.paymentFormicLoginP}>Пароль</p>
            <Field type="text" id="headerModalPass" name="headerModalPass" className={classes.headerModalPass} />
            <ErrorMessage name="headerModalPass" component="div" className={classes.headerModalPassErrorMessage} />
             <div className={classes.modalFormBtnLocation}>
                <button className={classes.headerModalRegBtn} type="submit">Войти</button>
                <button className={classes.headerModalRegBtn} type="reset">Отмена</button>
             </div>
         </Form>
      </Formik>
  </div>

    <div className={classes.headerModalBottomButton}>
      <button className={classes.headerModalBtn}>Забыли пароль</button>
      <button className={classes.headerModalBtn}>Регистрация</button>
    </div>
    <div className={classes.headerModalBottomButton}>
      <button className ={classes.headerModalBtn} onClick={closeModal}>Закрыть</button>
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


        <p><a href="../Pages/price/price.odt" target="_blank">прайс-лист</a></p>
        {/* <a id="myLink" onclick="alert('link click');">LINK 1</a> */}
        <a id="myLink" onClick={() => download()}> &nbsp;&nbsp;LINK___1 </a>

        
        {/* <Link to="/price">прайс-лист</Link> */}


      </div>
      <div className={` ${classes.headerMenuPay} ${classes.headerMenuLink}`}>
        {/* <p><a href="#">оплата</a></p> */}
        <NavLink to="/payment">оплата</NavLink>
      </div>
      <div className={` ${classes.headerMenuDelivery} ${classes.headerMenuLink}`}>
        {/* <p><a href="#">доставка</a></p> */}
        <NavLink to='/stub'>доставка</NavLink>
      </div>
      <div className={` ${classes.headerMenuContacts} ${classes.headerMenuLink}`}>
        {/* <p><a href="#">контакты</a></p> */}
        <NavLink to='/Contacts'>контакты</NavLink>
      </div>
      <div className={` ${classes.headerMenuRegister} ${classes.headerMenuLink}`}>
        {/* <p><a href="#">вход </a></p> */}
        <div>
          <div className={classes.headerModalWrapMenuString} onClick={openModal}>Вход / регистрация</div>
          {/* <button onClick={openModal}>Вход / регистрация</button> */}
          <Modal className={classes.modalMain} isOpen={modalIsOpen} onRequestClose={closeModal}>
            {modalContent}
          </Modal>
       </div>
        {/* <p className={classes.headerMenuRegisterSpace}>{' / '}</p>
        <p><a href="#">регистрация</a></p> */}
      </div>
      <div className={classes.headerMenuTel}>
        <div className={classes.headerMenuTelPic}>
        </div>
        <div className={classes.headerMenuTelTel}>
          +7 (111) 222-33-44
        </div>
      </div>
    </div>
  );
}
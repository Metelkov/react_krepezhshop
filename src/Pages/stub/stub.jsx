import React from "react";
import classes from "../stub/styles.module.css";


export const StubPage = () => {
    return (
        <div className={classes.stubPageWrapper}>
            <div className={classes.stubHeader}>
                <h1>Это страница - заглушка.</h1>
            </div>
            <div className={classes.stubBodyText}>
                <p>Создана специально, на нее переадресовываются не сделаные страницы. В свою очередь страницыне сделану - т.к. 
                   это учебный проект и наполнять все, все, все стра требуется время. Основные страницы - заполнены и доступны
                   из меню
                </p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis neque cum voluptatem provident ducimus, tempore libero illum delectus saepe necessitatibus atque nemo. Explicabo rem sapiente, molestias ab doloribus dolorum unde enim cumque beatae sed dolores, deserunt repudiandae accusantium praesentium, quo veritatis delectus possimus? Nulla obcaecati suscipit ipsum. Illo nam consequuntur harum. Consectetur deserunt enim illum eveniet sapiente numquam accusantium nihil sit ea rem omnis voluptatibus, aliquid ex a odio in voluptate eius non, nisi aut quam vitae autem cupiditate iusto. Praesentium ratione doloribus, consequatur ex quod totam. Quam quos error, numquam corporis deleniti dicta odit possimus? Fugit quis consequuntur repellendus?</p>
            </div>
        </div>
        
    )
};
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
            </div>
        </div>
        
    )
};
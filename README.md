
роутинг:
создаем отдельную папку router, в ней два файла router.jsx и routes.jsx
в router.jsx пишем: 

import { createBrowserRouter } from "react-router-dom";
import { Root } from '../Pages/root/root';
import { MainPage } from "../Pages/Main/mainPage";
import { Fresh } from "../Pages/fresh/fresh";
import { ROUTES } from "./routes"

export const router = createBrowserRouter ([
    {
        path: ROUTES.Root,
        element: <Root />,
        children: [
            //{index: true, element: <div>Roomjjjt</div>},
            {index: true, element: <MainPage />},
            {
                path: ROUTES.fresh,
                element: <Fresh />,
            },
        ],
    },
]);


главный элемент root, остальные (вложенные) children которые мы будем использовать в pagewrapper. и этот root включает в себя страницу,
 которая должна отображаться, в нашем случае MainPage


в routes.jsx просто константы на наши пути
export const ROUTES = {
    root: '/',
    fresh: '/fresh',
}


создаем папку root в ней файл root.jsx - тут просто надо запомнить

import { ReactNode } from "react";                  --не используется (пока)
import { PageWrapper } from '../../PageWrapper/pagewrapper';
import { Outlet } from "react-router-dom";

export const Root =() => {
    return <PageWrapper><Outlet/>  </PageWrapper>
}

Outlet - библиотечнай функция реакта, она нужна, чтобы роутер работал



создаем папку pagewrapper и там файл pagewrapper.jsx  в него подключаем
наши роутеры - страницы, которые должны заменяться храняться в children,
а которые подключаются (хедер, футер) просто подключаются. стили так же
прописывать для этого файла (центрирование и пр)


import React from "react";
import { Header } from "../Header/header";
import { HeaderMenu } from "../HeaderMenu/headerMenu";
import { Footer } from "../Footer/footer";

export const PageWrapper = ({children}) => {
    return (
        <>
        <HeaderMenu />
        <Header />
        {children}
        <Footer />
        </>
    )
}



1.css для pagewrapper

2. роутинг для страниц с названием из больших букв - AboutPage
соблюдать ли регистр и как написать кратко, например About

3. константа path: ROUTES.about - еще раз рассказать 



------ ниже не нужно -------
3. и еще ошибка, но тут наверно с конфигом

One of your dependencies, babel-preset-react-app, is importing the
"@babel/plugin-proposal-private-property-in-object" package without
declaring it in its dependencies. This is currently working because
"@babel/plugin-proposal-private-property-in-object" is already in your
node_modules folder for unrelated reasons, but it may break at any time.

babel-preset-react-app is part of the create-react-app project, which
is not maintianed anymore. It is thus unlikely that this bug will
ever be fixed. Add "@babel/plugin-proposal-private-property-in-object" to
your devDependencies to work around this error. This will make this message
go away.
  

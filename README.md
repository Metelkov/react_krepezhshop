https://centerkrep.ru/

1. роутер "не взлетает" - оибка в путях и наверно, что я  пишу на jsx (к сожалению)
убрал {} - ругался в файле router.jsx - ошибка ушла, но есть еще 3 ошибки.
но если в  router.jsx переписать с большой буквыRoot
import { RootComponent } from '../Pages/root/Root';
то ошибки останется 2  - что то идет не так

2. по структуре - правильно ли я понял?
роутер:
для App.js вроде все понятно, есть Роутер провайдер который ссылается на наш
файл Роутер

import React, { Component } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router'

function App() {
  return (
    <RouterProvider router={router} />
  );
};

export default App;



дальше нужна структура:
папка router - в ней два файла - router  - сжержит страницы роутера и routes - константы для роутера (пути)

папка root - это первая стр которая загружается

папка pagewrapper  - тут не понял - в нее мы оборачиваем всЁ ?? и она содержит возврат фрагмента куакта <> </> иначе будет ошибка
export const PageWrapper = () => {
    return (
        <>
        <HeaderMenu />
        <Header />
        <Root />
        <Footer />
        </>
    )
}

и я получаю ошибку, что не найдено:


(50:5) autoprefixer: end value has mixed support, consider using flex-end instead

ERROR in ./src/Pages/root/root.jsx 5:0-31
Module not found: Error: Empty dependency (no request)

ERROR in ./src/router/router.jsx 11:32-45
export 'RootComponent' (imported as 'RootComponent') was not found in '../Pages/root/root' (possible exports: Root)

ERROR in ./src/router/router.jsx 18:32-41
export 'FreshPage' (imported as 'FreshPage') was not found in '../Pages/fresh/fresh' (possible exports: Fresh)

webpack compiled with 3 errors and 1 warning



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
  
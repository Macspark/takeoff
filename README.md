Версия node = v16.14.2

Как запустить проект?

1. Скачать папку с проектом с Гитхаба и распаковать её.

2. Сначала нужно открыть консоль от имени администратора и запустить сервер командой: json-server --watch db.json
   * Следует убедиться, что сервер запущен на http://localhost:3000/

3. Открыть вторую консоль в папке проекта и запустить команду: npm i

4. После загрузки всех модулей запустить команду: npm start
Так как порт :3000 уже занят, необходимо согласиться на запуск проекта с другого порта (:3001)
Браузер должен открыться самостоятельно, но если этого не произошло, нужно открыть адрес самостоятельно: http://localhost:3001/


О проекте:

1. Проект реализован практически без CSS.
2. Чтобы залогиниться, достаточно использовать любую комбинацию почты + пароля.
3. Реализована возможность добавлять, редактировать и удалять контакты из списка.

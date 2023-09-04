Тестовое задание для frontend разработчика (ReactJS).
1. Данное тестовое задание позволит оценить ваши навыки в умении искать нужную информацию, быстро изучать сторонние библиотеки, создавать работоспособное web-приложение согласно требованиям описанным в Техническом Задании с учетом правильного построения логики и максимальной оптимизации кода.
2. Для выполнения тестового задания вы можете использовать любые инструменты разработки, включая нейронные сети, однако вы должны полностью понимать как работает ваш код и ответить на любые вопросы проверяющего.
3. Ваш код должен быть удобочитаемый и должен быть понятен для других разработчиков без лишних комментариев в коде, однако при выполнении задания руководствуйтесь принципом «Работающий продукт важнее исчерпывающей документации».
4. Дополнительно будет оцениваться прогнозирование и предотвращение возможных ошибок вашего приложения связанных с неправильной пользовательской эксплуатацией (например пользователь изменит url на несуществующий).

Техническое задание
Необходимо разработать мультиязычное многостраничное ReactJS приложение.

1. Приложение должно иметь 3 страницы «home», «about», «info». Роутинг должен выглядеть следующим образом:
   /{ISO_код_локали}/ - страница home (главная страница)
   /{ISO_код_локали}/about/ - страница about
   /{ISO_код_локали}/info/ - страница info
   (например http://example.com/en/about/)

2. Приложение получает список поддерживаемых языков с сервера https://test012.lagutin.com/api/lnglist/  (GET запрос возвращает JSON, со списком локалей, где установлена локаль по умолчанию).

3. При переходе в корень «/» (если язык в url не задан) приложение определяет текущий язык пользовательского интерфейса браузера и «редиректит» в соответствующую локаль, если локаль не найдена — используется локаль по умолчанию.

4. В момент выбора локали, приложение получает статичные данные интерфейса на конкретном языке с сервера https://test012.lagutin.com/api/lng/{ISO_код_локали}/ (GET запрос возвращает JSON, с переводом «Язык», «Заголовок» и «Текст» на конкретный язык, например если выполнить https://test012.lagutin.com/api/lng/en/ то мы получим английскую версию «language», «title» и «text»).

5. Приложение получает контент для каждой страницы с сервера (GET запрос возвращает JSON содержащий заголовок, текст и начальное значение счетчика)
   https://test012.lagutin.com/api/{ISO_код_локали}/home/
   https://test012.lagutin.com/api/{ISO_код_локали}/about/
   https://test012.lagutin.com/api/{ISO_код_локали}/info/

6. Страница приложения должна иметь элементы дизайна material ui или bootstrap (на ваш выбор). Страница приложения должна иметь шапку, где происходит выбор языка и рабочую область, в которую выводятся демонстрационные данные.


7. В приложении должна быть предусмотрена страница 404 (страница не найдена) и 500 (ошибка сервера, если api с языками или контентом недоступно).

8. На каждой странице приложения «home», «about», «info» под контентом должен выводиться счетчик, начальное значение можно получить через API, а так же 2 кнопки «-» и «+», которые уменьшают или увеличивают значение счетчика на одну единицу.

9. Значение счетчика не должно сбрасываться при переходе между страницами и локалями, исключение — перезагрузка приложения. При этом контент, который выводится над счетчиком должен запрашиваться с сервера в момент открытия страницы.

Подсказки:
Используйте хуки useState, useEffect и т. д.
Присмотритесь к фреймворку i18next
# Crypto Watcher
Приложение, которое позволяет отслеживать информацию о последних сделках по продаже/обмену криптовалюты на бирже

***Пометка для ревьюера - не работают запросы в production режиме. Не получилось решить вопрос с проксированием из localhost в cryptowatch api.***

## Запуск (dev)

* npm ci
* npm run dev
* перейти на localhost:3000

## Запуск (prod)
* Docker - npm run docker:prod:build:image && npm run docker:prod:run:container
* NodeJS - node server (не до конца подготовленный для production режима, использовал для пробы решения проблемы проксирования)


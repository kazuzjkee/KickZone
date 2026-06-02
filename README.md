# KickZone — Интернет-магазин кроссовок

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23f7df1e.svg?style=for-the-badge&logo=javascript&logoColor=black)

🛒 **KickZone** — это простой интернет-магазин кроссовок, созданный с использованием React.  
Проект позволяет пользователям просматривать товары, добавлять их в корзину, оформлять заказы и получать уведомления через Telegram.

---

## ✨ Функционал

- [x] Каталог товаров подключаемый через JSON
- [x] Поиск товаров
- [x] Добавление в корзину
- [x] Удаление из корзины
- [x] Выбор размера
- [x] Отправка заказа через Telegram-бота
- [x] Адаптивный дизайн

---

## 🔧 Используемые технологии

| Категория | Технология |
|----------|------------|
| **Фреймворк** | React + React Router |
| **Стили** | CSS Modules / SCSS |
| **Слайдер** | `react-slick` |
| **Телефон** | `react-phone-number-input` |
| **Telegram-бот** | `fetch()` к API Telegram |
| **Хостинг** | `Vercel` |

---

## 🚀 Как запустить проект локально

1. **Склонируйте репозиторий:**

    git clone https://github.com/kazuzjkee/KickZone.git 
    cd KickZone

2. **Установите зависимости:**

    npm install
    # или
    yarn install

3. **Создайте .env файл:**

    REACT_APP_TELEGRAM_BOT_TOKEN=ваш_токен
    REACT_APP_CHAT_ID=ваш_chat_id

4. **Запустите dev-сервер:**

    npm start
    # или
    yarn start    

5. Перейдите по адресу http://localhost:3000 в браузере. 

## 📝 Что можно улучшить в будущем? 

Поддержка пользовательских аккаунтов
Система отслеживания статуса заказов
Интеграция с платежными системами (Stripe, YooKassa)
Админ-панель для управления товарами
Хранение заказов в базе данных

## 💬 Обратная связь 

Если у вас есть идеи, предложения или вы нашли баг — напишите мне! 

📧 Почта: 
📱 Telegram: 
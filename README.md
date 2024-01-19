# Project Name

Level-2 Assignment-2.

## Features

- User Feature
- User Order Feature

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nurul287/Assignment-2.git

   ```

2. Run the following command

   ```bash
   cd Assignment-2
   npm install
   npm run start:dev

   ```

3. Make sure you add a **.env** file and includes **DATABASE_URL**, **PORT**, **BCRYPT_SALT_ROUNDS** and **NODE_ENV**

4. To fix any linting issue

   ```bash
   npm run lint:fix

   ```

5. To fix any formatting issue
   ```bash
   npm run prettier:fix
   ```

## API Endpoints

1. User Feature

- POST https://assignment-2-one-kohl.vercel.app/api/users: crate a user.
- GET https://assignment-2-one-kohl.vercel.app/api/users: get all the users.
- GET https://assignment-2-one-kohl.vercel.app/api/users/:userId: retrieve a user.
- PUT https://assignment-2-one-kohl.vercel.app/api/users:userId: update a user.
- DELETE https://assignment-2-one-kohl.vercel.app/api/users: delete a user.

2. User Order Feature

- PUT https://assignment-2-one-kohl.vercel.app/api/users/:userId/orders: add a new order.
- GET https://assignment-2-one-kohl.vercel.app/api/users/:userId/orders: get a user of all orders.
- GET https://assignment-2-one-kohl.vercel.app/api/users/:userId/orders/total-price: get total price of orders.

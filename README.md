# MERN App Client: Frontend for a MERN Stack Application using ReactJS

This repository contains the client-side code for the MERN stack application. It is built using ReactJS and communicates with the backend server to fetch and display data.

1. client

✔ [Link client](https://blog-mern-stack-duynghiadev.netlify.app/)

✔ [Website netlify](https://app.netlify.com/sites/blog-mern-stack-duynghiadev/overview)

2. server

✔ [Link server](https://blog-mern-stack-chi.vercel.app/posts)

✔ [Website vercel](https://vercel.com/duynghiadevs-projects/blog-mern-stack)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

   ```sh
   git clone https://github.com/duynghiadev/Blog-MERN-Stack
   cd client
   ```

2. **Install dependencies:**

   ```sh
   npm install or yarn
   ```

3. **Start the development server:**

   ```sh
   npm start or yarn dev
   ```

   The application will be running at `http://localhost:3000` or `http://localhost:5173`.

## Usage

Once the development server is running, you can access the application at `http://localhost:3000` or `http://localhost:5173`. Make sure the backend server is also running to fetch data properly.

## Features

- User authentication and authorization
- CRUD operations
- Responsive design
- State management with Redux (if applicable)
- API integration with the backend server

## Contributing

We welcome contributions to improve this project. To contribute, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Make your changes and commit them (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

# MERN App Server: Backend for a MERN Stack Application using Node.js and Express

This repository contains the server-side code for the MERN stack application. It is built using Node.js, Express, and MongoDB.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

   ```sh
   git clone https://github.com/duynghiadev/Blog-MERN-Stack
   cd server
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following variables:

   ```env
   MONGO_URI=your_mongo_uri
   JWT_SECRET=your_jwt_secret
   PORT=your_port
   ```

4. **Start the server:**

   ```sh
   npm start
   ```

   The server will be running at `http://localhost:your_port`.

## Usage

Ensure the MongoDB server is running and the `MONGO_URI` is correctly configured in the `.env` file. Start the server and it will be ready to handle requests.

## API Endpoints

Here are some of the main API endpoints:

🚀 Main features

- `GET /posts` - Get all information of user

🚀 Additional features to be added later

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login an existing user
- `GET /api/user` - Get user information (requires authentication)
- `POST /api/item` - Create a new item (requires authentication)
- `GET /api/items` - Get all items

## Features

- User authentication with JWT
- CRUD operations for items
- RESTful API design
- Error handling and validation

## Contributing

We welcome contributions to improve this project. To contribute, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Make your changes and commit them (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

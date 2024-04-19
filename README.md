
# MERN Calendar Events

## Introduction
The MERN Calendar Events project is a full-stack web application built using the MERN stack (MongoDB, Express.js, React, and Node.js). It provides a platform for users to manage their events in a calendar format.

## Features

- **Calendar View**: View events in a calendar format, making it easy to visualize upcoming events.
- **Create Events**: Users can create new events with details such as email, date, description.
- **Update and Delete Events**: Users can edit or delete existing events as needed. This functionality is currently implemented on the backend API server side. You can improve it on the frontend client side.
- **Authentication**: Secure user authentication system implemented using JSON Web Tokens (JWT).
- **Register, Login, and Logout**: Users can register for an account, log in, and log out.
- **User Activity Record**: Records user activity such as logins and logouts for audit purposes.

## Technologies Used

- **Frontend**: React.js, Material-UI, React Big Calendar
- **Backend**: Node.js (v20.12.0), Express.js (4.19.2)
- **Database**: MongoDB (7.0.8)
- **Authentication**: JSON Web Tokens (JWT)

## Installing & Running the Application

1. Clone the repository:

   ```bash
   git clone https://github.com/mukhlish32/mern-calendar
   ```
### Server
- Change into the server project directory:

   ```bash
   cd server
   ```

- Install dependencies:

   ```bash
   npm install
   ```

- Create a copy of the `.env.example` file and rename it to `.env`. Update the database configuration according to your setup in the `DB_SETTING` environment variable.

- Export the MongoDB database from the `database` folder. You can use Studio 3T to set up the database.

- Set up your email host in the `.env` file to enable email notifications.

- To start the server, run the following command:

   ```bash
   node server.js
   ```
- You can now access the api server side at http://localhost:5000.

### Client
- Change into the client project directory:

   ```bash
   cd client
   ```

- Install dependencies:

   ```bash
   npm install
   ```

- Create a copy of the `.env.example` file and rename it to `.env`.

- Export the MongoDB database from the `database` folder. You can use Studio 3T to set up the database.

- To start the server, run the following command:

   ```bash
   npm start
   ```
- You can now access the website at http://localhost:3000 in your web browser.


## Screenshot

- **Login Page**
- **Event Page**
- **Email Notification**

# Author
- Muhammad Mukhlish Syarif



<p align="center"><b> ~ THANK YOU ~ </b></p>

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

- **Frontend**: React.js (18.2.0), Material-UI, React Big Calendar
- **Backend**: Node.js (v20.12.0), Express.js (4.19.2)
- **Database**: MongoDB (7.0.8)
- **Authentication**: JSON Web Tokens (JWT)

## Installing & Running the Application
Clone the repository:

   ```bash
   git clone https://github.com/mukhlish32/mern-calendar
   ```
### Server
1. Change into the server project directory:

   ```bash
   cd server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a copy of the `.env.example` file and rename it to `.env`. Update the database configuration according to your setup in the `DB_SETTING` environment variable.

4. Export the MongoDB database from the `database` folder. You can use Studio 3T to set up the database.

5. Set up your email host in the `.env` file to enable email notifications.

6. To start the server, run the following command:

   ```bash
   node server.js
   ```
7. You can now access the api server side at http://localhost:5000.

### Client
1. Change into the client project directory:

   ```bash
   cd client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a copy of the `.env.example` file and rename it to `.env`.

4. Import the MongoDB database from the `database` folder. You can use Studio 3T to set up the database.

5. To start the server, run the following command:

   ```bash
   npm start
   ```
6. You can now access the website at http://localhost:3000 in your web browser.


## Screenshot

1. **Login Page**

![image](https://github.com/mukhlish32/mern-calendar/assets/85531251/2ca53c5f-5bb7-4210-b336-c2b578ced587)


3. **Register Page**

]![image](https://github.com/mukhlish32/mern-calendar/assets/85531251/5b612c10-fcfd-4702-90a3-efd528e0fc84)


4. **Event Page**

![image](https://github.com/mukhlish32/mern-calendar/assets/85531251/3bb9113a-a0e4-4210-8d87-98f6f28a7da6)


5. **Event Page: Create Modal**

![image](https://github.com/mukhlish32/mern-calendar/assets/85531251/f1c61072-aacd-4735-aaa1-e76ec1844f0f)


6. **Email Notification**

![image](https://github.com/mukhlish32/mern-calendar/assets/85531251/35708abf-7ae4-4dba-9ae2-435132d425a7)

# Author
- Muhammad Mukhlish Syarif



<p align="center"><b> ~ THANK YOU ~ </b></p>

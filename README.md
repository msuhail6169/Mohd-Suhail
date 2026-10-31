# Lab 1: Node.js and Express Server

**Deployment URL:** Pending deployment

## Student Details

| Field               | Details                                   |
| ------------------- | ----------------------------------------- |
| Name                | Mohd Suhail                               |
| Registration Number | 252U1R8061                                |
| Institution         | Aurora Deemed to be University            |
| Programme           | B.Tech – Computer Science and Engineering |
| Year / Term         | Year II – Term II                         |
| Subject             | Backend Development Fundamentals          |
| Faculty             | Chintakrindi Sai Siva Teja                |

## 1. Project Overview

This project demonstrates the fundamentals of Node.js and Express.js by creating a basic web server.

The implementation includes:

* A server using Node.js built-in HTTP module.
* An Express.js server.
* Three GET API endpoints.
* HTTP request and response handling.
* Custom 404 error handling.

## 2. Technologies Used

* Node.js
* Express.js
* JavaScript
* NPM
* Visual Studio Code

## 3. Project Structure

```text
Mohd-Suhail/
├── screenshots/
│   ├── home.png
│   ├── about.png
│   ├── time.png
│   └── not-found.png
├── app.js
├── server.js
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

## 4. Installation

Clone the repository:

```bash
git clone https://github.com/msuhail6169/Mohd-Suhail.git
```

Navigate into the project directory:

```bash
cd Mohd-Suhail
```

Install dependencies:

```bash
npm install
```

## 5. Execution Instructions

### Run the Node.js HTTP Server

```bash
node server.js
```

The server listens on port 3000.

### Run the Express Server

Stop the previous server using `Ctrl + C`.

Execute:

```bash
node app.js
```

The Express server runs at:

`http://localhost:3000`

## 6. API Documentation

### API 1: Home

* Method: GET
* Endpoint: `/`
* Status Code: 200 OK
* Description: Returns a welcome message.

**Response:**

```text
Welcome to Node.js and Express!
```

### API 2: About

* Method: GET
* Endpoint: `/about`
* Status Code: 200 OK
* Description: Returns student information in JSON format.

**Response:**

```json
{
  "name": "Mohd Suhail",
  "section": "CSE"
}
```

### API 3: Current Time

* Method: GET
* Endpoint: `/time`
* Status Code: 200 OK
* Description: Returns the current date and time.

### API 4: Unknown Route

* Method: GET
* Endpoint: `/contact`
* Status Code: 404 Not Found
* Description: Returns an error message for undefined routes.

**Response:**

```text
404 - Page Not Found
```

## 7. Screenshots

### Home Page

### About Page

### Current Date and Time

### 404 Error Handling

## 8. HTTP Status Codes

| Status Code | Description                                |
| ----------- | ------------------------------------------ |
| 200         | OK – Request successful                    |
| 404         | Not Found – Requested route does not exist |

## 9. Learning Outcomes

Through this lab, I learned:

1. How to initialize a Node.js project.
2. How to use NPM to install dependencies.
3. How to create an HTTP server using Node.js.
4. How to build an Express application.
5. How to define and manage GET routes.
6. How to handle requests and responses.
7. How to implement 404 error handling.
8. How to test API endpoints using a browser.

## 10. Notes

* Node.js HTTP module is used to create the basic server.
* Express.js simplifies server creation and routing.
* Port 3000 is used for local development.
* `node_modules` is excluded from the Git repository.
* The application can be started using `node app.js`.

## 11. Conclusion

The Node.js and Express.js server was successfully implemented and tested. The application handles three GET routes and provides appropriate HTTP status codes. This lab helped establish a practical understanding of backend development fundamentals.

## 12. Repository

GitHub Repository:

https://github.com/msuhail6169/Mohd-Suhail

# Task Manager

![](https://i.pinimg.com/736x/d9/f4/64/d9f464c125853ade7a3e02133bcd6759.jpg)

## Overview

This project is a simple task manager application focusing  exclusively on the backend using Next.js and MongoDB. It involves  creating robust RESTful APIs that facilitate essential CRUD (Create,  Read, Update, Delete) operations for managing tasks. Each task includes  key attributes such as a title and a description. Users will be able to  create new tasks, view existing ones, update task details, and delete  tasks as needed. We will utilize Postman to test our APIs and ensure  their functionality throughout the development process.

## Getting Started

To get started with this project, follow the steps below:

## Prerequisites

 Ensure you have [Node.js](https://nodejs.org/en/download) and npm (Node Package Manager) installed on your computer.

## Installation

 **Clone the Repository**:

```bash
git clone https://github.com/hezronokwach/nextjs-backend.git
cd nextjs-backend
```

**Install Dependencies**:
 Run the following command to install all necessary dependencies:

```bash
npm install
```

**Create Environment Variables**:
 Create a `.env` file in the root directory of your project. Add the following line to the `.env` file, replacing `<db_password>` with your actual MongoDB password:

```bash
MONGODB_URI=mongodb+srv://<username>:<db_password>@cluster0.tmgen.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
```

## Running the Application

To run your Next.js application, execute the following command in your terminal:

```bash
npm run dev
```

By default, the Next.js server will run on `http://localhost:3000`. You can view your application by opening this address in your web browser.

## Testing with Postman

You can use Postman to test the API endpoints for creating,  reading, updating, and deleting tasks. This will help ensure that all  functionalities are working as expected.

## Contribution

Contributions to this project are welcome! If you would like to  contribute, please feel free to fork the repository and submit a pull  request with your changes. You can also report issues or suggest  features by opening an issue in the GitHub repository.

## Contact

If you have any questions or need further assistance, feel free to reach out via email at [hezronokwach@gmail.com](mailto:hezronokwach@gmail.com).


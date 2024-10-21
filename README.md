# 📚 BookARC - Online Book-Store

This repository contains the source code for the full-stack web application developed for a online book store. The application is designed for browsing, searching, and purchasing books. It includes both a frontend built with Next.js and TypeScript, and a backend built with .NET 8, following the CQRS design pattern and microservice architecture. 

## 🗂 Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Features](#features)

## 📝 Overview

This project is a full-stack web application designed for an e-commerce platform to browse, search, and purchase books. The frontend is implemented using Next.js with TypeScript, and the backend is built with .NET 8, utilizing a microservice architecture with the CQRS design pattern.

## 💻 Technologies Used

### Frontend

- **Next.js 14**: React-based framework with server-side rendering and static site generation.
- **TypeScript**: Ensures type safety across the application.
- **Mantine UI**: React component library for UI development.
- **Zod**: Schema validation for form inputs.
- **Zustand**: State management solution for the application.
- **TanStack Table**: Library for handling and displaying data tables.

### Backend

- **.NET 8**: Backend framework focused on microservices.
- **CQRS Design Pattern**: Separates read and write operations for better scalability and maintainability.
- **Clean Architecture and DDD Principles**: Ensures the backend is well-structured and follows best practices.
- **Entity Framework with SQLite**: Database management.

## 🛠️ Setup Instructions

### Prerequisites

- **Node.js (v18 or later)**: Required for running the frontend.
- **.NET SDK (v8 or later)**: Required for running the backend.
- **SQLite**: Database used for persisting data.

### Frontend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ref-hub-practical-assessment.git
   cd ref-hub-practical-assessment/client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to http://localhost:3000 to view the application.

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd ../server
   ```
2. Restore .NET packages:
   ```bash
    dotnet restore
   ```
3. Apply database migrations (SQLite):
   ```bash
    cd BookStore.Infrastructure
    dotnet ef migrations add <migration message here>
    dotnet ef database update
   ```
4. Run the backend service:
   ```bash
    dotnet run --project BookStore.Api
   ```
5. Once the backend service is running, you can access the API documentation using Swagger by navigating to http://localhost:{port}/swagger in your browser. Replace {port} with the port number on which your backend service is running (usually 5000 or 5001 by default).

## ✨ Features

- **Books List Page**: Displays a list of books with search, filter, and pagination options.
- **Book Detail Page**: Detailed view of a selected book.
- **Shopping Cart**: Manage items in the cart and proceed to checkout.

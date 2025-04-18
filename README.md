# Frontend React Application

This is the frontend React application for interacting with the backend service that handles loyalty points. It allows users to sign in(only through Google), earn points, redeem points, and view their loyalty balance.

## Prerequisites

Before running the frontend, ensure you have the following:

1. **Node.js**: You need to have **Node.js** installed on your machine.
   - [Download Node.js](https://nodejs.org/) if you haven't installed it yet.
   
2. **Backend Service Running**: The backend service must be running locally or on a server. It provides the necessary endpoints for earning, redeeming, and checking loyalty points.
[loyalty-be repo](https://github.com/chamodisam/loyalty-be)

## Setup Instructions

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/chamodisam/loyalty-fe.git
```
### 2. Install Dependencies
Install all required dependencies using npm:

```bash
npm install
```
### 3. Run the Application
Once everything is set up, run the application using:

```bash
npm run dev
```
This will start the React development server on http://localhost:5175

### 4. Testing the Application
After the app is running, open your browser and go to http://localhost:5175. You should be able to:

Sign in using Google OAuth.

Earn points by interacting with the backend.

Redeem points.

View your loyalty balance.

### 5. Folder Structure
Here's an overview of the main folders and files in the project:

```bash
/src
  /components          # Reusable UI components
  /contexts            # Contexts for global state (like authentication)
  /pages               # Components for individual pages (SignUp, Earn, Redeem, History)
  /services            # Functions for interacting with the backend API
  /App.jsx             # Main component that sets up routing and layout
  /vite.config.js      # Vite configuration file
```
### 6. Key Features
Google OAuth: Users can log in via Google to authenticate their identity.

Earn Points: Allows users to earn points by interacting with the backend service.

Redeem Points: Allows users to redeem their loyalty points.

View Balance: Users can view their current loyalty balance.


### 7. Demo


https://github.com/user-attachments/assets/21be2687-e542-4751-8835-54b1387c3097




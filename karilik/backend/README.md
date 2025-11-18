# Karilik Backend Documentation

## Overview
Karilik is a Moroccan rental marketplace platform that connects property owners with potential renters. This backend documentation provides instructions for setting up and using the backend of the application.

## Features
- User authentication (registration and login)
- Property listing management (create, read, update, delete)
- Secure API endpoints with authentication middleware
- MongoDB integration for data storage

## Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- MongoDB (local or cloud instance)
- Docker (optional, for containerization)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd karilik/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the backend directory and add the following environment variables:
   ```
   PORT=5000
   MONGODB_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret>
   ```

### Running the Application
To start the backend server, run:
```
npm start
```
The server will run on `http://localhost:5000`.

### Docker Setup
To run the backend using Docker, you can build and run the Docker container:
```
docker-compose up --build
```

### API Endpoints
- **Authentication**
  - `POST /api/auth/register` - Register a new user
  - `POST /api/auth/login` - Login an existing user

- **Listings**
  - `GET /api/listings` - Get all listings
  - `POST /api/listings` - Create a new listing (requires authentication)
  - `PUT /api/listings/:id` - Update a listing (requires authentication)
  - `DELETE /api/listings/:id` - Delete a listing (requires authentication)

## Testing
To run tests for the authentication functionality, use:
```
npm test
```

## Contributing
Feel free to submit issues or pull requests to improve the project. 

## License
This project is licensed under the MIT License.
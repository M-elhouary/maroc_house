# Karilik - Moroccan Rental Marketplace Platform

## Overview
Karilik is a Moroccan rental marketplace platform that connects property owners with potential renters. This project aims to provide a seamless experience for users to browse, list, and manage rental properties.

## Features
- User authentication (registration and login)
- Property listing management
- Responsive design for mobile and desktop
- User-friendly interface for browsing and searching listings
- Secure backend with MongoDB for data storage

## Project Structure
The project is divided into two main parts: the backend and the frontend.

### Backend
- **Technologies**: Node.js, Express, MongoDB
- **Directory**: `backend/`
  - Contains the server-side logic, including API routes, controllers, models, and database configuration.

### Frontend
- **Technologies**: React, Vite
- **Directory**: `frontend/`
  - Contains the client-side application, including components, pages, and styles.

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- Docker (optional, for containerization)

### Backend Setup
1. Navigate to the `backend` directory:
   ```
   cd backend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the `backend` directory and configure your environment variables (e.g., MongoDB connection string).
4. Start the backend server:
   ```
   npm start
   ```

### Frontend Setup
1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the frontend application:
   ```
   npm run dev
   ```

## Docker Setup (Optional)
To run the application using Docker, you can use the provided `docker-compose.yml` file. Ensure Docker is installed and running, then execute:
```
docker-compose up
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgments
- Inspired by the need for a localized rental marketplace in Morocco.
- Thanks to the open-source community for their invaluable resources and tools.
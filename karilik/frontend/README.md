# Karilik Frontend Documentation

## Overview
Karilik is a Moroccan rental marketplace platform that connects property owners with potential renters. This frontend application is built using modern JavaScript (React) and is designed to provide a seamless user experience.

## Features
- **Responsive Design**: The application is fully responsive, ensuring a great experience on both mobile and desktop devices.
- **Homepage**: A user-friendly homepage that showcases featured listings and provides easy navigation.
- **Login Page**: A secure login page for users to access their accounts and manage their listings.
- **User Authentication**: Integration with the backend for user registration and login functionality.
- **Property Listings**: Users can view and search for available properties.

## Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd karilik/frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

### Running the Application
To start the development server, run:
```
npm run dev
```
The application will be available at `http://localhost:3000`.

### Building for Production
To create a production build, run:
```
npm run build
```
The production files will be generated in the `dist` folder.

## File Structure
- `src/`: Contains all the source code for the application.
  - `components/`: Reusable components such as Header, Footer, and ListingCard.
  - `pages/`: Contains the main pages of the application (Home and Login).
  - `hooks/`: Custom hooks for managing state and side effects.
  - `services/`: API service for making requests to the backend.
  - `styles/`: CSS files for styling the application.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
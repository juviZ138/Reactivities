# Reactivities

## Project Overview
Reactivities is a full-featured web application built using React for the frontend and .NET for the backend API. This project aims to provide a seamless user experience for managing activities in a collaborative environment.

## Tech Stack
- **Frontend**: React
- **Backend**: .NET Core API
- **Database**: SQL Server
- **State Management**: Redux
- **Styles**: CSS/SCSS

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js and npm installed
- .NET Core SDK installed
- SQL Server set up

## Getting Started
1. Clone the repository:
   ```bash
   git clone https://github.com/juviZ138/Reactivities.git
   cd Reactivities
   ```
2. Install frontend dependencies:
   ```bash
   cd client-app
   npm install
   ```
3. Set up the backend:
   - Create a new database in SQL Server
   - Update the connection string in the `appsettings.json` of the API folder.

## Running the App
To run the application:
1. Start the backend server:
   ```bash
   cd api
   dotnet run
   ```
2. Start the frontend:
   ```bash
   cd client-app
   npm start
   ```
3. Open your browser and navigate to `http://localhost:3000`.

## Configuration
To customize your development environment, modify the following files:
- `appsettings.Development.json` for the backend API configuration.
- `.env` file in the client-app for frontend variables.

## Tests
### Running Tests
To run tests, execute:
```bash
cd client-app
npm test
```

## Deployment
For deployment, ensure you build the client app:
```bash
cd client-app
npm run build
```
Then, deploy the backend API including the build folder.

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create your feature branch (git checkout -b feature/AmazingFeature).
3. Commit your changes (git commit -m 'Add some AmazingFeature').
4. Push to the branch (git push origin feature/AmazingFeature).
5. Open a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

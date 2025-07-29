# Housing Market Map Application

This project is a TypeScript-based web application that displays a map with interactive polygons representing different housing market statistics. When a polygon is clicked, a card format displays relevant statistics for that area.

## Project Structure

```
housing-market-map-app
├── src
│   ├── app.ts                     # Entry point of the application
│   ├── controllers
│   │   └── mapController.ts       # Handles map-related requests
│   ├── routes
│   │   └── mapRoutes.ts           # Sets up map-related routes
│   ├── services
│   │   └── housingStatsService.ts  # Processes and retrieves housing statistics
│   ├── models
│   │   └── polygon.ts              # Defines the structure of polygon data
│   ├── public
│   │   ├── index.html              # Main HTML file
│   │   ├── styles.css              # CSS styles for the application
│   │   └── main.js                 # Frontend logic for rendering the map
│   └── types
│       └── index.ts                # Type definitions used throughout the application
├── package.json                    # npm configuration file
├── tsconfig.json                   # TypeScript configuration file
└── README.md                       # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd housing-market-map-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## Usage

- Click on the polygons on the map to view housing market statistics in a card format.
- The application fetches data dynamically based on the selected polygon.

## Technologies Used

- TypeScript
- Express.js
- HTML/CSS
- JavaScript
- [Any additional libraries or frameworks used]

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
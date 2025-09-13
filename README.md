# Barcelona Property Market Map

A React-TypeScript application for visualizing housing market data across Barcelona districts with interactive maps and statistical analysis.

🔗 **Live Demo:** [housing.codecongrio.com](https://housing.codecongrio.com)

## Features
- Interactive SVG map of Barcelona districts
- Real-time housing price visualization
- Filter by property type (Residential/Commercial) and operation (Purchase/Rent/Room Rent)
- Statistical analysis with normal distribution curves
- Responsive design with modern UI

## Tech Stack
- React 19 + TypeScript
- Vite for build tooling
- Plotly.js for data visualization
- Modern CSS with responsive design

## Data Source
Property data scraped from Idealista using a custom Python scraper (separate repository).

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
   ```bash
   git clone <repository-url>
   cd house_view
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

## Usage

- **Interactive Map:** Click on any Barcelona district to view detailed housing statistics
- **Property Filters:** Switch between Residential and Commercial properties
- **Operation Filters:** Compare Purchase prices, Rent prices, and Room Rent prices
- **Dynamic Updates:** Info card updates automatically when changing filters or selecting districts
- **Statistical Charts:** View price distribution curves for selected districts

## Deployment

This application is deployed on Vercel at [housing.codecongrio.com](https://housing.codecongrio.com).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the [Apache License 2.0](./LICENSE).
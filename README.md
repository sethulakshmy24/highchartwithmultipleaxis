# Highcharts Multi Y-Axis Chart React Application

This is a React application that demonstrates a Highcharts multi Y-axis chart with four different series, each with its own Y-axis.

## Features

- Multi Y-axis chart with 4 different axes
- Zoom functionality (xy zoom type)
- Interactive tooltips
- Floating legend
- Responsive design

## Chart Configuration

The chart includes:
- **4 Y-axes**: Red (left), Black (left), Green (right), Blue (right)
- **4 Series**: Each series corresponds to a different Y-axis
- **Zoom functionality**: Users can zoom in/out on both X and Y axes
- **Shared tooltips**: Shows data from all series when hovering

## Installation

1. Install dependencies:
```bash
npm install
```

## Running the Application

To start the development server:

```bash
npm start
```

The application will open automatically in your browser at `http://localhost:3000`.

## Building for Production

To create a production build:

```bash
npm run build
```

## Technologies Used

- React 18
- TypeScript
- Highcharts
- Webpack
- HTML/CSS

## Project Structure

```
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── App.tsx            # Main React component with chart
│   └── index.tsx          # React entry point
├── package.json           # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── webpack.config.js     # Webpack configuration
└── README.md            # This file
``` 
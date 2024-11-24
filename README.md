# Xcentium Coding Exercise

This project is a simple web application built using React and Next.js, showcasing a movie listing and details functionality. The application fetches movie data from the OMDb API and displays it in a user-friendly interface.

## Features

- Responsive design that adapts to mobile and desktop views.
- Movie listing with clickable thumbnails that navigate to detailed movie pages.
- Breadcrumb navigation for easy navigation.
- WCAG compliant for accessibility.

## Technologies Used

- React
- Next.js
- SCSS for styling
- OMDb API for movie data

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/raashidkhan/xcentium-coding-exercise
   cd xcentium-coding-exercise
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Application

To start the local development server, run:

```bash
npm run dev
```

This will start the application in development mode, and you can access it at `http://localhost:3000`.

### Building for Production

To build the application and output minified distribution assets, run:

```bash
npm run build
```

This command compiles the application and generates optimized, minified assets in the `.next` directory.

### Starting the Production Server

After building the application, you can start the production server with:

```bash
npm start
```

This will serve the application in production mode.

## Linting

To run the linter and check for code quality, use:

```bash
npm run lint
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the OMDb API for providing movie data.
- Special thanks to the Next.js community for their excellent documentation and support.

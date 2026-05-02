# Hall of Chadness 🏋️‍♂️

> Your ultimate exercise database and workout companion

![HomePage](https://user-images.githubusercontent.com/56496945/175783218-78ecd690-34ec-49f2-9da7-798288f9e330.jpeg)

**Live Demo:** [hall-of-chadness.netlify.app](https://hall-of-chadness.netlify.app/)

## Features

- **Browse Exercises** - Explore a comprehensive database of exercises
- **Filter by Body Part** - Target specific muscle groups with ease
- **Search Functionality** - Find exercises by name, target muscle, or equipment
- **Exercise Details** - View step-by-step instructions with animated GIFs
- **Video Tutorials** - Watch YouTube videos for proper form
- **Similar Exercises** - Discover related exercises for the same target or equipment
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Pagination** - Navigate through large exercise sets effortlessly

## Tech Stack

- **React** - Frontend library
- **React Router** - Client-side routing
- **Material-UI** - Component library and styling
- **ExerciseDB API** - Exercise database via RapidAPI
- **YouTube Search API** - Video content via RapidAPI

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- A RapidAPI account with an API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/hall-of-chadness.git
   cd hall-of-chadness
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

   Open `.env` and add your RapidAPI key:
   ```
   REACT_APP_RAPIDAPI_KEY=your_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000`

## API Setup

1. Sign up at [RapidAPI](https://rapidapi.com)
2. Subscribe to [ExerciseDB API](https://rapidapi.com/justin-w-alphabetism-api-default/api/exercisedb1)
3. Subscribe to [YouTube Search and Download API](https://rapidapi.com/letscrape-6bRBa3QguO5/api/youtube-search-and-download)
4. Copy your API key and add it to your `.env` file

## Project Structure

```
hall-of-chadness/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── BodyPart.js
│   │   ├── Detail.js
│   │   ├── ExerciseCard.js
│   │   ├── Exercises.js
│   │   ├── ExerciseVideos.js
│   │   ├── Footer.js
│   │   ├── HeroBanner.js
│   │   ├── HorizontalScrollbar.js
│   │   ├── Loader.js
│   │   ├── Navbar.js
│   │   ├── SearchExercises.js
│   │   └── SimilarExercises.js
│   ├── pages/
│   │   ├── Home.js
│   │   └── ExerciseDetail.js
│   ├── utils/
│   │   └── api.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── .env.example
├── package.json
└── wrangler.toml
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Run development server |
| `npm run build` | Build for production |
| `npm test` | Run tests |

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is open source and available under the MIT License.

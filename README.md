
PROJECT LINK :  https://vineethkumar12.github.io/Moviesappwithalan/ 


![Screenshot 2024-06-25 201032](https://github.com/vineethkumar12/Moviesappwithalan/assets/104761399/d2c6f212-a8bd-4db0-a24c-1bc44eaa65bd)
![Screenshot 2024-06-25 201116](https://github.com/vineethkumar12/Moviesappwithalan/assets/104761399/42486dc4-58d5-4710-9c37-aed81918961f)
![Screenshot 2024-06-25 201231](https://github.com/vineethkumar12/Moviesappwithalan/assets/104761399/ad5022ac-ea2f-4a25-9814-7b18ac7931be)

Sure, I'll update the README to reflect that users manually click to open a movie rather than using voice commands for that specific action.

---

# Movies App with Alan AI

## Overview
The Movies App with Alan AI provides an intuitive and interactive way to browse and watch movie trailers using voice commands. This application integrates Alan AI for voice-based interaction and TMDB API to fetch the latest movie details, ensuring an immersive and user-friendly experience.

## Key Features
- **Alan AI Integration**: Use voice commands to browse movies and access information.
- **TMDB API Integration**: Fetch the latest movies and details directly from TMDB.
- **Seamless Trailer Watching**: Watch trailers within the app for an immersive experience.
- **User-Friendly Interface**: Navigate through movies effortlessly.
- **Responsive Design**: Experience seamless usage across devices.

## Technologies
- **Alan AI**: For voice-based interaction.
- **React JS**: For dynamic user interface.
- **CSS**: For visual appeal.
- **TMDB API**: For fetching movie data.

## Project Description
This application generates movies similar to Netflix using the voice assistant Alan AI. Users can interact with the app through voice commands to browse and fetch movie details. However, users need to manually click on a movie to open and watch its trailer.

## Installation
To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone (https://github.com/vineethkumar12/Moviesappwithalan.git)
   cd movies-app-with-alan-ai
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the application**:
   ```bash
   npm start
   ```

## Usage
1. **Voice Commands**: Interact with the app using voice commands provided by Alan AI.
2. **Browse Movies**: Use the user-friendly interface to browse through the latest movies fetched from TMDB.
3. **Manually Open Movies**: Click on any movie to open it and watch the trailer directly within the app.

## Alan AI Setup
1. **Create an Alan AI account**: Sign up at [Alan AI](https://alan.app/).
2. **Get Alan AI SDK Key**: Follow the instructions to get your SDK key.
3. **Configure Alan AI**: Add your SDK key to the project.

```javascript
import Alan from '@alan-ai/alan-sdk-web';

const alanBtnInstance = Alan({
    key: 'YOUR_ALAN_SDK_KEY',
    onCommand: (commandData) => {
        // Handle voice commands
    },
});
```

## TMDB API Setup
1. **Create a TMDB account**: Sign up at [TMDB](https://www.themoviedb.org/).
2. **Get TMDB API Key**: Follow the instructions to get your API key.
3. **Configure TMDB API**: Add your API key to the project.

```javascript
const API_KEY = 'YOUR_TMDB_API_KEY';

const fetchMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`);
    const data = await response.json();
    // Handle fetched movie data
};
```

## Contributing
If you wish to contribute to this project, feel free to fork the repository and submit a pull request.


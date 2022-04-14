# Assignment 1 - ReactJS app.

Name: Michael Hart

## Overview.

This repository includes a movie fan application, whereby data on movies including posters,reviews,dates,ratings etc. is pulled from The Movie Database API.

### Features.
[ A bullet-point list of the __new features__ you added to the Movies Fan app (and any modifications to existing features) .]

+ Added Trending Tab-showcasing the trending movies of the week.
+ Added Now Playing Tab-showcasing movies that are now playing.
+ Added Popular Tab-showcasing the popular movies.
+ Changed colour scheme from purple heading to red heading and blue icons to red icons, aswell as changing filter tab colour from yellow to blue.
+ Changed Delete icon.
+ Changed Favourite icon.
+ Added new material UI Tooltips to favourite, playlist and delete buttons.

## Setup requirements.

[ Outline any non-standard setup steps necessary to run your app locally after cloning the repo.]

+ Within the movies folder type

'npm install'

in the command line

+ Next type

'npm start'

in the command line to start the movies app within your browser.

## API endpoints.

[ List the __additional__ TMDB endpoints used, giving the description and pathname for each one.] 

+ Trending- Get the daily or weekly trending items. The daily trending list tracks items over the period of a day while items have a 24 hour half life. The weekly list tracks items over a 7 day period, with a 7 day half life. - /trending/{media_type}/{time_window}

+ Now Playing- Get a list of movies in theatres. This is a release type query that looks for all movies that have a release type of 2 or 3 within the specified date range. - /movie/now_playing

+ Popular- Get a list of the current popular movies on TMDB. This list updates daily. - /movie/popular

## Routing.

[ List the __new routes__ supported by your app and state the associated page.]

+ /trending/{media_type}/{time_window} - trendingMovies page
+ /movie/now_playing - nowplayingMovies page
+ /movie/popular - popularMovies page

[If relevant, state what aspects of your app are protected (i.e. require authentication) and what is public.]

## Independent learning (If relevant).

I included new material UI functionalities including the Tooltip within the cardIcons files particularly addToFavourites, addToPlaylist and removeFromFavourites
(https://mui.com/material-ui/react-tooltip/)


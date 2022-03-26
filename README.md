# Project - *Movies*

**Movies** is a movies app using the [The Movie Database API](https://developers.themoviedb.org/3).

Time spent: **HH** hours spent in total

## User Stories

The following **required** functionality is completed:

- [ ] User can view a list of movies currently playing in theaters. Poster images load asynchronously.  
        ===>Successfully, you can see it in the main page, you can change the list from upcoming movie to recently movie. IMG can load async.
- [ ] User can view movie details by tapping on a cell.
        ===>Successfully, in the main page and top rated you can click the button "See more detail".
- [ ] User sees loading state while waiting for the API.
        ===>Successfully, in the home page you can see the small spinner, it make us more comfotable while API loading.
- [ ] User sees an error message when there is a network error.
        ===>Successfully, i already added Error Boundary, it help us see info of the error instead the nasty error screen.
- [ ] User can pull to refresh the movie list.
        ===>Successfully.
- [ ] Simple responsive.
        ===>Successfully.

The following **optional** features are implemented:

- [ ] Add a tab bar for **Now Playing** and **Top Rated** movies.
        ===>Successfully. you can see it in the main page Tab "Now Playing" and the "Top Rated" in the navigation header.
- [ ] Implement segmented control to switch between list view and grid view. 
- [ ] Add a search bar. 
- [ ] All images fade in.
        ===> Successfully. I use Framer Motion to handle it, you can see it in "Top Rated" page.
- [ ] Implement lazy load image.
        ===> Successfully. you can see it in "Top Rated" page, the page load slow and i apply Lazy loading in react.
- [ ] Customize the highlight and selection effect of the cell.
        ===>Successfully.
- [ ] Improve UX loading by skeleton loading.
        ===>Successfully. You can see it in Top Rated page, while the Image loading
- [ ] Enhance responsive.
        ===>Successfully. More responsive.

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app functionality!
        ===>Successfully, Added small authentication (Gooogle Login, because the limited time). 
            Added the About Page.
            Added the rating loader.
            Added the main Carousel.

## Video Walkthrough

Here's a walkthrough of implemented user stories:

> Please record screen to a GIF file and attach link here

## License

    Copyright [2016] [your-name]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

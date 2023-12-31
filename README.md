# Seez Online Movie & Series Platform

> Seez.io clone - A Online Movie and Series website with react
>> Check Demo Video - https://player.vimeo.com/video/884277466

## Features

- Movies Search
- Series Search
- Series seasons, episodes
- Stars profile
- Filter by: year, genre
- Sort by: top, uncoming

## Usage

### Env Variables

Change .env.example to .env file in then root and add the following details

```
# Create account on tmdb to get the api key and access token
REACT_APP_TMDB_API_KEY=YOUR_TMDB_API_KEY
REACT_APP_TMDB_ACCESS_TOKEN=YOUR_TMDB_ACCESS_TOKEN

# Example embed provider
# https://example.com?imdb=IMDB_ID
# https://example.com?tmdb=TMDB_ID
# https://example.com?imdb=TV_SHOW_IMDB_ID&season=SEASON&episode=EPISODE
# https://example.com?imdb=TV_SHOW_TMDB_ID&season=SEASON&episode=EPISODE

REACT_APP_CONTENT_PROVIDER=tmdb
REACT_APP_CONTENT_SEASON_KEY=season
REACT_APP_CONTENT_EPISODE_KEY=episode
REACT_APP_CONTENT_EMBED_BASE_URL=https://example.com
```

### Install Dependencies

```
npm install
```

### Run

```
npm start
```

## Build & Deploy

```
npm run build
```

## Serve Build

```
npm install -g serve
npx serve build
```

## License

The MIT License

Copyright (c) 2023 Praveen Prajapati

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
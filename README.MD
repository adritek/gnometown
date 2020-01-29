# Brastlewark app

A who's who in Brastlewark - need to sell your loot? This app lists the fine people of Brastlewark and you can filter by their trades.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

A step by step series of examples that tell you how to get a development env running

Copy repo locally and change into directory via terminal

```
git clone repo
cd /app
```

Install dependancies and build files

```
npm intall
gulp
```

Build minified and babel'd JavaScript

```
gulp prod
```

In your browser go to
http://localhost:8000/

## Tests with Jest

TODO:
Make sure the fetch returned successful

```
jest -c
```

## Deployment

-- rsync to \*server, I haven't built it in, but gulp-rsync deploy task.

## Authors

- **Adrian Rogers** - _Initial work_ - [adritek](https://github.com/adritek)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Notes and future versions

Ads - I want add advertisements (one ad ever x cards) -- "Harry's +2 Constitution Juice" or some item from 5e ;). Also I'm sure the ad council of Brastlewark (as in real life) would want some ad injection.

Lazy loading or pagination - Limit the first set of payload items, less of a shock to mobile (data).

Browserify - some kind of bundler, separate out files. ES6 modules?

Images - (Nice to have) standardise image size (4:3)?

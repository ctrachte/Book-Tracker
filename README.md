# MyReads Project

This is the final assessment project for Udacity's React Fundamentals course. The goal of this project is to create a simple
react application to track books that a user is reading, has read, or is going to read. The app uses a built-in API to simulate API calls to a books database API.

## Getting Started

To run this app and start developing right away:

* in your terminal use the command `git clone https://github.com/ctrachte/Book-Tracker.git`
* in the directory you cloned to, install all project dependencies with `npm install`
* start the development server with `npm start`

## Backend Server/API

**All credit goes to Udacity for the below API and API documentation**

The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods used to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is not likely to be actively managed, so please be patient with pull requests!

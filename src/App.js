import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookList from './components/List'
import BookSearch from './components/Search'
import './App.css'

class BooksApp extends Component {
  state = {
    Books: []
  }

  componentDidMount() {
    this.getBooks()
  }

  getBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({Books: books})
    })
  }

  updateBooks = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.getBooks()
    })
  }

  render() {
    return (
      <div className="app">
        <Route
          exact path="/"
          render={() => (
            <BookList
              books={this.state.Books}
              onChange={this.updateBooks}
            />
          )}
        />
        <Route
          exact path="/search"
          render={({history}) => (
            <BookSearch
              onChange={this.updateBooks}
              books={this.state.Books}
            />
          )}
        />
      </div>
    )
  }
}

export default BooksApp

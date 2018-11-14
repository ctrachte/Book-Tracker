import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Book from './Book'
import {PropTypes} from 'prop-types'
import * as BooksAPI from '../BooksAPI'

class Search extends Component {
  state = {
    Books: [],
    query: ''
  }

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
  }

  handleChange = (event) => {
    let query = event.target.value
    this.setState(() => {
      return {query: query}
    })
    this.search(query)
  }

  createLibrary = (books) => {
    let currentBooks = this.props.books
    for (let book of books) {
      book.shelf = "none"
      for (let b of currentBooks) {
        if (b.id === book.id) {
          book.shelf = b.shelf
        }
      }
    }
    return books
  }

  search = (query) => {
    if (query) {
      BooksAPI.search(query, 15).then((books) => {
        if (books.length > 0) {
          books = books.filter((book) => (book.imageLinks))
          books = this.createLibrary(books)
          this.setState(() => {
            return {Books: books}
          })
        }
      })
    } else {
      this.setState({Books: [], query: ''})
    }
  }

  addBook = (book, shelf) => {
    this.props.onChange(book, shelf)
  }

  render() {

    let currentQuery = this.state.query
    let currentBooks = this.state.Books

    return (

      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={currentQuery} onChange={this.handleChange}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {currentQuery.length > 0 && currentBooks.map(
              (book, index) => (
                <Book
                  book={book}
                  key={index}
                  onUpdate={(shelf) => {this.addBook(book, shelf)}}
                />
              )
            )}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search;

import React, {Component} from 'react'
import Shelf from './Shelf'
import {Link} from 'react-router-dom'
import {PropTypes} from 'prop-types'

class List extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
  }

  render() {
    
    const books = this.props.books
    const onChange = this.props.onChange

    let currentlyReading = books.filter((book) => (book.shelf === "currentlyReading"))
    let read = books.filter((book) => (book.shelf === "read"))
    let wantToRead = books.filter((book) => (book.shelf === "wantToRead"))


    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf books={currentlyReading} title="Currently Reading" onChangeShelf={onChange}/>
            <Shelf books={read} title="Read" onChangeShelf={onChange}/>
            <Shelf books={wantToRead} title="Want to Read" onChangeShelf={onChange}/>
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a new book to your shelves!</Link>
        </div>
      </div>
    )
  }
}

export default List;

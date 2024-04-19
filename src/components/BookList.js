import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookCard from './BookCard'; // Assuming you have a BookCard component

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then(res => {
        setBooks(res.data);
      })
      .catch(err => {
        console.log('Error from BookList:', err);
      });
  }, []);

  const deleteBook = (id) => {
    axios.delete(`http://localhost:5000/${id}`)
      .then(res => {
        setBooks(books.filter(book => book._id !== id));
      })
      .catch(err => {
        console.error('Failed to delete book:', err);
      });
  };

  return (
    <div className='BookList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Books List</h2>
            <Link to='/create-book' className='btn btn-outline-warning float-right'>
              + Add New Book
            </Link>
            <br /><br /><hr />
          </div>
        </div>
        <div className='list'>
          {books.length > 0 ? (
            books.map((book, k) => <BookCard book={book} key={k} onDelete={deleteBook} />)
          ) : (
            <p>There is no book record!</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookList;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function AddBook() {
  let navigate = useNavigate();
  const [book, setBook] = useState({
    title: '',
    author: '',
    description: ''
  });

  const handleChange = (e) => {
    setBook({...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/', book)
      .then(res => {
        navigate('/');
      })
      .catch(err => {
        console.error('Error adding book:', err);
      });
  };

  return (
    <div className='AddBook'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br /><Link className='btn btn-info float-left' to="/">Show Book List</Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Add Book</h1>
            <p className='lead text-center'>Create new book</p>
            <form onSubmit={handleSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Title of the Book'
                  name='title'
                  className='form-control'
                  value={book.title}
                  onChange={handleChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Author'
                  name='author'
                  className='form-control'
                  value={book.author}
                  onChange={handleChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Describe this book'
                  name='description'
                  className='form-control'
                  value={book.description}
                  onChange={handleChange}
                />
              </div>
              <input type='submit' className='btn btn-info btn-block mt-4' />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBook;

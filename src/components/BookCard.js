import React from 'react';

const BookCard = ({ book, onDelete }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{book.title}</h4>
        <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
        <p className="card-text">{book.description}</p>
        <button className="btn btn-danger" onClick={() => onDelete(book._id)}>Delete</button>
      </div>
    </div>
  );
};

export default BookCard;

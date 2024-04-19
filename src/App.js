import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import './App.css'

// Import your components
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

function App() {
  return (
    <div className="container">
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/create-book" element={<AddBook />} />
          <Route path="*" element={<p>Not Found</p>} />
        </Routes>
    </div>
  );
}

export default App;

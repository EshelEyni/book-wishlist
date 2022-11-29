import { useState } from 'react';
import data from '../data/books.json';
import { BookPreview } from './book-preview';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

export const BookList = ({ savedBooks, setSavedBooks }) => {
    const [books, setBooks] = useState(data.books);
    const [currBook, setCurrBook] = useState(data.books[0]);
    const [currIdx, setCurrIdx] = useState(0);

    const switchBook = (switchNum) => {
        const newIdx = currIdx + switchNum;
        if (newIdx < 0 || newIdx >= books.length) return;
        setCurrBook(books[newIdx]);
        setCurrIdx(newIdx);
    }

    return (
        <div className="book-list">
            <div className="pagination-btn-container">
                {currIdx > 0 &&
                    <ArrowBackIosRoundedIcon
                        sx={{ fontSize: 20 ,color:'#2d2d2db5'}}
                        className="pagination-btn"
                        onClick={() => switchBook(-1)} />}
            </div>
            <BookPreview
                book={currBook}
                savedBooks={savedBooks}
                setSavedBooks={setSavedBooks} />
            <div className="pagination-btn-container">
                {currIdx < books.length - 1 &&
                    <ArrowForwardIosRoundedIcon
                        sx={{ fontSize: 20 ,color:'#2d2d2db5'}}
                        className="pagination-btn"
                        onClick={() => switchBook(1)} />}
            </div>
        </div>
    );
}
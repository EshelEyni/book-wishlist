import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useEffect, useState } from 'react';

export const WishList = ({ savedBooks, setSavedBooks }) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [isActive, setIsActive] = useState('');

    useEffect(() => {
        const totalPrice = savedBooks.reduce((acc, book) => {
            return acc + (+book.price);
        }, 0);
        setTotalPrice(totalPrice.toFixed(2));
    }, [savedBooks]);

    const onRemoveBook = (bookTitle) => {
        const newSavedBooks = savedBooks.filter(book => book.title !== bookTitle);
        setSavedBooks(newSavedBooks);
    };

    const onSortBooks = (sortBy) => {
        let newSavedBooks = [...savedBooks];
        switch (sortBy) {
            case 'title':
                newSavedBooks.sort((a, b) => a.title.localeCompare(b.title))
                setIsActive('title');
                break;
            case 'price':
                newSavedBooks.sort((a, b) => a.price - b.price)
                setIsActive('price');
                break;
            case 'rating':
                newSavedBooks.sort((a, b) => a.rating - b.rating)
                setIsActive('rating');
                break;
            default:
                break;

        }

        setSavedBooks(newSavedBooks);
    };

    return (
        <div className="wishlist">
            {savedBooks.length > 0 &&
                <section className="sort-by-container">
                    <div
                        className={`sort-by-btn ${isActive === 'title' ? 'active' : ''}`}
                        onClick={() => onSortBooks('title')}>
                        <div>Title</div>
                        <KeyboardArrowDownIcon />
                    </div>
                    <div
                        className={`sort-by-btn ${isActive === 'price' ? 'active' : ''}`}
                        onClick={() => onSortBooks('price')}>
                        <div>Price</div>
                        <KeyboardArrowDownIcon />
                    </div>
                    <div
                        className={`sort-by-btn ${isActive === 'rating' ? 'active' : ''}`}
                        onClick={() => onSortBooks('rating')}>
                        <div>Rating</div>
                        <KeyboardArrowDownIcon />
                    </div>
                </section>
            }
            <div className="books-container">
                {savedBooks.map((book, idx) => {
                    return <div
                        className="book-preview"
                        key={idx}>
                        <div>
                            {book.title}
                        </div>
                        <DisabledByDefaultRoundedIcon onClick={() => onRemoveBook(book.title)} />
                    </div>
                })}
            </div>

            {totalPrice > 0 &&
                <div className="total-price">
                    Total Price: {totalPrice}
                </div>}

        </div >
    )
}
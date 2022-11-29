import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';

export const WishList = ({ savedBooks, setSavedBooks }) => {
    const onRemoveBook = (bookTitle) => {
        const newSavedBooks = savedBooks.filter(book => book.title !== bookTitle);
        setSavedBooks(newSavedBooks);
    };

    return (
        <div className="wishlist">
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
        </div >
    )
}
import { useState } from "react";
import { BookList } from "../cmps/book-list";
import { WishList } from "../cmps/wishlist";

export const HomePage = () => {
    const [savedBooks, setSavedBooks] = useState([]);

    return (
        <main className="home">
            <div className="content-container">
                <BookList
                    savedBooks={savedBooks}
                    setSavedBooks={setSavedBooks}
                />
                <WishList
                    savedBooks={savedBooks}
                    setSavedBooks={setSavedBooks}
                />
            </div>
        </main>
    );
}
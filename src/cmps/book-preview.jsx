import StarBorderIcon from '@mui/icons-material/StarBorder';
import Checkbox from "react-custom-checkbox";
import StarIcon from '@mui/icons-material/Star';
import { useEffect, useState } from 'react';

export const BookPreview = ({ book, savedBooks, setSavedBooks }) => {
    const [isChecked, setIsChecked] = useState(false);
    const { title, description, rating, author, price } = book;

    useEffect(() => {
        const isSaved = savedBooks.some(savedBook => savedBook.title === book.title);
        setIsChecked(isSaved);
    }, [savedBooks, book.title]);


    const setRatingStars = () => {
        const stars = ['empty', 'empty', 'empty', 'empty', 'empty'];
        const fullStarsLength = Math.round(rating);
        for (let i = 0; i < fullStarsLength; i++) {
            stars[i] = 'full';
        }
        return stars;
    };

    const handleOnChange = () => {
        setIsChecked(!isChecked);
        if (savedBooks.includes(book)) {
            const newSavedBooks = savedBooks.filter(currBook => currBook.title !== book.title);
            setSavedBooks(newSavedBooks);
        } else {
            setSavedBooks([...savedBooks, book]);
        }
    };


    return (
        <div className="book-preview">
            <div className="title-container">
                <h2>{title}</h2>
                <Checkbox
                    checked={isChecked}
                    onChange={handleOnChange}
                    icon={<img src={require("../assets/check-mark.png")} style={{ width: 13 }} alt="" />}
                    size={16}
                    borderColor="#2d2d2db5"
                    style={{ cursor: 'pointer', backgroundColor: 'grey' }}
                />
            </div>
            <hr />
            <h4>{author}</h4>

            <p className="desc" >
                {description}
            </p>
            <div className="rating-container">
                <span>Rating: </span>
                <div className="stars-container">
                    {setRatingStars().map((star, idx) => {
                        if (star === 'full') return <StarIcon key={idx} sx={{color:'gold'}}/>
                        else return <StarBorderIcon key={idx} />
                    })}
                </div>
            </div>
            <p>{'Price: $' + price}</p>
        </div>
    );
};
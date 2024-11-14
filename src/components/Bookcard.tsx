import React from "react";

interface BookcardProps {
    title: string;
    author: string;
    imgUrl: string;
    rating: number;
}

const Bookcard: React.FC<BookcardProps> = ({title, author, imgUrl, rating}) => {
    return(
        <div className="bg-white p-4 shadow-md">
            <img
            src={imgUrl}
            alt={title}
            className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700">{title}</h3>
            <p className="text-gray-500 mt-2">{author}</p>
            <p className="text-yellow-500 mt-2">
                {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
            </p>
        </div>
    );
};

export default Bookcard;
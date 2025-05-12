import React from 'react';

import AnimationCard from '../../../lib/AnimationCard';
import BookCard from './BookCard';
import books from '../../data/book'
const Books = () => {
    // const data = [
    //     { title: "Wings of Fire", img: Agni },
    //     { title: "Kunjunni Kavithakal", img: Kunjunni },
    //     { title: "Katha Parayanoru Muttassi", img: Kathaparayan },
    //     { title: "Manthrika Kudukka", img: Manthrikakudukka },
    //     { title: "Mayalokathile Nooni", img: MayalokathileNooni },
    //     { title: "Mittayi Pothy", img: Mittay },
    //     { title: "Oru Nadiyum Kure Kazhchakallum", img: Orunadi },
    //     { title: "Sneham", img: Sneham },
    //     { title: "Unnikkittante Lokham", img: Unnik },
    //     { title: "Valaran", img: Valaran },
    //     { title: "Veetilek", img: Veetilek },
    // ];

    return (
        // <div className="max-w-screen-xl mx-auto p-4 mb-12">
        //     <h1 className="text-2xl md:text-5xl font-bold text-center text-blue-900 mb-10">New Arraivals</h1>
        //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        //         {data.map((book, index) => (
        //             <AnimationCard key={index}>
        //                 <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-5 text-center h-[25rem] flex flex-col justify-between">
        //                     <div className="h-64 w-full overflow-hidden">
        //                         <img src={book.img} alt={book.title} className="w-full h-full object-cover" />
        //                     </div>
        //                     <div className="p-4 flex-1 flex items-center justify-center">
        //                         <h2 className="text-lg md:text-xl font-semibold text-center text-gray-800">
        //                             {book.title}
        //                         </h2>
        //                     </div>
        //                     <button className="mt-auto w-full bg-gradient-to-r from-blue-700 to-blue-400 text-white py-2 rounded-lg transition duration-300">
        //                         Buy Now
        //                     </button>
        //                 </div>
        //             </AnimationCard>
        //         ))}
        //     </div>
        // </div>
        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-3xl font-bold mb-6">Children's Books</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {books.map((book, index) => (
                    <BookCard key={index} book={book} />
                ))}
            </div>
        </div>
    );
};

export default Books;

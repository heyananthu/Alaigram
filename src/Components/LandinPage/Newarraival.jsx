import React from 'react';
import Animationview from '../../lib/FadeInWhenVisible';
import AnimationCard from '../../lib/AnimationCard';
import Agni from '../../assets/books/agni.jpg'
import Kathaparayan from '../../assets/books/Katha Parayanoru Muttassi.png'
import Kunjunni from '../../assets/books/Kunhunni.jpg'
import Manthrikakudukka from '../../assets/books/manthrika-kudukka.jpg'
import MayalokathileNooni from '../../assets/books/Mayalokathile Nooni.jpg'
import Mittay from '../../assets/books/mittayi.jpg'
import Orunadi from '../../assets/books/oru-nadi.jpg'
import Sneham from '../../assets/books/sneham.jpg'
import Unnik from '../../assets/books/unnik.jpg'
import Valaran from '../../assets/books/valaran.jpg'
import Veetilek from '../../assets/books/veetilek.jpg'
function Newarraival() {
    const data = [
        {
            title: "Wings of Fire",
            // discription: "Natural remedies for daily health support.",
            img: Agni
        },
        {
            title: "Kunjunni Kavithakal",
            // discription: "Organic solutions for healthy glowing skin.",
            img: Kunjunni
        },
        {
            title: "Katha Parayanoru Muttassi",
            // discription: "Boost your gut with powerful herbal blends.",
            img: Kathaparayan
        },
        {
            title: "Manthrika Kudukka",
            // discription: "Strengthen your immunity with Ayurvedic care.",
            img: Manthrikakudukka
        },
        {
            title: "Mayalokathile Nooni",
            // discription: "Support cardiovascular wellness naturally.",
            img: MayalokathileNooni
        },
        {
            title: "Mittayi Pothy",
            // discription: "Balance stress and improve sleep cycles.",
            img: Mittay
        },
        {
            title: "Oru Nadiyum Kure Kazhchakallum",
            // discription: "Strengthen and nourish your hair roots.",
            img: Orunadi
        },
        {
            title: "Sneham",
            // discription: "Natural care for hormonal balance & energy.",
            img: Sneham
        },
        {
            title: "Unnikkittante Lokham",
            // discription: "Strengthen and nourish your hair roots.",
            img: Unnik
        },
        {
            title: "Valaran",
            // discription: "Strengthen and nourish your hair roots.",
            img: Valaran
        },
        {
            title: "Veetilek",
            // discription: "Strengthen and nourish your hair roots.",
            img: Veetilek
        },


    ];

    return (
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 py-12">
            <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
                <AnimationCard>
                    <h1 className="text-2xl md:text-5xl font-bold text-center text-blue-900 mb-10">
                        ✨ New Arrivals ✨
                    </h1>
                </AnimationCard>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {data.map((item, index) => (
                        <Animationview key={index}>
                            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-5 text-center h-[28rem] flex flex-col justify-between">
                                <div className="flex justify-center">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="h-[18rem] w-[14rem] object-cover border-4 border-blue-200 hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="mt-4 flex flex-col flex-1">
                                    <h2 className="text-xl font-semibold text-blue-800">{item.title}</h2>
                                    <p className="text-sm text-gray-600 mt-2 line-clamp-3">{item.discription}</p>
                                    <button className="mt-auto w-full bg-gradient-to-r from-blue-700 to-blue-400 text-white py-2 rounded-lg transition duration-300">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </Animationview>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Newarraival;

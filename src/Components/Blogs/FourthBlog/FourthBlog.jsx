import React, { useEffect } from 'react'
import Navbar from '../../../Components/LandinPage/Navbar'
import Footer from '../../../Components/LandinPage/Footer'
import AnimationCard from '../../../lib/AnimationCard'
import { useNavigate } from 'react-router-dom'
import banner from '../../../assets/blog4-banner.jpg' // Replace with your actual banner image

function FourthBlog() {
    const navigate = useNavigate()
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Navbar />
            {/* Hero Section */}
            <div className="relative w-full h-[28rem] md:h-[26rem]">
                <img
                    src={banner}
                    alt="For the Love of Reading"
                    className="w-full h-full object-center transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent flex items-center justify-center">
                    <div className="text-center px-4 animate-fade-in">
                        <AnimationCard>
                            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg">
                                For the Love of Reading
                            </h1>
                            <p className="text-lg md:text-2xl text-amber-100 mt-4 max-w-2xl mx-auto">
                                Discover Our Malayalam Books
                            </p>
                        </AnimationCard>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <article className="lg:col-span-2 prose prose-lg prose-gray mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4 border-l-4 border-amber-600 pl-4">
                            For the Love of Reading: Discover Our Malayalam Books
                        </h2>
                        <p className="text-lg text-gray-800 leading-relaxed mt-5">
                            In the gentle hush of early morning or the quiet pause between daily routines, there’s a certain kind of magic that only a good book can bring. At Alaigram, we cherish that magic — especially when it speaks to us in the language of our roots. Our curated Malayalam collection is more than a catalogue; it’s a living tribute to the heartbeat of Kerala — to its stories, its wisdom, and its evolving voice.
                        </p>
                        <p className="text-lg text-gray-800 leading-relaxed mt-5">
                            We believe in reading with pride, and in Malayalam, pride finds its poetry. Whether you're searching for tales that echo childhood wonder, spark adult contemplation, or rekindle a connection with your mother tongue, we’ve gathered books that resonate across generations.
                        </p>
                        <p className="text-lg text-gray-800 leading-relaxed mt-5">
                            Let us take you through a few beloved titles — each one carrying the scent of paper, memory, and meaning.
                        </p>
                        <ul className="list-disc pl-6 mt-5">
                            <li>
                                <span className="font-bold text-amber-700">Gopi Diaries: Valaran Thudangunnu by Sudha Murty</span><br />
                                Seen through the eyes of Gopi, a playful puppy with a lot to say, this book is full of tenderness and trust. It’s a perfect companion for young readers and a gentle reminder to adults about unconditional love and simple joys.
                            </li>
                            <li className="mt-4">
                                <span className="font-bold text-amber-700">Oru Nadhiyum Kure Mayakazhchakalum by Sudha Murty</span><br />
                                This is a river of stories — soulful, honest, and deeply human. Murty’s reflections flow effortlessly, inviting us to see beauty in the everyday and strength in kindness.
                            </li>
                            <li className="mt-4">
                                <span className="font-bold text-amber-700">Agnichirakukal by A. P. J. Abdul Kalam</span><br />
                                This is not just a memoir — it’s a firebrand for dreamers. Kalam’s inspiring journey from humble beginnings to becoming the People’s President glows with perseverance, hope, and vision. A must-read for every young heart that dares to imagine.
                            </li>
                            <li className="mt-4">
                                <span className="font-bold text-amber-700">Rathri 12-nu Shesham by Akhil P Dharmajan</span><br />
                                With the stillness of midnight comes mystery, and Akhil crafts it brilliantly. This novel lingers in the shadows of memory and imagination, masterfully blending suspense with a poetic sense of place.
                            </li>
                            <li className="mt-4">
                                <span className="font-bold text-amber-700">Kaali by Aswathy Sreekanth</span><br />
                                Bold and unapologetic, this book explores feminine strength, sensuality, and spiritual fire. Aswathy’s voice is fierce and fresh — a celebration of womanhood in all its contradictions and power.
                            </li>
                            <li className="mt-4">
                                <span className="font-bold text-amber-700">Ram C/o Anandhi by Akhil P Dharmajan</span><br />
                                A delicate tale of love and longing, this book brings together nostalgia, subtle humour, and the ache of separation. Written with quiet intensity, it feels like a letter you’ve long waited to read.
                            </li>
                            <li className="mt-4">
                                <span className="font-bold text-amber-700">Pattunool Puzhu (Malayalam translation of Ikigai)</span><br />
                                Sometimes, foreign wisdom finds a more intimate resonance in your own tongue. This translation of the Japanese philosophy of “ikigai” — a reason for being — encourages slow living, deep purpose, and emotional clarity.
                            </li>
                            <li className="mt-4">
                                <span className="font-bold text-amber-700">Mercury Island – Lokavasanam by Akhil P Dharmajan</span><br />
                                A daring piece of speculative fiction, this novel imagines endings and beginnings in a surreal world. Through metaphor and mystery, it raises profound questions about life, loss, and survival.
                            </li>
                            <li className="mt-4">
                                <span className="font-bold text-amber-700">Appooppanthadiyude Swargayatrayum Mattu Balakadhakalum</span><br />
                                This enchanting collection of children’s tales is a lyrical bridge between generations. Whimsical, wise, and full of wonder, it’s perfect for little minds and big hearts alike.
                            </li>
                        </ul>
                        <p className="text-lg text-gray-800 leading-relaxed mt-8">
                            At Alaigram, we add new titles every month — a reflection of Malayalam’s rich literary ecosystem that continues to thrive in both pen and print. We support debut writers as passionately as we celebrate legends. Each book is handpicked, not by algorithms, but by hearts that know the value of a well-told tale.
                        </p>
                        <p className="text-lg text-gray-800 leading-relaxed mt-5">
                            So, whether you’re returning to Malayalam after years or nurturing a child’s first connection with it, we invite you to browse, read, and fall in love with your language again.
                        </p>
                        <p className="text-lg text-gray-800 leading-relaxed mt-5">
                            Let your shelves speak in Malayalam. Let your evenings be filled with our words.<br />
                            Join us at Alaigram — where stories aren't just told, they’re cherished.
                        </p>
                    </article>
                </div>
                {/* CTA Section */}
                <div className="mt-12 text-center">
                    <button
                        className="inline-flex items-center px-6 py-2 bg-amber-600 text-white text-lg font-medium rounded-md hover:bg-amber-700 transition-colors duration-200 transform hover:scale-105"
                        onClick={() => navigate('/blogs')}
                    >
                        Back to Blog
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default FourthBlog

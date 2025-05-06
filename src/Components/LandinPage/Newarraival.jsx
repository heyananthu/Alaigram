import React from 'react'
import prd from '../../assets/sail1.webp'
import Animationview from '../../lib/FadeInWhenVisible'
import AnimationCard from '../../lib/AnimationCard'
function Newarraival() {
    const data = [
        { title: "Card Title", discription: "A card component has a figure ", img: "https://amritalife.com/wp-content/uploads/2021/09/General_health_care_v02-min.jpg" },
        { title: "Card Title", discription: "A card component has a figure ", img: "https://amritalife.com/wp-content/uploads/2021/09/General_health_care_v02-min.jpg" },
        { title: "Card Title", discription: "A card component has a figure ", img: "https://amritalife.com/wp-content/uploads/2021/09/General_health_care_v02-min.jpg" },
        { title: "Card Title", discription: "A card component has a figure ", img: "https://amritalife.com/wp-content/uploads/2021/09/General_health_care_v02-min.jpg" },
        { title: "Card Title", discription: "A card component has a figure ", img: "https://amritalife.com/wp-content/uploads/2021/09/General_health_care_v02-min.jpg" },
        { title: "Card Title", discription: "A card component has a figure ", img: "https://amritalife.com/wp-content/uploads/2021/09/General_health_care_v02-min.jpg" },
        { title: "Card Title", discription: "A card component has a figure ", img: "https://amritalife.com/wp-content/uploads/2021/09/General_health_care_v02-min.jpg" },
        { title: "Card Title", discription: "A card component has a figure ", img: "https://amritalife.com/wp-content/uploads/2021/09/General_health_care_v02-min.jpg" },
    ]
    return (
        <div className='bg-blue-100 '>
            <div className='max-w-screen max-auto lg:p-12 p-5'>
                <div>
                    <AnimationCard>
                        <h1 className='font-semibold text-4xl md:text-5xl lg:text-6xl text-center lg:text-left'>New Arrivals</h1>
                    </AnimationCard>
                    <div className='p-6 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center'>
                        {
                            data.map((item) =>
                                <div className="card bg-base-100 w-72 shadow-sm p-2">
                                    <Animationview>
                                        <figure>
                                            <img
                                                src={item.img}
                                                alt="Shoes"
                                                className='h-52 w-52 rounded-full object-cover'
                                            />

                                        </figure>
                                    </Animationview>
                                    <div className="card-body">
                                        <h2 className="card-title">{item.title}</h2>
                                        <p>{item.discription}</p>
                                        <div className="card-actions w-full mt-2">
                                            <button className="btn bg-gradient-to-r from-blue-700 to-blue-400 w-full text-white">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Newarraival

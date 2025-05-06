import React from 'react';
import { PiCertificateLight } from "react-icons/pi";
import { GiSchoolBag } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { IoWalletOutline } from "react-icons/io5";
import Animationview from '../../lib/AnimationCard';
function Herosub() {
    const data = [
        {
            title: "GRS <br /> Certified",
            icon: PiCertificateLight,
            bgColor: "bg-green-100",
            textColor: "text-green-700"
        },
        {
            title: "Sustainable <br /> Materials",
            icon: GiSchoolBag,
            bgColor: "bg-red-100",
            textColor: "text-red-700"
        },
        {
            title: "PAN India <br /> Free Delivery",
            icon: TbTruckDelivery,
            bgColor: "bg-orange-100",
            textColor: "text-orange-700"
        },
        {
            title: "Easy & Secured <br /> Payment modes",
            icon: IoWalletOutline,
            bgColor: "bg-blue-100",
            textColor: "text-blue-700"
        },
    ];

    return (
        <div className="w-full bg-gradient-to-r from-blue-50 to-blue-100">
            <Animationview>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 md:p-6 place-items-center">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-start sm:items-center gap-2 sm:gap-3 w-full sm:w-auto"
                        >
                            <div
                                className={`flex items-center justify-center p-2 sm:p-3 rounded-full ${item.bgColor} ${item.textColor}`}
                            >
                                <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <p
                                className="font-semibold text-xs sm:text-sm leading-snug"
                                dangerouslySetInnerHTML={{ __html: item.title }}
                            />
                        </div>

                    ))}
                </div>
            </Animationview>
        </div>
    );
}

export default Herosub;

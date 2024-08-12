import React from 'react'
import { PiUsersThreeFill } from "react-icons/pi";
import { AiFillLike } from "react-icons/ai";
import { FaCalendarCheck } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";

function OurResults() {

    const cardData = [
        { id: 1, count: '25,000+', heading: 'Leads Generated', icon: <PiUsersThreeFill /> },

        { id: 2, count: '180+', heading: 'Happy Clients', icon: <AiFillLike /> },

        { id: 3, count: '100+', heading: 'Social Media Strategies', icon: <FaCalendarCheck /> },

        { id: 4, count: '10,000+', heading: 'Keywords Rank', icon: <FaChartBar /> },

    ];


    return (
        <div className='mt-12 md:mt-16 shadow-lg pb-8'>
            <h4
                className='text-4xl md:text-5xl font-bold text-orange text-center'
            >
                <span className='text-skyBlue'>OUR</span> RESULTS
            </h4>

            <p
                className='text-md md:text-xl text-center text-orange font-bold mt-4'
            >Here is why you should partner with<span className='text-skyBlue'> Business Drivers</span> digital marketing agency for your business growth.</p>


            {/* RESULTS CARD */}
            <div className="flex flex-col md:flex-row justify-evenly my-12">
                {cardData.map(card => (
                    <div
                        key={card.id}
                        className="my-2 md:my-0 flex flex-col justify-center items-center border-2 border-skyBlue w-[80%] mx-auto md:mx-0 sm:w-1/2 lg:w-[18%] py-4"
                    >
                        <div className="icon text-skyBlue text-5xl">{card.icon}</div>
                        <p className="mt-4 stats-count text-2xl font-bold text-skyBlue">
                            {card.count}
                        </p>
                        <div className="heading text-lg text-orange font-bold">
                            {card.heading}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OurResults
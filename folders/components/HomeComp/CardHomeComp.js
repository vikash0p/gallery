"use client"
import Image from 'next/image';
import React from 'react'

const CardHomeComp = ({ profile }) => {
    console.log(profile);
    
    return (
        <div className="w-full h-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4  gap-5 justify-items-center  ">
            {

                profile.map((value, index, array) => {
                    return (
                        <div className="max-w-xs my-4 bg-white shadow-md rounded overflow-hidden" key={value._id}>
                            <Image className="w-full h-48 object-cover" src={value.photoURL} alt={value.profile} width={350} height={350} />
                            <div className="p-4">
                                <h6 className="text-xl  font-semibold">{value.profile}</h6>
                                <h3 className="text-sm mb-2 text-gray-600">{value.email}</h3>
                            </div>
                        </div>
                    )
                })
            }
            
    </div>
      
      
  )
}

export default CardHomeComp

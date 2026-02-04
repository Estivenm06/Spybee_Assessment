import React from 'react'
import Image from 'next/image'
import Logo from "@/public/spybee_logo.webp"

export const Header = ({ title }) => {
    return (
        <header>
            <div>
            <Image 
            src={Logo}
            width={100}
            height={50}
            alt='Spybee Logo'
            preload={true}
            />
            </div>
            <div className='user'>
                User
            </div>
        </header>
    )
}
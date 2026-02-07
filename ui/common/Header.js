import React from 'react'
import Image from 'next/image'
import Logo from "@/public/spybeeLogo.webp"

export const Header = () => {
    return (
        <header className='headerContainer'>
            <div>
            <Image 
            src={Logo}
            alt='Spybee Logo'
            preload={true}
            className='spybeeLogo'
            />
            </div>
            <div className='user'>
                User
            </div>
        </header>
    )
}
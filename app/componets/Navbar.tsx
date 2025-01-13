"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'
import { usePathname } from 'next/navigation'
import MobileNavigation from './MobileNavigation'

export const navElements = [
    { name: 'About', link: '/about' },
    { name: 'Services', link: '/service' },
    { name: 'Portfolio', link: '/service#portfolio' },
    { name: 'studio', link: '/studio' },
    { name: 'foundation', link: '/fundation' },
    { name: 'career', link: '/career' },
    { name: 'blog', link: '/blog' },
]

const Navbar = () => {
    const pathname = usePathname()
    return (
        <nav className="section-padding font-semibold text-4 fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm py-[1.8rem]">
            <div className='mx-auto'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center justify-between gap-20'>
                        <Link href='/'>
                            <Image
                                src="/assets/images/forcythe logo.svg"
                                alt='forcythe logo'
                                width={150}
                                height={10}
                                className='w-28 sm:w-32 md:auto'
                            />
                        </Link>
                        <div>
                            <ul className='hidden md:flex items-center capitalize gap-4 text-base'>
                                {navElements.slice(0, 5).map((element, index) => {
                                    const isActive = pathname === element.link;
                                    return (
                                        <li key={index} className={`text-white ${isActive ? "text-accent" : "text-white"
                                            } hover:text-accent `}>
                                            <Link href={element.link}>
                                                {element.name}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <Button >
                            Book a call
                        </Button>
                    </div>
                    <div className="bg-white bg-opacity-10 rounded-[0.35rem] px-3 pt-3 pb-[0.4rem] md:hidden cursor-pointer">
                        <MobileNavigation />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

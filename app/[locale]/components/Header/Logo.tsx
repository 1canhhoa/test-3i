import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
    return ( 
        <div className="w-[350px] md:w-[300px] max-w-full px-4 xl:mr-[30px] pb-[6px]">
            <Link
                href="/"
                className="header-logo inline-block w-full"
                >
                <Image
                    src="/images/logo/logo.png"
                    alt="logo"
                    width={400}
                    height={60}
                    className="w-full dark:hidden"
                />
                <Image
                    src="/images/logo/logo.svg"
                    alt="logo"
                    width={180}
                    height={50}
                    className="hidden w-full dark:block"
                />
            </Link>
        </div>
    );
}

export default Logo;
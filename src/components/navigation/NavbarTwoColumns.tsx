/*
 * @Author: Nicodemus nicodemusdu@gmail.com
 * @Date: 2022-10-29 21:57:34
 * @LastEditors: Nicodemus nicodemusdu@gmail.com
 * @LastEditTime: 2022-10-31 10:48:19
 * @FilePath: /notion-toolbox/src/components/navigation/NavbarTwoColumns.tsx
 * @Description:
 *
 * Copyright (c) 2022 by Nicodemus nicodemusdu@gmail.com, All Rights Reserved.
 */
import Link from 'next/link';
import { ReactNode } from 'react';

type INavbarProps = {
    logo: ReactNode;
    children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
    <div className='flex flex-wrap items-center justify-between'>
        <div>
            <Link href='/'>{props.logo}</Link>
        </div>

        <nav>
            <ul className='navbar last::mr-2  mt-0 mr-5 flex items-center justify-between text-base font-medium text-gray-800 first:mt-2'>
                {props.children}
            </ul>
        </nav>
    </div>
);

export { NavbarTwoColumns };

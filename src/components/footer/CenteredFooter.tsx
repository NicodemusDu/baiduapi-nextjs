/*
 * @Author: Nicodemus nicodemusdu@gmail.com
 * @Date: 2022-10-29 21:16:42
 * @LastEditors: Nicodemus nicodemusdu@gmail.com
 * @LastEditTime: 2022-10-30 12:33:15
 * @FilePath: /notion-toolbox/src/components/footer/CenteredFooter.tsx
 * @Description:
 *
 * Copyright (c) 2022 by Nicodemus nicodemusdu@gmail.com, All Rights Reserved.
 */
import { ReactNode } from 'react';

import { FooterCopyright } from './FooterCopyright';
import { FooterIconList } from './FooterIconList';

type ICenteredFooterProps = {
    logo: ReactNode;
    iconList: ReactNode;
    children: ReactNode;
};

const CenteredFooter = (props: ICenteredFooterProps) => (
    <div className='text-center'>
        {props.logo}

        <nav>
            <ul className='navbar mt-5 flex flex-row justify-center text-xl font-medium text-gray-800'>
                {props.children}
            </ul>
        </nav>

        <div className='mt-8 flex justify-center'>
            <FooterIconList>{props.iconList}</FooterIconList>
        </div>

        <div className='mt-8 text-sm'>
            <FooterCopyright />
        </div>
    </div>
);

export { CenteredFooter };

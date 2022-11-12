/*
 * @Author: Nicodemus nicodemusdu@gmail.com
 * @Date: 2022-10-29 21:09:58
 * @LastEditors: Nicodemus nicodemusdu@gmail.com
 * @LastEditTime: 2022-10-29 21:10:02
 * @FilePath: /notion-toolbox/src/components/banner/CTABanner.tsx
 * @Description: Call to action Banner(CTA Banner)呼吁采取行动
 *
 * Copyright (c) 2022 by Nicodemus nicodemusdu@gmail.com, All Rights Reserved.
 */
import { ReactNode } from 'react';

type ICTABannerProps = {
    title: string;
    subtitle: string;
    button: ReactNode;
};

const CTABanner = (props: ICTABannerProps) => (
    <div className='flex flex-col rounded-md bg-primary-100 p-4 text-center sm:flex-row sm:items-center sm:justify-between sm:p-12 sm:text-left'>
        <div className='text-2xl font-semibold'>
            <div className='text-gray-900'>{props.title}</div>
            <div className='text-primary-500'>{props.subtitle}</div>
        </div>

        <div className='whitespace-no-wrap mt-3 sm:mt-0 sm:ml-2'>{props.button}</div>
    </div>
);

export { CTABanner };

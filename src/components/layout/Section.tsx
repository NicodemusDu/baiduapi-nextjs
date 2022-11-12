/*
 * @Author: Nicodemus nicodemusdu@gmail.com
 * @Date: 2022-10-29 21:56:20
 * @LastEditors: Nicodemus nicodemusdu@gmail.com
 * @LastEditTime: 2022-10-29 21:57:01
 * @FilePath: /notion-toolbox/src/components/layout/Section.tsx
 * @Description:
 *
 * Copyright (c) 2022 by Nicodemus nicodemusdu@gmail.com, All Rights Reserved.
 */
import { ReactNode } from 'react';

type ISectionProps = {
    title?: string;
    description?: string;
    yPadding?: string;
    children: ReactNode;
};

const Section = (props: ISectionProps) => (
    <div className={`mx-auto max-w-screen-lg px-3 ${props.yPadding ? props.yPadding : 'py-16'}`}>
        {(props.title || props.description) && (
            <div className='mb-12 text-center'>
                {props.title && <h2 className='text-4xl font-bold text-gray-900'>{props.title}</h2>}
                {props.description && <div className='mt-4 text-xl md:px-20'>{props.description}</div>}
            </div>
        )}

        {props.children}
    </div>
);

export { Section };

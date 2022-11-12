/*
 * @Author: Nicodemus nicodemusdu@gmail.com
 * @Date: 2022-10-29 21:52:42
 * @LastEditors: Nicodemus nicodemusdu@gmail.com
 * @LastEditTime: 2022-10-29 21:52:45
 * @FilePath: /notion-toolbox/src/components/hero/HeroOneButton.tsx
 * @Description:
 *
 * Copyright (c) 2022 by Nicodemus nicodemusdu@gmail.com, All Rights Reserved.
 */
import { ReactNode } from 'react';

type IHeroOneButtonProps = {
    title: ReactNode;
    description: string;
    button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
    <header className='text-center'>
        <h1 className='leading-hero whitespace-pre-line text-5xl font-bold text-gray-900'>{props.title}</h1>
        <div className='mt-4 mb-16 text-2xl'>{props.description}</div>

        {props.button}
    </header>
);

export { HeroOneButton };

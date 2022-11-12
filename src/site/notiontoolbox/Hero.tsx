/*
 * @Author: Nicodemus nicodemusdu@gmail.com
 * @Date: 2022-10-29 22:06:06
 * @LastEditors: Nicodemus nicodemusdu@gmail.com
 * @LastEditTime: 2022-10-31 10:53:35
 * @FilePath: /notion-toolbox/src/site/notiontoolbox/Hero.tsx
 * @Description:
 *
 * Copyright (c) 2022 by Nicodemus nicodemusdu@gmail.com, All Rights Reserved.
 */
import Link from 'next/link';

import { AppConfig } from '@/lib/appconfig';

import { Background } from '@/components/background/Background';
import Button from '@/components/buttons/Button';
import { HeroOneButton } from '@/components/hero/HeroOneButton';
import { Section } from '@/components/layout/Section';
import ButtonLink from '@/components/links/ButtonLink';
import { NavbarTwoColumns } from '@/components/navigation/NavbarTwoColumns';

import { Logo } from './Logo';

const Hero = () => (
    <Background color='bg-gray-100'>
        <Section yPadding='py-6'>
            <NavbarTwoColumns logo={<Logo xl={false} />}>
                <li className='mx-2'>
                    <Link href='/'>Sign in</Link>
                </li>
                <li className='mx-2'>
                    <ButtonLink variant='primary' className='inline-flex items-center' href='/'>
                        Try for free
                    </ButtonLink>
                </li>
            </NavbarTwoColumns>
        </Section>

        <Section yPadding='pt-20 pb-32'>
            <HeroOneButton
                title={
                    <>
                        <p>{AppConfig.slogen[0]}.</p>
                        <span className='text-primary-500'>{AppConfig.slogen[1]}.</span>
                    </>
                }
                description='It only takes a few minutes to increase the efficiency of notion.'
                button={
                    <Link href='/'>
                        <Button>Try Notion Toolbox today</Button>
                    </Link>
                }
            />
        </Section>
    </Background>
);

export { Hero };

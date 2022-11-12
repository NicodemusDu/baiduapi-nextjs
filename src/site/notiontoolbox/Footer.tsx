/*
 * @Author: Nicodemus nicodemusdu@gmail.com
 * @Date: 2022-10-29 22:06:06
 * @LastEditors: Nicodemus nicodemusdu@gmail.com
 * @LastEditTime: 2022-10-31 10:56:42
 * @FilePath: /notion-toolbox/src/site/notiontoolbox/Footer.tsx
 * @Description:
 *
 * Copyright (c) 2022 by Nicodemus nicodemusdu@gmail.com, All Rights Reserved.
 */
import Link from 'next/link';

import { Background } from '@/components/background/Background';
import { CenteredFooter } from '@/components/footer/CenteredFooter';
import { Section } from '@/components/layout/Section';
import UnderlineLink from '@/components/links/UnderlineLink';

import { Logo } from './Logo';

import Facebook from '~/svg/Facebook.svg';
import Github from '~/svg/Github.svg';
import Twitter from '~/svg/Twitter.svg';
import Youtube from '~/svg/Youtube.svg';

const linkList: {
    name: string;
    href: string;
}[] = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/' },
    { name: 'Notion Tips', href: '/' },
    { name: 'About Us', href: '/' },
];

const Footer = () => (
    <Background color='bg-notion-background'>
        <Section>
            <CenteredFooter
                logo={<Logo />}
                iconList={
                    <>
                        <Link href='/'>
                            <Github className='mx-2 text-2xl' />
                        </Link>

                        <Link href='/'>
                            <Facebook className='mx-2 text-2xl' />
                        </Link>

                        <Link href='/'>
                            <Twitter className='mx-2 text-2xl' />
                        </Link>

                        <Link href='/'>
                            <Youtube className='mx-2 text-2xl' />
                        </Link>
                    </>
                }
            >
                {linkList.map(({ href, name }) => (
                    <li key={`${href}${name}`}>
                        <UnderlineLink href={href} className='mx-4 hover:text-gray-600 xl:mx-10'>
                            {name}
                        </UnderlineLink>
                    </li>
                ))}
            </CenteredFooter>
        </Section>
    </Background>
);

export { Footer };

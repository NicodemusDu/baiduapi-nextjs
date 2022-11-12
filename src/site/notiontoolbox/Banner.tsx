/*
 * @Author: Nicodemus nicodemusdu@gmail.com
 * @Date: 2022-10-29 22:06:06
 * @LastEditors: Nicodemus nicodemusdu@gmail.com
 * @LastEditTime: 2022-10-31 11:59:03
 * @FilePath: /notion-toolbox/src/site/notiontoolbox/Banner.tsx
 * @Description:
 *
 * Copyright (c) 2022 by Nicodemus nicodemusdu@gmail.com, All Rights Reserved.
 */
import Link from 'next/link';

import { CTABanner } from '@/components/banner/CTABanner';
import Button from '@/components/buttons/Button';
import { Section } from '@/components/layout/Section';

const Banner = () => (
    <Section>
        <CTABanner
            title={`Let's start making your notion page better.`}
            subtitle='Start your Free Trial.'
            button={
                <Link href='/'>
                    <Button>Get Started</Button>
                </Link>
            }
        />
    </Section>
);

export { Banner };

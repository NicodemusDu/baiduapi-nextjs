/*
 * @Author: Nicodemus nicodemusdu@gmail.com
 * @Date: 2022-10-29 22:06:06
 * @LastEditors: Nicodemus nicodemusdu@gmail.com
 * @LastEditTime: 2022-10-29 22:14:19
 * @FilePath: /notion-toolbox/src/site/notiontoolbox/Base.tsx
 * @Description:
 *
 * Copyright (c) 2022 by Nicodemus nicodemusdu@gmail.com, All Rights Reserved.
 */
import { AppConfig } from '@/lib/appconfig';

import { Meta } from '@/components/layout/Meta';

import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
    <div className='text-gray-600 antialiased'>
        <Meta title={AppConfig.title} description={AppConfig.description} />
        <Hero />
        <VerticalFeatures />
        <Banner />
        <Footer />
    </div>
);

export { Base };

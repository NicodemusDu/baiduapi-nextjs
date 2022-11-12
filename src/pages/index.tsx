/*
 * @Author: Nicodemus nicodemusdu@gmail.com
 * @Date: 2022-10-29 16:19:04
 * @LastEditors: Nicodemus nicodemusdu@gmail.com
 * @LastEditTime: 2022-10-30 14:46:40
 * @FilePath: /notion-toolbox/src/pages/index.tsx
 * @Description:
 *
 * Copyright (c) 2022 by Nicodemus nicodemusdu@gmail.com, All Rights Reserved.
 */
import * as React from 'react';

import { getFromLocalStorage, setFromLocalStorage } from '@/lib/helper';

import Button from '@/components/buttons/Button';
/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
export default function HomePage() {
    const [accessToken, setAccessToken] = React.useState('');
    const accessTokenHandle = async () => {
        let token = getFromLocalStorage('access_token');
        if (token) {
            setAccessToken(token);
        } else {
            fetch('/api/access_token')
                .then((response) => response.json())
                .then((data) => {
                    setFromLocalStorage('access_token', data.access_token);
                    setAccessToken(data.access_token);
                    token = data.access_token;
                });
        }
        return token;
    };
    return (
        <Layout>
            {/* <Seo templateTitle='Home' /> */}
            <Seo />

            <main>
                <Button onClick={accessTokenHandle}>{accessToken}</Button>
            </main>
        </Layout>
    );
}

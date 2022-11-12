/*
 * @Author: Nicodemus nicodemusdu@gmail.com
 * @Date: 2022-10-29 22:06:06
 * @LastEditors: Nicodemus nicodemusdu@gmail.com
 * @LastEditTime: 2022-10-30 12:00:11
 * @FilePath: /notion-toolbox/src/site/notiontoolbox/Logo.tsx
 * @Description:
 *
 * Copyright (c) 2022 by Nicodemus nicodemusdu@gmail.com, All Rights Reserved.
 */
import { AppConfig } from '@/lib/appconfig';

import NextImage from '@/components/NextImage';

type ILogoProps = {
    xl?: boolean;
};

const Logo = (props: ILogoProps) => {
    const size = props.xl ? '44' : '32';
    const fontStyle = props.xl ? 'font-semibold text-2xl' : 'font-semibold text-xl';

    return (
        <span className={`inline-flex items-center  text-gray-900 ${fontStyle}`}>
            <NextImage useSkeleton className='mr-2' src='/favicon/favicon.ico' width={size} height={size} alt='Icon' />
            {AppConfig.site_name}
        </span>
    );
};

export { Logo };

/*
 * @Author: Nicodemus nicodemusdu@gmail.com
 * @Date: 2022-10-29 21:16:42
 * @LastEditors: Nicodemus nicodemusdu@gmail.com
 * @LastEditTime: 2022-10-30 12:33:00
 * @FilePath: /notion-toolbox/src/components/footer/FooterCopyright.tsx
 * @Description:
 *
 * Copyright (c) 2022 by Nicodemus nicodemusdu@gmail.com, All Rights Reserved.
 */
import { AppConfig } from '@/lib/appconfig';

import UnderlineLink from '@/components/links/UnderlineLink';

const FooterCopyright = () => (
    <div className='footer-copyright'>
        © Copyright {new Date().getFullYear()} <UnderlineLink href='/'>{AppConfig.title}</UnderlineLink>.
    </div>
);

export { FooterCopyright };

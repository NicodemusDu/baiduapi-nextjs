/*
 * @Author: Nicodemus nicodemusdu@gmail.com
 * @Date: 2022-10-29 23:19:42
 * @LastEditors: Nicodemus nicodemusdu@gmail.com
 * @LastEditTime: 2022-10-30 12:36:12
 * @FilePath: /notion-toolbox/src/components/footer/FooterIconList.tsx
 * @Description:
 *
 * Copyright (c) 2022 by Nicodemus nicodemusdu@gmail.com, All Rights Reserved.
 */
import { ReactNode } from 'react';

type IFooterIconListProps = {
    children: ReactNode;
};

const FooterIconList = (props: IFooterIconListProps) => (
    <div className='footer-icon-list flex flex-wrap'>{props.children}</div>
);

export { FooterIconList };

/*
 * @Author: Nicodemus nicodemusdu@gmail.com
 * @Date: 2022-10-29 21:07:11
 * @LastEditors: Nicodemus nicodemusdu@gmail.com
 * @LastEditTime: 2022-10-29 21:07:16
 * @FilePath: /notion-toolbox/src/components/background/Background.tsx
 * @Description:
 *
 * Copyright (c) 2022 by Nicodemus nicodemusdu@gmail.com, All Rights Reserved.
 */
import { ReactNode } from 'react';

type IBackgroundProps = {
    children: ReactNode;
    color: string;
};

const Background = (props: IBackgroundProps) => <div className={props.color}>{props.children}</div>;

export { Background };

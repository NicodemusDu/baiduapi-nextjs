/*
 * @Author: Nicodemus nicodemusdu@gmail.com
 * @Date: 2022-10-31 15:37:31
 * @LastEditors: Nicodemus nicodemusdu@gmail.com
 * @LastEditTime: 2022-10-31 15:38:06
 * @FilePath: /notion-toolbox/src/pages/api/redirect_google.ts
 * @Description:
 *
 * Copyright (c) 2022 by Nicodemus nicodemusdu@gmail.com, All Rights Reserved.
 */
import { NextApiRequest, NextApiResponse } from 'next';

export default function redirect_google(req: NextApiRequest, res: NextApiResponse) {
    res.redirect(307, 'https://google.com');
}

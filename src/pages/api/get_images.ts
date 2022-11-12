/*
 * @Author: Nicodemus nicodemusdu@gmail.com
 * @Date: 2022-10-31 15:40:47
 * @LastEditors: Nicodemus nicodemusdu@gmail.com
 * @LastEditTime: 2022-10-31 15:47:14
 * @FilePath: /notion-toolbox/src/pages/api/get_images.ts
 * @Description:
 *
 * Copyright (c) 2022 by Nicodemus nicodemusdu@gmail.com, All Rights Reserved.
 */
import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

const filePath = path.join(process.cwd(), '/public/images/large-og.png');
const imageBuffer = fs.readFileSync(filePath);
export default function get_images(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader('Content-Type', 'image/jpg');
    res.send(imageBuffer);
}

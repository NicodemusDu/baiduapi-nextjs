/*
 * @Author: Nicodemus nicodemusdu@gmail.com
 * @Date: 2022-10-29 21:21:19
 * @LastEditors: Nicodemus nicodemusdu@gmail.com
 * @LastEditTime: 2022-10-31 10:40:07
 * @FilePath: /notion-toolbox/src/lib/api.ts
 * @Description: 用于服务端的api调用，在客户端使用会造成跨域访问
 *
 * Copyright (c) 2022 by Nicodemus nicodemusdu@gmail.com, All Rights Reserved.
 */
const GET_ACCESS_TOKEN_URL = 'https://aip.baidubce.com/oauth/2.0/token';
// const POST_TTS_CREATE_URL = 'https://aip.baidubce.com/rpc/2.0/tts/v1/create';
// const POST_TTS_QUERY_URL = 'https://aip.baidubce.com/rpc/2.0/tts/v1/query';
const API_KEY = process.env.NEXT_PUBLIC_BAIDU_APIKEY;
const SECRET_KEY = process.env.NEXT_PUBLIC_BAIDU_SECRETKEY;

export async function getAccessToken() {
    const url = `${GET_ACCESS_TOKEN_URL}?grant_type=client_credentials&client_id=${API_KEY}&client_secret=${SECRET_KEY}`;
    return fetch(url)
        .then((response) => response.json())
        .then((json) => {
            return json;
        });
}

/*
 * @Author: Nicodemus nicodemusdu@gmail.com
 * @Date: 2022-10-29 23:19:42
 * @LastEditors: Nicodemus nicodemusdu@gmail.com
 * @LastEditTime: 2022-10-30 11:47:49
 * @FilePath: /notion-toolbox/src/components/NextImage.tsx
 * @Description:
 *
 * Copyright (c) 2022 by Nicodemus nicodemusdu@gmail.com, All Rights Reserved.
 */
import Image, { ImageProps } from 'next/image';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

type NextImageProps = {
    useSkeleton?: boolean;
    imgClassName?: string;
    blurClassName?: string;
    alt: string;
} & (
    | { layout: 'fill'; width?: string | number; height?: string | number }
    | { width: string | number; height: string | number }
) &
    ImageProps;

/**
 *
 * @description Must set width using `w-` className
 * @param useSkeleton add background with pulse animation, don't use it if image is transparent
 */
export default function NextImage({
    useSkeleton = false,
    src,
    width = undefined,
    height = undefined,
    alt,
    className,
    imgClassName,
    blurClassName,
    ...rest
}: NextImageProps) {
    const [status, setStatus] = React.useState(useSkeleton ? 'loading' : 'complete');
    const widthIsSet = className?.includes('w-') ?? false;
    const layoutIsSet = 'layout' in rest ? true : false;

    return (
        <figure style={!widthIsSet ? { width: `${width}px` } : undefined} className={className}>
            {layoutIsSet ? (
                <Image
                    className={clsxm(imgClassName, status === 'loading' && clsxm('animate-pulse', blurClassName))}
                    src={src}
                    alt={alt}
                    fill={true}
                    onLoadingComplete={() => setStatus('complete')}
                    {...rest}
                />
            ) : (
                <Image
                    className={clsxm(imgClassName, status === 'loading' && clsxm('animate-pulse', blurClassName))}
                    src={src}
                    width={width}
                    height={height}
                    alt={alt}
                    onLoadingComplete={() => setStatus('complete')}
                    {...rest}
                />
            )}
        </figure>
    );
}

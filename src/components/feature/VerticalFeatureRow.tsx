/*
 * @Author: Nicodemus nicodemusdu@gmail.com
 * @Date: 2022-10-29 21:12:16
 * @LastEditors: Nicodemus nicodemusdu@gmail.com
 * @LastEditTime: 2022-10-31 12:12:57
 * @FilePath: /notion-toolbox/src/components/feature/VerticalFeatureRow.tsx
 * @Description:
 *
 * Copyright (c) 2022 by Nicodemus nicodemusdu@gmail.com, All Rights Reserved.
 */
import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/router';

type IVerticalFeatureRowProps = {
    title: string;
    description: string | string[];
    image: string;
    imageAlt: string;
    reverse?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
    const verticalFeatureClass = clsx('mt-20', 'flex', 'flex-wrap', 'items-center', {
        'flex-row-reverse': props.reverse,
    });

    const router = useRouter();

    return (
        <div className={verticalFeatureClass}>
            <div className='basis-1/2 sm:px-6'>
                <h3 className='text-3xl font-semibold text-gray-900'>{props.title}</h3>
                {typeof props.description !== 'string' ? (
                    props.description.map((des) => {
                        return (
                            <div key={des} className='mt-6 text-xl leading-9'>
                                {des}
                            </div>
                        );
                    })
                ) : (
                    <div className='mt-6 text-xl leading-9'>{props.description}</div>
                )}
            </div>

            <div className='relative basis-1/2 object-cover p-40'>
                <Image
                    src={`${router.basePath}${props.image}`}
                    alt={props.imageAlt}
                    fill
                    sizes='(max-width: 768px) 100vw,(max-width: 1200px) 100vw,33vw'
                />
            </div>
        </div>
    );
};

export { VerticalFeatureRow };

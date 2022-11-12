/*
 * @Author: Nicodemus nicodemusdu@gmail.com
 * @Date: 2022-10-29 22:06:06
 * @LastEditors: Nicodemus nicodemusdu@gmail.com
 * @LastEditTime: 2022-10-31 17:00:41
 * @FilePath: /notion-toolbox/src/site/notiontoolbox/VerticalFeatures.tsx
 * @Description:
 *
 * Copyright (c) 2022 by Nicodemus nicodemusdu@gmail.com, All Rights Reserved.
 */
import { VerticalFeatureRow } from '@/components/feature/VerticalFeatureRow';
import { Section } from '@/components/layout/Section';

const VerticalFeatures = () => (
    <Section
        title='Make it better!'
        description='Notion Toolbox can help you customize the cover, icon, content ... of the page in the easiest way. If you have other ideas, please let me know.'
    >
        <VerticalFeatureRow
            title='Notion Widgets'
            description={[
                'Use notion widgets to make your notion page unique. Fully customizable, all widgets are consistent and seamless.',
                'comming soon',
            ]}
            image='/svg/Widgets.svg'
            imageAlt='Notion widget and Notion widgets'
        />
        <VerticalFeatureRow
            title='Notion Icons'
            description={[
                'Flexible use of Notion Icons can make the intent of a document clearly displayed. 100+ free Icons to make your Notion Page stand out.',
                'comming soon',
            ]}
            image='/svg/Icons.svg'
            imageAlt='Notion icon and Notion icons'
            reverse
        />
        <VerticalFeatureRow
            title='Notion Dynamic Covers'
            description={[
                'Notion Cover is more than just a picture, with just a few clicks of your finger, the cover can display weather, news, action quotes, animated wallpapers...',
                'comming soon',
            ]}
            image='/svg/Covers.svg'
            imageAlt='Notion cover and Notion covers and Notion Dynamic Covers'
        />
    </Section>
);

export { VerticalFeatures };

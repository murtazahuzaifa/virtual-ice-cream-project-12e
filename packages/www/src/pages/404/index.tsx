import { PageProps } from 'gatsby';
import React, { FC } from 'react';
import * as s from './style';
import {PageLayout, Seo} from '../../components';

const PageNotFound:FC<PageProps> = () => {
    return (
        <PageLayout>
            <Seo title="Ice-Cream Freezing" />
        <s.Container>
            <h1>🧊Your Ice-Cream🍦 is Freezing...🧊</h1>
            <h1>Retry after 2-3 minutes 😇</h1>
        </s.Container>
        </PageLayout>
    )
}

export default PageNotFound;

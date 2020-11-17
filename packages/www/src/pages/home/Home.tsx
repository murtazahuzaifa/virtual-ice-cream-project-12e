import React, { FC } from 'react';
import { Seo, PageLayout, IceCream, Button } from '../../components';
import { navigate } from 'gatsby';
import * as s from './style';

const Home: FC<{}> = ({ }) => {
    return (
        <PageLayout>
            <Seo />
            <s.IcreamWrap>
                <IceCream />
                <IceCream />
                <IceCream />
                <IceCream />
            </s.IcreamWrap>
            <div style={{ display: 'flex', margin: '30px' }} >
                <Button onClick={() => { navigate('/create-ice-cream') }} >
                    Make a new Ice-Cream to send to a friend
                </Button>
            </div>
        </PageLayout>
    )
}

export default Home;
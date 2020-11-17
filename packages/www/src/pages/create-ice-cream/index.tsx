import React, { FC, useState } from 'react';
import { Seo, PageLayout, IceCream, ColorPalette,CreateIceCreamForm } from '../../components';
import {ColorState} from '../../components/ColorPalette';
import * as s from './style';

// value={col.color1} onChange={e => { setCol({ ...col, color1: e.target.value }) }}
const CreateIceCream: FC<{}> = ({ }) => {

    const [col, setCol] = useState<ColorState>({ color1: '#f0ecdb', color2: '#9f5e32', color3: '#5f3c25' })

    return (
        <PageLayout>
            <Seo title="Create Ice-Cream" />
            <s.Container>
                <div style={{ width: '180px' }} >
                    <IceCream crmlayer1={col.color1} crmlayer4={col.color1} crmlayer2={col.color2} crmlayer3={col.color3} />
                </div>
                <div>
                    <ColorPalette
                        value1={col.color1} onChange1={e => { setCol({ ...col, color1: e.target.value }) }}
                        value2={col.color2} onChange2={e => { setCol({ ...col, color2: e.target.value }) }}
                        value3={col.color3} onChange3={e => { setCol({ ...col, color3: e.target.value }) }}
                    />
                </div>
                <div>
                    <CreateIceCreamForm iceCreamColor={col} />
                </div>
            </s.Container>
        </PageLayout>
    )
}

export default CreateIceCream;
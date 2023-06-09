import React from 'react'
import { ItemCard, CardContentsWrapper } from './styledComponents/StyledComponents';
import { CardHeading, CardBody } from './CardContents';


function FeaturesCard(props) {
    return (
        <ItemCard key={props.index} style={{ color: '#212529', backgroundColor: '#dee2e6', height: 'min-content' }}>
            <CardContentsWrapper>
                <CardHeading heading={props.heading} />
                <CardBody data={props.data} />
                <div style={{ marginTop: 'auto' }}>
                    <img src={props.img} alt={props.heading} style={{ width: '100%', height: '100%' }} />
                </div>
            </CardContentsWrapper>
        </ItemCard>
    )
}

export default FeaturesCard
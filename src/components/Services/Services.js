import React from 'react';
import {ServicesContainer,ServicesH1,ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServiceElements';
import Icon1 from '../../images/savings.svg'
import Icon2 from '../../images/office.svg'
import Icon3 from '../../images/cashback.svg'

const Services = () => {
    return (
        <ServicesContainer id='services' >
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>We help to reduce your fees and increase your overall revenue.</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Virtual Offices</ServicesH2>
                    <ServicesP>Access our platform online anywhere in the world 24/7 dedicated services.</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock our special membership card and enjoy 5% cashback </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    );
};

export default Services;
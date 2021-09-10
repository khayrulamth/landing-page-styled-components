import React from 'react';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './InfoElements';
import { Button } from '../ButtonElements';
// import img from '../../images/svg-1.svg'


const Info = ({ lightBg, id, imgStart, topLine, headline, darkText, lightText, description, buttonLabel, alt, primary, dark, dark2, img }) => {
    
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id} >
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to='home'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact={true}
                                    offset={-80}
                                    primary={primary ? 1 : 0}
                                    dark={dark? 1: 0}
                                    dark2={dark? 1: 0}
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
};

export default Info;
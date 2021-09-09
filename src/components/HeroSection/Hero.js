import React, { useState } from 'react';
import {HeroContainer,HeroBg,VideoBg,HeroContent, HeroH1,HeroP, HeroBtnWrapper,ArrowForward, ArrowRight} from './HeroElements';
import Video from '../../videos/video.mp4';
import {Button} from '../../components/ButtonElements';

const Hero = () => {
    const [hover,setHover] = useState(false);
    const onHover = () =>{
        setHover(!hover);
    }
    return (
        <HeroContainer id ="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Banking Made Easy</HeroH1>
                <HeroP>Sign Up for a new account and receive a $250 in credit towards your next payment. </HeroP>
                <HeroBtnWrapper>
                    <Button 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover} 
                    primary = "true"
                    dark = "true"
                    to="signup"> Get Started {hover ? <ArrowForward /> : <ArrowRight />}

                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default Hero;
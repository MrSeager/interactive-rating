import React, { FC } from 'react';
import './InteractRating.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Image } from 'react-bootstrap';
//Animation
import AOS from 'aos';
import 'aos/dist/aos.css';
//Images
import ImgIll from '../images/illustration-thank-you.svg';

type EndPanelProp = {
    value: number;
}

interface textProp {
    head_2: string;
    head_3: string;
    par_2: string;
}

const EndPanel: FC<EndPanelProp> = ({ value }) => {
    const textProp: textProp = {
        head_2: 'You selected ' + value + ' out of 5',
        head_3: 'Thank you!',
        par_2: 'We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!'
    }

    AOS.init();

    return (
        <Container data-aos="flip-down" className='cs-w cs-bg-2 p-5 gap-3 cs-br d-flex flex-column align-items-center text-center'>
            <Image src={ImgIll} alt='illustration' />
            <h2 className='mt-3 cs-bg-3 cs-tc-2 rounded-pill fs-5 py-2 px-4 fw-normal'>{textProp.head_2}</h2>
            <h3 className='mt-3 h1 text-white'>{textProp.head_3}</h3>
            <p className='cs-tc'>{textProp.par_2}</p>
        </Container>
    );
}

export default EndPanel;
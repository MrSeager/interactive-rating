import React, { FC } from 'react';
import './InteractRating.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Image, ToggleButton, ToggleButtonGroup, Button } from 'react-bootstrap';
//Animation
import AOS from 'aos';
import 'aos/dist/aos.css';
//Images
import ImgStar from '../images/icon-star.svg';

type RatingPanelProps = {
    value: number;
    setValue: (value: number) => void;
    setSubmit: (submit: boolean) => void;
}

interface textProp {
    head_1: string;
    par_1: string;
}

const RatingPanel: FC<RatingPanelProps> = ({ value, setValue, setSubmit}) => {
    const textProp: textProp = {
        head_1: 'How did we do?',
        par_1: 'Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!'
    }

    const handleChange = (val: number) => setValue(val);
    const handleSubmit = () => setSubmit(true);

    AOS.init();

    return (
        <Container data-aos="flip-up" className='cs-w cs-bg-2 p-4 gap-3 cs-br d-flex flex-column align-items-start'>
            <div className='cs-s cs-bg-3 p-3 rounded-circle d-flex flex-column align-items-center'>
                <Image fluid src={ImgStar} alt='star' />
            </div>
            <h1 className='h1 text-white'>{textProp.head_1}</h1>
            <p className='cs-tc'>{textProp.par_1}</p>
            <ToggleButtonGroup type='radio' name='options' className='gap-4 w-100' value={value} onChange={handleChange}>
                {[1, 2, 3, 4, 5].map((val) => (
                    <ToggleButton 
                        key={val}
                        className={`cs-btn d-flex flex-column justify-content-center rounded-circle border-0 cs-s fs-2 ${value === val ? 'active' : ''}`}
                        id={`tbg-radio-${val}`}
                        value={val}
                        checked={value === val}>{val}</ToggleButton>
                ))}
            </ToggleButtonGroup>
            <Button disabled={isNaN(value)} onClick={handleSubmit} className='py-3 w-100 rounded-pill mt-2 text-uppercase fw-bold border-0 cs-btn-2'>Submit</Button>
        </Container>
    );
};

export default RatingPanel;
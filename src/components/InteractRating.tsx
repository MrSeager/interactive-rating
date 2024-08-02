import React, { useState, FC } from 'react';
import './InteractRating.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
//Components
import RatingPanel from './RatingPanel.tsx';
import EndPanel from './EndPanel.tsx';

const InteractRating: FC = () => {
    const [value, setValue] = useState<number>(NaN);
    const [submit, setSubmit] = useState<boolean>(false);

    return (
        <Container fluid className='cs-h cs-bg d-flex flex-column justify-content-center'>
            {!submit ? (
                <RatingPanel value={value} setValue={setValue} setSubmit={setSubmit} />
            ) : (
                <EndPanel value={value} />
            )}
            
            
        </Container>
    );
};

export default InteractRating;
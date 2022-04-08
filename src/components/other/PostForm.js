import React , { useState } from 'react';
import { Form , Button } from 'react-bootstrap';
import { formComment } from '../../redux/redusers/productsReduser';
import { colors } from '../../styled/globalStyled';
import { 
    StyledContainer,
    StyledFormGroup,
    StyledBsStarFill
} from '../../styled/other/PostForm';
import { useDispatch, useSelector } from 'react-redux';
import { LogInForm } from './LogInForm';

export const PostForm = () => {
    const [formValue, setFormValue] = useState(
        {
            rating: '',
            comments: '',
        }
    );
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0);
    const dispath = useDispatch();
    const handleClick = value => {
      setCurrentValue(value);
      setFormValue({...formValue, rating: value.toString()});
    };
    const userInfo = useSelector(store => store.userInfo.userInfo)
    const handleMouseOver = newHoverValue => setHoverValue(newHoverValue);

    const handleMouseLeave = () => setHoverValue(undefined);

    const handleTextarea = val => setFormValue({...formValue, comments:val});

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    //const test = false
    const handleSubmit = event => {
        event.preventDefault();
        if (!!userInfo.email) {
            dispath(formComment(formValue));
            setFormValue({ ...formValue, comments:''});
            setCurrentValue(0);
        }else {
            handleShow()
        }
    };


    return(<>
            <LogInForm show={show} handleClose={handleClose} />
            <StyledContainer>
                <Form onSubmit={handleSubmit}>
                    <StyledFormGroup controlId="exampleForm.ControlInput1">
                        {stars.map((_, index) => (
                                <StyledBsStarFill
                                key={index}
                                size={24}
                                onClick={() => handleClick(index + 1)}
                                onMouseOver={() => handleMouseOver(index + 1)}
                                onMouseLeave={handleMouseLeave}
                                color={(hoverValue || currentValue) > index ? colors.starActive : colors.starDisable}
                                />
                        ))}
                    </StyledFormGroup>
                    <StyledFormGroup controlId="exampleForm.ControlTextarea1">
                        <Form.Label>comment</Form.Label>
                        <Form.Control as="textarea" rows={3} value={formValue.comments} onChange={event => handleTextarea(event.target.value)} />
                    </StyledFormGroup>
                    <Button variant="primary" type="submit">
                            Submit
                    </Button>
                </Form>
            </StyledContainer>
        </>
    );
};

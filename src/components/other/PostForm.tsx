import React , { useState } from 'react';
import { Form , Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { LogInForm } from './LogInForm';

import { formComment } from '../../redux/ducks/productsDuck';
import { colors } from '../../styled/globalStyled';
import { StyledContainer, StyledFormGroup, StyledBsStarFill } from '../../styled/other/PostForm';
import { TypeUserinfo, TypePostForm } from '../../interface';

export const PostForm:React.FC = () => {
    const [currentValue, setCurrentValue] = useState<number>(0);
    const [hoverValue, setHoverValue] = useState<undefined | number>(undefined);
    const [show, setShow] = useState<boolean>(false);
    const [formValue, setFormValue] = useState<TypePostForm>(
        {
            rating: '',
            comments: '',
        }
    );
    
    const stars: number[] = Array(5).fill(0);
    const dispatch = useDispatch();
    const userInfo: TypeUserinfo = useSelector((store:{userInfo:{userInfo: TypeUserinfo}}) => store.userInfo.userInfo);

    const handleMouseOver = (newHoverValue: React.SetStateAction<number | undefined>) => setHoverValue(newHoverValue);
    const handleMouseLeave = () => setHoverValue(undefined);
    const handleTextarea = (val: string) => setFormValue({...formValue, comments:val});
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        if (!!userInfo.email) {
            dispatch(formComment(formValue));
            setFormValue({ ...formValue, comments:''});
            setCurrentValue(0);
        } else {
            handleShow()
        }
    };
    const handleClick = (value: React.SetStateAction<number>) => {
        setCurrentValue(value);
        setFormValue({...formValue, rating: value.toString()});
    };

    return (
        <>
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

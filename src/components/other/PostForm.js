import React , { useState } from 'react';
import { Form , Button } from 'react-bootstrap';
import { postCommentAPI } from '../../api';
import { colors } from '../../styled/globalStyled';
import { 
    StyledContainer,
    StyledFormGroup,
    StyledBsStarFill
} from '../../styled/other/PostForm';

export const PostForm = () => {
    const [formValue, setFormValue] = useState(
        {
            id: 'B0721KZEEE',
            rating: '',
            coments: ''
        }
    );
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0);
  
    const handleClick = value => {
      setCurrentValue(value);
      setFormValue({...formValue, rating:value});
    };
  
    const handleMouseOver = newHoverValue => setHoverValue(newHoverValue);

    const handleMouseLeave = () => setHoverValue(undefined);

    const handleTextarea = val => setFormValue({...formValue, coments:val});

    const handleSubmit = event => {
        event.preventDefault();
        postCommentAPI(formValue);
    };

    return(
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
                    <Form.Control as="textarea" rows={3} value={formValue.coments} onChange={event => handleTextarea(event.target.value)} />
                </StyledFormGroup>
                  <Button variant="primary" type="submit">
                        Submit
                  </Button>
            </Form>
        </StyledContainer>
    );
};

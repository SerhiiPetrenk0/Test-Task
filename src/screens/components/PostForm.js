import React , { useState } from "react";
import { Form , Container, Button } from "react-bootstrap";
import { BsStarFill } from "react-icons/bs";

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};

export const PostForm = () => {
    const [formValue, setFormValue ] = useState(
        {
            id: "B0721KZEEE",
            rating: "",
            coments: ""
        }
    )
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0)
  
    const handleClick = value => {
      setCurrentValue(value)
      setFormValue({...formValue, rating:value})
    }
  
    const handleMouseOver = newHoverValue => {
      setHoverValue(newHoverValue)
    };
  
    const handleMouseLeave = () => {
      setHoverValue(undefined)
    }
    const handleTextarea = (val) => {
        setFormValue({...formValue, coments:val})
    } 
    const handleSubmit = (event) => {
        event.preventDefault()
        fetch('http://demo8021751.mockable.io/comments', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formValue)
        })
        .then((response) => response.json())
        .then((result) =>  result.result.push(formValue))


        
    }
    

    return(
        <Container className="mt-5 mb-4">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    {stars.map((_, index) => {
                        return (
                            <BsStarFill
                            key={index}
                            size={24}
                            onClick={() => handleClick(index + 1)}
                            onMouseOver={() => handleMouseOver(index + 1)}
                            onMouseLeave={handleMouseLeave}
                            color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                            style={{
                                marginRight: 7,
                                cursor: "pointer"
                            }}
                            />
                        )
                    })}
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>comment</Form.Label>
                    <Form.Control as="textarea" rows={3} value={formValue.coments} onChange={event => handleTextarea(event.target.value)} />
                </Form.Group>
                  <Button variant="primary" type="submit">
                        Submit
                  </Button>
            </Form>
        </Container>
    )
}
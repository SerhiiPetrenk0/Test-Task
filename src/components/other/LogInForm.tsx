import React from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { useDispatch  } from 'react-redux';
import { useFormik } from 'formik';

import { StyledValidEmail } from '../../styled/other/LogInForm';
import { fillUser } from '../../redux/ducks/userInfoDuck';
import { TypeFormikLogInForm, TypeUserinfo } from '../../interface';
import { YopLoginForm } from '../../validation';

interface TypeProps {
  show: boolean,
  handleClose: () => void
}

export const LogInForm: React.FC<TypeProps> = props => {
    const { show, handleClose } = props;
    const dispatch = useDispatch();
    const formik: TypeFormikLogInForm = useFormik({
      initialValues: {
        email: '',
        password: ''
      },
      validationSchema: YopLoginForm,
      onSubmit: (values: TypeUserinfo) => {
        dispatch(fillUser(formik.values))
        handleClose()
      }
    });
    
    const emailLog = !!formik.errors.email ?
      formik.errors.email :
      "We'll never share your email with anyone else.";
    const emailMassage: JSX.Element = (
      <StyledValidEmail check={formik.errors.email}>
        {emailLog}
      </StyledValidEmail>
    );

    const passwordLog = !!formik.errors.password ?
      formik.errors.password : 
      "Your password must be 6 to 16 characters long, contain letters, numbers, special characters !@#$%^&*, And no spaces or emojis."
    const passwordMassage: JSX.Element = (
      <StyledValidEmail check={formik.errors.password}>
        {passwordLog}
      </StyledValidEmail>
    );

    return (
      <>
        <Modal 
          show={show} 
          onHide={handleClose} 
          backdrop="static" 
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Registration</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                  name="email" 
                  onChange={formik.handleChange} 
                  value={formik.values.email} 
                  type="email" 
                  placeholder="Enter email" 
                />
                {emailMassage}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  name="password" 
                  onChange={formik.handleChange} 
                  value={formik.values.password} 
                  type="password" 
                  placeholder="Password" 
                />
                {passwordMassage}
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
} ;

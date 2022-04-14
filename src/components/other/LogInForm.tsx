import React from 'react';
import { YopLoginForm } from '../../validation';
import { Form, Button, Modal } from 'react-bootstrap';
import { useDispatch  } from 'react-redux';
import { useFormik } from 'formik';
import { StyledValidEmail } from '../../styled/other/LogInForm';
import { fillUser } from '../../redux/ducks/userInfoDuck';

export const LogInForm = (props: { show: any; handleClose: any; }) => {
    const { show, handleClose } = props;
    const dispatch = useDispatch();
    const formik = useFormik({
      initialValues:{
        email: '',
        password: ''
      },
      validationSchema: YopLoginForm,
      onSubmit: values => {
        dispatch(fillUser(formik.values))
        handleClose()
      }
    });
  
    const emailMassage = <StyledValidEmail check={formik.errors.email}>{!!formik.errors.email ? formik.errors.email : "We'll never share your email with anyone else."}</StyledValidEmail>;
    const passwordMassage = <StyledValidEmail check={formik.errors.password}>{!!formik.errors.password ? formik.errors.password : "Your password must be 6 to 16 characters long, contain letters, numbers, special characters !@#$%^&*, And no spaces or emojis."}</StyledValidEmail>;

    return (
      <>
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>Registration</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" onChange={formik.handleChange} value={formik.values.email} type="email" placeholder="Enter email" />
                {emailMassage}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" onChange={formik.handleChange} value={formik.values.password} type="password" placeholder="Password" />
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

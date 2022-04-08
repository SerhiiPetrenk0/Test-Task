import React from "react"
import * as Yup from 'yup'
import { Form, Button, Modal } from "react-bootstrap"
import { useDispatch  } from "react-redux"
import { useFormik } from "formik"
import { StyledValidEmail } from "../../styled/other/LogInForm"
import { fillUser } from "../../redux/redusers/userInfoReduser"

export const LogInForm = props => {
    const { show, handleClose } = props
    const dispatch = useDispatch()
    const formik = useFormik({
      initialValues:{
        email: '',
        password: ''
      },
      validationSchema: Yup.object({
        email: Yup
        .string()
        .max(30, 'Max simbol 15))')
        .required('* this field is required')
        .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ , "Invalid email"),
        password: Yup
        .string()
        .required('passwordrequired')
        .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/ , 'FALSE PASSWORD')
      }),
      onSubmit: values => {
        console.log(values)
        dispatch(fillUser(formik.values))
        handleClose()
      }
    })
    //почистити код / повиносити змінні / проблеми із змінною check / регулярки в змінні / 
      const emaillog = !!formik.errors.email ? formik.errors.email : "We'll never share your email with anyone else."
      const passwordlog = !!formik.errors.password ? formik.errors.password : "Your password must be 6 to 16 characters long, contain letters, numbers, special characters !@#$%^&*, And no spaces or emojis."
      const emailMassage = <StyledValidEmail check={!!formik.errors.email}>{emaillog}</StyledValidEmail>
      const passwordMassage = <StyledValidEmail check={!!formik.errors.password}>{passwordlog}</StyledValidEmail>
     console.log(!!formik.errors.password)
    return (
<>
  <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
    <Modal.Header closeButton>
      <Modal.Title>Modal title</Modal.Title>
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
    )
} 
import React, { useState } from "react"
import { Form, FloatingLabel, Button, Modal } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { fillUser } from "../../redux/redusers/userInfoReduser"

export const LogInForm = props => {
    const { show, handleClose } = props
    const [ userInfo, setUserInfo ] = useState({
        email: '',
        password: ''
    })
    const dispatch = useDispatch()
    const handleSend = () => {
        dispatch(fillUser(userInfo))
    }
    return (
        <>
            <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
            >
        <Form.Control 
        defaultValue={userInfo.email} 
        onChange={event => setUserInfo({...userInfo, email: event.target.value})} 
        type="email" 
        placeholder="name@example.com" 
        />
    </FloatingLabel>
    <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control 
        defaultValue={userInfo.password}
        onChange={event => setUserInfo({...userInfo, password: event.target.value})}  
        type="password" 
        placeholder="Password" 
        />
    </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSend}  >Understood</Button>
        </Modal.Footer>
      </Modal>
</>
    )
} 
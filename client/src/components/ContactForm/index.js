import React, { useState } from 'react';
import { ContactFormContainer, Heading, Separator, InputElement, Input, Submit, Textarea, SubmitConfirmation } from './FormElements'

const ContactForm = () => {
    const [show, setShow] = useState("none");
    const [contactInfo, setContactInfo] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        error: false
    });

    const formSubmit = () => {
        if (contactInfo.name === "" || contactInfo.email === "" || contactInfo.message === "") {
            setContactInfo({
                ...contactInfo,
                error: true
            });
        } else {
            setShow("block");
            setContactInfo({
                name: "",
                email: "",
                phone: "",
                message: "",
                error: false
            });
            setTimeout(() => setShow("none"), 5000);
        }
      }

      const check = (val) => {
        if (contactInfo.error && val === "") {
            return false
        } else {
            return true
        }
    }

  return (
    <ContactFormContainer>
        <Heading>
            Get In Touch
        </Heading>
        <Separator />
        <SubmitConfirmation display={show} variant="success" onClose={() => setShow("none")} dismissible>Information sent!</SubmitConfirmation>
        <InputElement>
            <Input type="text" value={contactInfo.name}  className={`name ${check(contactInfo.name) ? "" : "error"}`} placeholder="Name" onChange={e => setContactInfo({...contactInfo, name: e.target.value})} />
        </InputElement>
        <InputElement>
            <Input type="text" value={contactInfo.email} className={`email ${check(contactInfo.email) ? "" : "error"}`} placeholder="Email" onChange={e => setContactInfo({...contactInfo, email: e.target.value})} />
        </InputElement>
        <InputElement>
            <Input type="text" value={contactInfo.phone} className="phone" placeholder="Phone" onChange={e => setContactInfo({...contactInfo, phone: e.target.value})} />
        </InputElement>
        <InputElement>
            <Textarea placeholder="Message" value={contactInfo.message}  className={`message ${check(contactInfo.message) ? "" : "error"}`} onChange={e => setContactInfo({...contactInfo, message: e.target.value})} />
        </InputElement>
        <Submit onClick={() => formSubmit()}>
            <span>
                Submit
            </span>
        </Submit>
    </ContactFormContainer>
  );
};

export default ContactForm;

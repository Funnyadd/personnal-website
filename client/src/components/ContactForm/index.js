import { gql, useMutation } from "@apollo/client"
import React, { useState } from "react"
import { ContactFormContainer, Heading, Input, InputElement, Separator, Submit, Textarea } from "./FormElements"
import { sendEmail } from "../../email/emailSender"

const ContactForm = (props) => {
    const fields = props.data
    const [show, setShow] = useState("none")
    const [contactInfo, setContactInfo] = useState({
        name: "",
        email: "",
        phone: "",
        body: "",
        error: false,
    })

    const [createMessage] = useMutation(gql`
        mutation CreateMessage ($name: String!, $email: String!, $phone: String!, $body: String!) {
            createMessage(data: {
                name: $name,
                email: $email,
                phone: $phone,
                body: $body
            }) {
                name
                documentId
            }
        }`
    );

    const FormSubmit = () => {
        if (contactInfo.name === "" || contactInfo.email === "" || contactInfo.body === "") {
            setContactInfo({
                ...contactInfo,
                error: true,
            })
        } else {
            createMessage({
                variables: { 
                    name: contactInfo.name ,
                    email: contactInfo.email,
                    phone: contactInfo.phone,
                    body: contactInfo.body
                }
            })
            .catch(_ => console.log("Error creating message in strapi."))
        
            // Send contact info email to me
            sendEmail(3, "adam@adammihajlovic.ca", contactInfo)
            .catch(_ => console.log("Error sending email to admin."))

            // Send confirmation notification to user
            let isEnglish = fields.nameField === "Name";
            sendEmail(isEnglish ? 1 : 2, contactInfo.email)
            .catch(_ => console.log("Error sending email to user."))
            .then(_ => {
                setShow("block")
                setContactInfo({
                    name: "",
                    email: "",
                    phone: "",
                    body: "",
                    error: false,
                })
                setTimeout(() => setShow("none"), 3500)
            })
        }
    }

    const check = val => {
        if (contactInfo.error && val === "") return false
        return true
    }

    return (
        <ContactFormContainer>
            <Heading>{fields.title}</Heading>
            <Separator />
            <InputElement>
                <Input
                    type="text"
                    value={contactInfo.name}
                    className={`name ${check(contactInfo.name) ? "" : "error"}`}
                    placeholder={fields.nameField}
                    required
                    onChange={e => setContactInfo({ ...contactInfo, name: e.target.value })}
                />
            </InputElement>
            <InputElement>
                <Input
                    type="email"
                    value={contactInfo.email}
                    className={`email ${check(contactInfo.email) ? "" : "error"}`}
                    placeholder={fields.emailField}
                    required
                    onChange={e =>
                        setContactInfo({
                            ...contactInfo,
                            email: e.target.value,
                        })
                    }
                />
            </InputElement>
            <InputElement>
                <Input
                    type="tel"
                    value={contactInfo.phone}
                    className="phone"
                    placeholder={fields.phoneField}
                    onChange={e =>
                        setContactInfo({
                            ...contactInfo,
                            phone: e.target.value,
                        })
                    }
                />
            </InputElement>
            <InputElement>
                <Textarea
                    placeholder={fields.messageField}
                    value={contactInfo.body}
                    className={`message ${check(contactInfo.message) ? "" : "error"}`}
                    required
                    onChange={e =>
                        setContactInfo({
                            ...contactInfo,
                            body: e.target.value,
                        })
                    }
                />
            </InputElement>
            <div className="d-flex justify-content-between">
                <Submit onClick={() => FormSubmit()}>
                    <span>{fields.submitButton}</span>
                </Submit>
                <div className={`align-middle text-white p-2 my-1 me-3 ${show === "block" ? "d-block" : "d-none"}`}>
                    {fields.confirmation}!
                </div>
            </div>
        </ContactFormContainer>
    )
}

export default ContactForm

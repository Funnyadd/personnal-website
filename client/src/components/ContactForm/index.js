import React, { useState } from "react"
import { ContactFormContainer, Heading, Separator, InputElement, Input, Submit, Textarea } from "./FormElements"
import { useMutation , gql } from "@apollo/client"

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
                data {
                    attributes {
                        name
                        email
                        phone
                        body
                    }
                }
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
            createMessage({ variables: { 
                name: contactInfo.name ,
                email: contactInfo.email,
                phone: contactInfo.phone,
                body: contactInfo.body

            } })

            setShow("block")
            setContactInfo({
                name: "",
                email: "",
                phone: "",
                body: "",
                error: false,
            })
            setTimeout(() => setShow("none"), 3500)
        }
    }

    const check = val => {
        if (contactInfo.error && val === "") return false
        else return true
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
                    onChange={e => setContactInfo({ ...contactInfo, name: e.target.value })}
                />
            </InputElement>
            <InputElement>
                <Input
                    type="text"
                    value={contactInfo.email}
                    className={`email ${check(contactInfo.email) ? "" : "error"}`}
                    placeholder={fields.emailField}
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
                    type="text"
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
                <div className={show === "block" ? "align-middle text-white p-2 my-1 me-3 d-block" : "align-middle text-white p-2 my-1 me-3 d-none"}>{fields.confirmation}!</div>
            </div>
        </ContactFormContainer>
    )
}

export default ContactForm

import React from "react"
// import ContactForm from '../ContactForm'
import { AboutContainer } from "../About/AboutSection"
import { useQuery, gql } from "@apollo/client"
import {
    // FormContainer, Map, Gradient, ContactCol, FormRow,
    IconContainer,
    IconCol,
    IconRow,
    InfoPart,
    Info,
    InfoTitle,
    InfoLink,
    InfoLinkContainer,
    Icon,
} from "./ContactSection"

const Contact = () => {
    const { loading, error, data } = useQuery(gql`
        {
            contacts {
                data {
                    attributes {
                        title
                        value
                        textValue
                        source
                    }
                }
            }
        }
    `)

    if (loading) return <div>Loading content...</div>
    if (error) {
        return (
            <>
                <div>Something broke...</div>
                {error.clientErrors.map((err, index) => (
                    <p key={index}>{err.message}</p>
                ))}
            </>
        )
    }

    const strapiMyContact = data.contacts.data

    return (
        <>
            <AboutContainer className="container">
                <IconRow>
                    {strapiMyContact.map((c, index) => {
                        var text = c.attributes.textValue
                        if (c.attributes.textValue.includes("@")) {
                            text = text.slice(0, text.indexOf("@")) + "\u200B" + text.slice(text.indexOf("@"))
                        }
                        return (
                            <IconCol key={index} md={4}>
                                <InfoPart>
                                    <IconContainer>
                                        <Icon src={c.attributes.source} alt={c.attributes.title}></Icon>
                                    </IconContainer>
                                    <Info>
                                        <InfoTitle>{c.attributes.title}</InfoTitle>
                                        <InfoLinkContainer>
                                            <InfoLink href={c.attributes.value}>{text}</InfoLink>
                                        </InfoLinkContainer>
                                    </Info>
                                </InfoPart>
                            </IconCol>
                        )
                    })}
                </IconRow>
            </AboutContainer>
        </>
    )
}

export default Contact

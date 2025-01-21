import React from "react";
import { AboutContainer } from "../About/AboutSection";
import ContactForm from "../ContactForm";
import AnimationContainer from "../AnimationContainer";
import {
    ContactCol,
    FormRow,
    Gradient,
    Icon,
    IconCol,
    IconContainer,
    IconRow,
    Info,
    InfoLink,
    InfoLinkContainer,
    InfoPart,
    InfoTitle,
    Map,
} from "./ContactSection";

const Contact = (props) => {
    const contactInfo = props.data

    const mapStringBuilder = () => {
        const map = contactInfo.Map[0]
        return `https://maps.google.com/maps?width=500&height=500&`
              +`hl=${map.language}&q=${map.city}%2C%20${map.Province}`
              +`%2C%20${map.Country}&ie=UTF8&t=&z=${map.z_index}&iwloc=B&output=embed`
    }

    return (
        <>
            <AboutContainer className="container">
                <AnimationContainer animation="fadeIn" duration={2}>
                    <FormRow>
                        <ContactCol md={6}>
                            <Gradient>
                                <ContactForm data={contactInfo}/>
                            </Gradient>
                        </ContactCol>
                        <ContactCol md={6}>
                            <Map  
                            title="map"
                            src={mapStringBuilder()}/>
                        </ContactCol>
                    </FormRow>
                </AnimationContainer>
                <IconRow>
                    {contactInfo.contacts.map((c, index) => {
                        var text = c.textValue

                        if (c.textValue.includes("@")) {
                            text = text.slice(0, text.indexOf("@")) + "\u200B" + text.slice(text.indexOf("@"))
                        }

                        return (
                            <IconCol key={index} md={4}>
                                <AnimationContainer animation="fadeIn" delay={(index * 400) + 100} duration={2}>
                                    <InfoPart>
                                        <IconContainer>
                                            <Icon src={c.source} alt={c.title}></Icon>
                                        </IconContainer>
                                        <Info>
                                            <InfoTitle>{c.title}</InfoTitle>
                                            <InfoLinkContainer>
                                                <InfoLink href={c.value}>{text}</InfoLink>
                                            </InfoLinkContainer>
                                        </Info>
                                    </InfoPart>
                                </AnimationContainer>
                            </IconCol>
                        )
                    })}
                </IconRow>
            </AboutContainer>
        </>
    )
}

export default Contact

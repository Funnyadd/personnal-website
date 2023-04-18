import React from "react"
import { Helmet } from "react-helmet"
import logo from "../images/personal-logo.png"

const Seo = () => {
    const getMetaTags = () => {
        const tags = []

        // Title
        tags.push(
            {
                property: "og:title",
                content: "Adam Mihajlovic",
            },
            {
                name: "twitter:title",
                content: "Adam Mihajlovic",
            }
        )

        // Description
        tags.push(
            {
                name: "description",
                content: "Professional E-Portoflio of Adam Mihajlovic. This website show the work that I've done so far.",
            },
            {
                property: "og:description",
                content: "Professional E-Portoflio of Adam Mihajlovic. This website show the work that I've done so far.",
            },
            {
                name: "twitter:description",
                content: "Professional E-Portoflio of Adam Mihajlovic. This website show the work that I've done so far.",
            }
        )
        
        // Website Icon
        tags.push(
            {
                name: "image",
                content: logo,
            },
            {
                property: "og:image",
                content: logo,
            },
            {
                name: "twitter:image",
                content: logo,
            }
        )

        tags.push({ name: "twitter:card", content: "summary_large_image" })

        return tags
    }

    const metaTags = getMetaTags()

    return (
        <Helmet
            title="Adam Mihajlovic"
            link={[
                {
                    rel: "icon",
                    href: logo,
                },
            ]}
            meta={metaTags}
        />
    )
}

export default Seo

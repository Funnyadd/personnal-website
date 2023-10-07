import React from "react"
import { Helmet } from "react-helmet"
import logo from "../images/personal-logo.png"

const Seo = (props) => {
    const seo = props.data.defaultSeo

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
                content: "A personnal website to show my work.",
            },
            {
                property: "og:description",
                content: "A personnal website to show my work.",
            },
            {
                name: "twitter:description",
                content: "A personnal website to show my work.",
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

        if (seo.article) {
            tags.push({
                property: "og:type",
                content: "article",
            })
        }
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

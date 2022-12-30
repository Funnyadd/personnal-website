import React from "react"
import { Helmet } from "react-helmet"
import { useQuery, gql } from "@apollo/client"

const Seo = ({ seo = {} }) => {
    const { loading, error, data } = useQuery(gql`
        {
            global {
                data {
                    attributes {
                        siteName
                        siteDescription
                        favicon {
                            data {
                                attributes {
                                    url
                                }
                            }
                        }
                        defaultSeo {
                            metaTitle
                            metaDescription
                            shareImage {
                                data {
                                    attributes {
                                        url
                                    }
                                }
                            }
                        }
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

    const { siteName, defaultSeo, favicon } = data.global.data.attributes

    // Merge default and page-specific SEO values
    const fullSeo = { ...defaultSeo, ...seo }

    // Add site name to title
    fullSeo.metaTitle = `${fullSeo.metaTitle} | ${siteName}`

    const getMetaTags = () => {
        const tags = []

        if (fullSeo.metaTitle) {
            tags.push(
                {
                    property: "og:title",
                    content: fullSeo.metaTitle,
                },
                {
                    name: "twitter:title",
                    content: fullSeo.metaTitle,
                }
            )
        }
        if (fullSeo.metaDescription) {
            tags.push(
                {
                    name: "description",
                    content: fullSeo.metaDescription,
                },
                {
                    property: "og:description",
                    content: fullSeo.metaDescription,
                },
                {
                    name: "twitter:description",
                    content: fullSeo.metaDescription,
                }
            )
        }
        if (fullSeo.shareImage) {
            const imageUrl = fullSeo.shareImage.data.attributes.url
            tags.push(
                {
                    name: "image",
                    content: imageUrl,
                },
                {
                    property: "og:image",
                    content: imageUrl,
                },
                {
                    name: "twitter:image",
                    content: imageUrl,
                }
            )
        }
        if (fullSeo.article) {
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
            title={fullSeo.metaTitle}
            link={[
                {
                    rel: "icon",
                    href: favicon.data.attributes.url,
                },
            ]}
            meta={metaTags}
        />
    )
}

export default Seo

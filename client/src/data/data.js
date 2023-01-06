import { gql } from "@apollo/client"

export const QUERY = (locale) => {
    return(gql`
        {
            myNav (locale: "${locale}") {
                data {
                    attributes {
                        navs
                    }
                }
            }

            global (locale: "${locale}") {
                data {
                    attributes {
                    defaultSeo {
                        metaTitle
                        metaDescription
                        }
                    favicon {
                        data {
                        attributes {
                            url
                        }
                        }
                    }
                    }
                }
            }

            hero (locale: "${locale}") {
                data {
                    attributes {
                        BeforeName
                        name
                        quotes
                        Download {
                            title
                            url
                        }
                        Background {
                            data {
                                attributes {
                                    url
                                }
                            }
                        }
                    }
                }
            }
            
            about (locale: "${locale}") {
                data {
                    attributes {
                        title
                        description
                        Photo {
                            data {
                                attributes {
                                    url
                                }
                            }
                        }
                        skills {
                            data {
                                attributes {
                                    title
                                    percentage
                                }
                            }
                        }
                        educations {
                            data {
                                attributes {
                                    endDate
                                    description
                                    institution
                                    title
                                    startDate
                                }
                            }
                        }
                        about_counters {
                            data {
                                attributes {
                                    endDate
                                    startDate
                                    fullText
                                    isAge
                                }
                            }
                        }
                        experiences {
                            data {
                                attributes {
                                    endDate
                                    description
                                    institution
                                    startDate
                                    title
                                }
                            }
                        }
                        languages {
                            data {
                                attributes {
                                    percentage
                                    title
                                }
                            }
                        }
                        navigation
                    }
                }
            }

            myService (locale: "${locale}") {
                data {
                    attributes {
                        title
                        background {
                            data {
                                attributes {
                                    url
                                }
                            }
                        }
                        services {
                            data {
                                attributes {
                                    title
                                    descriptionElements
                                    image {
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
            }  

            myProject (locale: "${locale}") {
                data {
                    attributes {
                        title
                        projects {
                            data {
                                attributes {
                                    title
                                    category
                                    link
                                    source {
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
            } 

            myContact (locale: "${locale}") {
                data {
                    attributes {
                        title
                        nameField
                        emailField
                        phoneField
                        messageField
                        submitButton
                        confirmation
                        Map {
                            city
                            Province
                            Country
                            language
                            z_index
                        }
                        contacts {
                            data {
                                attributes {
                                    value
                                    textValue
                                    title
                                    source
                                }
                            }
                        }
                    }
                }
            }

            myFooter (locale: "${locale}") {
                data {
                    attributes {
                        copyrights
                        english
                        french
                        langue
                    }
                }
              }
        }`
    )
}
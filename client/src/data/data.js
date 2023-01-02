import { gql } from "@apollo/client"

export const QUERY = gql`
{
    myNav {
        data {
        attributes {
            navs
        }
        }
    }

    global {
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

    hero {
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
    
    about {
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

    myService {
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

    myProject {
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
}`
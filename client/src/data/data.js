import { gql } from "@apollo/client"

export const QUERY = (locale) => {
    return(gql`
        {
            myNav (locale: "${locale}") {
                navs
            }

            global (locale: "${locale}") {
                defaultSeo {
                    metaTitle
                    metaDescription
                }
                favicon {
                    url
                }
            }

            hero (locale: "${locale}") {
                BeforeName
                name
                quotes
                Download {
                    title
                    url
                }
            }
            
            about (locale: "${locale}") {
                title
                description
                Photo {
                    url
                }
                skills {
                    title
                    percentage
                }
                educations {
                    endDate
                    description
                    institution
                    title
                    startDate
                }
                about_counters {
                    endDate
                    startDate
                    fullText
                    isAge
                }
                experiences {
                    endDate
                    description
                    institution
                    startDate
                    title
                }
                languages {
                    percentage
                    title
                }
                navigation
            }

            myService (locale: "${locale}") {
                title
                background {
                    url
                }
                services {
                    title
                    descriptionElements
                    image {
                        url
                    }
                }
            }  

            myProject (locale: "${locale}") {
                title
                projects {
                    title
                    category
                    link
                    source {
                        url
                    }
                }
            } 

            myContact (locale: "${locale}") {
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
                    value
                    textValue
                    title
                    source
                }
            }

            myUniversity (locale: "${locale}") {
                informationTitle
                coursesTitle
                degrees {
                    title
                    cumulativeAverage
                    cumulativeAverageTitle
                    expectedGraduationDate
                    expectedGraduationDateTitle
                    schoolName
                    schoolNameTitle
                    semesters {
                        number
                        title
                        activeSemesterTitle
                        internshipSemesterTitle
                        isCurrentSemester
                        isInternshipSemester
                        startSeason
                        year
                        courses {
                            courseId
                            name
                        }
                    }
                }
            }

            myFooter (locale: "${locale}") {
                copyrights
                english
                french
                langue
            }
        }`
    )
}
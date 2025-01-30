export const sendEmail = async (templateId, recipient = process.env.GATSBY_CONTACT_INFO_RECEIVE_EMAIL, info = {}) => {
    
    const url = `${process.env.GATSBY_STRAPI_URL}/api/email/send`;
    const bearerToken = `Bearer ${process.env.GATSBY_STRAPI_TOKEN}`;

    await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": bearerToken
        },
        body: JSON.stringify({
            data: {
                templateReferenceId: templateId,
                to: recipient,
                info: info
            }
        }),
    })
    .catch(error => {
        throw error
    })
    .then(response => {
        if (!response.ok) {
            const errorData = response.text();
            throw new Error(errorData.message || "Network response was not ok");
        }
    });
}

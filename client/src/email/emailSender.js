export const sendEmail = async (templateId, recipient, info = {}) => {
    
    const url = `${process.env.GATSBY_STRAPI_URL}/api/email/send`;

    await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.STRAPI_TOKEN}`
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

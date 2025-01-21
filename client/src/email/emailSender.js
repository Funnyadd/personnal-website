export const sendEmail = async (templateId, recipient, info = {}) => {
    
    const url = `${process.env.GATSBY_STRAPI_URL}/api/email/send`;

    try {
        const response = await fetch(url, {
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
        });
  
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Network response was not ok");
        }
  
        const jsonResponse = await response.json();
        return jsonResponse
    } catch (error) {
        throw error;
    }
}

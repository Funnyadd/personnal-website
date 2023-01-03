module.exports = {
    async afterCreate(event) {
        const { result } = event;

        try {
            await strapi.plugins['email'].services.email.send({
                to: 'mihajlovicadam@gmail.com',
                from: 'funnyadd2002@gmail.com',
                subject: `Message from ${result.name} from your personal website`,
                text: `Message: ${result.body}\n\nEmail: ${result.email}\nPhone number: ${result.phone}`
            })
        } catch(err) {
            console.log(err)
        }
    }
}
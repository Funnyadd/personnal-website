module.exports = ({ strapi }) => ({
    emailService: async (ctx) => {
        try {
            const { data } = ctx.request.body;
            if (!data.to || !data.templateReferenceId)
                return ctx.badRequest("no data was provided");
            const { to, subject, templateReferenceId, info } = data;

            console.log(data)
            await strapi
                .plugin("email-designer-5")
                .service("email")
                .sendTemplatedEmail(
                {
                    to,
                    // from and replyTo should be set in /config/plugins.js email.settings.defaultFrom and defaultReplyTo
                },
                {
                    templateReferenceId: templateReferenceId,
                    subject,
                },
                {
                    ...info,
                });
    
            return { message: "Email sent!" };
        } catch (err) {
            ctx.body = err;
        }
    },
});
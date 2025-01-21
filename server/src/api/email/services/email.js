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
                    //from, < should be set in /config/plugins.js email.settings.defaultFrom
                    //replyTo < should be set in /config/plugins.js email.settings.defaultReplyTo
                },
                {
                    templateReferenceId: templateReferenceId,
                    subject,
                },
                {
                    ...info,
                    // this equals to apply all the data you have in tenant
                    // this may need to be aligned between your tenant and template
                });
    
            return { message: "Email sent!" };
        } catch (err) {
            ctx.body = err;
        }
    },
});
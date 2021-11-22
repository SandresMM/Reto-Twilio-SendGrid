const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');

async function sendEmail() {
    const msg = {
        to: 'sandres_24@hotmail.com',
        from: 'sandres_24@hotmail.com',
        subject: 'Prueba de SendGrid.',
        text: 'Hola desde SendGrid y nodejs.',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>'
    }
    try {
        await sgMail.send(msg);
        console.log(sgMail);
    } catch (error) {
        console.log(error);
    }
}

sendEmail();
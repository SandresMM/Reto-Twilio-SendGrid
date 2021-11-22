const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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
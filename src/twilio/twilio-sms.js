const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

async function sendSms() {
    try {
        const message = await client.messages.create({
            to: '+573218092938',
            from: '+13202894783',
            body: 'Mensaje envíado desde Twilio a través de nodejs.'
        })
        console.log(message.sid);
    } catch (error) {
        console.log(error);
    }
}

sendSms();
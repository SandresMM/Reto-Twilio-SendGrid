const client = require('twilio')('ACa5d13d80f4c8729282569d18a277379b', '2bd1bd2523b35e1be62e57a3dab401fe');

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
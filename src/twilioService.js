const accountSid = 'AC84f9299979f4f0f2e7ace8a685471679';
const authToken = '52a1f6ec82f23233ac9f49a0a8ef1f3a';
const client = require('twilio')(accountSid, authToken);

const twilioService = async (details) => {
  try {
    await client.messages.create({
      body: details.msg,
      from: details.from ,
      to: details.to,
      statusCallback: `https://whatsapp-clone-c9fc4.web.app/twilioCallback/${details.roomId}`,
    });
  } catch (err) {
    console.log(err);
  }
};

export default twilioService;
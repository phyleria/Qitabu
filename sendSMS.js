const AfricasTalking = require('africastalking');

// TODO: Initialize Africa's Talking
const africastalking = AfricasTalking({
  apiKey: 'e3497f523d46c82b979c82a469a7bff71a8314c3f2fe58099ee4c27a150920af', 
  username: 'sandbox'
});



module.exports = async function sendSMS() {
    
    // TODO: Send message
    try {
  const result=await africastalking.SMS.send({
    to: '+254795576758', 
    message: 'Hey AT Ninja! Wassup...',
    from: '19594'
  });
  console.log(result);
} catch(ex) {
  console.error(ex);
} 

};
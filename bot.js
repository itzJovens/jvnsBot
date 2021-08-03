const tmi = require('tmi.js');



// Define configuration options
const opts = {
    identity: {
        username: 'itzjovens',
        password: 'oauth:u79zcmhtqum7o9we321k3xhpeh9x71'
    },
    channels: [
        'itzjovens', 'uknwmyname', 'tsm_daequan', 'xdaboinextdoorx', 'karagii', 'sydeon'
    ]
};




// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);
client.on("USERNOTICE", onMessageHandler);

// Connect to Twitch:
client.connect();

client.on("resub", function (channel, username, months, message, userstate, methods) {
    // Do your stuff.
  let cumulativeMonths = userstate['msg-param-cumulative-months'];
// SRCHFPS
  if (channel.includes('srchfps')){
    client.say('srchfps', `PowerUpL Thanks for resubscribing @${username} for ${cumulativeMonths} MONTHS! PowerUpR`);
    console.log(`* Executed Resub || SRCHFPS`)}
});

client.on("subscription", function (channel, username, method, message, userstate) {
    // Do your stuff.
// SRCHFPS
  if (channel.includes('srchfps')){
    client.say('srchfps', `PowerUpR Thanks for subscribing @${username} PowerUpR ||`);
    console.log(`* Executed Sub || SRCHFPS`)}
});

client.on("subgift", (channel, username, streakMonths, recipient, methods, userstate) => {
    // Do your stuff.
  let senderCount = ~~userstate["msg-param-sender-count"];
// SRCHFPS
  if (channel.includes('srchfps')) {
    client.say('srchfps', `PowerUpL GIFTED SUBS PowerUpR ||`);
    let senderCount = ~~userstate["msg-param-sender-count"];
    console.Log(`* Executed Gifted Subs || SRCHFPS`)}
})

// KARAGII
client.on("subgift", (channel, username, streakMonths, recipient, methods, userstate) => {
    // Do your stuff.
  let senderCount = ~~userstate["msg-param-sender-count"];
// SRCHFPS
  if (channel.includes('karagii')) {
	  syncDelay(3000)
    client.say('karagii', `karagiMula GIFTED SUBS karagiMula`);
    let senderCount = ~~userstate["msg-param-sender-count"];
    console.Log(`* Executed Gifted Subs || KARAGII`)}
})

// SYDEON
client.on("resub", function (channel, username, months, message, userstate, methods) {
    // Do your stuff.
  let cumulativeMonths = userstate['msg-param-cumulative-months'];
	const { prime, plan, planName } = methods;
// SRCHFPS
  if (channel.includes('sydeon')){
	  if (prime) {
		  syncDelay(5000)
    client.say('sydeon', `primer peepoPogStrip`);
    console.log(`* Executed Resub || SYDEON`)}
  }
});

client.on("subscription", function (channel, username, method, message, userstate) {
    // Do your stuff.
	const { prime, plan, planName } = method;
// SRCHFPS
  if (channel.includes('sydeon')){
	  if (prime) {
		  syncDelay(5000)
    client.say('sydeon', `primer peepoPogStrip`);
    console.log(`* Executed Sub || SYDEON`)}
  }
});

client.on("subgift", (channel, username, streakMonths, recipient, methods, userstate) => {
    // Do your stuff.
  let senderCount = ~~userstate["msg-param-sender-count"];
  if (channel.includes('sydeon')) {
	  if (senderCount > 5) {
	  syncDelay(5000)
    client.say('uknwmyname', `PogU GIFTED SUBS sydeonHype`);
    let senderCount = ~~userstate["msg-param-sender-count"];
    console.Log(`* Executed Gifted Subs || SYDEON`)}
  }
})


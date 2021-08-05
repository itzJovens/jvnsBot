const tmi = require('tmi.js');



// Define configuration options
const opts = {
    identity: {
        username: 'itzjovens',
        password: 'oauth:u79zcmhtqum7o9we321k3xhpeh9x71'
    },
    channels: [
        'itzjovens', 'uknwmyname', 'xdaboinextdoorx', 'karagii', 'sydeon'
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

// RESUBS

client.on("resub", function (channel, username, months, message, userstate, methods) {
    // Do your stuff.
  let cumulativeMonths = userstate['msg-param-cumulative-months'];
	
// SRCHFPS
  if (channel.includes('srchfps')){
    client.say('srchfps', `@${username.toUpperCase} FOR ${cumulativeMonths} MONTHS lancheW`);
    console.log(`* Executed Resub || SRCHFPS`)}

// SYDEON
const { prime, plan, planName } = methods;
  if (channel.includes('sydeon')){
	if (prime) {
	syncDelay(5000)
    client.say('sydeon', `primer peepoPogStrip`);
    console.log(`* Executed Resub || SYDEON`)}
  }
});
	
// SUBSCRIPTIONS
	
client.on("subscription", function (channel, username, method, message, userstate) {
    // Do your stuff.
	
// SRCHFPS
  if (channel.includes('srchfps')){
    client.say('srchfps', `@${username.toUpperCase} lancheW`);
    console.log(`* Executed Sub || SRCHFPS`)}
	
//SYDEON
const { prime, plan, planName } = method;
  if (channel.includes('sydeon')){
	if (prime) {
	syncDelay(5000)
    client.say('sydeon', `primer peepoPogStrip`);
    console.log(`* Executed Sub || SYDEON`)}	
	}
});

// GIFTED SUBS	

client.on("subgift", (channel, username, streakMonths, recipient, methods, userstate) => {
    // Do your stuff.
  let senderCount = ~~userstate["msg-param-sender-count"];
	
// SRCHFPS
  if (channel.includes('srchfps')) {
    client.say('srchfps', `GIFTED SUBS lancheW`);
    let senderCount = ~~userstate["msg-param-sender-count"];
    console.Log(`* Executed Gifted Subs || SRCHFPS`)}
	
// KARAGII 
  if (channel.includes('karagii')) {
	  syncDelay(3000)
    client.say('karagii', `karagiMula GIFTED SUBS karagiMula`);
    let senderCount = ~~userstate["msg-param-sender-count"];
    console.Log(`* Executed Gifted Subs || KARAGII`)}
	
// SYDEON 
  if (channel.includes('sydeon')) {
	  if (senderCount > 5) {
	  syncDelay(5000)
    client.say('uknwmyname', `PogU GIFTED SUBS sydeonHype`);
    let senderCount = ~~userstate["msg-param-sender-count"];
    console.Log(`* Executed Gifted Subs || SYDEON`)}
  }
})

// UPTIME COMMAND	
	
client.on('message', (channel, tags, message, self) => {
	if(self) return;
let isBroadcaster = channel.slice(1) === tags.username;
  if (isBroadcaster){
  if (channel.includes('itzjovens'))
	if(message === '|uptime subs') {
    		var time = process.uptime();
    		var uptime = (time + "").toHHMMSS();
	client.say('itzjovens', `${uptime}`);
	console.log(`Executed uptime command in #itzjovens channel for sub/bits bot || ${uptime} !`)
	}
	}
});

function onConnectedHandler(addr, port) {
	client.say('itzjovens', `Sub/Bits Bot has Started!`)
    	console.log(`* Connected to ${addr}:${port}`);
}

function syncDelay(milliseconds){
 var start = new Date().getTime();
 var end=0;
 while( (end-start) < milliseconds){
     end = new Date().getTime();
 }
}

function onMessageHandler(target, context, msg, self) {
    if (self) { return; } // Ignore messages from the bot
}

String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    var time    = hours+':'+minutes+':'+seconds;
    return time;
}

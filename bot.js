const tmi = require('tmi.js');



// Define configuration options
const opts = {
    identity: {
        username: 'itzjovens',
        password: 'oauth:u79zcmhtqum7o9we321k3xhpeh9x71'
    },
    channels: [
        'itzjovens', 'uknwmyname', 'xdaboinextdoorx', 'karagii', 'sydeon', 'srchfps', 'deansocool'
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
    client.say('srchfps', `@${username.toUpperCase()} FOR ${cumulativeMonths} MONTHS deansoW`);
    console.log(`* Executed Resub || SRCHFPS`)}

// SYDEON
const { prime, plan, planName } = methods;
	  let isTurned = turned.includes(channel.slice(1));
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
    client.say('srchfps', `@${username.toUpperCase()} deansoW`);
    console.log(`* Executed Sub || SRCHFPS`)}
	
//SYDEON
const { prime, plan, planName } = method;
	let isTurned = turned.includes(channel.slice(1));
  if (channel.includes('sydeon')){
	if (isTurned){
	if (prime) {
	syncDelay(5000)
    client.say('sydeon', `primer peepoPogStrip`);
    console.log(`* Executed Sub || SYDEON`)}
	}
	}
});

// GIFTED SUBS	

client.on("subgift", (channel, username, streakMonths, recipient, methods, userstate) => {
    // Do your stuff.
// SRCHFPS
  if (channel.includes('srchfps')) {
  let senderCount = ~~userstate["msg-param-sender-count"];	  
    client.say('srchfps', `GIFTED SUBS lancheW`);
    console.Log(`* Executed Gifted Subs || SRCHFPS`)}

// DEANSOCOOL
  if (channel.includes('deansocool')) {
	  let isTurned = turned.includes(channel.slice(1));
	  if (isTurned){
  let senderCount = ~~userstate["msg-param-sender-count"];
	  if (senderCount >= '5'){
	  syncDelay(2000)
    client.say('deansocool', `${username.toUpperCase()} deansoW`);
    console.Log(`* Executed Gifted Subs || DEANSOCOOL`)}
	  }
  }
// KARAGII 
  if (channel.includes('karagii')) {
	  let isTurned = turned.includes(channel.slice(1));
	  if (isTurned){
  let senderCount = ~~userstate["msg-param-sender-count"];
	  if (senderCount >= '5'){
	  syncDelay(3000)
    client.say('karagii', `karagiMula GIFTED SUBS karagiMula`);
    console.Log(`* Executed Gifted Subs || KARAGII`)}
	  }
  }
// SYDEON 
  if (channel.includes('sydeon')) {
	  let isTurned = turned.includes(channel.slice(1));
	  if (isTurned){
  let senderCount = ~~userstate["msg-param-sender-count"];	
	  if (senderCount >= '5') {
	  syncDelay(5000)
    client.say('uknwmyname', `PogU GIFTED SUBS sydeonHype`);
    console.Log(`* Executed Gifted Subs || SYDEON`)}
	  }
  }
})

// TURNED ON/OFF COMMANDS

const turned = [];

client.on('message', (channel, tags, message, self) => {
	if(self) return;
  let isBroadcaster = channel.slice(1) === tags.username;
  if (isBroadcaster){
  if (channel.includes('itzjovens')){
	if(message.includes("|turnon")) {
      if (turned.includes(message.slice(8))){
        client.say('itzjovens', `${message.slice(8)}'s chat has already been turned on.`)
      } else { client.say('itzjovens', `@${message.slice(8)}'s chat is now turned on.`);
      turned.push(message.slice(8))
}}}}});

client.on('message', (channel, tags, message, self) => {
	if(self) return;
  let isBroadcaster = channel.slice(1) === tags.username;
  if (isBroadcaster){
  if (channel.includes('itzjovens')){
	if(message.includes("|turnoff")) {
    client.say('itzjovens', `@${message.slice(9)}'s chat has now been turned off.`);
      turned.pop(message.slice(9))
}}}});

client.on('message', (channel, tags, message, self) => {
	if(self) return;
  let isBroadcaster = channel.slice(1) === tags.username;
  if (isBroadcaster){
  if (channel.includes('itzjovens'))
	if(message === "|turned") {
		client.say('itzjovens', `Chats turned on: ${turned}`);
}}});



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

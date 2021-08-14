const tmi = require('tmi.js');



// Define configuration options
const opts = {
    identity: {
        username: 'itzjovens',
        password: 'oauth:u79zcmhtqum7o9we321k3xhpeh9x71'
    },
    channels: [
        'itzjovens', 'uknwmyname', 'nickmercs', 'karagii', 'sydeon', 'srchfps', 'deansocool', 'giftedsubs'
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

//////////////////////////////////////////////////////////////////////////////////////// RESUBS ///////////////////////////////////////////////////////////////////

client.on("resub", function (channel, username, months, message, userstate, methods) {
    // Do your stuff.
  let cumulativeMonths = userstate['msg-param-cumulative-months'];
	
// SRCHFPS
  if (channel.includes('srchfps')){
    client.say('srchfps', `${username.toUpperCase()} FOR ${cumulativeMonths} MONTHS deansoW`);
    console.log(`* Executed Resub || SRCHFPS`)}

});
	
//////////////////////////////////////////////////////////////////////// SUBSCRIPTIONS ///////////////////////////////////////////////////////////////////////////
	
client.on("subscription", function (channel, username, method, message, userstate) {
    // Do your stuff.
	
//////////////// SRCHFPS
  if (channel.includes('srchfps')){
    client.say('srchfps', `${username.toUpperCase()} deansoW`);
    console.log(`* Executed Sub || SRCHFPS`)}
	
});
///////////////////////////////////////////////////////////////// SUBSTITUTE GIFTED SUBS /////////////////////////////////////////////////////////////////
const giftedsubs = []

client.on('message', (channel, tags, message, self) => {
	if(self) return;
  let isBroadcaster = channel.slice(1) === tags.username;
  if (isBroadcaster){
  if (channel.includes('itzjovens')){
	if(message === "|giftedsubson") {
      if (giftedsubs.includes(message.slice(14))){
        client.say('itzjovens', `${message.slice(14)}'s chat has already been turned on.`)
        console.log(`${message.slice(14)}'s chat has already been turned on.`)
      } else { client.say('itzjovens', `@${message.slice(14)}'s chat is now turned on.`);
	      console.log(`@${message.slice(14)}'s chat is now turned on.`);
      giftedsubs.push(message.slice(14))
}}}}});

client.on('message', (channel, tags, message, self) => {
	if(self) return;
  let isBroadcaster = channel.slice(1) === tags.username;
  if (isBroadcaster){
  if (channel.includes('itzjovens')){
	if(message.includes("|giftedsubsoff")) {
    client.say('itzjovens', `@${message.slice(15)}'s chat has now been turned off.`);
    console.log(`@${message.slice(15)}'s chat has now been turned off.`);
      giftedsubs.pop(message.slice(15))
}}}});

client.on('message', (channel, tags, message, self) => {
	if(self) return;
  let isBroadcaster = channel.slice(1) === tags.username;
  if (isBroadcaster){
  if (channel.includes('itzjovens'))
	if(message === "|giftedsubs") {
		client.say('itzjovens', `Chat turned on: ${giftedsubs}`);
		console.log(`Chats turned on: ${giftedsubs}`);
}}});

//////////////////////////////////////////////////////////////////////////////// GIFTED SUBS //////////////////////////////////////////////////////////////////////
client.on("submysterygift", (channel, username, numbOfSubs, methods, userstate) => {
    // Do your stuff.
// ITJOVENS
  if (channel.includes('giftedsubs')) {
	  if (numbOfSubs >= 5) {
	  syncDelay(5000)
    client.say(channel, `${numbOfSubs} GIFTED SUBS deansoW`);
    console.log(`****** ${numbOfSubs} Gifted Subs || ${channel} ******`)}
  }

// SRCHFPS
  if (channel.includes('srchfps')) {	  
    client.say('srchfps', `${numbOfSubs} GIFTED SUBS deansoW`);
    console.log(`****** ${numbOfSubs} Gifted Subs || ${channel} ******`)}

// DEANSOCOOL
  if (channel.includes('deansocool')) {
	  let isTurned = turned.includes(channel.slice(1));
	  if (isTurned){
	if (numbOfSubs >= 5){
	  syncDelay(2000)
    client.say(channel, `${username.toUpperCase()} deansoW`);
    console.log(`****** ${numbOfSubs} Gifted Subs || ${channel} ******`)}
	  }
  }
// KARAGII 
  if (channel.includes('karagii')) {
	  let isTurned = turned.includes(channel.slice(1));
	  if (isTurned){
	if (numbOfSubs >= 5){
	  syncDelay(3000)
    client.say(channel, `POGGERS ${numbOfSubs}`);
    console.log(`****** ${numbOfSubs} Gifted Subs || ${channel} ******`)}
	  }
  }
// SYDEON 
  if (channel.includes('sydeon')) {
	  let isTurned = turned.includes(channel.slice(1));
	  if (isTurned){
	if (numbOfSubs >= 5){
	  syncDelay(3000)
    client.say(channel, `POGGIES ${numbOfSubs}`);
    console.log(`****** ${numbOfSubs} Gifted Subs || ${channel} ******`)}
    }
  }
})

///////////////////////////////////////////////////////////////////////// TURNED ON/OFF /////////////////////////////////////////////////////////////////////////////

const turned = [];

client.on('message', (channel, tags, message, self) => {
	if(self) return;
  let isBroadcaster = channel.slice(1) === tags.username;
  if (isBroadcaster){
  if (channel.includes('itzjovens')){
	if(message.includes("|turnon")) {
      if (turned.includes(message.slice(8))){
        client.say('itzjovens', `${message.slice(8)}'s chat has already been turned on.`)
        console.log(`${message.slice(8)}'s chat has already been turned on.`)
      } else { client.say('itzjovens', `@${message.slice(8)}'s chat is now turned on.`);
	      console.log(`@${message.slice(8)}'s chat is now turned on.`);
      turned.push(message.slice(8))
}}}}});

client.on('message', (channel, tags, message, self) => {
	if(self) return;
  let isBroadcaster = channel.slice(1) === tags.username;
  if (isBroadcaster){
  if (channel.includes('itzjovens')){
	if(message.includes("|turnoff")) {
    client.say('itzjovens', `@${message.slice(9)}'s chat has now been turned off.`);
    console.log(`@${message.slice(9)}'s chat has now been turned off.`);
      turned.pop(message.slice(9))
}}}});

client.on('message', (channel, tags, message, self) => {
	if(self) return;
  let isBroadcaster = channel.slice(1) === tags.username;
  if (isBroadcaster){
  if (channel.includes('itzjovens'))
	if(message === "|turned") {
		client.say('itzjovens', `Chats turned on: ${turned}`);
		console.log(`Chats turned on: ${turned}`);
}}});



//////////////////////////////////////////////////////////////////////////// UPTIME COMMAND ////////////////////////////////////////////////////////////////////
	
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


client.on('message', (channel, tags, message, self) => {
	if(self) return;
let isBroadcaster = channel.slice(1) === tags.username;
  if (isBroadcaster){
  if (channel.includes('itzjovens'))
	if(message === '|commands subs') {
	client.say('itzjovens', `Commands for Subs/Bits: "|uptime subs", "|turned", "|turnedon/off", "|giftedsubs", "|giftedsubson/off"`);
	console.log(`Executed command in #itzjovens channel for sub/bits bot || ${uptime} !`)
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

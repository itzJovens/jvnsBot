const tmi = require('tmi.js');


var giftedsub;
// Define configuration options
const opts = {
    identity: {
        username: 'itzjovens',
        password: 'oauth:u79zcmhtqum7o9we321k3xhpeh9x71'
    },
    channels: [
        'itzjovens', 'uknwmyname', 'tsm_daequan', 'karagii', 'sydeon', 'srchfps', 'deansocool', 'xdaboinextdoorx', 'kkatamina',
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
  const { prime, plan, planName } = methods;
// SRCHFPS
  if (channel.includes('srchfps')){
    client.say('srchfps', `${username.toUpperCase()} FOR ${cumulativeMonths} MONTHS deansoW`);
    console.log(`* Executed Resub || SRCHFPS`)}

//KKATAMINA
  if (channel.includes('kkatamina')){
  if (prime){
  let isTurned = turned.includes(channel.slice(1));
	  if (isTurned){
	  syncDelay(5000)
    client.say('kkatamina',`PRIME POGGIES`);
    console.log(`* Executed Resub || KKATAMINA`)}}}

});
	
//////////////////////////////////////////////////////////////////////// SUBSCRIPTIONS ///////////////////////////////////////////////////////////////////////////
	
client.on("subscription", function (channel, username, method, message, userstate) {
    // Do your stuff.
    const { prime, plan, planName } = method;
//////////////// SRCHFPS
  if (channel.includes('srchfps')){
    client.say('srchfps', `${username.toUpperCase()} deansoW`);
    console.log(`* Executed Sub || SRCHFPS`)}

//KKATAMINA
  if (channel.includes('kkatamina')){
  if (prime){
  let isTurned = turned.includes(channel.slice(1));
	  if (isTurned){
	  syncDelay(5000)
    client.say('kkatamina',`PRIME POGGIES`);
    console.log(`* Executed Sub || KKATAMINA`)}}}


});
///////////////////////////////////////////////////////////////// SUBSTITUTE GIFTED SUBS /////////////////////////////////////////////////////////////////
var gs;
client.on('message', (channel, tags, message, self) => {
	if(self) return;
  let isBroadcaster = channel.slice(1) === tags.username;
  if (isBroadcaster){
  if (channel.includes('itzjovens')){
  const args = message.slice(1).split(' ');
	if(message.includes("|gsedit")) {
      gs = undefined;
      if (channel.includes(args[1])){
        client.say('itzjovens', `${args[1]}'s chat is already turned on.`);
        console.log(`${args[1]}'s chat is already turned on.`);
      } else if(!channel.includes(args[1])) { client.say('itzjovens', `@${args[1]}'s chat turned on.`);
	      console.log(`@${args[1]}'s chat is now turned on.`);
            opts['channels'].push("#" + args[1]);
            gs = ("'" + args[1] + "'");
            client.join(args[1])
}}}}});

client.on('message', (channel, tags, message, self) => {
	if(self) return;
  let isBroadcaster = channel.slice(1) === tags.username;
  if (isBroadcaster){
  if (channel.includes('itzjovens')){
	const args = message.slice(1).split(' ');
	if(message.includes("|gsoff")) {
    client.say('itzjovens', `@${args[1]}'s chat turned off.`);
    console.log(`@${args[1]}'s chat turned off.`);
    	gs = undefined;
}}}});

client.on('message', (channel, tags, message, self) => {
	if(self) return;
  let isBroadcaster = channel.slice(1) === tags.username;
  if (isBroadcaster){
  if (channel.includes('itzjovens'))
	if(message === "|giftedsub") {
		client.say('itzjovens', `Chat turned on: ${gs}`);
		console.log(`Chats turned on: ${gs}`);
}}});

//////////////////////////////////////////////////////////////////////////////// GIFTED SUBS //////////////////////////////////////////////////////////////////////
client.on("submysterygift", (channel, username, numbOfSubs, methods, userstate) => {
    // Do your stuff.
// GIFTED SUBSTITUTE
  if (channel = gs) {
	  if (numbOfSubs >= 5) {
	  syncDelay(3000)
    client.say(gs, `${username} deansoW `);
    console.log(`****** ${numbOfSubs} Gifted Subs || ${channel} ******`)}
  }

// SRCHFPS
  if (channel.includes('srchfps')) {	  
    client.say(channel, `${numbOfSubs} GIFTED SUBS deansoW`);
    console.log(`****** ${numbOfSubs} Gifted Subs || ${channel} ******`)}

// DEANSOCOOL
  if (channel.includes('deansocool')) {
	  let isTurned = turned.includes(channel.slice(1));
	  if (isTurned){
	if (numbOfSubs >= 5){
	  syncDelay(5000)
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
    client.say(channel, `${username.toUpperCase()} karagiMula karagiMula`);
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
let turned = []

client.on('message', (channel, tags, message, self) => {
	if(self) return;
  let isBroadcaster = channel.slice(1) === tags.username;
  if (isBroadcaster){
  if (channel.includes('itzjovens')){
  const args = message.slice(1).split(' ');
	if(message.includes("|turnon")) {
      if (turned.includes(args[1])){
        client.say(channel, `${args[1]}'s chat has already been turned on.`)
        console.log(`${args[1]}'s chat has already been turned on.`)
      } else { client.say(channel, `@${args[1]}'s chat is now turned on.`);
	      console.log(`@${args[1]}'s chat is now turned on.`);
      turned.push(args[1])
}}}}});


client.on('message', (channel, tags, message, self) => {
	if(self) return;
  let isBroadcaster = channel.slice(1) === tags.username;
  if (isBroadcaster){
  if (channel.includes('itzjovens')){
	const args = message.slice(1).split(' ');
	if(message.includes("|turnoff")) {
    client.say('itzjovens', `@${args[1]}'s chat has now been turned off.`);
    console.log(`@${args[1]}'s chat has now been turned off.`);
      turned.pop(args[1]);
}}}});

client.on('message', (channel, tags, message, self) => {
	if(self) return;
  let isBroadcaster = channel.slice(1) === tags.username;
  if (isBroadcaster){
  if (channel.includes('itzjovens'))
	if(message === "|turned") {
		client.say('itzjovens', `Chat turned on: ${turned}`);
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

///////////////////////////////////////////////////////////////////////////////// COMMANDS ///////////////////////////////////////////////////////////////////////////
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

//////////////////////////////////////////////////////////////////////////// TSM_DAEQUAN FOLLOWAGE ///////////////////////////////////////////////////////////////////
// FIRST PART
client.on('message', (channel, tags, message, self) => {
  if(self) return;
  var channel1 = channel
  var message1 = message
  if (channel.includes('tsm_daequan')){
  if(message.toLowerCase().includes('!followage')) {
    client.say('uknwmyname', `!followage ${tags.username} ${channel.slice(1)}`);
    console.log(`EXECUTED FOLLOWAGE COMMAND FOR ${tags.username} on ${channel}`)}
  }
});
// SECOND PART
client.on('message', (channel, tags, message, self) => {
	if(self) return;
  if (channel.includes('uknwmyname')){
    if (message.toLowerCase().includes('@itzjovens,')){
      if (message.toLowerCase().includes('tsm_daequan')){
      client.say('tsm_daequan', `/me ${message.slice(12)} daeKiwi`)
      console.log(`EXECUTED FOLLOWAGE COMMAND IN TSM_DAEQUAN CHANNEL`)
      }
    }
  }  
});
// UKNWMYNAME
// FISRT PART
client.on('message', (channel, tags, message, self) => {
  if(self) return;
  var channel1 = channel
  var message1 = message
  if (channel.includes('xdaboinextdoorx')){
  if(message.toLowerCase().includes('!followage')) {
    client.say('uknwmyname', `!followage ${tags.username} ${channel.slice(1)}`);
    console.log(`EXECUTED FOLLOWAGE COMMAND FOR ${tags.username} on ${channel}`)}
  }
});
// SECOND PART
client.on('message', (channel, tags, message, self) => {
	if(self) return;
  if (channel.includes('uknwmyname')){
    if (message.toLowerCase().includes('@itzjovens,')){
      if (message.toLowerCase().includes('uknwmyname')){
      client.say('xdaboinextdoorx', `/me ${message.slice(12)}`)
      console.log(`EXECUTED FOLLOWAGE COMMAND IN TSM_DAEQUAN CHANNEL`)
      }
    }
  }  
});

/////////////////////////////////////////////////////////////////////////////// ALLOWED COMMAND //////////////////////////////////////////////////////////////////////
const allowed = [];

client.on('message', (channel, tags, message, self) => {
	if(self) return;
  let isBroadcaster = channel.slice(1) === tags.username;
  if (isBroadcaster){
  if (channel.includes('itzjovens')){
	if(message.includes("|allow")) {
      if (allowed.includes(message.slice(7))){
        client.say('itzjovens', `${message.slice(7)} has already been allowed`)
      } else { client.say('itzjovens', `@${message.slice(7)} is now allowed. kkatamHi`);
      allowed.push(message.slice(7))
}}}}});

client.on('message', (channel, tags, message, self) => {
	if(self) return;
  let isBroadcaster = channel.slice(1) === tags.username;
  if (isBroadcaster){
  if (channel.includes('itzjovens')){
	if(message.includes("|remove")) {
    client.say('itzjovens', `@${message.slice(8)} has now been removed.`);
      allowed.pop(message.slice(8))
}}}});

client.on('message', (channel, tags, message, self) => {
	if(self) return;
  let isBroadcaster = channel.slice(1) === tags.username;
  if (isBroadcaster){
  if (channel.includes('itzjovens'))
	if(message === "|ALLOWED") {
		client.say('itzjovens', `${allowed}`);
}}});

///////////////////////////////////////////////////////////////////////// PING COMMAND ///////////////////////////////////////////////////////////////////////////
client.on('message', (channel, tags, message, self) => {
	if(self) return;
  let isAllowed = allowed.includes(tags.username);
  let isBroadcaster = channel.slice(1) === tags.username;
  let allowedUp = isAllowed || isBroadcaster
  if (allowedUp){
  if (channel.includes('itzjovens')){
	if(message.toLowerCase().includes("|ping")) {
		client.say('itzjovens', `Pong!, ${tags.username} sydeonHey`);
		console.log(`Pong`)
}}}});
///////////////////////////////////////////////////////////////////////////// FUNCTIONS //////////////////////////////////////////////////////////////////////////////
function onConnectedHandler(addr, port) {
	client.say('itzjovens', `Bot has Started!`)
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

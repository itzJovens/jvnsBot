const tmi = require('tmi.js');
const fetch = require('node-fetch')

var giftedsub;
// Define configuration options
const opts = {
    identity: {
        username: 'itzjovens',
        password: 'oauth:u70tuostqo3bpryu5zc9vezkx9e8qy'
    },
    channels: [
        'itzjovens', 'uknwmyname', 'tsm_daequan', 'karagii', 'sydeon', 'srchfps', 'deansocool', 'xdaboinextdoorx', 'followage_bot_', 'fuslie', 'symfuhny', 'sykkuno',
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
    client.say('srchfps', `${username.toUpperCase()} FOR ${cumulativeMonths} MONTHS PogChamp`);
    console.log(`* Executed Resub || SRCHFPS`)}
});
	
//////////////////////////////////////////////////////////////////////// SUBSCRIPTIONS ///////////////////////////////////////////////////////////////////////////
	
client.on("subscription", function (channel, username, method, message, userstate) {
    // Do your stuff.
//////////////// SRCHFPS
  if (channel.includes('srchfps')){
    client.say('srchfps', `${username.toUpperCase()} PogChamp`);
    console.log(`* Executed Sub || SRCHFPS`)}
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
            gs = ("#" + args[1]);
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
	  let isTurned = turned.includes(channel.slice(1));		
    // Do your stuff.
// GIFTED SUBSTITUTE
  if (channel.includes(gs)) {
	  if (numbOfSubs >= 5) {
	  syncDelay(10000)
    client.say(gs, `${username} Pog `);
    console.log(`****** ${numbOfSubs} Gifted Subs || ${channel} || ${username} ******`)}
  }

// SRCHFPS
  if (channel.includes('srchfps')) {	  
    client.say(channel, `${numbOfSubs} GIFTED SUBS PogChamp`);
    console.log(`****** ${numbOfSubs} Gifted Subs || ${channel} ******`)}

// DEANSOCOOL
  if (channel.includes('deansocool')) {

    console.log(`****** ${numbOfSubs} Gifted Subs || ${channel} ******`)

	  if (isTurned){	
	if (numbOfSubs >= 5){	
	  syncDelay(5000)		
    client.say(channel, `${username.toUpperCase()} deansoHype`);
	  }
  }
  }
// KARAGII 
  if (channel.includes('karagii')) {

    console.log(`****** ${numbOfSubs} Gifted Subs || ${channel} ******`)

	  if (isTurned){	
	if (numbOfSubs >= 5){
	  syncDelay(5000)		  
    client.say(channel, `POGGERS ${username}`);
	  }
  }
  }
// SYDEON 
  if (channel.includes('sydeon')) {

    console.log(`****** ${numbOfSubs} Gifted Subs || ${channel} ******`)

	  if (isTurned){	
	if (numbOfSubs >= 5){
	  syncDelay(5000)		  
    client.say(channel, `POGGIES ${username}`);
    }
  }
  }
// TSM_DAEQUAN
  if (channel.includes('tsm_daequan')){

	console.log(`****** ${numbOfSubs} Gifted Subs || ${channel} ******`);

	  if (isTurned){
	if (numbOfSubs >= 5){
		syncDelay(5000)		  
	client.say('tsm_daequan', `Pog ${username.toUpperCase()}`);
	  }
	  }
  }


// FUSLIE
  if (channel.includes('fuslie')){

	console.log(`****** ${numbOfSubs} Gifted Subs || ${channel} ******`);

	  if (isTurned){
	if (numbOfSubs >= 5){
		syncDelay(5000)		  
	client.say('fuslie', `Pog ${username.toUpperCase()}`);
	  }
  }
  }


// SYKKUNO
  if (channel.includes('tsm_daequan')){

	console.log(`****** ${numbOfSubs} Gifted Subs || ${channel} ******`);
	
	  if (isTurned){
	if (numbOfSubs >= 5){
		syncDelay(5000)		  
	client.say('sykkuno', `Pog ${username.toUpperCase()}`);
	  }
  }
  }


// SYMFUHNY
  if (channel.includes('symfuhny')){

	console.log(`****** ${numbOfSubs} Gifted Subs || ${channel} ******`);

	  if (isTurned){
	if (numbOfSubs >= 5){
		syncDelay(5000)		  
	client.say('symfuhny', `Pog ${username.toUpperCase()}`);
	  }
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
  if (channel.includes('itzjovens')){
	if(message === "|turned") {
		client.say('itzjovens', `Chat turned on: ${turned}`);
		console.log(`Chats turned on: ${turned}`);
	}}}});

//////////////////////////////////////////////////////////////////////////// UPTIME COMMAND ////////////////////////////////////////////////////////////////////
	
client.on('message', (channel, tags, message, self) => {
	if(self) return;
let isBroadcaster = channel.slice(1) === tags.username;
  if (isBroadcaster){
  if (channel.includes('itzjovens')){
	if(message === '|uptime subs') {
    		var time = process.uptime();
    		var uptime = (time + "").toHHMMSS();
	client.say('itzjovens', `${uptime}`);
	console.log(`Executed uptime command in #itzjovens channel for sub/bits bot || ${uptime} !`)
	}
	}
  }
});

//////////////////////////////////////////////////////////////////////////// TSM_DAEQUAN FOLLOWAGE //////////////////////////////////////////////////////////////////
async function onMessageHandler(channel, tags, message, self) {
    if (self) { return; } // Ignore messages from the bot
  const badges = tags.badges || {};
  const isBroadcaster = tags['room-id'] === tags['user-id'] || tags.broadcaster;
  const isMod = tags.mod || badges.moderator;
  const isSub = badges.subscriber || badges.founder;
  const isVIP = badges.vip;
  const isStaff = badges.staff;
  const isModUp = isBroadcaster || isMod;
  const isSubUp = isModUp || isSub;
  const isVIPUp = isSubUp || isVIP;
    if(channel.includes('tsm_daequan')){
	  let isTurned = turned.includes('followage');
	  if (isTurned){
	    if (isVIPUp || isStaff) return;
    if (message.toLowerCase() == '!followage'){
      const qs = `${channel.slice(1)}/${tags.username}`
      const url = `https://api.2g.be/twitch/followage/${qs}?format=mwdhms`
      const data = await fetch(url);
      const new_url = await data.text();
    if (new_url.toLowerCase().includes(`${tags.username} is not following ${channel.slice(1)}`)){
      console.log(`[${channel}]: ${new_url} peepoClown`);
      client.say(channel, `${new_url} peepoClown`);
    } else { console.log(`[${channel}]: ${new_url}`);
	     client.say(channel, `${new_url}`)};
}}}}
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
		client.say('itzjovens', `Pong!, ${tags.username} sydeonWave`);
		console.log(`Pong`)
}}}});

////////////////////////////////////////////////////////////////////////////// RAIDED ////////////////////////////////////////////////////////////////////////////////
client.on('raided', (channel, username, viewers) => {
	if(channel.includes('srchfps')){
		client.say(channel, `${username} with the raid deansoHype !`)
		console.log(`SrchFPS got raided with ${viewers} by ${username}`)}
	});
///////////////////////////////////////////////////////////////////////////// FUNCTIONS //////////////////////////////////////////////////////////////////////////////
function onConnectedHandler(addr, port) {
	client.say('itzjovens', `MrDestructoid Clap`)
    	console.log(`* Connected to ${addr}:${port}`);
	console.log(`Channels connected: ${opts.channels}`);
	console.log(`Turned on channels: ${turned}`);
}

function syncDelay(milliseconds){
 var start = new Date().getTime();
 var end=0;
 while( (end-start) < milliseconds){
     end = new Date().getTime();
 }
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

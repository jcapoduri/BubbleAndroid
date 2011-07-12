softgame = {};

//const
//softgame.element = '';
softgame.game_id = '9C5TVaAs3w1xvUOBn9BZM3g4E3I83DFn';
softgame.game_secret = '8nMnqNRYc096xbBaCa0uuQN9XDPcwsWU';
//softgame.softgameUrl = 'http://sgds.softgame.de/'; <--- for production
softgame.softgameUrl = 'http://drone.softgames.de/'; //<--- for testing
softgame.softgameAuth = 'eui/auth';
softgame.softgameLogout = 'eui/logout';
softgame.softgameGetUserData = 'cpi/user';
softgame.softgameGetUserBalance = 'cpi/user/balance';
softgame.softgameOrderStart = 'cpi/order/start';
softgame.softgameDoOrder = 'eui/order';
softgame.softgameOrderFinalize = 'cpi/user/balance';
softgame.softgameBackUrl = "http://puzzlebubble.eudaimonia.com.ar/";
//softgame.softgameBackUrl = "http://eudaimonia.com.ar";
softgame.softgameSplit = '|';
softgame.softgameLangCode = 'en';
//softgame.softgame

//variables
softgame.element;
softgame.username;
softgame.password;
softgame.uid;
softgame.userdata;
softgame.jqajax;
softgame.signature;
softgame.token  = '';
softgame.connected = false;
softgame.user = {};
softgame.userCoins = 0;
softgame.otoken = '';

softgame.connectApi = function() {
	softgame.token = $_GET('access_token');
	if(softgame.token == ''){
		var link = this.softgameUrl + this.softgameAuth;
		link += '?pk=' + softgame.game_id;
		link += '?lang=en';
		link += '?back=' + this.softgameBackUrl;
		link += '?sig=' + this.signature;
		window.location = link;
	};
};


/*softgame.name = function(){
	if(!this.connected) return false;
	
	var uri = this.softgameUrl + this.softgame;
	var gwtdata = {
		pk: this.game_id,
		sig:this.signature,
		token: this.token
	};
	this.jqajax = $.ajax({
		type: 'GET',
		url: uri,
		data: getdata,
		sync: true,
		success: this.connectionEstablished,
		error: this.connectionError
	});
};*/
//softgameApi

//softgame. = function(){};

function peevskiCreateCookie(name,value,minutes) {
	if (minutes) {
		var date = new Date();
		date.setTime(date.getTime()+(minutes*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function peevskiReadCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function peevskiCheck() {
	var peevski = false;
	var peevski_arr = [
		'monitor.bg',
		'telegraph.bg',
		'politika.bg',
		'europost.eu',
		'europost.bg',
		'borbabg.com',
		'tv7.bg',
		'news7.bg',
		'super7.bg',
		'3bay.bg',
		'econ.bg',
		'inews.bg',
		'jenite.bg',
		'div.bg',
		'sporta.bg',
		'fitwell.bg',
		'sportuvaj.bg',
		'peika.bg',
		'kulinar.bg',
		'sever.bg',
		'get.bg',
		'bnews.bg',
		'bsport.bg',
		'blife.bg',
		'bpost.bg',
		'bmobile.bg',
		'blitz.bg',
		'standartnews.com',
		'struma.bg',
		'marica.bg',
		'vsekiden.com',
		'novinar.bg'
	]
	var patt = null;
	var patt_txt = null;
	for (var i = 0; i < peevski_arr.length; i++) {
		patt_txt = "^http(s)?\:\/\/([^\/]*)?"+peevski_arr[i];
		patt = new RegExp(patt_txt);
		if (patt.test(document.location.href)) {
			peevski = true;
			break;
		}
	}
	return peevski;
};

if (peevskiCheck() && peevskiReadCookie('force_continue04') != 'continue') {

window.stop();
document.documentElement.innerHTML = '\
<html>\
	<header>\
	<style>\
		body {\
			background: #ecee00;\
			font-family: sans-serif;\
			font-size: 1em;\
		}\
		.main {\
			width: 80%;\
			height: 12em;\
			margin: 5% auto;\
			text-align: center;\
			background: #fff;\
			border-radius: 10px;\
			border: 1px solid #000;\
			padding: 20px;\
		}\
		.logo {\
			width: 20%;\
			float: left;\
			padding: 20px;\
		}\
		.text {\
			float: left;\
		}\
		.text p {\
			text-align: left;\
		}\
	</style>\
	</header>\
	<body>\
		<div class="main">\
			<img src="http://24.media.tumblr.com/243dfc6696cf71013636c403ee1473f2/tumblr_mon26lM2W71swvzfoo1_r1_1280.jpg" alt="" class="logo" />\
			<div class="text">\
				<p>Внимание! Сайтът, който искате да посетите, е част от медийната група на Делян Пеевски!</p>\
				<p>Ако отворите страницата, подкрепяте некачествената журналистика.</p>\
				<p>Импресия по импресия - медийна империя!</p>\
				<p><br /><input class="ignore" type="button" value="&#65513; #ignore" onclick="window.history.back();" /> <input id="force_continue" class="continue" type="button" value="все пак ще продължа &#65515;" /><?p>\
				\
			</div>\
		</div>\
	</body>\
</html>\
<div style="display: none;">\
<!--\
';
document.getElementById('force_continue').onclick = function () {
	peevskiCreateCookie('force_continue04', 'continue', 10);
	location.reload();
}

}

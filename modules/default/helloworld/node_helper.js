const NodeHelper = require("node_helper");
const Log = require("../../../js/logger");
const mysql = require("mysql");
const conn = {
	host: "localhost",
	port: "3306",
	user: "myid",
	password: "root",
	database: "MagicMirror"
};

var a = 1;
module.exports = NodeHelper.create({
	/**
	 *
	 */

	start: function () {
		Log.log(this.name + " is started!" + this.mySpecialProperty);
		var notificationTimer = function () {
			a = a + 1;
			Log.log(a.toString());

			setTimeout(notificationTimer, 1000);
			return;
		};
		setTimeout(notificationTimer, 1000);
	}
	// start: function() {

	// var notificationTimer = function() {

	//     Test = Test + 1;
	//     Log.info(Test);
	//     // this.sendNotification("SHOW_ALERT", { type: "notification" });
	//     setTimeout(notificationTimer, 1000);
	//     return;
	// };
	// setTimeout(notificationTimer, 1000); // 이렇게 무한으로 돌려도 되려나 ? 계속호출하긴 하는데...

	// }
});

/* Magic Mirror
 * Module: HelloWorld
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 */

var a = 1;
Module.register("helloworld", {
	// Default module config.
	defaults: {
		text: "Hello !"
	},

	getTemplate: function () {
		return "helloworld.njk";
	},
	getScripts: function () {
		return ["mysql.js"];
	},
	getTemplateData: function () {
		return this.config;
	},
	start: function () {
		var self = this;
		// var mysql = require('mysql');
		// var connection = mysql.createConnection(conn);
		// connection.connect();
		this.mySpecialProperty = "So much wow!";
		Log.log(this.name + " is started!" + this.mySpecialProperty);
		var notificationTimer = function () {
			a = a + 1;

			// self.sendNotification("YOUTUBE_LOAD", {
			//     type: "id", //REQUIRED
			//     id: "UOxkGD8qRB4", //REQUIRED. YouTube Video Id.
			//     loop: false, //OPTIONAL
			//     autoplay: true, //OPTIONAL
			// })
			self.updateDom();
			setTimeout(notificationTimer, 1000);
			return;
		};
		setTimeout(notificationTimer, 1000);
	},
	getDom: function () {
		var wrapper = document.createElement("div");

		wrapper.innerHTML = a.toString();
		return wrapper;
	}
});

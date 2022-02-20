/**
 * Where my subject is
 */
export function Ignition() {
	this.engineParts = []; //array of engine parts required to turn on a car
}

Ignition.prototype = {
	//to add engine parts
	subscribe: function (engine_part) {
		this.engineParts.push(engine_part);
	},
	//to remove engine part (or deactivate it)
	unsubscribe: function (engine_part) {
		this.engineParts = this.engineParts.filter((engine_p) => {
			if (engine_p != engine_part) {
				return engine_p;
			}
		});
	},
	unsubscribeAll: function () {
		this.engineParts.forEach((engine_p) => {
			this.unsubscribe(engine_p);
		});
	},
	activate_Part: function () {
		this.engineParts.forEach((engine_part) => {
			engine_part.call();
		});
	},
};

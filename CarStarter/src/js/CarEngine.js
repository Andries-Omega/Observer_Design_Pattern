/**
 * Where the observers(engine parts) are
 */

// the starters;
export function turnCrankshaft() {
	console.log("Crankshaft turning");
}

export function movePistons() {
	console.log("Pistions moving in the cylinders... Engine cycle started");
}

export function getAirAndFuel() {
	console.log("Air and fuel drawn to the cylinders");
}

export function compress() {
	console.log("Air and Fuel are compressed");
}

export function sparkPlug() {
	console.log("Spark plugs are fired");
}

export function beginCombution() {
	console.log("Combustion begins....VROOM VROOM");
}

//  the enders
export function cutThePowerToLowVoltageSideOfTheIgnitionCoil() {
	console.log(
		"Electronics that fire the spark plugs turned off... Car is turned off"
	);
}

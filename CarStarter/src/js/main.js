/**
 * Referances:
 * 1. https://itstillruns.com/car-engine-start-4898218.html
 * 2. https://www.youtube.com/watch?v=45TeJEmcqk8
 * 3. https://www.quora.com/
 */
import {
	beginCombution,
	compress,
	cutThePowerToLowVoltageSideOfTheIgnitionCoil,
	getAirAndFuel,
	movePistons,
	sparkPlug,
	turnCrankshaft,
} from "./CarEngine";
import { Ignition } from "./CarIgnition";
import "../css/style.css";

/**
 * Wait for the ignition button to be pressed
 */
let engineon = false;
const ignition = new Ignition();
const carIgnitionBtn = document.getElementById("carIgnition");
carIgnitionBtn.innerHTML = "Turn On Engine";
let carRunInterval = null;
let audio = new Audio("src/Assets/Audio/engineIgnite.wav");

carIgnitionBtn.addEventListener("click", () => {
	// Check If Engine Is On Or Off
	if (engineon) {
		//Turn Off engine
		TurnOffEngine(ignition);
		carIgnitionBtn.innerHTML = "Turn On Engine";
		$("#carIgnition").removeClass("btnOn").addClass("btnOff");
	} else {
		//Turn On engine
		TurnOnEngine(ignition);
		carIgnitionBtn.innerHTML = "Turn Off Engine";
		$("#carIgnition").removeClass("btnOff").addClass("btnOn");
	}
	engineon = !engineon;
});

function TurnOnEngine(ignition) {
	audio.currentTime = 0;
	audio.play();
	setTimeout(() => {
		keepCarRunning();
	}, 5000);
	ignition.subscribe(turnCrankshaft);
	ignition.subscribe(movePistons);
	ignition.subscribe(getAirAndFuel);
	ignition.subscribe(compress);
	ignition.subscribe(sparkPlug);
	ignition.subscribe(beginCombution);

	//now do
	ignition.activate_Part();
}

function keepCarRunning() {
	carRunInterval = setInterval(() => {
		if (engineon) {
			audio.currentTime = 4;
		}
	}, 4000);
}
function TurnOffEngine(ignition) {
	ignition.unsubscribeAll();
	ignition.subscribe(cutThePowerToLowVoltageSideOfTheIgnitionCoil);
	ignition.activate_Part();
	ignition.unsubscribe(cutThePowerToLowVoltageSideOfTheIgnitionCoil);
	clearInterval(carRunInterval);
	audio.currentTime = 9;
}

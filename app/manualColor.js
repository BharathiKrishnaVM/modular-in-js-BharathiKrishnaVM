import { getColorFromPairNumber } from "./colorUtility";
import {MAJOR_COLOR_NAMES, MINOR_COLOR_NAMES} from '../app/colorConstants'

function generateManualColors() {
    const minorSize = MAJOR_COLOR_NAMES.length;
    const majorSize = MINOR_COLOR_NAMES.length;
    let manual = '';

    for (let i = 1; i <= minorSize * majorSize; i++) {
        const colorPair = getColorFromPairNumber(i);
        manual += `Pair Number: ${i}, Colors: ${colorPair.toString()}\n`;
    }

    return manual;
}

module.exports = generateManualColors;

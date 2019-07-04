import { injectable } from "inversify";

//import * as $ from "jquery";

@injectable()
export default class ApplyRed implements IApplyColor {
    colorize(): void {
        //$("body").css('background-color', 'red');
        document.getElementsByTagName('body').item(0).style.backgroundColor = "red";
    }
}
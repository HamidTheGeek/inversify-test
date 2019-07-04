var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "inversify"], function (require, exports, inversify_1) {
    Object.defineProperty(exports, "__esModule", { value: true });
    //import * as $ from "jquery";
    var ApplyRed = /** @class */ (function () {
        function ApplyRed() {
        }
        ApplyRed.prototype.colorize = function () {
            //$("body").css('background-color', 'red');
            document.getElementsByTagName('body').item(0).style.backgroundColor = "red";
        };
        ApplyRed = __decorate([
            inversify_1.injectable()
        ], ApplyRed);
        return ApplyRed;
    }());
    exports.default = ApplyRed;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbHlSZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvYXBwbHlSZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7SUFFQSw4QkFBOEI7SUFHOUI7UUFBQTtRQUtBLENBQUM7UUFKRywyQkFBUSxHQUFSO1lBQ0ksMkNBQTJDO1lBQzNDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDaEYsQ0FBQztRQUpnQixRQUFRO1lBRDVCLHNCQUFVLEVBQUU7V0FDUSxRQUFRLENBSzVCO1FBQUQsZUFBQztLQUFBLEFBTEQsSUFLQztzQkFMb0IsUUFBUSJ9
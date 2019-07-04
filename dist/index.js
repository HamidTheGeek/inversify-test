var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "inversify", "./types"], function (require, exports, inversify_1, types_1) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var Index = /** @class */ (function () {
        function Index() {
        }
        Index.prototype.Set = function () {
            this.colorizer.colorize();
        };
        __decorate([
            inversify_1.inject(types_1.default.IApplyColor),
            __metadata("design:type", Object)
        ], Index.prototype, "colorizer", void 0);
        return Index;
    }());
    exports.default = Index;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFJQTtRQUFBO1FBTUEsQ0FBQztRQUhVLG1CQUFHLEdBQVY7WUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzlCLENBQUM7UUFKMEI7WUFBMUIsa0JBQU0sQ0FBQyxlQUFLLENBQUMsV0FBVyxDQUFDOztnREFBd0I7UUFLdEQsWUFBQztLQUFBLEFBTkQsSUFNQztzQkFOb0IsS0FBSyJ9
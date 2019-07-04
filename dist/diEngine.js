define(["require", "exports", "inversify", "./applyRed", "./types"], function (require, exports, inversify_1, applyRed_1, types_1) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var engine = new inversify_1.Container();
    engine.bind(types_1.default.IApplyColor).to(applyRed_1.default);
    exports.default = engine;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlFbmdpbmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZGlFbmdpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SUFJQSxJQUFJLE1BQU0sR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztJQUM3QixNQUFNLENBQUMsSUFBSSxDQUFjLGVBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsa0JBQVEsQ0FBQyxDQUFDO0lBRXpELGtCQUFlLE1BQU0sQ0FBQyJ9
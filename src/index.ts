import engine from "./diEngine";
import { inject } from "inversify";
import Types from "./types";

export default class Index {
    @inject(Types.IApplyColor) colorizer: IApplyColor;

    public Set() {
        this.colorizer.colorize();
    }
}
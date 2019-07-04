import { Container } from "inversify";
import ApplyRed from "./applyRed";
import Types from "./types";

var engine = new Container();
engine.bind<IApplyColor>(Types.IApplyColor).to(ApplyRed);

export default engine;
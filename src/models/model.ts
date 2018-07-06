import { Model } from "mongoose";
import { IPersonModel } from "./person";

export interface IModel {
  user: Model<IPersonModel>;
}
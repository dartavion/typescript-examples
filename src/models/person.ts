
import { Document } from "mongoose";
import { IPerson } from "../interfaces/person";

export interface IPersonModel extends IPerson, Document {
  //custom methods for your model would be defined here
}
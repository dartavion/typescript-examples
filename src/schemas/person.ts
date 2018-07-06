import { Schema, SchemaOptions } from "mongoose";

export var personSchema: Schema = new Schema({
  createdAt: Date,
  firstName: String,
  lastName: String
});
personSchema.pre("save", function(next) {
  if (!this.model.createdAt) {
    this.createdAt = new Date();
  }
  next();
});
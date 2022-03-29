import mogoose from "mongoose";

const Schema = mogoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, reqyired: true },
    repeatPassword: { type: Schema.Types.ObjectId, ref: "password" },
    role: { type: String, default: "customer" },
  },
  { timestamps: true }
);

export default mogoose.model("User", userSchema);

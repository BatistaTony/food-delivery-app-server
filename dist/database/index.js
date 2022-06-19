"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
class database {
    constructor() {
        this._connect();
    }
    _connect() {
        mongoose_1.default.connect(process.env.DB_STRING, { useNewUrlParser: true }, (err) => {
            if (err)
                console.log("DB NOT CONNECTED");
            console.log("DB CONNECTED");
        });
    }
}
const dbInstance = new database();

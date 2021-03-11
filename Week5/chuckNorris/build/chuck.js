"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = require("node-fetch");
function chuckNorrisFetcher() {
    return node_fetch_1.default("https://api.chucknorris.io/jokes/random")
        .then((res) => res.json())
        .then((data) => data);
}
function chuckNorrisTester() {
    return __awaiter(this, void 0, void 0, function* () {
        let joke = yield chuckNorrisFetcher();
        console.log(joke.value);
    });
}
console.log(chuckNorrisTester());
//# sourceMappingURL=chuck.js.map
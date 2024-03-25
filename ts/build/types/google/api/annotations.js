"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.http = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const http_1 = require("./http");
exports.protobufPackage = "google.api";
exports.http = {
    number: 72295728,
    tag: 578365826,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        const writer = minimal_1.default.Writer.create();
        http_1.HttpRule.encode(value, writer.fork()).ldelim();
        encoded.push(writer.finish());
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return http_1.HttpRule.decode(reader, reader.uint32());
    },
};
function fail(message) {
    throw new Error(message !== null && message !== void 0 ? message : "Failed");
}

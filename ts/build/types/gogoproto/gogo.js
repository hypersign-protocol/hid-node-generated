"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testgen = exports.description = exports.equal = exports.onlyone = exports.stringer = exports.populate = exports.gostring = exports.face = exports.verboseEqual = exports.goprotoStringer = exports.goprotoGetters = exports.goprotoUnkeyedAll = exports.goprotoSizecacheAll = exports.messagenameAll = exports.goprotoRegistration = exports.enumdeclAll = exports.typedeclAll = exports.compareAll = exports.protosizerAll = exports.gogoprotoImport = exports.goprotoUnrecognizedAll = exports.goprotoExtensionsMapAll = exports.unsafeUnmarshalerAll = exports.unsafeMarshalerAll = exports.enumStringerAll = exports.goprotoEnumStringerAll = exports.sizerAll = exports.stableMarshalerAll = exports.unmarshalerAll = exports.marshalerAll = exports.benchgenAll = exports.testgenAll = exports.descriptionAll = exports.equalAll = exports.onlyoneAll = exports.stringerAll = exports.populateAll = exports.gostringAll = exports.faceAll = exports.verboseEqualAll = exports.goprotoStringerAll = exports.goprotoEnumPrefixAll = exports.goprotoGettersAll = exports.enumvalueCustomname = exports.enumdecl = exports.enumCustomname = exports.enumStringer = exports.goprotoEnumStringer = exports.goprotoEnumPrefix = exports.protobufPackage = void 0;
exports.castrepeated = exports.wktpointer = exports.stdduration = exports.stdtime = exports.castvalue = exports.castkey = exports.casttype = exports.moretags = exports.jsontag = exports.customname = exports.customtype = exports.embed = exports.nullable = exports.goprotoUnkeyed = exports.goprotoSizecache = exports.messagename = exports.typedecl = exports.compare = exports.protosizer = exports.goprotoUnrecognized = exports.goprotoExtensionsMap = exports.unsafeUnmarshaler = exports.unsafeMarshaler = exports.sizer = exports.stableMarshaler = exports.unmarshaler = exports.marshaler = exports.benchgen = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "gogoproto";
exports.goprotoEnumPrefix = {
    number: 62001,
    tag: 496008,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.goprotoEnumStringer = {
    number: 62021,
    tag: 496168,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.enumStringer = {
    number: 62022,
    tag: 496176,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.enumCustomname = {
    number: 62023,
    tag: 496186,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value !== undefined && value !== "") {
            const writer = minimal_1.default.Writer.create();
            writer.string(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.string();
    },
};
exports.enumdecl = {
    number: 62024,
    tag: 496192,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.enumvalueCustomname = {
    number: 66001,
    tag: 528010,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value !== undefined && value !== "") {
            const writer = minimal_1.default.Writer.create();
            writer.string(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.string();
    },
};
exports.goprotoGettersAll = {
    number: 63001,
    tag: 504008,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.goprotoEnumPrefixAll = {
    number: 63002,
    tag: 504016,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.goprotoStringerAll = {
    number: 63003,
    tag: 504024,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.verboseEqualAll = {
    number: 63004,
    tag: 504032,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.faceAll = {
    number: 63005,
    tag: 504040,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.gostringAll = {
    number: 63006,
    tag: 504048,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.populateAll = {
    number: 63007,
    tag: 504056,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.stringerAll = {
    number: 63008,
    tag: 504064,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.onlyoneAll = {
    number: 63009,
    tag: 504072,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.equalAll = {
    number: 63013,
    tag: 504104,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.descriptionAll = {
    number: 63014,
    tag: 504112,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.testgenAll = {
    number: 63015,
    tag: 504120,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.benchgenAll = {
    number: 63016,
    tag: 504128,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.marshalerAll = {
    number: 63017,
    tag: 504136,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.unmarshalerAll = {
    number: 63018,
    tag: 504144,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.stableMarshalerAll = {
    number: 63019,
    tag: 504152,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.sizerAll = {
    number: 63020,
    tag: 504160,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.goprotoEnumStringerAll = {
    number: 63021,
    tag: 504168,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.enumStringerAll = {
    number: 63022,
    tag: 504176,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.unsafeMarshalerAll = {
    number: 63023,
    tag: 504184,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.unsafeUnmarshalerAll = {
    number: 63024,
    tag: 504192,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.goprotoExtensionsMapAll = {
    number: 63025,
    tag: 504200,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.goprotoUnrecognizedAll = {
    number: 63026,
    tag: 504208,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.gogoprotoImport = {
    number: 63027,
    tag: 504216,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.protosizerAll = {
    number: 63028,
    tag: 504224,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.compareAll = {
    number: 63029,
    tag: 504232,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.typedeclAll = {
    number: 63030,
    tag: 504240,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.enumdeclAll = {
    number: 63031,
    tag: 504248,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.goprotoRegistration = {
    number: 63032,
    tag: 504256,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.messagenameAll = {
    number: 63033,
    tag: 504264,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.goprotoSizecacheAll = {
    number: 63034,
    tag: 504272,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.goprotoUnkeyedAll = {
    number: 63035,
    tag: 504280,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.goprotoGetters = {
    number: 64001,
    tag: 512008,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.goprotoStringer = {
    number: 64003,
    tag: 512024,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.verboseEqual = {
    number: 64004,
    tag: 512032,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.face = {
    number: 64005,
    tag: 512040,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.gostring = {
    number: 64006,
    tag: 512048,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.populate = {
    number: 64007,
    tag: 512056,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.stringer = {
    number: 67008,
    tag: 536064,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.onlyone = {
    number: 64009,
    tag: 512072,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.equal = {
    number: 64013,
    tag: 512104,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.description = {
    number: 64014,
    tag: 512112,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.testgen = {
    number: 64015,
    tag: 512120,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.benchgen = {
    number: 64016,
    tag: 512128,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.marshaler = {
    number: 64017,
    tag: 512136,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.unmarshaler = {
    number: 64018,
    tag: 512144,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.stableMarshaler = {
    number: 64019,
    tag: 512152,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.sizer = {
    number: 64020,
    tag: 512160,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.unsafeMarshaler = {
    number: 64023,
    tag: 512184,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.unsafeUnmarshaler = {
    number: 64024,
    tag: 512192,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.goprotoExtensionsMap = {
    number: 64025,
    tag: 512200,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.goprotoUnrecognized = {
    number: 64026,
    tag: 512208,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.protosizer = {
    number: 64028,
    tag: 512224,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.compare = {
    number: 64029,
    tag: 512232,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.typedecl = {
    number: 64030,
    tag: 512240,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.messagename = {
    number: 64033,
    tag: 512264,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.goprotoSizecache = {
    number: 64034,
    tag: 512272,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.goprotoUnkeyed = {
    number: 64035,
    tag: 512280,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.nullable = {
    number: 65001,
    tag: 520008,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.embed = {
    number: 65002,
    tag: 520016,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.customtype = {
    number: 65003,
    tag: 520026,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value !== undefined && value !== "") {
            const writer = minimal_1.default.Writer.create();
            writer.string(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.string();
    },
};
exports.customname = {
    number: 65004,
    tag: 520034,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value !== undefined && value !== "") {
            const writer = minimal_1.default.Writer.create();
            writer.string(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.string();
    },
};
exports.jsontag = {
    number: 65005,
    tag: 520042,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value !== undefined && value !== "") {
            const writer = minimal_1.default.Writer.create();
            writer.string(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.string();
    },
};
exports.moretags = {
    number: 65006,
    tag: 520050,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value !== undefined && value !== "") {
            const writer = minimal_1.default.Writer.create();
            writer.string(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.string();
    },
};
exports.casttype = {
    number: 65007,
    tag: 520058,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value !== undefined && value !== "") {
            const writer = minimal_1.default.Writer.create();
            writer.string(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.string();
    },
};
exports.castkey = {
    number: 65008,
    tag: 520066,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value !== undefined && value !== "") {
            const writer = minimal_1.default.Writer.create();
            writer.string(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.string();
    },
};
exports.castvalue = {
    number: 65009,
    tag: 520074,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value !== undefined && value !== "") {
            const writer = minimal_1.default.Writer.create();
            writer.string(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.string();
    },
};
exports.stdtime = {
    number: 65010,
    tag: 520080,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.stdduration = {
    number: 65011,
    tag: 520088,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.wktpointer = {
    number: 65012,
    tag: 520096,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value === true) {
            const writer = minimal_1.default.Writer.create();
            writer.bool(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.bool();
    },
};
exports.castrepeated = {
    number: 65013,
    tag: 520106,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value !== undefined && value !== "") {
            const writer = minimal_1.default.Writer.create();
            writer.string(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        var _a;
        const reader = minimal_1.default.Reader.create((_a = input[input.length - 1]) !== null && _a !== void 0 ? _a : fail());
        return reader.string();
    },
};
function fail(message) {
    throw new Error(message !== null && message !== void 0 ? message : "Failed");
}

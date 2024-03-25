"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageResponse = exports.PageRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "cosmos.base.query.v1beta1";
function createBasePageRequest() {
    return {};
}
exports.PageRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== undefined && message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.offset !== undefined && message.offset !== 0) {
            writer.uint32(16).uint64(message.offset);
        }
        if (message.limit !== undefined && message.limit !== 0) {
            writer.uint32(24).uint64(message.limit);
        }
        if (message.countTotal === true) {
            writer.uint32(32).bool(message.countTotal);
        }
        if (message.reverse === true) {
            writer.uint32(40).bool(message.reverse);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePageRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.bytes();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.offset = longToNumber(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.limit = longToNumber(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.countTotal = reader.bool();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.reverse = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            key: isSet(object.key) ? bytesFromBase64(object.key) : undefined,
            offset: isSet(object.offset) ? globalThis.Number(object.offset) : undefined,
            limit: isSet(object.limit) ? globalThis.Number(object.limit) : undefined,
            countTotal: isSet(object.countTotal) ? globalThis.Boolean(object.countTotal) : undefined,
            reverse: isSet(object.reverse) ? globalThis.Boolean(object.reverse) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.key !== undefined && message.key.length !== 0) {
            obj.key = base64FromBytes(message.key);
        }
        if (message.offset !== undefined && message.offset !== 0) {
            obj.offset = Math.round(message.offset);
        }
        if (message.limit !== undefined && message.limit !== 0) {
            obj.limit = Math.round(message.limit);
        }
        if (message.countTotal === true) {
            obj.countTotal = message.countTotal;
        }
        if (message.reverse === true) {
            obj.reverse = message.reverse;
        }
        return obj;
    },
    create(base) {
        return exports.PageRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBasePageRequest();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : undefined;
        message.offset = (_b = object.offset) !== null && _b !== void 0 ? _b : undefined;
        message.limit = (_c = object.limit) !== null && _c !== void 0 ? _c : undefined;
        message.countTotal = (_d = object.countTotal) !== null && _d !== void 0 ? _d : undefined;
        message.reverse = (_e = object.reverse) !== null && _e !== void 0 ? _e : undefined;
        return message;
    },
};
function createBasePageResponse() {
    return {};
}
exports.PageResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.nextKey !== undefined && message.nextKey.length !== 0) {
            writer.uint32(10).bytes(message.nextKey);
        }
        if (message.total !== undefined && message.total !== 0) {
            writer.uint32(16).uint64(message.total);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePageResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.nextKey = reader.bytes();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.total = longToNumber(reader.uint64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            nextKey: isSet(object.nextKey) ? bytesFromBase64(object.nextKey) : undefined,
            total: isSet(object.total) ? globalThis.Number(object.total) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.nextKey !== undefined && message.nextKey.length !== 0) {
            obj.nextKey = base64FromBytes(message.nextKey);
        }
        if (message.total !== undefined && message.total !== 0) {
            obj.total = Math.round(message.total);
        }
        return obj;
    },
    create(base) {
        return exports.PageResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePageResponse();
        message.nextKey = (_a = object.nextKey) !== null && _a !== void 0 ? _a : undefined;
        message.total = (_b = object.total) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function bytesFromBase64(b64) {
    if (globalThis.Buffer) {
        return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
    }
    else {
        const bin = globalThis.atob(b64);
        const arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (globalThis.Buffer) {
        return globalThis.Buffer.from(arr).toString("base64");
    }
    else {
        const bin = [];
        arr.forEach((byte) => {
            bin.push(globalThis.String.fromCharCode(byte));
        });
        return globalThis.btoa(bin.join(""));
    }
}
function longToNumber(long) {
    if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}

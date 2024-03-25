"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceCodeInfo_Location = exports.SourceCodeInfo = exports.UninterpretedOption_NamePart = exports.UninterpretedOption = exports.MethodOptions = exports.ServiceOptions = exports.EnumValueOptions = exports.EnumOptions = exports.OneofOptions = exports.FieldOptions = exports.MessageOptions = exports.FileOptions = exports.MethodDescriptorProto = exports.ServiceDescriptorProto = exports.EnumValueDescriptorProto = exports.EnumDescriptorProto_EnumReservedRange = exports.EnumDescriptorProto = exports.OneofDescriptorProto = exports.FieldDescriptorProto = exports.ExtensionRangeOptions = exports.DescriptorProto_ReservedRange = exports.DescriptorProto_ExtensionRange = exports.DescriptorProto = exports.FileDescriptorProto = exports.FileDescriptorSet = exports.methodOptions_IdempotencyLevelToNumber = exports.methodOptions_IdempotencyLevelToJSON = exports.methodOptions_IdempotencyLevelFromJSON = exports.MethodOptions_IdempotencyLevel = exports.fieldOptions_JSTypeToNumber = exports.fieldOptions_JSTypeToJSON = exports.fieldOptions_JSTypeFromJSON = exports.FieldOptions_JSType = exports.fieldOptions_CTypeToNumber = exports.fieldOptions_CTypeToJSON = exports.fieldOptions_CTypeFromJSON = exports.FieldOptions_CType = exports.fileOptions_OptimizeModeToNumber = exports.fileOptions_OptimizeModeToJSON = exports.fileOptions_OptimizeModeFromJSON = exports.FileOptions_OptimizeMode = exports.fieldDescriptorProto_LabelToNumber = exports.fieldDescriptorProto_LabelToJSON = exports.fieldDescriptorProto_LabelFromJSON = exports.FieldDescriptorProto_Label = exports.fieldDescriptorProto_TypeToNumber = exports.fieldDescriptorProto_TypeToJSON = exports.fieldDescriptorProto_TypeFromJSON = exports.FieldDescriptorProto_Type = exports.protobufPackage = void 0;
exports.GeneratedCodeInfo_Annotation = exports.GeneratedCodeInfo = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "google.protobuf";
var FieldDescriptorProto_Type;
(function (FieldDescriptorProto_Type) {
    /**
     * TYPE_DOUBLE - 0 is reserved for errors.
     * Order is weird for historical reasons.
     */
    FieldDescriptorProto_Type["TYPE_DOUBLE"] = "TYPE_DOUBLE";
    FieldDescriptorProto_Type["TYPE_FLOAT"] = "TYPE_FLOAT";
    /**
     * TYPE_INT64 - Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT64 if
     * negative values are likely.
     */
    FieldDescriptorProto_Type["TYPE_INT64"] = "TYPE_INT64";
    FieldDescriptorProto_Type["TYPE_UINT64"] = "TYPE_UINT64";
    /**
     * TYPE_INT32 - Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT32 if
     * negative values are likely.
     */
    FieldDescriptorProto_Type["TYPE_INT32"] = "TYPE_INT32";
    FieldDescriptorProto_Type["TYPE_FIXED64"] = "TYPE_FIXED64";
    FieldDescriptorProto_Type["TYPE_FIXED32"] = "TYPE_FIXED32";
    FieldDescriptorProto_Type["TYPE_BOOL"] = "TYPE_BOOL";
    FieldDescriptorProto_Type["TYPE_STRING"] = "TYPE_STRING";
    /**
     * TYPE_GROUP - Tag-delimited aggregate.
     * Group type is deprecated and not supported in proto3. However, Proto3
     * implementations should still be able to parse the group wire format and
     * treat group fields as unknown fields.
     */
    FieldDescriptorProto_Type["TYPE_GROUP"] = "TYPE_GROUP";
    /** TYPE_MESSAGE - Length-delimited aggregate. */
    FieldDescriptorProto_Type["TYPE_MESSAGE"] = "TYPE_MESSAGE";
    /** TYPE_BYTES - New in version 2. */
    FieldDescriptorProto_Type["TYPE_BYTES"] = "TYPE_BYTES";
    FieldDescriptorProto_Type["TYPE_UINT32"] = "TYPE_UINT32";
    FieldDescriptorProto_Type["TYPE_ENUM"] = "TYPE_ENUM";
    FieldDescriptorProto_Type["TYPE_SFIXED32"] = "TYPE_SFIXED32";
    FieldDescriptorProto_Type["TYPE_SFIXED64"] = "TYPE_SFIXED64";
    /** TYPE_SINT32 - Uses ZigZag encoding. */
    FieldDescriptorProto_Type["TYPE_SINT32"] = "TYPE_SINT32";
    /** TYPE_SINT64 - Uses ZigZag encoding. */
    FieldDescriptorProto_Type["TYPE_SINT64"] = "TYPE_SINT64";
})(FieldDescriptorProto_Type || (exports.FieldDescriptorProto_Type = FieldDescriptorProto_Type = {}));
function fieldDescriptorProto_TypeFromJSON(object) {
    switch (object) {
        case 1:
        case "TYPE_DOUBLE":
            return FieldDescriptorProto_Type.TYPE_DOUBLE;
        case 2:
        case "TYPE_FLOAT":
            return FieldDescriptorProto_Type.TYPE_FLOAT;
        case 3:
        case "TYPE_INT64":
            return FieldDescriptorProto_Type.TYPE_INT64;
        case 4:
        case "TYPE_UINT64":
            return FieldDescriptorProto_Type.TYPE_UINT64;
        case 5:
        case "TYPE_INT32":
            return FieldDescriptorProto_Type.TYPE_INT32;
        case 6:
        case "TYPE_FIXED64":
            return FieldDescriptorProto_Type.TYPE_FIXED64;
        case 7:
        case "TYPE_FIXED32":
            return FieldDescriptorProto_Type.TYPE_FIXED32;
        case 8:
        case "TYPE_BOOL":
            return FieldDescriptorProto_Type.TYPE_BOOL;
        case 9:
        case "TYPE_STRING":
            return FieldDescriptorProto_Type.TYPE_STRING;
        case 10:
        case "TYPE_GROUP":
            return FieldDescriptorProto_Type.TYPE_GROUP;
        case 11:
        case "TYPE_MESSAGE":
            return FieldDescriptorProto_Type.TYPE_MESSAGE;
        case 12:
        case "TYPE_BYTES":
            return FieldDescriptorProto_Type.TYPE_BYTES;
        case 13:
        case "TYPE_UINT32":
            return FieldDescriptorProto_Type.TYPE_UINT32;
        case 14:
        case "TYPE_ENUM":
            return FieldDescriptorProto_Type.TYPE_ENUM;
        case 15:
        case "TYPE_SFIXED32":
            return FieldDescriptorProto_Type.TYPE_SFIXED32;
        case 16:
        case "TYPE_SFIXED64":
            return FieldDescriptorProto_Type.TYPE_SFIXED64;
        case 17:
        case "TYPE_SINT32":
            return FieldDescriptorProto_Type.TYPE_SINT32;
        case 18:
        case "TYPE_SINT64":
            return FieldDescriptorProto_Type.TYPE_SINT64;
        default:
            throw new globalThis.Error("Unrecognized enum value " + object + " for enum FieldDescriptorProto_Type");
    }
}
exports.fieldDescriptorProto_TypeFromJSON = fieldDescriptorProto_TypeFromJSON;
function fieldDescriptorProto_TypeToJSON(object) {
    switch (object) {
        case FieldDescriptorProto_Type.TYPE_DOUBLE:
            return "TYPE_DOUBLE";
        case FieldDescriptorProto_Type.TYPE_FLOAT:
            return "TYPE_FLOAT";
        case FieldDescriptorProto_Type.TYPE_INT64:
            return "TYPE_INT64";
        case FieldDescriptorProto_Type.TYPE_UINT64:
            return "TYPE_UINT64";
        case FieldDescriptorProto_Type.TYPE_INT32:
            return "TYPE_INT32";
        case FieldDescriptorProto_Type.TYPE_FIXED64:
            return "TYPE_FIXED64";
        case FieldDescriptorProto_Type.TYPE_FIXED32:
            return "TYPE_FIXED32";
        case FieldDescriptorProto_Type.TYPE_BOOL:
            return "TYPE_BOOL";
        case FieldDescriptorProto_Type.TYPE_STRING:
            return "TYPE_STRING";
        case FieldDescriptorProto_Type.TYPE_GROUP:
            return "TYPE_GROUP";
        case FieldDescriptorProto_Type.TYPE_MESSAGE:
            return "TYPE_MESSAGE";
        case FieldDescriptorProto_Type.TYPE_BYTES:
            return "TYPE_BYTES";
        case FieldDescriptorProto_Type.TYPE_UINT32:
            return "TYPE_UINT32";
        case FieldDescriptorProto_Type.TYPE_ENUM:
            return "TYPE_ENUM";
        case FieldDescriptorProto_Type.TYPE_SFIXED32:
            return "TYPE_SFIXED32";
        case FieldDescriptorProto_Type.TYPE_SFIXED64:
            return "TYPE_SFIXED64";
        case FieldDescriptorProto_Type.TYPE_SINT32:
            return "TYPE_SINT32";
        case FieldDescriptorProto_Type.TYPE_SINT64:
            return "TYPE_SINT64";
        default:
            throw new globalThis.Error("Unrecognized enum value " + object + " for enum FieldDescriptorProto_Type");
    }
}
exports.fieldDescriptorProto_TypeToJSON = fieldDescriptorProto_TypeToJSON;
function fieldDescriptorProto_TypeToNumber(object) {
    switch (object) {
        case FieldDescriptorProto_Type.TYPE_DOUBLE:
            return 1;
        case FieldDescriptorProto_Type.TYPE_FLOAT:
            return 2;
        case FieldDescriptorProto_Type.TYPE_INT64:
            return 3;
        case FieldDescriptorProto_Type.TYPE_UINT64:
            return 4;
        case FieldDescriptorProto_Type.TYPE_INT32:
            return 5;
        case FieldDescriptorProto_Type.TYPE_FIXED64:
            return 6;
        case FieldDescriptorProto_Type.TYPE_FIXED32:
            return 7;
        case FieldDescriptorProto_Type.TYPE_BOOL:
            return 8;
        case FieldDescriptorProto_Type.TYPE_STRING:
            return 9;
        case FieldDescriptorProto_Type.TYPE_GROUP:
            return 10;
        case FieldDescriptorProto_Type.TYPE_MESSAGE:
            return 11;
        case FieldDescriptorProto_Type.TYPE_BYTES:
            return 12;
        case FieldDescriptorProto_Type.TYPE_UINT32:
            return 13;
        case FieldDescriptorProto_Type.TYPE_ENUM:
            return 14;
        case FieldDescriptorProto_Type.TYPE_SFIXED32:
            return 15;
        case FieldDescriptorProto_Type.TYPE_SFIXED64:
            return 16;
        case FieldDescriptorProto_Type.TYPE_SINT32:
            return 17;
        case FieldDescriptorProto_Type.TYPE_SINT64:
            return 18;
        default:
            throw new globalThis.Error("Unrecognized enum value " + object + " for enum FieldDescriptorProto_Type");
    }
}
exports.fieldDescriptorProto_TypeToNumber = fieldDescriptorProto_TypeToNumber;
var FieldDescriptorProto_Label;
(function (FieldDescriptorProto_Label) {
    /** LABEL_OPTIONAL - 0 is reserved for errors */
    FieldDescriptorProto_Label["LABEL_OPTIONAL"] = "LABEL_OPTIONAL";
    FieldDescriptorProto_Label["LABEL_REQUIRED"] = "LABEL_REQUIRED";
    FieldDescriptorProto_Label["LABEL_REPEATED"] = "LABEL_REPEATED";
})(FieldDescriptorProto_Label || (exports.FieldDescriptorProto_Label = FieldDescriptorProto_Label = {}));
function fieldDescriptorProto_LabelFromJSON(object) {
    switch (object) {
        case 1:
        case "LABEL_OPTIONAL":
            return FieldDescriptorProto_Label.LABEL_OPTIONAL;
        case 2:
        case "LABEL_REQUIRED":
            return FieldDescriptorProto_Label.LABEL_REQUIRED;
        case 3:
        case "LABEL_REPEATED":
            return FieldDescriptorProto_Label.LABEL_REPEATED;
        default:
            throw new globalThis.Error("Unrecognized enum value " + object + " for enum FieldDescriptorProto_Label");
    }
}
exports.fieldDescriptorProto_LabelFromJSON = fieldDescriptorProto_LabelFromJSON;
function fieldDescriptorProto_LabelToJSON(object) {
    switch (object) {
        case FieldDescriptorProto_Label.LABEL_OPTIONAL:
            return "LABEL_OPTIONAL";
        case FieldDescriptorProto_Label.LABEL_REQUIRED:
            return "LABEL_REQUIRED";
        case FieldDescriptorProto_Label.LABEL_REPEATED:
            return "LABEL_REPEATED";
        default:
            throw new globalThis.Error("Unrecognized enum value " + object + " for enum FieldDescriptorProto_Label");
    }
}
exports.fieldDescriptorProto_LabelToJSON = fieldDescriptorProto_LabelToJSON;
function fieldDescriptorProto_LabelToNumber(object) {
    switch (object) {
        case FieldDescriptorProto_Label.LABEL_OPTIONAL:
            return 1;
        case FieldDescriptorProto_Label.LABEL_REQUIRED:
            return 2;
        case FieldDescriptorProto_Label.LABEL_REPEATED:
            return 3;
        default:
            throw new globalThis.Error("Unrecognized enum value " + object + " for enum FieldDescriptorProto_Label");
    }
}
exports.fieldDescriptorProto_LabelToNumber = fieldDescriptorProto_LabelToNumber;
/** Generated classes can be optimized for speed or code size. */
var FileOptions_OptimizeMode;
(function (FileOptions_OptimizeMode) {
    /** SPEED - Generate complete code for parsing, serialization, */
    FileOptions_OptimizeMode["SPEED"] = "SPEED";
    /** CODE_SIZE - etc. */
    FileOptions_OptimizeMode["CODE_SIZE"] = "CODE_SIZE";
    /** LITE_RUNTIME - Generate code using MessageLite and the lite runtime. */
    FileOptions_OptimizeMode["LITE_RUNTIME"] = "LITE_RUNTIME";
})(FileOptions_OptimizeMode || (exports.FileOptions_OptimizeMode = FileOptions_OptimizeMode = {}));
function fileOptions_OptimizeModeFromJSON(object) {
    switch (object) {
        case 1:
        case "SPEED":
            return FileOptions_OptimizeMode.SPEED;
        case 2:
        case "CODE_SIZE":
            return FileOptions_OptimizeMode.CODE_SIZE;
        case 3:
        case "LITE_RUNTIME":
            return FileOptions_OptimizeMode.LITE_RUNTIME;
        default:
            throw new globalThis.Error("Unrecognized enum value " + object + " for enum FileOptions_OptimizeMode");
    }
}
exports.fileOptions_OptimizeModeFromJSON = fileOptions_OptimizeModeFromJSON;
function fileOptions_OptimizeModeToJSON(object) {
    switch (object) {
        case FileOptions_OptimizeMode.SPEED:
            return "SPEED";
        case FileOptions_OptimizeMode.CODE_SIZE:
            return "CODE_SIZE";
        case FileOptions_OptimizeMode.LITE_RUNTIME:
            return "LITE_RUNTIME";
        default:
            throw new globalThis.Error("Unrecognized enum value " + object + " for enum FileOptions_OptimizeMode");
    }
}
exports.fileOptions_OptimizeModeToJSON = fileOptions_OptimizeModeToJSON;
function fileOptions_OptimizeModeToNumber(object) {
    switch (object) {
        case FileOptions_OptimizeMode.SPEED:
            return 1;
        case FileOptions_OptimizeMode.CODE_SIZE:
            return 2;
        case FileOptions_OptimizeMode.LITE_RUNTIME:
            return 3;
        default:
            throw new globalThis.Error("Unrecognized enum value " + object + " for enum FileOptions_OptimizeMode");
    }
}
exports.fileOptions_OptimizeModeToNumber = fileOptions_OptimizeModeToNumber;
var FieldOptions_CType;
(function (FieldOptions_CType) {
    /** STRING - Default mode. */
    FieldOptions_CType["STRING"] = "STRING";
    FieldOptions_CType["CORD"] = "CORD";
    FieldOptions_CType["STRING_PIECE"] = "STRING_PIECE";
})(FieldOptions_CType || (exports.FieldOptions_CType = FieldOptions_CType = {}));
function fieldOptions_CTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "STRING":
            return FieldOptions_CType.STRING;
        case 1:
        case "CORD":
            return FieldOptions_CType.CORD;
        case 2:
        case "STRING_PIECE":
            return FieldOptions_CType.STRING_PIECE;
        default:
            throw new globalThis.Error("Unrecognized enum value " + object + " for enum FieldOptions_CType");
    }
}
exports.fieldOptions_CTypeFromJSON = fieldOptions_CTypeFromJSON;
function fieldOptions_CTypeToJSON(object) {
    switch (object) {
        case FieldOptions_CType.STRING:
            return "STRING";
        case FieldOptions_CType.CORD:
            return "CORD";
        case FieldOptions_CType.STRING_PIECE:
            return "STRING_PIECE";
        default:
            throw new globalThis.Error("Unrecognized enum value " + object + " for enum FieldOptions_CType");
    }
}
exports.fieldOptions_CTypeToJSON = fieldOptions_CTypeToJSON;
function fieldOptions_CTypeToNumber(object) {
    switch (object) {
        case FieldOptions_CType.STRING:
            return 0;
        case FieldOptions_CType.CORD:
            return 1;
        case FieldOptions_CType.STRING_PIECE:
            return 2;
        default:
            throw new globalThis.Error("Unrecognized enum value " + object + " for enum FieldOptions_CType");
    }
}
exports.fieldOptions_CTypeToNumber = fieldOptions_CTypeToNumber;
var FieldOptions_JSType;
(function (FieldOptions_JSType) {
    /** JS_NORMAL - Use the default type. */
    FieldOptions_JSType["JS_NORMAL"] = "JS_NORMAL";
    /** JS_STRING - Use JavaScript strings. */
    FieldOptions_JSType["JS_STRING"] = "JS_STRING";
    /** JS_NUMBER - Use JavaScript numbers. */
    FieldOptions_JSType["JS_NUMBER"] = "JS_NUMBER";
})(FieldOptions_JSType || (exports.FieldOptions_JSType = FieldOptions_JSType = {}));
function fieldOptions_JSTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "JS_NORMAL":
            return FieldOptions_JSType.JS_NORMAL;
        case 1:
        case "JS_STRING":
            return FieldOptions_JSType.JS_STRING;
        case 2:
        case "JS_NUMBER":
            return FieldOptions_JSType.JS_NUMBER;
        default:
            throw new globalThis.Error("Unrecognized enum value " + object + " for enum FieldOptions_JSType");
    }
}
exports.fieldOptions_JSTypeFromJSON = fieldOptions_JSTypeFromJSON;
function fieldOptions_JSTypeToJSON(object) {
    switch (object) {
        case FieldOptions_JSType.JS_NORMAL:
            return "JS_NORMAL";
        case FieldOptions_JSType.JS_STRING:
            return "JS_STRING";
        case FieldOptions_JSType.JS_NUMBER:
            return "JS_NUMBER";
        default:
            throw new globalThis.Error("Unrecognized enum value " + object + " for enum FieldOptions_JSType");
    }
}
exports.fieldOptions_JSTypeToJSON = fieldOptions_JSTypeToJSON;
function fieldOptions_JSTypeToNumber(object) {
    switch (object) {
        case FieldOptions_JSType.JS_NORMAL:
            return 0;
        case FieldOptions_JSType.JS_STRING:
            return 1;
        case FieldOptions_JSType.JS_NUMBER:
            return 2;
        default:
            throw new globalThis.Error("Unrecognized enum value " + object + " for enum FieldOptions_JSType");
    }
}
exports.fieldOptions_JSTypeToNumber = fieldOptions_JSTypeToNumber;
/**
 * Is this method side-effect-free (or safe in HTTP parlance), or idempotent,
 * or neither? HTTP based RPC implementation may choose GET verb for safe
 * methods, and PUT verb for idempotent methods instead of the default POST.
 */
var MethodOptions_IdempotencyLevel;
(function (MethodOptions_IdempotencyLevel) {
    MethodOptions_IdempotencyLevel["IDEMPOTENCY_UNKNOWN"] = "IDEMPOTENCY_UNKNOWN";
    /** NO_SIDE_EFFECTS - implies idempotent */
    MethodOptions_IdempotencyLevel["NO_SIDE_EFFECTS"] = "NO_SIDE_EFFECTS";
    /** IDEMPOTENT - idempotent, but may have side effects */
    MethodOptions_IdempotencyLevel["IDEMPOTENT"] = "IDEMPOTENT";
})(MethodOptions_IdempotencyLevel || (exports.MethodOptions_IdempotencyLevel = MethodOptions_IdempotencyLevel = {}));
function methodOptions_IdempotencyLevelFromJSON(object) {
    switch (object) {
        case 0:
        case "IDEMPOTENCY_UNKNOWN":
            return MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN;
        case 1:
        case "NO_SIDE_EFFECTS":
            return MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS;
        case 2:
        case "IDEMPOTENT":
            return MethodOptions_IdempotencyLevel.IDEMPOTENT;
        default:
            throw new globalThis.Error("Unrecognized enum value " + object + " for enum MethodOptions_IdempotencyLevel");
    }
}
exports.methodOptions_IdempotencyLevelFromJSON = methodOptions_IdempotencyLevelFromJSON;
function methodOptions_IdempotencyLevelToJSON(object) {
    switch (object) {
        case MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN:
            return "IDEMPOTENCY_UNKNOWN";
        case MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS:
            return "NO_SIDE_EFFECTS";
        case MethodOptions_IdempotencyLevel.IDEMPOTENT:
            return "IDEMPOTENT";
        default:
            throw new globalThis.Error("Unrecognized enum value " + object + " for enum MethodOptions_IdempotencyLevel");
    }
}
exports.methodOptions_IdempotencyLevelToJSON = methodOptions_IdempotencyLevelToJSON;
function methodOptions_IdempotencyLevelToNumber(object) {
    switch (object) {
        case MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN:
            return 0;
        case MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS:
            return 1;
        case MethodOptions_IdempotencyLevel.IDEMPOTENT:
            return 2;
        default:
            throw new globalThis.Error("Unrecognized enum value " + object + " for enum MethodOptions_IdempotencyLevel");
    }
}
exports.methodOptions_IdempotencyLevelToNumber = methodOptions_IdempotencyLevelToNumber;
function createBaseFileDescriptorSet() {
    return {};
}
exports.FileDescriptorSet = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.file !== undefined && message.file.length !== 0) {
            for (const v of message.file) {
                exports.FileDescriptorProto.encode(v, writer.uint32(10).fork()).ldelim();
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFileDescriptorSet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    if (message.file === undefined) {
                        message.file = [];
                    }
                    message.file.push(exports.FileDescriptorProto.decode(reader, reader.uint32()));
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
            file: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.file)
                ? object.file.map((e) => exports.FileDescriptorProto.fromJSON(e))
                : undefined,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.file) === null || _a === void 0 ? void 0 : _a.length) {
            obj.file = message.file.map((e) => exports.FileDescriptorProto.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.FileDescriptorSet.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseFileDescriptorSet();
        message.file = ((_a = object.file) === null || _a === void 0 ? void 0 : _a.map((e) => exports.FileDescriptorProto.fromPartial(e))) || undefined;
        return message;
    },
};
function createBaseFileDescriptorProto() {
    return {};
}
exports.FileDescriptorProto = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== undefined && message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.package !== undefined && message.package !== "") {
            writer.uint32(18).string(message.package);
        }
        if (message.dependency !== undefined && message.dependency.length !== 0) {
            for (const v of message.dependency) {
                writer.uint32(26).string(v);
            }
        }
        if (message.publicDependency !== undefined && message.publicDependency.length !== 0) {
            writer.uint32(82).fork();
            for (const v of message.publicDependency) {
                writer.int32(v);
            }
            writer.ldelim();
        }
        if (message.weakDependency !== undefined && message.weakDependency.length !== 0) {
            writer.uint32(90).fork();
            for (const v of message.weakDependency) {
                writer.int32(v);
            }
            writer.ldelim();
        }
        if (message.messageType !== undefined && message.messageType.length !== 0) {
            for (const v of message.messageType) {
                exports.DescriptorProto.encode(v, writer.uint32(34).fork()).ldelim();
            }
        }
        if (message.enumType !== undefined && message.enumType.length !== 0) {
            for (const v of message.enumType) {
                exports.EnumDescriptorProto.encode(v, writer.uint32(42).fork()).ldelim();
            }
        }
        if (message.service !== undefined && message.service.length !== 0) {
            for (const v of message.service) {
                exports.ServiceDescriptorProto.encode(v, writer.uint32(50).fork()).ldelim();
            }
        }
        if (message.extension !== undefined && message.extension.length !== 0) {
            for (const v of message.extension) {
                exports.FieldDescriptorProto.encode(v, writer.uint32(58).fork()).ldelim();
            }
        }
        if (message.options !== undefined) {
            exports.FileOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
        }
        if (message.sourceCodeInfo !== undefined) {
            exports.SourceCodeInfo.encode(message.sourceCodeInfo, writer.uint32(74).fork()).ldelim();
        }
        if (message.syntax !== undefined && message.syntax !== "") {
            writer.uint32(98).string(message.syntax);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFileDescriptorProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.package = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    if (message.dependency === undefined) {
                        message.dependency = [];
                    }
                    message.dependency.push(reader.string());
                    continue;
                case 10:
                    if (tag === 80) {
                        if (message.publicDependency === undefined) {
                            message.publicDependency = [];
                        }
                        message.publicDependency.push(reader.int32());
                        continue;
                    }
                    if (tag === 82) {
                        if (message.publicDependency === undefined) {
                            message.publicDependency = [];
                        }
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.publicDependency.push(reader.int32());
                        }
                        continue;
                    }
                    break;
                case 11:
                    if (tag === 88) {
                        if (message.weakDependency === undefined) {
                            message.weakDependency = [];
                        }
                        message.weakDependency.push(reader.int32());
                        continue;
                    }
                    if (tag === 90) {
                        if (message.weakDependency === undefined) {
                            message.weakDependency = [];
                        }
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.weakDependency.push(reader.int32());
                        }
                        continue;
                    }
                    break;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    if (message.messageType === undefined) {
                        message.messageType = [];
                    }
                    message.messageType.push(exports.DescriptorProto.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    if (message.enumType === undefined) {
                        message.enumType = [];
                    }
                    message.enumType.push(exports.EnumDescriptorProto.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    if (message.service === undefined) {
                        message.service = [];
                    }
                    message.service.push(exports.ServiceDescriptorProto.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    if (message.extension === undefined) {
                        message.extension = [];
                    }
                    message.extension.push(exports.FieldDescriptorProto.decode(reader, reader.uint32()));
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.options = exports.FileOptions.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.sourceCodeInfo = exports.SourceCodeInfo.decode(reader, reader.uint32());
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.syntax = reader.string();
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
            name: isSet(object.name) ? globalThis.String(object.name) : undefined,
            package: isSet(object.package) ? globalThis.String(object.package) : undefined,
            dependency: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.dependency)
                ? object.dependency.map((e) => globalThis.String(e))
                : undefined,
            publicDependency: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.publicDependency)
                ? object.publicDependency.map((e) => globalThis.Number(e))
                : undefined,
            weakDependency: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.weakDependency)
                ? object.weakDependency.map((e) => globalThis.Number(e))
                : undefined,
            messageType: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.messageType)
                ? object.messageType.map((e) => exports.DescriptorProto.fromJSON(e))
                : undefined,
            enumType: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.enumType)
                ? object.enumType.map((e) => exports.EnumDescriptorProto.fromJSON(e))
                : undefined,
            service: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.service)
                ? object.service.map((e) => exports.ServiceDescriptorProto.fromJSON(e))
                : undefined,
            extension: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.extension)
                ? object.extension.map((e) => exports.FieldDescriptorProto.fromJSON(e))
                : undefined,
            options: isSet(object.options) ? exports.FileOptions.fromJSON(object.options) : undefined,
            sourceCodeInfo: isSet(object.sourceCodeInfo) ? exports.SourceCodeInfo.fromJSON(object.sourceCodeInfo) : undefined,
            syntax: isSet(object.syntax) ? globalThis.String(object.syntax) : undefined,
        };
    },
    toJSON(message) {
        var _a, _b, _c, _d, _e, _f, _g;
        const obj = {};
        if (message.name !== undefined && message.name !== "") {
            obj.name = message.name;
        }
        if (message.package !== undefined && message.package !== "") {
            obj.package = message.package;
        }
        if ((_a = message.dependency) === null || _a === void 0 ? void 0 : _a.length) {
            obj.dependency = message.dependency;
        }
        if ((_b = message.publicDependency) === null || _b === void 0 ? void 0 : _b.length) {
            obj.publicDependency = message.publicDependency.map((e) => Math.round(e));
        }
        if ((_c = message.weakDependency) === null || _c === void 0 ? void 0 : _c.length) {
            obj.weakDependency = message.weakDependency.map((e) => Math.round(e));
        }
        if ((_d = message.messageType) === null || _d === void 0 ? void 0 : _d.length) {
            obj.messageType = message.messageType.map((e) => exports.DescriptorProto.toJSON(e));
        }
        if ((_e = message.enumType) === null || _e === void 0 ? void 0 : _e.length) {
            obj.enumType = message.enumType.map((e) => exports.EnumDescriptorProto.toJSON(e));
        }
        if ((_f = message.service) === null || _f === void 0 ? void 0 : _f.length) {
            obj.service = message.service.map((e) => exports.ServiceDescriptorProto.toJSON(e));
        }
        if ((_g = message.extension) === null || _g === void 0 ? void 0 : _g.length) {
            obj.extension = message.extension.map((e) => exports.FieldDescriptorProto.toJSON(e));
        }
        if (message.options !== undefined) {
            obj.options = exports.FileOptions.toJSON(message.options);
        }
        if (message.sourceCodeInfo !== undefined) {
            obj.sourceCodeInfo = exports.SourceCodeInfo.toJSON(message.sourceCodeInfo);
        }
        if (message.syntax !== undefined && message.syntax !== "") {
            obj.syntax = message.syntax;
        }
        return obj;
    },
    create(base) {
        return exports.FileDescriptorProto.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = createBaseFileDescriptorProto();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : undefined;
        message.package = (_b = object.package) !== null && _b !== void 0 ? _b : undefined;
        message.dependency = ((_c = object.dependency) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || undefined;
        message.publicDependency = ((_d = object.publicDependency) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || undefined;
        message.weakDependency = ((_e = object.weakDependency) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || undefined;
        message.messageType = ((_f = object.messageType) === null || _f === void 0 ? void 0 : _f.map((e) => exports.DescriptorProto.fromPartial(e))) || undefined;
        message.enumType = ((_g = object.enumType) === null || _g === void 0 ? void 0 : _g.map((e) => exports.EnumDescriptorProto.fromPartial(e))) || undefined;
        message.service = ((_h = object.service) === null || _h === void 0 ? void 0 : _h.map((e) => exports.ServiceDescriptorProto.fromPartial(e))) || undefined;
        message.extension = ((_j = object.extension) === null || _j === void 0 ? void 0 : _j.map((e) => exports.FieldDescriptorProto.fromPartial(e))) || undefined;
        message.options = (object.options !== undefined && object.options !== null)
            ? exports.FileOptions.fromPartial(object.options)
            : undefined;
        message.sourceCodeInfo = (object.sourceCodeInfo !== undefined && object.sourceCodeInfo !== null)
            ? exports.SourceCodeInfo.fromPartial(object.sourceCodeInfo)
            : undefined;
        message.syntax = (_k = object.syntax) !== null && _k !== void 0 ? _k : undefined;
        return message;
    },
};
function createBaseDescriptorProto() {
    return {};
}
exports.DescriptorProto = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== undefined && message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.field !== undefined && message.field.length !== 0) {
            for (const v of message.field) {
                exports.FieldDescriptorProto.encode(v, writer.uint32(18).fork()).ldelim();
            }
        }
        if (message.extension !== undefined && message.extension.length !== 0) {
            for (const v of message.extension) {
                exports.FieldDescriptorProto.encode(v, writer.uint32(50).fork()).ldelim();
            }
        }
        if (message.nestedType !== undefined && message.nestedType.length !== 0) {
            for (const v of message.nestedType) {
                exports.DescriptorProto.encode(v, writer.uint32(26).fork()).ldelim();
            }
        }
        if (message.enumType !== undefined && message.enumType.length !== 0) {
            for (const v of message.enumType) {
                exports.EnumDescriptorProto.encode(v, writer.uint32(34).fork()).ldelim();
            }
        }
        if (message.extensionRange !== undefined && message.extensionRange.length !== 0) {
            for (const v of message.extensionRange) {
                exports.DescriptorProto_ExtensionRange.encode(v, writer.uint32(42).fork()).ldelim();
            }
        }
        if (message.oneofDecl !== undefined && message.oneofDecl.length !== 0) {
            for (const v of message.oneofDecl) {
                exports.OneofDescriptorProto.encode(v, writer.uint32(66).fork()).ldelim();
            }
        }
        if (message.options !== undefined) {
            exports.MessageOptions.encode(message.options, writer.uint32(58).fork()).ldelim();
        }
        if (message.reservedRange !== undefined && message.reservedRange.length !== 0) {
            for (const v of message.reservedRange) {
                exports.DescriptorProto_ReservedRange.encode(v, writer.uint32(74).fork()).ldelim();
            }
        }
        if (message.reservedName !== undefined && message.reservedName.length !== 0) {
            for (const v of message.reservedName) {
                writer.uint32(82).string(v);
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDescriptorProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    if (message.field === undefined) {
                        message.field = [];
                    }
                    message.field.push(exports.FieldDescriptorProto.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    if (message.extension === undefined) {
                        message.extension = [];
                    }
                    message.extension.push(exports.FieldDescriptorProto.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    if (message.nestedType === undefined) {
                        message.nestedType = [];
                    }
                    message.nestedType.push(exports.DescriptorProto.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    if (message.enumType === undefined) {
                        message.enumType = [];
                    }
                    message.enumType.push(exports.EnumDescriptorProto.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    if (message.extensionRange === undefined) {
                        message.extensionRange = [];
                    }
                    message.extensionRange.push(exports.DescriptorProto_ExtensionRange.decode(reader, reader.uint32()));
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    if (message.oneofDecl === undefined) {
                        message.oneofDecl = [];
                    }
                    message.oneofDecl.push(exports.OneofDescriptorProto.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.options = exports.MessageOptions.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    if (message.reservedRange === undefined) {
                        message.reservedRange = [];
                    }
                    message.reservedRange.push(exports.DescriptorProto_ReservedRange.decode(reader, reader.uint32()));
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    if (message.reservedName === undefined) {
                        message.reservedName = [];
                    }
                    message.reservedName.push(reader.string());
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
            name: isSet(object.name) ? globalThis.String(object.name) : undefined,
            field: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.field)
                ? object.field.map((e) => exports.FieldDescriptorProto.fromJSON(e))
                : undefined,
            extension: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.extension)
                ? object.extension.map((e) => exports.FieldDescriptorProto.fromJSON(e))
                : undefined,
            nestedType: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.nestedType)
                ? object.nestedType.map((e) => exports.DescriptorProto.fromJSON(e))
                : undefined,
            enumType: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.enumType)
                ? object.enumType.map((e) => exports.EnumDescriptorProto.fromJSON(e))
                : undefined,
            extensionRange: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.extensionRange)
                ? object.extensionRange.map((e) => exports.DescriptorProto_ExtensionRange.fromJSON(e))
                : undefined,
            oneofDecl: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.oneofDecl)
                ? object.oneofDecl.map((e) => exports.OneofDescriptorProto.fromJSON(e))
                : undefined,
            options: isSet(object.options) ? exports.MessageOptions.fromJSON(object.options) : undefined,
            reservedRange: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.reservedRange)
                ? object.reservedRange.map((e) => exports.DescriptorProto_ReservedRange.fromJSON(e))
                : undefined,
            reservedName: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.reservedName)
                ? object.reservedName.map((e) => globalThis.String(e))
                : undefined,
        };
    },
    toJSON(message) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const obj = {};
        if (message.name !== undefined && message.name !== "") {
            obj.name = message.name;
        }
        if ((_a = message.field) === null || _a === void 0 ? void 0 : _a.length) {
            obj.field = message.field.map((e) => exports.FieldDescriptorProto.toJSON(e));
        }
        if ((_b = message.extension) === null || _b === void 0 ? void 0 : _b.length) {
            obj.extension = message.extension.map((e) => exports.FieldDescriptorProto.toJSON(e));
        }
        if ((_c = message.nestedType) === null || _c === void 0 ? void 0 : _c.length) {
            obj.nestedType = message.nestedType.map((e) => exports.DescriptorProto.toJSON(e));
        }
        if ((_d = message.enumType) === null || _d === void 0 ? void 0 : _d.length) {
            obj.enumType = message.enumType.map((e) => exports.EnumDescriptorProto.toJSON(e));
        }
        if ((_e = message.extensionRange) === null || _e === void 0 ? void 0 : _e.length) {
            obj.extensionRange = message.extensionRange.map((e) => exports.DescriptorProto_ExtensionRange.toJSON(e));
        }
        if ((_f = message.oneofDecl) === null || _f === void 0 ? void 0 : _f.length) {
            obj.oneofDecl = message.oneofDecl.map((e) => exports.OneofDescriptorProto.toJSON(e));
        }
        if (message.options !== undefined) {
            obj.options = exports.MessageOptions.toJSON(message.options);
        }
        if ((_g = message.reservedRange) === null || _g === void 0 ? void 0 : _g.length) {
            obj.reservedRange = message.reservedRange.map((e) => exports.DescriptorProto_ReservedRange.toJSON(e));
        }
        if ((_h = message.reservedName) === null || _h === void 0 ? void 0 : _h.length) {
            obj.reservedName = message.reservedName;
        }
        return obj;
    },
    create(base) {
        return exports.DescriptorProto.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseDescriptorProto();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : undefined;
        message.field = ((_b = object.field) === null || _b === void 0 ? void 0 : _b.map((e) => exports.FieldDescriptorProto.fromPartial(e))) || undefined;
        message.extension = ((_c = object.extension) === null || _c === void 0 ? void 0 : _c.map((e) => exports.FieldDescriptorProto.fromPartial(e))) || undefined;
        message.nestedType = ((_d = object.nestedType) === null || _d === void 0 ? void 0 : _d.map((e) => exports.DescriptorProto.fromPartial(e))) || undefined;
        message.enumType = ((_e = object.enumType) === null || _e === void 0 ? void 0 : _e.map((e) => exports.EnumDescriptorProto.fromPartial(e))) || undefined;
        message.extensionRange = ((_f = object.extensionRange) === null || _f === void 0 ? void 0 : _f.map((e) => exports.DescriptorProto_ExtensionRange.fromPartial(e))) ||
            undefined;
        message.oneofDecl = ((_g = object.oneofDecl) === null || _g === void 0 ? void 0 : _g.map((e) => exports.OneofDescriptorProto.fromPartial(e))) || undefined;
        message.options = (object.options !== undefined && object.options !== null)
            ? exports.MessageOptions.fromPartial(object.options)
            : undefined;
        message.reservedRange = ((_h = object.reservedRange) === null || _h === void 0 ? void 0 : _h.map((e) => exports.DescriptorProto_ReservedRange.fromPartial(e))) || undefined;
        message.reservedName = ((_j = object.reservedName) === null || _j === void 0 ? void 0 : _j.map((e) => e)) || undefined;
        return message;
    },
};
function createBaseDescriptorProto_ExtensionRange() {
    return {};
}
exports.DescriptorProto_ExtensionRange = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.start !== undefined && message.start !== 0) {
            writer.uint32(8).int32(message.start);
        }
        if (message.end !== undefined && message.end !== 0) {
            writer.uint32(16).int32(message.end);
        }
        if (message.options !== undefined) {
            exports.ExtensionRangeOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDescriptorProto_ExtensionRange();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.start = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.end = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.options = exports.ExtensionRangeOptions.decode(reader, reader.uint32());
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
            start: isSet(object.start) ? globalThis.Number(object.start) : undefined,
            end: isSet(object.end) ? globalThis.Number(object.end) : undefined,
            options: isSet(object.options) ? exports.ExtensionRangeOptions.fromJSON(object.options) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.start !== undefined && message.start !== 0) {
            obj.start = Math.round(message.start);
        }
        if (message.end !== undefined && message.end !== 0) {
            obj.end = Math.round(message.end);
        }
        if (message.options !== undefined) {
            obj.options = exports.ExtensionRangeOptions.toJSON(message.options);
        }
        return obj;
    },
    create(base) {
        return exports.DescriptorProto_ExtensionRange.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDescriptorProto_ExtensionRange();
        message.start = (_a = object.start) !== null && _a !== void 0 ? _a : undefined;
        message.end = (_b = object.end) !== null && _b !== void 0 ? _b : undefined;
        message.options = (object.options !== undefined && object.options !== null)
            ? exports.ExtensionRangeOptions.fromPartial(object.options)
            : undefined;
        return message;
    },
};
function createBaseDescriptorProto_ReservedRange() {
    return {};
}
exports.DescriptorProto_ReservedRange = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.start !== undefined && message.start !== 0) {
            writer.uint32(8).int32(message.start);
        }
        if (message.end !== undefined && message.end !== 0) {
            writer.uint32(16).int32(message.end);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDescriptorProto_ReservedRange();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.start = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.end = reader.int32();
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
            start: isSet(object.start) ? globalThis.Number(object.start) : undefined,
            end: isSet(object.end) ? globalThis.Number(object.end) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.start !== undefined && message.start !== 0) {
            obj.start = Math.round(message.start);
        }
        if (message.end !== undefined && message.end !== 0) {
            obj.end = Math.round(message.end);
        }
        return obj;
    },
    create(base) {
        return exports.DescriptorProto_ReservedRange.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDescriptorProto_ReservedRange();
        message.start = (_a = object.start) !== null && _a !== void 0 ? _a : undefined;
        message.end = (_b = object.end) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseExtensionRangeOptions() {
    return {};
}
exports.ExtensionRangeOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.uninterpretedOption !== undefined && message.uninterpretedOption.length !== 0) {
            for (const v of message.uninterpretedOption) {
                exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExtensionRangeOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 999:
                    if (tag !== 7994) {
                        break;
                    }
                    if (message.uninterpretedOption === undefined) {
                        message.uninterpretedOption = [];
                    }
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
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
            uninterpretedOption: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpretedOption)
                ? object.uninterpretedOption.map((e) => exports.UninterpretedOption.fromJSON(e))
                : undefined,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.uninterpretedOption) === null || _a === void 0 ? void 0 : _a.length) {
            obj.uninterpretedOption = message.uninterpretedOption.map((e) => exports.UninterpretedOption.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.ExtensionRangeOptions.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseExtensionRangeOptions();
        message.uninterpretedOption = ((_a = object.uninterpretedOption) === null || _a === void 0 ? void 0 : _a.map((e) => exports.UninterpretedOption.fromPartial(e))) ||
            undefined;
        return message;
    },
};
function createBaseFieldDescriptorProto() {
    return {};
}
exports.FieldDescriptorProto = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== undefined && message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.number !== undefined && message.number !== 0) {
            writer.uint32(24).int32(message.number);
        }
        if (message.label !== undefined && message.label !== FieldDescriptorProto_Label.LABEL_OPTIONAL) {
            writer.uint32(32).int32(fieldDescriptorProto_LabelToNumber(message.label));
        }
        if (message.type !== undefined && message.type !== FieldDescriptorProto_Type.TYPE_DOUBLE) {
            writer.uint32(40).int32(fieldDescriptorProto_TypeToNumber(message.type));
        }
        if (message.typeName !== undefined && message.typeName !== "") {
            writer.uint32(50).string(message.typeName);
        }
        if (message.extendee !== undefined && message.extendee !== "") {
            writer.uint32(18).string(message.extendee);
        }
        if (message.defaultValue !== undefined && message.defaultValue !== "") {
            writer.uint32(58).string(message.defaultValue);
        }
        if (message.oneofIndex !== undefined && message.oneofIndex !== 0) {
            writer.uint32(72).int32(message.oneofIndex);
        }
        if (message.jsonName !== undefined && message.jsonName !== "") {
            writer.uint32(82).string(message.jsonName);
        }
        if (message.options !== undefined) {
            exports.FieldOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
        }
        if (message.proto3Optional === true) {
            writer.uint32(136).bool(message.proto3Optional);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFieldDescriptorProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.number = reader.int32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.label = fieldDescriptorProto_LabelFromJSON(reader.int32());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.type = fieldDescriptorProto_TypeFromJSON(reader.int32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.typeName = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.extendee = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.defaultValue = reader.string();
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }
                    message.oneofIndex = reader.int32();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.jsonName = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.options = exports.FieldOptions.decode(reader, reader.uint32());
                    continue;
                case 17:
                    if (tag !== 136) {
                        break;
                    }
                    message.proto3Optional = reader.bool();
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
            name: isSet(object.name) ? globalThis.String(object.name) : undefined,
            number: isSet(object.number) ? globalThis.Number(object.number) : undefined,
            label: isSet(object.label) ? fieldDescriptorProto_LabelFromJSON(object.label) : undefined,
            type: isSet(object.type) ? fieldDescriptorProto_TypeFromJSON(object.type) : undefined,
            typeName: isSet(object.typeName) ? globalThis.String(object.typeName) : undefined,
            extendee: isSet(object.extendee) ? globalThis.String(object.extendee) : undefined,
            defaultValue: isSet(object.defaultValue) ? globalThis.String(object.defaultValue) : undefined,
            oneofIndex: isSet(object.oneofIndex) ? globalThis.Number(object.oneofIndex) : undefined,
            jsonName: isSet(object.jsonName) ? globalThis.String(object.jsonName) : undefined,
            options: isSet(object.options) ? exports.FieldOptions.fromJSON(object.options) : undefined,
            proto3Optional: isSet(object.proto3Optional) ? globalThis.Boolean(object.proto3Optional) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== undefined && message.name !== "") {
            obj.name = message.name;
        }
        if (message.number !== undefined && message.number !== 0) {
            obj.number = Math.round(message.number);
        }
        if (message.label !== undefined && message.label !== FieldDescriptorProto_Label.LABEL_OPTIONAL) {
            obj.label = fieldDescriptorProto_LabelToJSON(message.label);
        }
        if (message.type !== undefined && message.type !== FieldDescriptorProto_Type.TYPE_DOUBLE) {
            obj.type = fieldDescriptorProto_TypeToJSON(message.type);
        }
        if (message.typeName !== undefined && message.typeName !== "") {
            obj.typeName = message.typeName;
        }
        if (message.extendee !== undefined && message.extendee !== "") {
            obj.extendee = message.extendee;
        }
        if (message.defaultValue !== undefined && message.defaultValue !== "") {
            obj.defaultValue = message.defaultValue;
        }
        if (message.oneofIndex !== undefined && message.oneofIndex !== 0) {
            obj.oneofIndex = Math.round(message.oneofIndex);
        }
        if (message.jsonName !== undefined && message.jsonName !== "") {
            obj.jsonName = message.jsonName;
        }
        if (message.options !== undefined) {
            obj.options = exports.FieldOptions.toJSON(message.options);
        }
        if (message.proto3Optional === true) {
            obj.proto3Optional = message.proto3Optional;
        }
        return obj;
    },
    create(base) {
        return exports.FieldDescriptorProto.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = createBaseFieldDescriptorProto();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : undefined;
        message.number = (_b = object.number) !== null && _b !== void 0 ? _b : undefined;
        message.label = (_c = object.label) !== null && _c !== void 0 ? _c : undefined;
        message.type = (_d = object.type) !== null && _d !== void 0 ? _d : undefined;
        message.typeName = (_e = object.typeName) !== null && _e !== void 0 ? _e : undefined;
        message.extendee = (_f = object.extendee) !== null && _f !== void 0 ? _f : undefined;
        message.defaultValue = (_g = object.defaultValue) !== null && _g !== void 0 ? _g : undefined;
        message.oneofIndex = (_h = object.oneofIndex) !== null && _h !== void 0 ? _h : undefined;
        message.jsonName = (_j = object.jsonName) !== null && _j !== void 0 ? _j : undefined;
        message.options = (object.options !== undefined && object.options !== null)
            ? exports.FieldOptions.fromPartial(object.options)
            : undefined;
        message.proto3Optional = (_k = object.proto3Optional) !== null && _k !== void 0 ? _k : undefined;
        return message;
    },
};
function createBaseOneofDescriptorProto() {
    return {};
}
exports.OneofDescriptorProto = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== undefined && message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.options !== undefined) {
            exports.OneofOptions.encode(message.options, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOneofDescriptorProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.options = exports.OneofOptions.decode(reader, reader.uint32());
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
            name: isSet(object.name) ? globalThis.String(object.name) : undefined,
            options: isSet(object.options) ? exports.OneofOptions.fromJSON(object.options) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== undefined && message.name !== "") {
            obj.name = message.name;
        }
        if (message.options !== undefined) {
            obj.options = exports.OneofOptions.toJSON(message.options);
        }
        return obj;
    },
    create(base) {
        return exports.OneofDescriptorProto.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseOneofDescriptorProto();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : undefined;
        message.options = (object.options !== undefined && object.options !== null)
            ? exports.OneofOptions.fromPartial(object.options)
            : undefined;
        return message;
    },
};
function createBaseEnumDescriptorProto() {
    return {};
}
exports.EnumDescriptorProto = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== undefined && message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.value !== undefined && message.value.length !== 0) {
            for (const v of message.value) {
                exports.EnumValueDescriptorProto.encode(v, writer.uint32(18).fork()).ldelim();
            }
        }
        if (message.options !== undefined) {
            exports.EnumOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
        }
        if (message.reservedRange !== undefined && message.reservedRange.length !== 0) {
            for (const v of message.reservedRange) {
                exports.EnumDescriptorProto_EnumReservedRange.encode(v, writer.uint32(34).fork()).ldelim();
            }
        }
        if (message.reservedName !== undefined && message.reservedName.length !== 0) {
            for (const v of message.reservedName) {
                writer.uint32(42).string(v);
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEnumDescriptorProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    if (message.value === undefined) {
                        message.value = [];
                    }
                    message.value.push(exports.EnumValueDescriptorProto.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.options = exports.EnumOptions.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    if (message.reservedRange === undefined) {
                        message.reservedRange = [];
                    }
                    message.reservedRange.push(exports.EnumDescriptorProto_EnumReservedRange.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    if (message.reservedName === undefined) {
                        message.reservedName = [];
                    }
                    message.reservedName.push(reader.string());
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
            name: isSet(object.name) ? globalThis.String(object.name) : undefined,
            value: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.value)
                ? object.value.map((e) => exports.EnumValueDescriptorProto.fromJSON(e))
                : undefined,
            options: isSet(object.options) ? exports.EnumOptions.fromJSON(object.options) : undefined,
            reservedRange: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.reservedRange)
                ? object.reservedRange.map((e) => exports.EnumDescriptorProto_EnumReservedRange.fromJSON(e))
                : undefined,
            reservedName: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.reservedName)
                ? object.reservedName.map((e) => globalThis.String(e))
                : undefined,
        };
    },
    toJSON(message) {
        var _a, _b, _c;
        const obj = {};
        if (message.name !== undefined && message.name !== "") {
            obj.name = message.name;
        }
        if ((_a = message.value) === null || _a === void 0 ? void 0 : _a.length) {
            obj.value = message.value.map((e) => exports.EnumValueDescriptorProto.toJSON(e));
        }
        if (message.options !== undefined) {
            obj.options = exports.EnumOptions.toJSON(message.options);
        }
        if ((_b = message.reservedRange) === null || _b === void 0 ? void 0 : _b.length) {
            obj.reservedRange = message.reservedRange.map((e) => exports.EnumDescriptorProto_EnumReservedRange.toJSON(e));
        }
        if ((_c = message.reservedName) === null || _c === void 0 ? void 0 : _c.length) {
            obj.reservedName = message.reservedName;
        }
        return obj;
    },
    create(base) {
        return exports.EnumDescriptorProto.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseEnumDescriptorProto();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : undefined;
        message.value = ((_b = object.value) === null || _b === void 0 ? void 0 : _b.map((e) => exports.EnumValueDescriptorProto.fromPartial(e))) || undefined;
        message.options = (object.options !== undefined && object.options !== null)
            ? exports.EnumOptions.fromPartial(object.options)
            : undefined;
        message.reservedRange = ((_c = object.reservedRange) === null || _c === void 0 ? void 0 : _c.map((e) => exports.EnumDescriptorProto_EnumReservedRange.fromPartial(e))) ||
            undefined;
        message.reservedName = ((_d = object.reservedName) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || undefined;
        return message;
    },
};
function createBaseEnumDescriptorProto_EnumReservedRange() {
    return {};
}
exports.EnumDescriptorProto_EnumReservedRange = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.start !== undefined && message.start !== 0) {
            writer.uint32(8).int32(message.start);
        }
        if (message.end !== undefined && message.end !== 0) {
            writer.uint32(16).int32(message.end);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEnumDescriptorProto_EnumReservedRange();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.start = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.end = reader.int32();
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
            start: isSet(object.start) ? globalThis.Number(object.start) : undefined,
            end: isSet(object.end) ? globalThis.Number(object.end) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.start !== undefined && message.start !== 0) {
            obj.start = Math.round(message.start);
        }
        if (message.end !== undefined && message.end !== 0) {
            obj.end = Math.round(message.end);
        }
        return obj;
    },
    create(base) {
        return exports.EnumDescriptorProto_EnumReservedRange.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEnumDescriptorProto_EnumReservedRange();
        message.start = (_a = object.start) !== null && _a !== void 0 ? _a : undefined;
        message.end = (_b = object.end) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseEnumValueDescriptorProto() {
    return {};
}
exports.EnumValueDescriptorProto = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== undefined && message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.number !== undefined && message.number !== 0) {
            writer.uint32(16).int32(message.number);
        }
        if (message.options !== undefined) {
            exports.EnumValueOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEnumValueDescriptorProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.number = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.options = exports.EnumValueOptions.decode(reader, reader.uint32());
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
            name: isSet(object.name) ? globalThis.String(object.name) : undefined,
            number: isSet(object.number) ? globalThis.Number(object.number) : undefined,
            options: isSet(object.options) ? exports.EnumValueOptions.fromJSON(object.options) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== undefined && message.name !== "") {
            obj.name = message.name;
        }
        if (message.number !== undefined && message.number !== 0) {
            obj.number = Math.round(message.number);
        }
        if (message.options !== undefined) {
            obj.options = exports.EnumValueOptions.toJSON(message.options);
        }
        return obj;
    },
    create(base) {
        return exports.EnumValueDescriptorProto.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEnumValueDescriptorProto();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : undefined;
        message.number = (_b = object.number) !== null && _b !== void 0 ? _b : undefined;
        message.options = (object.options !== undefined && object.options !== null)
            ? exports.EnumValueOptions.fromPartial(object.options)
            : undefined;
        return message;
    },
};
function createBaseServiceDescriptorProto() {
    return {};
}
exports.ServiceDescriptorProto = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== undefined && message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.method !== undefined && message.method.length !== 0) {
            for (const v of message.method) {
                exports.MethodDescriptorProto.encode(v, writer.uint32(18).fork()).ldelim();
            }
        }
        if (message.options !== undefined) {
            exports.ServiceOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseServiceDescriptorProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    if (message.method === undefined) {
                        message.method = [];
                    }
                    message.method.push(exports.MethodDescriptorProto.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.options = exports.ServiceOptions.decode(reader, reader.uint32());
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
            name: isSet(object.name) ? globalThis.String(object.name) : undefined,
            method: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.method)
                ? object.method.map((e) => exports.MethodDescriptorProto.fromJSON(e))
                : undefined,
            options: isSet(object.options) ? exports.ServiceOptions.fromJSON(object.options) : undefined,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.name !== undefined && message.name !== "") {
            obj.name = message.name;
        }
        if ((_a = message.method) === null || _a === void 0 ? void 0 : _a.length) {
            obj.method = message.method.map((e) => exports.MethodDescriptorProto.toJSON(e));
        }
        if (message.options !== undefined) {
            obj.options = exports.ServiceOptions.toJSON(message.options);
        }
        return obj;
    },
    create(base) {
        return exports.ServiceDescriptorProto.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseServiceDescriptorProto();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : undefined;
        message.method = ((_b = object.method) === null || _b === void 0 ? void 0 : _b.map((e) => exports.MethodDescriptorProto.fromPartial(e))) || undefined;
        message.options = (object.options !== undefined && object.options !== null)
            ? exports.ServiceOptions.fromPartial(object.options)
            : undefined;
        return message;
    },
};
function createBaseMethodDescriptorProto() {
    return {};
}
exports.MethodDescriptorProto = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== undefined && message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.inputType !== undefined && message.inputType !== "") {
            writer.uint32(18).string(message.inputType);
        }
        if (message.outputType !== undefined && message.outputType !== "") {
            writer.uint32(26).string(message.outputType);
        }
        if (message.options !== undefined) {
            exports.MethodOptions.encode(message.options, writer.uint32(34).fork()).ldelim();
        }
        if (message.clientStreaming === true) {
            writer.uint32(40).bool(message.clientStreaming);
        }
        if (message.serverStreaming === true) {
            writer.uint32(48).bool(message.serverStreaming);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMethodDescriptorProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.inputType = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.outputType = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.options = exports.MethodOptions.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.clientStreaming = reader.bool();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.serverStreaming = reader.bool();
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
            name: isSet(object.name) ? globalThis.String(object.name) : undefined,
            inputType: isSet(object.inputType) ? globalThis.String(object.inputType) : undefined,
            outputType: isSet(object.outputType) ? globalThis.String(object.outputType) : undefined,
            options: isSet(object.options) ? exports.MethodOptions.fromJSON(object.options) : undefined,
            clientStreaming: isSet(object.clientStreaming) ? globalThis.Boolean(object.clientStreaming) : undefined,
            serverStreaming: isSet(object.serverStreaming) ? globalThis.Boolean(object.serverStreaming) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== undefined && message.name !== "") {
            obj.name = message.name;
        }
        if (message.inputType !== undefined && message.inputType !== "") {
            obj.inputType = message.inputType;
        }
        if (message.outputType !== undefined && message.outputType !== "") {
            obj.outputType = message.outputType;
        }
        if (message.options !== undefined) {
            obj.options = exports.MethodOptions.toJSON(message.options);
        }
        if (message.clientStreaming === true) {
            obj.clientStreaming = message.clientStreaming;
        }
        if (message.serverStreaming === true) {
            obj.serverStreaming = message.serverStreaming;
        }
        return obj;
    },
    create(base) {
        return exports.MethodDescriptorProto.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseMethodDescriptorProto();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : undefined;
        message.inputType = (_b = object.inputType) !== null && _b !== void 0 ? _b : undefined;
        message.outputType = (_c = object.outputType) !== null && _c !== void 0 ? _c : undefined;
        message.options = (object.options !== undefined && object.options !== null)
            ? exports.MethodOptions.fromPartial(object.options)
            : undefined;
        message.clientStreaming = (_d = object.clientStreaming) !== null && _d !== void 0 ? _d : undefined;
        message.serverStreaming = (_e = object.serverStreaming) !== null && _e !== void 0 ? _e : undefined;
        return message;
    },
};
function createBaseFileOptions() {
    return {};
}
exports.FileOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.javaPackage !== undefined && message.javaPackage !== "") {
            writer.uint32(10).string(message.javaPackage);
        }
        if (message.javaOuterClassname !== undefined && message.javaOuterClassname !== "") {
            writer.uint32(66).string(message.javaOuterClassname);
        }
        if (message.javaMultipleFiles === true) {
            writer.uint32(80).bool(message.javaMultipleFiles);
        }
        if (message.javaGenerateEqualsAndHash === true) {
            writer.uint32(160).bool(message.javaGenerateEqualsAndHash);
        }
        if (message.javaStringCheckUtf8 === true) {
            writer.uint32(216).bool(message.javaStringCheckUtf8);
        }
        if (message.optimizeFor !== undefined && message.optimizeFor !== FileOptions_OptimizeMode.SPEED) {
            writer.uint32(72).int32(fileOptions_OptimizeModeToNumber(message.optimizeFor));
        }
        if (message.goPackage !== undefined && message.goPackage !== "") {
            writer.uint32(90).string(message.goPackage);
        }
        if (message.ccGenericServices === true) {
            writer.uint32(128).bool(message.ccGenericServices);
        }
        if (message.javaGenericServices === true) {
            writer.uint32(136).bool(message.javaGenericServices);
        }
        if (message.pyGenericServices === true) {
            writer.uint32(144).bool(message.pyGenericServices);
        }
        if (message.phpGenericServices === true) {
            writer.uint32(336).bool(message.phpGenericServices);
        }
        if (message.deprecated === true) {
            writer.uint32(184).bool(message.deprecated);
        }
        if (message.ccEnableArenas === true) {
            writer.uint32(248).bool(message.ccEnableArenas);
        }
        if (message.objcClassPrefix !== undefined && message.objcClassPrefix !== "") {
            writer.uint32(290).string(message.objcClassPrefix);
        }
        if (message.csharpNamespace !== undefined && message.csharpNamespace !== "") {
            writer.uint32(298).string(message.csharpNamespace);
        }
        if (message.swiftPrefix !== undefined && message.swiftPrefix !== "") {
            writer.uint32(314).string(message.swiftPrefix);
        }
        if (message.phpClassPrefix !== undefined && message.phpClassPrefix !== "") {
            writer.uint32(322).string(message.phpClassPrefix);
        }
        if (message.phpNamespace !== undefined && message.phpNamespace !== "") {
            writer.uint32(330).string(message.phpNamespace);
        }
        if (message.phpMetadataNamespace !== undefined && message.phpMetadataNamespace !== "") {
            writer.uint32(354).string(message.phpMetadataNamespace);
        }
        if (message.rubyPackage !== undefined && message.rubyPackage !== "") {
            writer.uint32(362).string(message.rubyPackage);
        }
        if (message.uninterpretedOption !== undefined && message.uninterpretedOption.length !== 0) {
            for (const v of message.uninterpretedOption) {
                exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFileOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.javaPackage = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.javaOuterClassname = reader.string();
                    continue;
                case 10:
                    if (tag !== 80) {
                        break;
                    }
                    message.javaMultipleFiles = reader.bool();
                    continue;
                case 20:
                    if (tag !== 160) {
                        break;
                    }
                    message.javaGenerateEqualsAndHash = reader.bool();
                    continue;
                case 27:
                    if (tag !== 216) {
                        break;
                    }
                    message.javaStringCheckUtf8 = reader.bool();
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }
                    message.optimizeFor = fileOptions_OptimizeModeFromJSON(reader.int32());
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.goPackage = reader.string();
                    continue;
                case 16:
                    if (tag !== 128) {
                        break;
                    }
                    message.ccGenericServices = reader.bool();
                    continue;
                case 17:
                    if (tag !== 136) {
                        break;
                    }
                    message.javaGenericServices = reader.bool();
                    continue;
                case 18:
                    if (tag !== 144) {
                        break;
                    }
                    message.pyGenericServices = reader.bool();
                    continue;
                case 42:
                    if (tag !== 336) {
                        break;
                    }
                    message.phpGenericServices = reader.bool();
                    continue;
                case 23:
                    if (tag !== 184) {
                        break;
                    }
                    message.deprecated = reader.bool();
                    continue;
                case 31:
                    if (tag !== 248) {
                        break;
                    }
                    message.ccEnableArenas = reader.bool();
                    continue;
                case 36:
                    if (tag !== 290) {
                        break;
                    }
                    message.objcClassPrefix = reader.string();
                    continue;
                case 37:
                    if (tag !== 298) {
                        break;
                    }
                    message.csharpNamespace = reader.string();
                    continue;
                case 39:
                    if (tag !== 314) {
                        break;
                    }
                    message.swiftPrefix = reader.string();
                    continue;
                case 40:
                    if (tag !== 322) {
                        break;
                    }
                    message.phpClassPrefix = reader.string();
                    continue;
                case 41:
                    if (tag !== 330) {
                        break;
                    }
                    message.phpNamespace = reader.string();
                    continue;
                case 44:
                    if (tag !== 354) {
                        break;
                    }
                    message.phpMetadataNamespace = reader.string();
                    continue;
                case 45:
                    if (tag !== 362) {
                        break;
                    }
                    message.rubyPackage = reader.string();
                    continue;
                case 999:
                    if (tag !== 7994) {
                        break;
                    }
                    if (message.uninterpretedOption === undefined) {
                        message.uninterpretedOption = [];
                    }
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
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
            javaPackage: isSet(object.javaPackage) ? globalThis.String(object.javaPackage) : undefined,
            javaOuterClassname: isSet(object.javaOuterClassname) ? globalThis.String(object.javaOuterClassname) : undefined,
            javaMultipleFiles: isSet(object.javaMultipleFiles) ? globalThis.Boolean(object.javaMultipleFiles) : undefined,
            javaGenerateEqualsAndHash: isSet(object.javaGenerateEqualsAndHash)
                ? globalThis.Boolean(object.javaGenerateEqualsAndHash)
                : undefined,
            javaStringCheckUtf8: isSet(object.javaStringCheckUtf8)
                ? globalThis.Boolean(object.javaStringCheckUtf8)
                : undefined,
            optimizeFor: isSet(object.optimizeFor) ? fileOptions_OptimizeModeFromJSON(object.optimizeFor) : undefined,
            goPackage: isSet(object.goPackage) ? globalThis.String(object.goPackage) : undefined,
            ccGenericServices: isSet(object.ccGenericServices) ? globalThis.Boolean(object.ccGenericServices) : undefined,
            javaGenericServices: isSet(object.javaGenericServices)
                ? globalThis.Boolean(object.javaGenericServices)
                : undefined,
            pyGenericServices: isSet(object.pyGenericServices) ? globalThis.Boolean(object.pyGenericServices) : undefined,
            phpGenericServices: isSet(object.phpGenericServices) ? globalThis.Boolean(object.phpGenericServices) : undefined,
            deprecated: isSet(object.deprecated) ? globalThis.Boolean(object.deprecated) : undefined,
            ccEnableArenas: isSet(object.ccEnableArenas) ? globalThis.Boolean(object.ccEnableArenas) : undefined,
            objcClassPrefix: isSet(object.objcClassPrefix) ? globalThis.String(object.objcClassPrefix) : undefined,
            csharpNamespace: isSet(object.csharpNamespace) ? globalThis.String(object.csharpNamespace) : undefined,
            swiftPrefix: isSet(object.swiftPrefix) ? globalThis.String(object.swiftPrefix) : undefined,
            phpClassPrefix: isSet(object.phpClassPrefix) ? globalThis.String(object.phpClassPrefix) : undefined,
            phpNamespace: isSet(object.phpNamespace) ? globalThis.String(object.phpNamespace) : undefined,
            phpMetadataNamespace: isSet(object.phpMetadataNamespace)
                ? globalThis.String(object.phpMetadataNamespace)
                : undefined,
            rubyPackage: isSet(object.rubyPackage) ? globalThis.String(object.rubyPackage) : undefined,
            uninterpretedOption: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpretedOption)
                ? object.uninterpretedOption.map((e) => exports.UninterpretedOption.fromJSON(e))
                : undefined,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.javaPackage !== undefined && message.javaPackage !== "") {
            obj.javaPackage = message.javaPackage;
        }
        if (message.javaOuterClassname !== undefined && message.javaOuterClassname !== "") {
            obj.javaOuterClassname = message.javaOuterClassname;
        }
        if (message.javaMultipleFiles === true) {
            obj.javaMultipleFiles = message.javaMultipleFiles;
        }
        if (message.javaGenerateEqualsAndHash === true) {
            obj.javaGenerateEqualsAndHash = message.javaGenerateEqualsAndHash;
        }
        if (message.javaStringCheckUtf8 === true) {
            obj.javaStringCheckUtf8 = message.javaStringCheckUtf8;
        }
        if (message.optimizeFor !== undefined && message.optimizeFor !== FileOptions_OptimizeMode.SPEED) {
            obj.optimizeFor = fileOptions_OptimizeModeToJSON(message.optimizeFor);
        }
        if (message.goPackage !== undefined && message.goPackage !== "") {
            obj.goPackage = message.goPackage;
        }
        if (message.ccGenericServices === true) {
            obj.ccGenericServices = message.ccGenericServices;
        }
        if (message.javaGenericServices === true) {
            obj.javaGenericServices = message.javaGenericServices;
        }
        if (message.pyGenericServices === true) {
            obj.pyGenericServices = message.pyGenericServices;
        }
        if (message.phpGenericServices === true) {
            obj.phpGenericServices = message.phpGenericServices;
        }
        if (message.deprecated === true) {
            obj.deprecated = message.deprecated;
        }
        if (message.ccEnableArenas === true) {
            obj.ccEnableArenas = message.ccEnableArenas;
        }
        if (message.objcClassPrefix !== undefined && message.objcClassPrefix !== "") {
            obj.objcClassPrefix = message.objcClassPrefix;
        }
        if (message.csharpNamespace !== undefined && message.csharpNamespace !== "") {
            obj.csharpNamespace = message.csharpNamespace;
        }
        if (message.swiftPrefix !== undefined && message.swiftPrefix !== "") {
            obj.swiftPrefix = message.swiftPrefix;
        }
        if (message.phpClassPrefix !== undefined && message.phpClassPrefix !== "") {
            obj.phpClassPrefix = message.phpClassPrefix;
        }
        if (message.phpNamespace !== undefined && message.phpNamespace !== "") {
            obj.phpNamespace = message.phpNamespace;
        }
        if (message.phpMetadataNamespace !== undefined && message.phpMetadataNamespace !== "") {
            obj.phpMetadataNamespace = message.phpMetadataNamespace;
        }
        if (message.rubyPackage !== undefined && message.rubyPackage !== "") {
            obj.rubyPackage = message.rubyPackage;
        }
        if ((_a = message.uninterpretedOption) === null || _a === void 0 ? void 0 : _a.length) {
            obj.uninterpretedOption = message.uninterpretedOption.map((e) => exports.UninterpretedOption.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.FileOptions.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
        const message = createBaseFileOptions();
        message.javaPackage = (_a = object.javaPackage) !== null && _a !== void 0 ? _a : undefined;
        message.javaOuterClassname = (_b = object.javaOuterClassname) !== null && _b !== void 0 ? _b : undefined;
        message.javaMultipleFiles = (_c = object.javaMultipleFiles) !== null && _c !== void 0 ? _c : undefined;
        message.javaGenerateEqualsAndHash = (_d = object.javaGenerateEqualsAndHash) !== null && _d !== void 0 ? _d : undefined;
        message.javaStringCheckUtf8 = (_e = object.javaStringCheckUtf8) !== null && _e !== void 0 ? _e : undefined;
        message.optimizeFor = (_f = object.optimizeFor) !== null && _f !== void 0 ? _f : undefined;
        message.goPackage = (_g = object.goPackage) !== null && _g !== void 0 ? _g : undefined;
        message.ccGenericServices = (_h = object.ccGenericServices) !== null && _h !== void 0 ? _h : undefined;
        message.javaGenericServices = (_j = object.javaGenericServices) !== null && _j !== void 0 ? _j : undefined;
        message.pyGenericServices = (_k = object.pyGenericServices) !== null && _k !== void 0 ? _k : undefined;
        message.phpGenericServices = (_l = object.phpGenericServices) !== null && _l !== void 0 ? _l : undefined;
        message.deprecated = (_m = object.deprecated) !== null && _m !== void 0 ? _m : undefined;
        message.ccEnableArenas = (_o = object.ccEnableArenas) !== null && _o !== void 0 ? _o : undefined;
        message.objcClassPrefix = (_p = object.objcClassPrefix) !== null && _p !== void 0 ? _p : undefined;
        message.csharpNamespace = (_q = object.csharpNamespace) !== null && _q !== void 0 ? _q : undefined;
        message.swiftPrefix = (_r = object.swiftPrefix) !== null && _r !== void 0 ? _r : undefined;
        message.phpClassPrefix = (_s = object.phpClassPrefix) !== null && _s !== void 0 ? _s : undefined;
        message.phpNamespace = (_t = object.phpNamespace) !== null && _t !== void 0 ? _t : undefined;
        message.phpMetadataNamespace = (_u = object.phpMetadataNamespace) !== null && _u !== void 0 ? _u : undefined;
        message.rubyPackage = (_v = object.rubyPackage) !== null && _v !== void 0 ? _v : undefined;
        message.uninterpretedOption = ((_w = object.uninterpretedOption) === null || _w === void 0 ? void 0 : _w.map((e) => exports.UninterpretedOption.fromPartial(e))) ||
            undefined;
        return message;
    },
};
function createBaseMessageOptions() {
    return {};
}
exports.MessageOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.messageSetWireFormat === true) {
            writer.uint32(8).bool(message.messageSetWireFormat);
        }
        if (message.noStandardDescriptorAccessor === true) {
            writer.uint32(16).bool(message.noStandardDescriptorAccessor);
        }
        if (message.deprecated === true) {
            writer.uint32(24).bool(message.deprecated);
        }
        if (message.mapEntry === true) {
            writer.uint32(56).bool(message.mapEntry);
        }
        if (message.uninterpretedOption !== undefined && message.uninterpretedOption.length !== 0) {
            for (const v of message.uninterpretedOption) {
                exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMessageOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.messageSetWireFormat = reader.bool();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.noStandardDescriptorAccessor = reader.bool();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.deprecated = reader.bool();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.mapEntry = reader.bool();
                    continue;
                case 999:
                    if (tag !== 7994) {
                        break;
                    }
                    if (message.uninterpretedOption === undefined) {
                        message.uninterpretedOption = [];
                    }
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
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
            messageSetWireFormat: isSet(object.messageSetWireFormat)
                ? globalThis.Boolean(object.messageSetWireFormat)
                : undefined,
            noStandardDescriptorAccessor: isSet(object.noStandardDescriptorAccessor)
                ? globalThis.Boolean(object.noStandardDescriptorAccessor)
                : undefined,
            deprecated: isSet(object.deprecated) ? globalThis.Boolean(object.deprecated) : undefined,
            mapEntry: isSet(object.mapEntry) ? globalThis.Boolean(object.mapEntry) : undefined,
            uninterpretedOption: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpretedOption)
                ? object.uninterpretedOption.map((e) => exports.UninterpretedOption.fromJSON(e))
                : undefined,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.messageSetWireFormat === true) {
            obj.messageSetWireFormat = message.messageSetWireFormat;
        }
        if (message.noStandardDescriptorAccessor === true) {
            obj.noStandardDescriptorAccessor = message.noStandardDescriptorAccessor;
        }
        if (message.deprecated === true) {
            obj.deprecated = message.deprecated;
        }
        if (message.mapEntry === true) {
            obj.mapEntry = message.mapEntry;
        }
        if ((_a = message.uninterpretedOption) === null || _a === void 0 ? void 0 : _a.length) {
            obj.uninterpretedOption = message.uninterpretedOption.map((e) => exports.UninterpretedOption.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.MessageOptions.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseMessageOptions();
        message.messageSetWireFormat = (_a = object.messageSetWireFormat) !== null && _a !== void 0 ? _a : undefined;
        message.noStandardDescriptorAccessor = (_b = object.noStandardDescriptorAccessor) !== null && _b !== void 0 ? _b : undefined;
        message.deprecated = (_c = object.deprecated) !== null && _c !== void 0 ? _c : undefined;
        message.mapEntry = (_d = object.mapEntry) !== null && _d !== void 0 ? _d : undefined;
        message.uninterpretedOption = ((_e = object.uninterpretedOption) === null || _e === void 0 ? void 0 : _e.map((e) => exports.UninterpretedOption.fromPartial(e))) ||
            undefined;
        return message;
    },
};
function createBaseFieldOptions() {
    return {};
}
exports.FieldOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ctype !== undefined && message.ctype !== FieldOptions_CType.STRING) {
            writer.uint32(8).int32(fieldOptions_CTypeToNumber(message.ctype));
        }
        if (message.packed === true) {
            writer.uint32(16).bool(message.packed);
        }
        if (message.jstype !== undefined && message.jstype !== FieldOptions_JSType.JS_NORMAL) {
            writer.uint32(48).int32(fieldOptions_JSTypeToNumber(message.jstype));
        }
        if (message.lazy === true) {
            writer.uint32(40).bool(message.lazy);
        }
        if (message.deprecated === true) {
            writer.uint32(24).bool(message.deprecated);
        }
        if (message.weak === true) {
            writer.uint32(80).bool(message.weak);
        }
        if (message.uninterpretedOption !== undefined && message.uninterpretedOption.length !== 0) {
            for (const v of message.uninterpretedOption) {
                exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFieldOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.ctype = fieldOptions_CTypeFromJSON(reader.int32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.packed = reader.bool();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.jstype = fieldOptions_JSTypeFromJSON(reader.int32());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.lazy = reader.bool();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.deprecated = reader.bool();
                    continue;
                case 10:
                    if (tag !== 80) {
                        break;
                    }
                    message.weak = reader.bool();
                    continue;
                case 999:
                    if (tag !== 7994) {
                        break;
                    }
                    if (message.uninterpretedOption === undefined) {
                        message.uninterpretedOption = [];
                    }
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
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
            ctype: isSet(object.ctype) ? fieldOptions_CTypeFromJSON(object.ctype) : undefined,
            packed: isSet(object.packed) ? globalThis.Boolean(object.packed) : undefined,
            jstype: isSet(object.jstype) ? fieldOptions_JSTypeFromJSON(object.jstype) : undefined,
            lazy: isSet(object.lazy) ? globalThis.Boolean(object.lazy) : undefined,
            deprecated: isSet(object.deprecated) ? globalThis.Boolean(object.deprecated) : undefined,
            weak: isSet(object.weak) ? globalThis.Boolean(object.weak) : undefined,
            uninterpretedOption: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpretedOption)
                ? object.uninterpretedOption.map((e) => exports.UninterpretedOption.fromJSON(e))
                : undefined,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.ctype !== undefined && message.ctype !== FieldOptions_CType.STRING) {
            obj.ctype = fieldOptions_CTypeToJSON(message.ctype);
        }
        if (message.packed === true) {
            obj.packed = message.packed;
        }
        if (message.jstype !== undefined && message.jstype !== FieldOptions_JSType.JS_NORMAL) {
            obj.jstype = fieldOptions_JSTypeToJSON(message.jstype);
        }
        if (message.lazy === true) {
            obj.lazy = message.lazy;
        }
        if (message.deprecated === true) {
            obj.deprecated = message.deprecated;
        }
        if (message.weak === true) {
            obj.weak = message.weak;
        }
        if ((_a = message.uninterpretedOption) === null || _a === void 0 ? void 0 : _a.length) {
            obj.uninterpretedOption = message.uninterpretedOption.map((e) => exports.UninterpretedOption.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.FieldOptions.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseFieldOptions();
        message.ctype = (_a = object.ctype) !== null && _a !== void 0 ? _a : undefined;
        message.packed = (_b = object.packed) !== null && _b !== void 0 ? _b : undefined;
        message.jstype = (_c = object.jstype) !== null && _c !== void 0 ? _c : undefined;
        message.lazy = (_d = object.lazy) !== null && _d !== void 0 ? _d : undefined;
        message.deprecated = (_e = object.deprecated) !== null && _e !== void 0 ? _e : undefined;
        message.weak = (_f = object.weak) !== null && _f !== void 0 ? _f : undefined;
        message.uninterpretedOption = ((_g = object.uninterpretedOption) === null || _g === void 0 ? void 0 : _g.map((e) => exports.UninterpretedOption.fromPartial(e))) ||
            undefined;
        return message;
    },
};
function createBaseOneofOptions() {
    return {};
}
exports.OneofOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.uninterpretedOption !== undefined && message.uninterpretedOption.length !== 0) {
            for (const v of message.uninterpretedOption) {
                exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOneofOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 999:
                    if (tag !== 7994) {
                        break;
                    }
                    if (message.uninterpretedOption === undefined) {
                        message.uninterpretedOption = [];
                    }
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
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
            uninterpretedOption: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpretedOption)
                ? object.uninterpretedOption.map((e) => exports.UninterpretedOption.fromJSON(e))
                : undefined,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.uninterpretedOption) === null || _a === void 0 ? void 0 : _a.length) {
            obj.uninterpretedOption = message.uninterpretedOption.map((e) => exports.UninterpretedOption.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.OneofOptions.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseOneofOptions();
        message.uninterpretedOption = ((_a = object.uninterpretedOption) === null || _a === void 0 ? void 0 : _a.map((e) => exports.UninterpretedOption.fromPartial(e))) ||
            undefined;
        return message;
    },
};
function createBaseEnumOptions() {
    return {};
}
exports.EnumOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.allowAlias === true) {
            writer.uint32(16).bool(message.allowAlias);
        }
        if (message.deprecated === true) {
            writer.uint32(24).bool(message.deprecated);
        }
        if (message.uninterpretedOption !== undefined && message.uninterpretedOption.length !== 0) {
            for (const v of message.uninterpretedOption) {
                exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEnumOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.allowAlias = reader.bool();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.deprecated = reader.bool();
                    continue;
                case 999:
                    if (tag !== 7994) {
                        break;
                    }
                    if (message.uninterpretedOption === undefined) {
                        message.uninterpretedOption = [];
                    }
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
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
            allowAlias: isSet(object.allowAlias) ? globalThis.Boolean(object.allowAlias) : undefined,
            deprecated: isSet(object.deprecated) ? globalThis.Boolean(object.deprecated) : undefined,
            uninterpretedOption: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpretedOption)
                ? object.uninterpretedOption.map((e) => exports.UninterpretedOption.fromJSON(e))
                : undefined,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.allowAlias === true) {
            obj.allowAlias = message.allowAlias;
        }
        if (message.deprecated === true) {
            obj.deprecated = message.deprecated;
        }
        if ((_a = message.uninterpretedOption) === null || _a === void 0 ? void 0 : _a.length) {
            obj.uninterpretedOption = message.uninterpretedOption.map((e) => exports.UninterpretedOption.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.EnumOptions.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseEnumOptions();
        message.allowAlias = (_a = object.allowAlias) !== null && _a !== void 0 ? _a : undefined;
        message.deprecated = (_b = object.deprecated) !== null && _b !== void 0 ? _b : undefined;
        message.uninterpretedOption = ((_c = object.uninterpretedOption) === null || _c === void 0 ? void 0 : _c.map((e) => exports.UninterpretedOption.fromPartial(e))) ||
            undefined;
        return message;
    },
};
function createBaseEnumValueOptions() {
    return {};
}
exports.EnumValueOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deprecated === true) {
            writer.uint32(8).bool(message.deprecated);
        }
        if (message.uninterpretedOption !== undefined && message.uninterpretedOption.length !== 0) {
            for (const v of message.uninterpretedOption) {
                exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEnumValueOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.deprecated = reader.bool();
                    continue;
                case 999:
                    if (tag !== 7994) {
                        break;
                    }
                    if (message.uninterpretedOption === undefined) {
                        message.uninterpretedOption = [];
                    }
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
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
            deprecated: isSet(object.deprecated) ? globalThis.Boolean(object.deprecated) : undefined,
            uninterpretedOption: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpretedOption)
                ? object.uninterpretedOption.map((e) => exports.UninterpretedOption.fromJSON(e))
                : undefined,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.deprecated === true) {
            obj.deprecated = message.deprecated;
        }
        if ((_a = message.uninterpretedOption) === null || _a === void 0 ? void 0 : _a.length) {
            obj.uninterpretedOption = message.uninterpretedOption.map((e) => exports.UninterpretedOption.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.EnumValueOptions.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEnumValueOptions();
        message.deprecated = (_a = object.deprecated) !== null && _a !== void 0 ? _a : undefined;
        message.uninterpretedOption = ((_b = object.uninterpretedOption) === null || _b === void 0 ? void 0 : _b.map((e) => exports.UninterpretedOption.fromPartial(e))) ||
            undefined;
        return message;
    },
};
function createBaseServiceOptions() {
    return {};
}
exports.ServiceOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deprecated === true) {
            writer.uint32(264).bool(message.deprecated);
        }
        if (message.uninterpretedOption !== undefined && message.uninterpretedOption.length !== 0) {
            for (const v of message.uninterpretedOption) {
                exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseServiceOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 33:
                    if (tag !== 264) {
                        break;
                    }
                    message.deprecated = reader.bool();
                    continue;
                case 999:
                    if (tag !== 7994) {
                        break;
                    }
                    if (message.uninterpretedOption === undefined) {
                        message.uninterpretedOption = [];
                    }
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
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
            deprecated: isSet(object.deprecated) ? globalThis.Boolean(object.deprecated) : undefined,
            uninterpretedOption: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpretedOption)
                ? object.uninterpretedOption.map((e) => exports.UninterpretedOption.fromJSON(e))
                : undefined,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.deprecated === true) {
            obj.deprecated = message.deprecated;
        }
        if ((_a = message.uninterpretedOption) === null || _a === void 0 ? void 0 : _a.length) {
            obj.uninterpretedOption = message.uninterpretedOption.map((e) => exports.UninterpretedOption.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.ServiceOptions.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseServiceOptions();
        message.deprecated = (_a = object.deprecated) !== null && _a !== void 0 ? _a : undefined;
        message.uninterpretedOption = ((_b = object.uninterpretedOption) === null || _b === void 0 ? void 0 : _b.map((e) => exports.UninterpretedOption.fromPartial(e))) ||
            undefined;
        return message;
    },
};
function createBaseMethodOptions() {
    return {};
}
exports.MethodOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deprecated === true) {
            writer.uint32(264).bool(message.deprecated);
        }
        if (message.idempotencyLevel !== undefined &&
            message.idempotencyLevel !== MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN) {
            writer.uint32(272).int32(methodOptions_IdempotencyLevelToNumber(message.idempotencyLevel));
        }
        if (message.uninterpretedOption !== undefined && message.uninterpretedOption.length !== 0) {
            for (const v of message.uninterpretedOption) {
                exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMethodOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 33:
                    if (tag !== 264) {
                        break;
                    }
                    message.deprecated = reader.bool();
                    continue;
                case 34:
                    if (tag !== 272) {
                        break;
                    }
                    message.idempotencyLevel = methodOptions_IdempotencyLevelFromJSON(reader.int32());
                    continue;
                case 999:
                    if (tag !== 7994) {
                        break;
                    }
                    if (message.uninterpretedOption === undefined) {
                        message.uninterpretedOption = [];
                    }
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
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
            deprecated: isSet(object.deprecated) ? globalThis.Boolean(object.deprecated) : undefined,
            idempotencyLevel: isSet(object.idempotencyLevel)
                ? methodOptions_IdempotencyLevelFromJSON(object.idempotencyLevel)
                : undefined,
            uninterpretedOption: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpretedOption)
                ? object.uninterpretedOption.map((e) => exports.UninterpretedOption.fromJSON(e))
                : undefined,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.deprecated === true) {
            obj.deprecated = message.deprecated;
        }
        if (message.idempotencyLevel !== undefined &&
            message.idempotencyLevel !== MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN) {
            obj.idempotencyLevel = methodOptions_IdempotencyLevelToJSON(message.idempotencyLevel);
        }
        if ((_a = message.uninterpretedOption) === null || _a === void 0 ? void 0 : _a.length) {
            obj.uninterpretedOption = message.uninterpretedOption.map((e) => exports.UninterpretedOption.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.MethodOptions.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMethodOptions();
        message.deprecated = (_a = object.deprecated) !== null && _a !== void 0 ? _a : undefined;
        message.idempotencyLevel = (_b = object.idempotencyLevel) !== null && _b !== void 0 ? _b : undefined;
        message.uninterpretedOption = ((_c = object.uninterpretedOption) === null || _c === void 0 ? void 0 : _c.map((e) => exports.UninterpretedOption.fromPartial(e))) ||
            undefined;
        return message;
    },
};
function createBaseUninterpretedOption() {
    return {};
}
exports.UninterpretedOption = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== undefined && message.name.length !== 0) {
            for (const v of message.name) {
                exports.UninterpretedOption_NamePart.encode(v, writer.uint32(18).fork()).ldelim();
            }
        }
        if (message.identifierValue !== undefined && message.identifierValue !== "") {
            writer.uint32(26).string(message.identifierValue);
        }
        if (message.positiveIntValue !== undefined && message.positiveIntValue !== 0) {
            writer.uint32(32).uint64(message.positiveIntValue);
        }
        if (message.negativeIntValue !== undefined && message.negativeIntValue !== 0) {
            writer.uint32(40).int64(message.negativeIntValue);
        }
        if (message.doubleValue !== undefined && message.doubleValue !== 0) {
            writer.uint32(49).double(message.doubleValue);
        }
        if (message.stringValue !== undefined && message.stringValue.length !== 0) {
            writer.uint32(58).bytes(message.stringValue);
        }
        if (message.aggregateValue !== undefined && message.aggregateValue !== "") {
            writer.uint32(66).string(message.aggregateValue);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUninterpretedOption();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    if (message.name === undefined) {
                        message.name = [];
                    }
                    message.name.push(exports.UninterpretedOption_NamePart.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.identifierValue = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.positiveIntValue = longToNumber(reader.uint64());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.negativeIntValue = longToNumber(reader.int64());
                    continue;
                case 6:
                    if (tag !== 49) {
                        break;
                    }
                    message.doubleValue = reader.double();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.stringValue = reader.bytes();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.aggregateValue = reader.string();
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
            name: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.name)
                ? object.name.map((e) => exports.UninterpretedOption_NamePart.fromJSON(e))
                : undefined,
            identifierValue: isSet(object.identifierValue) ? globalThis.String(object.identifierValue) : undefined,
            positiveIntValue: isSet(object.positiveIntValue) ? globalThis.Number(object.positiveIntValue) : undefined,
            negativeIntValue: isSet(object.negativeIntValue) ? globalThis.Number(object.negativeIntValue) : undefined,
            doubleValue: isSet(object.doubleValue) ? globalThis.Number(object.doubleValue) : undefined,
            stringValue: isSet(object.stringValue) ? bytesFromBase64(object.stringValue) : undefined,
            aggregateValue: isSet(object.aggregateValue) ? globalThis.String(object.aggregateValue) : undefined,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.name) === null || _a === void 0 ? void 0 : _a.length) {
            obj.name = message.name.map((e) => exports.UninterpretedOption_NamePart.toJSON(e));
        }
        if (message.identifierValue !== undefined && message.identifierValue !== "") {
            obj.identifierValue = message.identifierValue;
        }
        if (message.positiveIntValue !== undefined && message.positiveIntValue !== 0) {
            obj.positiveIntValue = Math.round(message.positiveIntValue);
        }
        if (message.negativeIntValue !== undefined && message.negativeIntValue !== 0) {
            obj.negativeIntValue = Math.round(message.negativeIntValue);
        }
        if (message.doubleValue !== undefined && message.doubleValue !== 0) {
            obj.doubleValue = message.doubleValue;
        }
        if (message.stringValue !== undefined && message.stringValue.length !== 0) {
            obj.stringValue = base64FromBytes(message.stringValue);
        }
        if (message.aggregateValue !== undefined && message.aggregateValue !== "") {
            obj.aggregateValue = message.aggregateValue;
        }
        return obj;
    },
    create(base) {
        return exports.UninterpretedOption.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseUninterpretedOption();
        message.name = ((_a = object.name) === null || _a === void 0 ? void 0 : _a.map((e) => exports.UninterpretedOption_NamePart.fromPartial(e))) || undefined;
        message.identifierValue = (_b = object.identifierValue) !== null && _b !== void 0 ? _b : undefined;
        message.positiveIntValue = (_c = object.positiveIntValue) !== null && _c !== void 0 ? _c : undefined;
        message.negativeIntValue = (_d = object.negativeIntValue) !== null && _d !== void 0 ? _d : undefined;
        message.doubleValue = (_e = object.doubleValue) !== null && _e !== void 0 ? _e : undefined;
        message.stringValue = (_f = object.stringValue) !== null && _f !== void 0 ? _f : undefined;
        message.aggregateValue = (_g = object.aggregateValue) !== null && _g !== void 0 ? _g : undefined;
        return message;
    },
};
function createBaseUninterpretedOption_NamePart() {
    return {};
}
exports.UninterpretedOption_NamePart = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.namePart !== undefined && message.namePart !== "") {
            writer.uint32(10).string(message.namePart);
        }
        if (message.isExtension === true) {
            writer.uint32(16).bool(message.isExtension);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUninterpretedOption_NamePart();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.namePart = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.isExtension = reader.bool();
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
            namePart: isSet(object.namePart) ? globalThis.String(object.namePart) : undefined,
            isExtension: isSet(object.isExtension) ? globalThis.Boolean(object.isExtension) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.namePart !== undefined && message.namePart !== "") {
            obj.namePart = message.namePart;
        }
        if (message.isExtension === true) {
            obj.isExtension = message.isExtension;
        }
        return obj;
    },
    create(base) {
        return exports.UninterpretedOption_NamePart.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUninterpretedOption_NamePart();
        message.namePart = (_a = object.namePart) !== null && _a !== void 0 ? _a : undefined;
        message.isExtension = (_b = object.isExtension) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseSourceCodeInfo() {
    return {};
}
exports.SourceCodeInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.location !== undefined && message.location.length !== 0) {
            for (const v of message.location) {
                exports.SourceCodeInfo_Location.encode(v, writer.uint32(10).fork()).ldelim();
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSourceCodeInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    if (message.location === undefined) {
                        message.location = [];
                    }
                    message.location.push(exports.SourceCodeInfo_Location.decode(reader, reader.uint32()));
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
            location: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.location)
                ? object.location.map((e) => exports.SourceCodeInfo_Location.fromJSON(e))
                : undefined,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.location) === null || _a === void 0 ? void 0 : _a.length) {
            obj.location = message.location.map((e) => exports.SourceCodeInfo_Location.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.SourceCodeInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSourceCodeInfo();
        message.location = ((_a = object.location) === null || _a === void 0 ? void 0 : _a.map((e) => exports.SourceCodeInfo_Location.fromPartial(e))) || undefined;
        return message;
    },
};
function createBaseSourceCodeInfo_Location() {
    return {};
}
exports.SourceCodeInfo_Location = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.path !== undefined && message.path.length !== 0) {
            writer.uint32(10).fork();
            for (const v of message.path) {
                writer.int32(v);
            }
            writer.ldelim();
        }
        if (message.span !== undefined && message.span.length !== 0) {
            writer.uint32(18).fork();
            for (const v of message.span) {
                writer.int32(v);
            }
            writer.ldelim();
        }
        if (message.leadingComments !== undefined && message.leadingComments !== "") {
            writer.uint32(26).string(message.leadingComments);
        }
        if (message.trailingComments !== undefined && message.trailingComments !== "") {
            writer.uint32(34).string(message.trailingComments);
        }
        if (message.leadingDetachedComments !== undefined && message.leadingDetachedComments.length !== 0) {
            for (const v of message.leadingDetachedComments) {
                writer.uint32(50).string(v);
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSourceCodeInfo_Location();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag === 8) {
                        if (message.path === undefined) {
                            message.path = [];
                        }
                        message.path.push(reader.int32());
                        continue;
                    }
                    if (tag === 10) {
                        if (message.path === undefined) {
                            message.path = [];
                        }
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.path.push(reader.int32());
                        }
                        continue;
                    }
                    break;
                case 2:
                    if (tag === 16) {
                        if (message.span === undefined) {
                            message.span = [];
                        }
                        message.span.push(reader.int32());
                        continue;
                    }
                    if (tag === 18) {
                        if (message.span === undefined) {
                            message.span = [];
                        }
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.span.push(reader.int32());
                        }
                        continue;
                    }
                    break;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.leadingComments = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.trailingComments = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    if (message.leadingDetachedComments === undefined) {
                        message.leadingDetachedComments = [];
                    }
                    message.leadingDetachedComments.push(reader.string());
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
            path: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.path) ? object.path.map((e) => globalThis.Number(e)) : undefined,
            span: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.span) ? object.span.map((e) => globalThis.Number(e)) : undefined,
            leadingComments: isSet(object.leadingComments) ? globalThis.String(object.leadingComments) : undefined,
            trailingComments: isSet(object.trailingComments) ? globalThis.String(object.trailingComments) : undefined,
            leadingDetachedComments: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.leadingDetachedComments)
                ? object.leadingDetachedComments.map((e) => globalThis.String(e))
                : undefined,
        };
    },
    toJSON(message) {
        var _a, _b, _c;
        const obj = {};
        if ((_a = message.path) === null || _a === void 0 ? void 0 : _a.length) {
            obj.path = message.path.map((e) => Math.round(e));
        }
        if ((_b = message.span) === null || _b === void 0 ? void 0 : _b.length) {
            obj.span = message.span.map((e) => Math.round(e));
        }
        if (message.leadingComments !== undefined && message.leadingComments !== "") {
            obj.leadingComments = message.leadingComments;
        }
        if (message.trailingComments !== undefined && message.trailingComments !== "") {
            obj.trailingComments = message.trailingComments;
        }
        if ((_c = message.leadingDetachedComments) === null || _c === void 0 ? void 0 : _c.length) {
            obj.leadingDetachedComments = message.leadingDetachedComments;
        }
        return obj;
    },
    create(base) {
        return exports.SourceCodeInfo_Location.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseSourceCodeInfo_Location();
        message.path = ((_a = object.path) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || undefined;
        message.span = ((_b = object.span) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || undefined;
        message.leadingComments = (_c = object.leadingComments) !== null && _c !== void 0 ? _c : undefined;
        message.trailingComments = (_d = object.trailingComments) !== null && _d !== void 0 ? _d : undefined;
        message.leadingDetachedComments = ((_e = object.leadingDetachedComments) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || undefined;
        return message;
    },
};
function createBaseGeneratedCodeInfo() {
    return {};
}
exports.GeneratedCodeInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.annotation !== undefined && message.annotation.length !== 0) {
            for (const v of message.annotation) {
                exports.GeneratedCodeInfo_Annotation.encode(v, writer.uint32(10).fork()).ldelim();
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGeneratedCodeInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    if (message.annotation === undefined) {
                        message.annotation = [];
                    }
                    message.annotation.push(exports.GeneratedCodeInfo_Annotation.decode(reader, reader.uint32()));
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
            annotation: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.annotation)
                ? object.annotation.map((e) => exports.GeneratedCodeInfo_Annotation.fromJSON(e))
                : undefined,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.annotation) === null || _a === void 0 ? void 0 : _a.length) {
            obj.annotation = message.annotation.map((e) => exports.GeneratedCodeInfo_Annotation.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.GeneratedCodeInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGeneratedCodeInfo();
        message.annotation = ((_a = object.annotation) === null || _a === void 0 ? void 0 : _a.map((e) => exports.GeneratedCodeInfo_Annotation.fromPartial(e))) || undefined;
        return message;
    },
};
function createBaseGeneratedCodeInfo_Annotation() {
    return {};
}
exports.GeneratedCodeInfo_Annotation = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.path !== undefined && message.path.length !== 0) {
            writer.uint32(10).fork();
            for (const v of message.path) {
                writer.int32(v);
            }
            writer.ldelim();
        }
        if (message.sourceFile !== undefined && message.sourceFile !== "") {
            writer.uint32(18).string(message.sourceFile);
        }
        if (message.begin !== undefined && message.begin !== 0) {
            writer.uint32(24).int32(message.begin);
        }
        if (message.end !== undefined && message.end !== 0) {
            writer.uint32(32).int32(message.end);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGeneratedCodeInfo_Annotation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag === 8) {
                        if (message.path === undefined) {
                            message.path = [];
                        }
                        message.path.push(reader.int32());
                        continue;
                    }
                    if (tag === 10) {
                        if (message.path === undefined) {
                            message.path = [];
                        }
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.path.push(reader.int32());
                        }
                        continue;
                    }
                    break;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.sourceFile = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.begin = reader.int32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.end = reader.int32();
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
            path: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.path) ? object.path.map((e) => globalThis.Number(e)) : undefined,
            sourceFile: isSet(object.sourceFile) ? globalThis.String(object.sourceFile) : undefined,
            begin: isSet(object.begin) ? globalThis.Number(object.begin) : undefined,
            end: isSet(object.end) ? globalThis.Number(object.end) : undefined,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.path) === null || _a === void 0 ? void 0 : _a.length) {
            obj.path = message.path.map((e) => Math.round(e));
        }
        if (message.sourceFile !== undefined && message.sourceFile !== "") {
            obj.sourceFile = message.sourceFile;
        }
        if (message.begin !== undefined && message.begin !== 0) {
            obj.begin = Math.round(message.begin);
        }
        if (message.end !== undefined && message.end !== 0) {
            obj.end = Math.round(message.end);
        }
        return obj;
    },
    create(base) {
        return exports.GeneratedCodeInfo_Annotation.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseGeneratedCodeInfo_Annotation();
        message.path = ((_a = object.path) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || undefined;
        message.sourceFile = (_b = object.sourceFile) !== null && _b !== void 0 ? _b : undefined;
        message.begin = (_c = object.begin) !== null && _c !== void 0 ? _c : undefined;
        message.end = (_d = object.end) !== null && _d !== void 0 ? _d : undefined;
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

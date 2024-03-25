"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryServiceName = exports.QueryDidDocumentsResponse = exports.QueryDidDocumentsRequest = exports.QueryDidDocumentResponse = exports.QueryDidDocumentRequest = exports.QueryCredentialStatusesResponse = exports.QueryCredentialStatusesRequest = exports.QueryCredentialStatusResponse = exports.QueryCredentialStatusRequest = exports.QueryCredentialSchemasResponse = exports.QueryCredentialSchemasRequest = exports.QueryCredentialSchemaResponse = exports.QueryCredentialSchemaRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const pagination_1 = require("../../cosmos/base/query/v1beta1/pagination");
const credential_schema_1 = require("./credential_schema");
const credential_status_1 = require("./credential_status");
const did_1 = require("./did");
exports.protobufPackage = "hypersign.ssi.v1";
function createBaseQueryCredentialSchemaRequest() {
    return {};
}
exports.QueryCredentialSchemaRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.schemaId !== undefined && message.schemaId !== "") {
            writer.uint32(10).string(message.schemaId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCredentialSchemaRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.schemaId = reader.string();
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
        return { schemaId: isSet(object.schemaId) ? globalThis.String(object.schemaId) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.schemaId !== undefined && message.schemaId !== "") {
            obj.schemaId = message.schemaId;
        }
        return obj;
    },
    create(base) {
        return exports.QueryCredentialSchemaRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryCredentialSchemaRequest();
        message.schemaId = (_a = object.schemaId) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseQueryCredentialSchemaResponse() {
    return {};
}
exports.QueryCredentialSchemaResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.credentialSchemas !== undefined && message.credentialSchemas.length !== 0) {
            for (const v of message.credentialSchemas) {
                credential_schema_1.CredentialSchemaState.encode(v, writer.uint32(10).fork()).ldelim();
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCredentialSchemaResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    if (message.credentialSchemas === undefined) {
                        message.credentialSchemas = [];
                    }
                    message.credentialSchemas.push(credential_schema_1.CredentialSchemaState.decode(reader, reader.uint32()));
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
            credentialSchemas: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.credentialSchemas)
                ? object.credentialSchemas.map((e) => credential_schema_1.CredentialSchemaState.fromJSON(e))
                : undefined,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.credentialSchemas) === null || _a === void 0 ? void 0 : _a.length) {
            obj.credentialSchemas = message.credentialSchemas.map((e) => credential_schema_1.CredentialSchemaState.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.QueryCredentialSchemaResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryCredentialSchemaResponse();
        message.credentialSchemas = ((_a = object.credentialSchemas) === null || _a === void 0 ? void 0 : _a.map((e) => credential_schema_1.CredentialSchemaState.fromPartial(e))) || undefined;
        return message;
    },
};
function createBaseQueryCredentialSchemasRequest() {
    return {};
}
exports.QueryCredentialSchemasRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCredentialSchemasRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
        return { pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageRequest.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryCredentialSchemasRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryCredentialSchemasRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryCredentialSchemasResponse() {
    return {};
}
exports.QueryCredentialSchemasResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.count !== undefined && message.count !== 0) {
            writer.uint32(8).uint64(message.count);
        }
        if (message.credentialSchemas !== undefined && message.credentialSchemas.length !== 0) {
            for (const v of message.credentialSchemas) {
                credential_schema_1.CredentialSchemaState.encode(v, writer.uint32(18).fork()).ldelim();
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCredentialSchemasResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.count = longToNumber(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    if (message.credentialSchemas === undefined) {
                        message.credentialSchemas = [];
                    }
                    message.credentialSchemas.push(credential_schema_1.CredentialSchemaState.decode(reader, reader.uint32()));
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
            count: isSet(object.count) ? globalThis.Number(object.count) : undefined,
            credentialSchemas: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.credentialSchemas)
                ? object.credentialSchemas.map((e) => credential_schema_1.CredentialSchemaState.fromJSON(e))
                : undefined,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.count !== undefined && message.count !== 0) {
            obj.count = Math.round(message.count);
        }
        if ((_a = message.credentialSchemas) === null || _a === void 0 ? void 0 : _a.length) {
            obj.credentialSchemas = message.credentialSchemas.map((e) => credential_schema_1.CredentialSchemaState.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.QueryCredentialSchemasResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryCredentialSchemasResponse();
        message.count = (_a = object.count) !== null && _a !== void 0 ? _a : undefined;
        message.credentialSchemas = ((_b = object.credentialSchemas) === null || _b === void 0 ? void 0 : _b.map((e) => credential_schema_1.CredentialSchemaState.fromPartial(e))) || undefined;
        return message;
    },
};
function createBaseQueryCredentialStatusRequest() {
    return {};
}
exports.QueryCredentialStatusRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.credId !== undefined && message.credId !== "") {
            writer.uint32(10).string(message.credId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCredentialStatusRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.credId = reader.string();
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
        return { credId: isSet(object.credId) ? globalThis.String(object.credId) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.credId !== undefined && message.credId !== "") {
            obj.credId = message.credId;
        }
        return obj;
    },
    create(base) {
        return exports.QueryCredentialStatusRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryCredentialStatusRequest();
        message.credId = (_a = object.credId) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseQueryCredentialStatusResponse() {
    return {};
}
exports.QueryCredentialStatusResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.credentialStatus !== undefined) {
            credential_status_1.CredentialStatusState.encode(message.credentialStatus, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCredentialStatusResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.credentialStatus = credential_status_1.CredentialStatusState.decode(reader, reader.uint32());
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
            credentialStatus: isSet(object.credentialStatus)
                ? credential_status_1.CredentialStatusState.fromJSON(object.credentialStatus)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.credentialStatus !== undefined) {
            obj.credentialStatus = credential_status_1.CredentialStatusState.toJSON(message.credentialStatus);
        }
        return obj;
    },
    create(base) {
        return exports.QueryCredentialStatusResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryCredentialStatusResponse();
        message.credentialStatus = (object.credentialStatus !== undefined && object.credentialStatus !== null)
            ? credential_status_1.CredentialStatusState.fromPartial(object.credentialStatus)
            : undefined;
        return message;
    },
};
function createBaseQueryCredentialStatusesRequest() {
    return {};
}
exports.QueryCredentialStatusesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCredentialStatusesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
        return { pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageRequest.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryCredentialStatusesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryCredentialStatusesRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryCredentialStatusesResponse() {
    return {};
}
exports.QueryCredentialStatusesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.count !== undefined && message.count !== 0) {
            writer.uint32(8).uint64(message.count);
        }
        if (message.credentialStatuses !== undefined && message.credentialStatuses.length !== 0) {
            for (const v of message.credentialStatuses) {
                credential_status_1.CredentialStatusState.encode(v, writer.uint32(18).fork()).ldelim();
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCredentialStatusesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.count = longToNumber(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    if (message.credentialStatuses === undefined) {
                        message.credentialStatuses = [];
                    }
                    message.credentialStatuses.push(credential_status_1.CredentialStatusState.decode(reader, reader.uint32()));
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
            count: isSet(object.count) ? globalThis.Number(object.count) : undefined,
            credentialStatuses: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.credentialStatuses)
                ? object.credentialStatuses.map((e) => credential_status_1.CredentialStatusState.fromJSON(e))
                : undefined,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.count !== undefined && message.count !== 0) {
            obj.count = Math.round(message.count);
        }
        if ((_a = message.credentialStatuses) === null || _a === void 0 ? void 0 : _a.length) {
            obj.credentialStatuses = message.credentialStatuses.map((e) => credential_status_1.CredentialStatusState.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.QueryCredentialStatusesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryCredentialStatusesResponse();
        message.count = (_a = object.count) !== null && _a !== void 0 ? _a : undefined;
        message.credentialStatuses = ((_b = object.credentialStatuses) === null || _b === void 0 ? void 0 : _b.map((e) => credential_status_1.CredentialStatusState.fromPartial(e))) ||
            undefined;
        return message;
    },
};
function createBaseQueryDidDocumentRequest() {
    return {};
}
exports.QueryDidDocumentRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.didId !== undefined && message.didId !== "") {
            writer.uint32(10).string(message.didId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDidDocumentRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.didId = reader.string();
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
        return { didId: isSet(object.didId) ? globalThis.String(object.didId) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.didId !== undefined && message.didId !== "") {
            obj.didId = message.didId;
        }
        return obj;
    },
    create(base) {
        return exports.QueryDidDocumentRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDidDocumentRequest();
        message.didId = (_a = object.didId) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseQueryDidDocumentResponse() {
    return {};
}
exports.QueryDidDocumentResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.didDocument !== undefined) {
            did_1.DidDocument.encode(message.didDocument, writer.uint32(10).fork()).ldelim();
        }
        if (message.didDocumentMetadata !== undefined) {
            did_1.DidDocumentMetadata.encode(message.didDocumentMetadata, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDidDocumentResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.didDocument = did_1.DidDocument.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.didDocumentMetadata = did_1.DidDocumentMetadata.decode(reader, reader.uint32());
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
            didDocument: isSet(object.didDocument) ? did_1.DidDocument.fromJSON(object.didDocument) : undefined,
            didDocumentMetadata: isSet(object.didDocumentMetadata)
                ? did_1.DidDocumentMetadata.fromJSON(object.didDocumentMetadata)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.didDocument !== undefined) {
            obj.didDocument = did_1.DidDocument.toJSON(message.didDocument);
        }
        if (message.didDocumentMetadata !== undefined) {
            obj.didDocumentMetadata = did_1.DidDocumentMetadata.toJSON(message.didDocumentMetadata);
        }
        return obj;
    },
    create(base) {
        return exports.QueryDidDocumentResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryDidDocumentResponse();
        message.didDocument = (object.didDocument !== undefined && object.didDocument !== null)
            ? did_1.DidDocument.fromPartial(object.didDocument)
            : undefined;
        message.didDocumentMetadata = (object.didDocumentMetadata !== undefined && object.didDocumentMetadata !== null)
            ? did_1.DidDocumentMetadata.fromPartial(object.didDocumentMetadata)
            : undefined;
        return message;
    },
};
function createBaseQueryDidDocumentsRequest() {
    return {};
}
exports.QueryDidDocumentsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDidDocumentsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
        return { pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageRequest.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryDidDocumentsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryDidDocumentsRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryDidDocumentsResponse() {
    return {};
}
exports.QueryDidDocumentsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.count !== undefined && message.count !== 0) {
            writer.uint32(8).uint64(message.count);
        }
        if (message.didDocuments !== undefined && message.didDocuments.length !== 0) {
            for (const v of message.didDocuments) {
                did_1.DidDocumentState.encode(v, writer.uint32(18).fork()).ldelim();
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDidDocumentsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.count = longToNumber(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    if (message.didDocuments === undefined) {
                        message.didDocuments = [];
                    }
                    message.didDocuments.push(did_1.DidDocumentState.decode(reader, reader.uint32()));
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
            count: isSet(object.count) ? globalThis.Number(object.count) : undefined,
            didDocuments: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.didDocuments)
                ? object.didDocuments.map((e) => did_1.DidDocumentState.fromJSON(e))
                : undefined,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.count !== undefined && message.count !== 0) {
            obj.count = Math.round(message.count);
        }
        if ((_a = message.didDocuments) === null || _a === void 0 ? void 0 : _a.length) {
            obj.didDocuments = message.didDocuments.map((e) => did_1.DidDocumentState.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.QueryDidDocumentsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryDidDocumentsResponse();
        message.count = (_a = object.count) !== null && _a !== void 0 ? _a : undefined;
        message.didDocuments = ((_b = object.didDocuments) === null || _b === void 0 ? void 0 : _b.map((e) => did_1.DidDocumentState.fromPartial(e))) || undefined;
        return message;
    },
};
exports.QueryServiceName = "hypersign.ssi.v1.Query";
class QueryClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || exports.QueryServiceName;
        this.rpc = rpc;
        this.CredentialSchemaByID = this.CredentialSchemaByID.bind(this);
        this.CredentialSchemas = this.CredentialSchemas.bind(this);
        this.DidDocumentByID = this.DidDocumentByID.bind(this);
        this.DidDocuments = this.DidDocuments.bind(this);
        this.CredentialStatusByID = this.CredentialStatusByID.bind(this);
        this.CredentialStatuses = this.CredentialStatuses.bind(this);
    }
    CredentialSchemaByID(request) {
        const data = exports.QueryCredentialSchemaRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "CredentialSchemaByID", data);
        return promise.then((data) => exports.QueryCredentialSchemaResponse.decode(minimal_1.default.Reader.create(data)));
    }
    CredentialSchemas(request) {
        const data = exports.QueryCredentialSchemasRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "CredentialSchemas", data);
        return promise.then((data) => exports.QueryCredentialSchemasResponse.decode(minimal_1.default.Reader.create(data)));
    }
    DidDocumentByID(request) {
        const data = exports.QueryDidDocumentRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "DidDocumentByID", data);
        return promise.then((data) => exports.QueryDidDocumentResponse.decode(minimal_1.default.Reader.create(data)));
    }
    DidDocuments(request) {
        const data = exports.QueryDidDocumentsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "DidDocuments", data);
        return promise.then((data) => exports.QueryDidDocumentsResponse.decode(minimal_1.default.Reader.create(data)));
    }
    CredentialStatusByID(request) {
        const data = exports.QueryCredentialStatusRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "CredentialStatusByID", data);
        return promise.then((data) => exports.QueryCredentialStatusResponse.decode(minimal_1.default.Reader.create(data)));
    }
    CredentialStatuses(request) {
        const data = exports.QueryCredentialStatusesRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "CredentialStatuses", data);
        return promise.then((data) => exports.QueryCredentialStatusesResponse.decode(minimal_1.default.Reader.create(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
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

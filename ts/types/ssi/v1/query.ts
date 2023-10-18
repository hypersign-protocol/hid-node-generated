/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest } from "../../cosmos/base/query/v1beta1/pagination";
import { CredentialSchemaState } from "./credential_schema";
import { CredentialStatusState } from "./credential_status";
import { DidDocument, DidDocumentMetadata, DidDocumentState } from "./did";

export const protobufPackage = "hypersign.ssi.v1";

export interface QueryCredentialSchemaRequest {
  schemaId?: string | undefined;
}

export interface QueryCredentialSchemaResponse {
  credentialSchemas?: CredentialSchemaState[] | undefined;
}

export interface QueryCredentialSchemasRequest {
  pagination?: PageRequest | undefined;
}

export interface QueryCredentialSchemasResponse {
  count?: number | undefined;
  credentialSchemas?: CredentialSchemaState[] | undefined;
}

export interface QueryCredentialStatusRequest {
  credId?: string | undefined;
}

export interface QueryCredentialStatusResponse {
  credentialStatus?: CredentialStatusState | undefined;
}

export interface QueryCredentialStatusesRequest {
  pagination?: PageRequest | undefined;
}

export interface QueryCredentialStatusesResponse {
  count?: number | undefined;
  credentialStatuses?: CredentialStatusState[] | undefined;
}

export interface QueryDidDocumentRequest {
  didId?: string | undefined;
}

export interface QueryDidDocumentResponse {
  didDocument?: DidDocument | undefined;
  didDocumentMetadata?: DidDocumentMetadata | undefined;
}

export interface QueryDidDocumentsRequest {
  pagination?: PageRequest | undefined;
}

export interface QueryDidDocumentsResponse {
  count?: number | undefined;
  didDocuments?: DidDocumentState[] | undefined;
}

function createBaseQueryCredentialSchemaRequest(): QueryCredentialSchemaRequest {
  return {};
}

export const QueryCredentialSchemaRequest = {
  encode(message: QueryCredentialSchemaRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.schemaId !== undefined && message.schemaId !== "") {
      writer.uint32(10).string(message.schemaId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCredentialSchemaRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

  fromJSON(object: any): QueryCredentialSchemaRequest {
    return { schemaId: isSet(object.schemaId) ? globalThis.String(object.schemaId) : undefined };
  },

  toJSON(message: QueryCredentialSchemaRequest): unknown {
    const obj: any = {};
    if (message.schemaId !== undefined && message.schemaId !== "") {
      obj.schemaId = message.schemaId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryCredentialSchemaRequest>, I>>(base?: I): QueryCredentialSchemaRequest {
    return QueryCredentialSchemaRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryCredentialSchemaRequest>, I>>(object: I): QueryCredentialSchemaRequest {
    const message = createBaseQueryCredentialSchemaRequest();
    message.schemaId = object.schemaId ?? undefined;
    return message;
  },
};

function createBaseQueryCredentialSchemaResponse(): QueryCredentialSchemaResponse {
  return {};
}

export const QueryCredentialSchemaResponse = {
  encode(message: QueryCredentialSchemaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.credentialSchemas !== undefined && message.credentialSchemas.length !== 0) {
      for (const v of message.credentialSchemas) {
        CredentialSchemaState.encode(v!, writer.uint32(10).fork()).ldelim();
      }
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCredentialSchemaResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
          message.credentialSchemas!.push(CredentialSchemaState.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryCredentialSchemaResponse {
    return {
      credentialSchemas: globalThis.Array.isArray(object?.credentialSchemas)
        ? object.credentialSchemas.map((e: any) => CredentialSchemaState.fromJSON(e))
        : undefined,
    };
  },

  toJSON(message: QueryCredentialSchemaResponse): unknown {
    const obj: any = {};
    if (message.credentialSchemas?.length) {
      obj.credentialSchemas = message.credentialSchemas.map((e) => CredentialSchemaState.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryCredentialSchemaResponse>, I>>(base?: I): QueryCredentialSchemaResponse {
    return QueryCredentialSchemaResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryCredentialSchemaResponse>, I>>(
    object: I,
  ): QueryCredentialSchemaResponse {
    const message = createBaseQueryCredentialSchemaResponse();
    message.credentialSchemas = object.credentialSchemas?.map((e) => CredentialSchemaState.fromPartial(e)) || undefined;
    return message;
  },
};

function createBaseQueryCredentialSchemasRequest(): QueryCredentialSchemasRequest {
  return {};
}

export const QueryCredentialSchemasRequest = {
  encode(message: QueryCredentialSchemasRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCredentialSchemasRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCredentialSchemasRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryCredentialSchemasRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryCredentialSchemasRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryCredentialSchemasRequest>, I>>(base?: I): QueryCredentialSchemasRequest {
    return QueryCredentialSchemasRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryCredentialSchemasRequest>, I>>(
    object: I,
  ): QueryCredentialSchemasRequest {
    const message = createBaseQueryCredentialSchemasRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryCredentialSchemasResponse(): QueryCredentialSchemasResponse {
  return {};
}

export const QueryCredentialSchemasResponse = {
  encode(message: QueryCredentialSchemasResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.count !== undefined && message.count !== 0) {
      writer.uint32(8).uint64(message.count);
    }
    if (message.credentialSchemas !== undefined && message.credentialSchemas.length !== 0) {
      for (const v of message.credentialSchemas) {
        CredentialSchemaState.encode(v!, writer.uint32(18).fork()).ldelim();
      }
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCredentialSchemasResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCredentialSchemasResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.count = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          if (message.credentialSchemas === undefined) {
            message.credentialSchemas = [];
          }
          message.credentialSchemas!.push(CredentialSchemaState.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryCredentialSchemasResponse {
    return {
      count: isSet(object.count) ? globalThis.Number(object.count) : undefined,
      credentialSchemas: globalThis.Array.isArray(object?.credentialSchemas)
        ? object.credentialSchemas.map((e: any) => CredentialSchemaState.fromJSON(e))
        : undefined,
    };
  },

  toJSON(message: QueryCredentialSchemasResponse): unknown {
    const obj: any = {};
    if (message.count !== undefined && message.count !== 0) {
      obj.count = Math.round(message.count);
    }
    if (message.credentialSchemas?.length) {
      obj.credentialSchemas = message.credentialSchemas.map((e) => CredentialSchemaState.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryCredentialSchemasResponse>, I>>(base?: I): QueryCredentialSchemasResponse {
    return QueryCredentialSchemasResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryCredentialSchemasResponse>, I>>(
    object: I,
  ): QueryCredentialSchemasResponse {
    const message = createBaseQueryCredentialSchemasResponse();
    message.count = object.count ?? undefined;
    message.credentialSchemas = object.credentialSchemas?.map((e) => CredentialSchemaState.fromPartial(e)) || undefined;
    return message;
  },
};

function createBaseQueryCredentialStatusRequest(): QueryCredentialStatusRequest {
  return {};
}

export const QueryCredentialStatusRequest = {
  encode(message: QueryCredentialStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.credId !== undefined && message.credId !== "") {
      writer.uint32(10).string(message.credId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCredentialStatusRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

  fromJSON(object: any): QueryCredentialStatusRequest {
    return { credId: isSet(object.credId) ? globalThis.String(object.credId) : undefined };
  },

  toJSON(message: QueryCredentialStatusRequest): unknown {
    const obj: any = {};
    if (message.credId !== undefined && message.credId !== "") {
      obj.credId = message.credId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryCredentialStatusRequest>, I>>(base?: I): QueryCredentialStatusRequest {
    return QueryCredentialStatusRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryCredentialStatusRequest>, I>>(object: I): QueryCredentialStatusRequest {
    const message = createBaseQueryCredentialStatusRequest();
    message.credId = object.credId ?? undefined;
    return message;
  },
};

function createBaseQueryCredentialStatusResponse(): QueryCredentialStatusResponse {
  return {};
}

export const QueryCredentialStatusResponse = {
  encode(message: QueryCredentialStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.credentialStatus !== undefined) {
      CredentialStatusState.encode(message.credentialStatus, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCredentialStatusResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCredentialStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.credentialStatus = CredentialStatusState.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryCredentialStatusResponse {
    return {
      credentialStatus: isSet(object.credentialStatus)
        ? CredentialStatusState.fromJSON(object.credentialStatus)
        : undefined,
    };
  },

  toJSON(message: QueryCredentialStatusResponse): unknown {
    const obj: any = {};
    if (message.credentialStatus !== undefined) {
      obj.credentialStatus = CredentialStatusState.toJSON(message.credentialStatus);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryCredentialStatusResponse>, I>>(base?: I): QueryCredentialStatusResponse {
    return QueryCredentialStatusResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryCredentialStatusResponse>, I>>(
    object: I,
  ): QueryCredentialStatusResponse {
    const message = createBaseQueryCredentialStatusResponse();
    message.credentialStatus = (object.credentialStatus !== undefined && object.credentialStatus !== null)
      ? CredentialStatusState.fromPartial(object.credentialStatus)
      : undefined;
    return message;
  },
};

function createBaseQueryCredentialStatusesRequest(): QueryCredentialStatusesRequest {
  return {};
}

export const QueryCredentialStatusesRequest = {
  encode(message: QueryCredentialStatusesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCredentialStatusesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCredentialStatusesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryCredentialStatusesRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryCredentialStatusesRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryCredentialStatusesRequest>, I>>(base?: I): QueryCredentialStatusesRequest {
    return QueryCredentialStatusesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryCredentialStatusesRequest>, I>>(
    object: I,
  ): QueryCredentialStatusesRequest {
    const message = createBaseQueryCredentialStatusesRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryCredentialStatusesResponse(): QueryCredentialStatusesResponse {
  return {};
}

export const QueryCredentialStatusesResponse = {
  encode(message: QueryCredentialStatusesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.count !== undefined && message.count !== 0) {
      writer.uint32(8).uint64(message.count);
    }
    if (message.credentialStatuses !== undefined && message.credentialStatuses.length !== 0) {
      for (const v of message.credentialStatuses) {
        CredentialStatusState.encode(v!, writer.uint32(18).fork()).ldelim();
      }
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCredentialStatusesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCredentialStatusesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.count = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          if (message.credentialStatuses === undefined) {
            message.credentialStatuses = [];
          }
          message.credentialStatuses!.push(CredentialStatusState.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryCredentialStatusesResponse {
    return {
      count: isSet(object.count) ? globalThis.Number(object.count) : undefined,
      credentialStatuses: globalThis.Array.isArray(object?.credentialStatuses)
        ? object.credentialStatuses.map((e: any) => CredentialStatusState.fromJSON(e))
        : undefined,
    };
  },

  toJSON(message: QueryCredentialStatusesResponse): unknown {
    const obj: any = {};
    if (message.count !== undefined && message.count !== 0) {
      obj.count = Math.round(message.count);
    }
    if (message.credentialStatuses?.length) {
      obj.credentialStatuses = message.credentialStatuses.map((e) => CredentialStatusState.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryCredentialStatusesResponse>, I>>(base?: I): QueryCredentialStatusesResponse {
    return QueryCredentialStatusesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryCredentialStatusesResponse>, I>>(
    object: I,
  ): QueryCredentialStatusesResponse {
    const message = createBaseQueryCredentialStatusesResponse();
    message.count = object.count ?? undefined;
    message.credentialStatuses = object.credentialStatuses?.map((e) => CredentialStatusState.fromPartial(e)) ||
      undefined;
    return message;
  },
};

function createBaseQueryDidDocumentRequest(): QueryDidDocumentRequest {
  return {};
}

export const QueryDidDocumentRequest = {
  encode(message: QueryDidDocumentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.didId !== undefined && message.didId !== "") {
      writer.uint32(10).string(message.didId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDidDocumentRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

  fromJSON(object: any): QueryDidDocumentRequest {
    return { didId: isSet(object.didId) ? globalThis.String(object.didId) : undefined };
  },

  toJSON(message: QueryDidDocumentRequest): unknown {
    const obj: any = {};
    if (message.didId !== undefined && message.didId !== "") {
      obj.didId = message.didId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDidDocumentRequest>, I>>(base?: I): QueryDidDocumentRequest {
    return QueryDidDocumentRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryDidDocumentRequest>, I>>(object: I): QueryDidDocumentRequest {
    const message = createBaseQueryDidDocumentRequest();
    message.didId = object.didId ?? undefined;
    return message;
  },
};

function createBaseQueryDidDocumentResponse(): QueryDidDocumentResponse {
  return {};
}

export const QueryDidDocumentResponse = {
  encode(message: QueryDidDocumentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.didDocument !== undefined) {
      DidDocument.encode(message.didDocument, writer.uint32(10).fork()).ldelim();
    }
    if (message.didDocumentMetadata !== undefined) {
      DidDocumentMetadata.encode(message.didDocumentMetadata, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDidDocumentResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDidDocumentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.didDocument = DidDocument.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.didDocumentMetadata = DidDocumentMetadata.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryDidDocumentResponse {
    return {
      didDocument: isSet(object.didDocument) ? DidDocument.fromJSON(object.didDocument) : undefined,
      didDocumentMetadata: isSet(object.didDocumentMetadata)
        ? DidDocumentMetadata.fromJSON(object.didDocumentMetadata)
        : undefined,
    };
  },

  toJSON(message: QueryDidDocumentResponse): unknown {
    const obj: any = {};
    if (message.didDocument !== undefined) {
      obj.didDocument = DidDocument.toJSON(message.didDocument);
    }
    if (message.didDocumentMetadata !== undefined) {
      obj.didDocumentMetadata = DidDocumentMetadata.toJSON(message.didDocumentMetadata);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDidDocumentResponse>, I>>(base?: I): QueryDidDocumentResponse {
    return QueryDidDocumentResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryDidDocumentResponse>, I>>(object: I): QueryDidDocumentResponse {
    const message = createBaseQueryDidDocumentResponse();
    message.didDocument = (object.didDocument !== undefined && object.didDocument !== null)
      ? DidDocument.fromPartial(object.didDocument)
      : undefined;
    message.didDocumentMetadata = (object.didDocumentMetadata !== undefined && object.didDocumentMetadata !== null)
      ? DidDocumentMetadata.fromPartial(object.didDocumentMetadata)
      : undefined;
    return message;
  },
};

function createBaseQueryDidDocumentsRequest(): QueryDidDocumentsRequest {
  return {};
}

export const QueryDidDocumentsRequest = {
  encode(message: QueryDidDocumentsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDidDocumentsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDidDocumentsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryDidDocumentsRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryDidDocumentsRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDidDocumentsRequest>, I>>(base?: I): QueryDidDocumentsRequest {
    return QueryDidDocumentsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryDidDocumentsRequest>, I>>(object: I): QueryDidDocumentsRequest {
    const message = createBaseQueryDidDocumentsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryDidDocumentsResponse(): QueryDidDocumentsResponse {
  return {};
}

export const QueryDidDocumentsResponse = {
  encode(message: QueryDidDocumentsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.count !== undefined && message.count !== 0) {
      writer.uint32(8).uint64(message.count);
    }
    if (message.didDocuments !== undefined && message.didDocuments.length !== 0) {
      for (const v of message.didDocuments) {
        DidDocumentState.encode(v!, writer.uint32(18).fork()).ldelim();
      }
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDidDocumentsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDidDocumentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.count = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          if (message.didDocuments === undefined) {
            message.didDocuments = [];
          }
          message.didDocuments!.push(DidDocumentState.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryDidDocumentsResponse {
    return {
      count: isSet(object.count) ? globalThis.Number(object.count) : undefined,
      didDocuments: globalThis.Array.isArray(object?.didDocuments)
        ? object.didDocuments.map((e: any) => DidDocumentState.fromJSON(e))
        : undefined,
    };
  },

  toJSON(message: QueryDidDocumentsResponse): unknown {
    const obj: any = {};
    if (message.count !== undefined && message.count !== 0) {
      obj.count = Math.round(message.count);
    }
    if (message.didDocuments?.length) {
      obj.didDocuments = message.didDocuments.map((e) => DidDocumentState.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDidDocumentsResponse>, I>>(base?: I): QueryDidDocumentsResponse {
    return QueryDidDocumentsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryDidDocumentsResponse>, I>>(object: I): QueryDidDocumentsResponse {
    const message = createBaseQueryDidDocumentsResponse();
    message.count = object.count ?? undefined;
    message.didDocuments = object.didDocuments?.map((e) => DidDocumentState.fromPartial(e)) || undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Get the Schema Document for a specified schema id */
  CredentialSchemaByID(request: QueryCredentialSchemaRequest): Promise<QueryCredentialSchemaResponse>;
  /** Get the count and list of registered Schemas */
  CredentialSchemas(request: QueryCredentialSchemasRequest): Promise<QueryCredentialSchemasResponse>;
  /** Get the Did Document for a specified DID id */
  DidDocumentByID(request: QueryDidDocumentRequest): Promise<QueryDidDocumentResponse>;
  /** Get the count and list of registered Did Documents */
  DidDocuments(request: QueryDidDocumentsRequest): Promise<QueryDidDocumentsResponse>;
  /** Get the Credential Status for a given credential id */
  CredentialStatusByID(request: QueryCredentialStatusRequest): Promise<QueryCredentialStatusResponse>;
  /** Get all the registed Credential Statuses */
  CredentialStatuses(request: QueryCredentialStatusesRequest): Promise<QueryCredentialStatusesResponse>;
}

export const QueryServiceName = "hypersign.ssi.v1.Query";
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceName;
    this.rpc = rpc;
    this.CredentialSchemaByID = this.CredentialSchemaByID.bind(this);
    this.CredentialSchemas = this.CredentialSchemas.bind(this);
    this.DidDocumentByID = this.DidDocumentByID.bind(this);
    this.DidDocuments = this.DidDocuments.bind(this);
    this.CredentialStatusByID = this.CredentialStatusByID.bind(this);
    this.CredentialStatuses = this.CredentialStatuses.bind(this);
  }
  CredentialSchemaByID(request: QueryCredentialSchemaRequest): Promise<QueryCredentialSchemaResponse> {
    const data = QueryCredentialSchemaRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CredentialSchemaByID", data);
    return promise.then((data) => QueryCredentialSchemaResponse.decode(_m0.Reader.create(data)));
  }

  CredentialSchemas(request: QueryCredentialSchemasRequest): Promise<QueryCredentialSchemasResponse> {
    const data = QueryCredentialSchemasRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CredentialSchemas", data);
    return promise.then((data) => QueryCredentialSchemasResponse.decode(_m0.Reader.create(data)));
  }

  DidDocumentByID(request: QueryDidDocumentRequest): Promise<QueryDidDocumentResponse> {
    const data = QueryDidDocumentRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DidDocumentByID", data);
    return promise.then((data) => QueryDidDocumentResponse.decode(_m0.Reader.create(data)));
  }

  DidDocuments(request: QueryDidDocumentsRequest): Promise<QueryDidDocumentsResponse> {
    const data = QueryDidDocumentsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DidDocuments", data);
    return promise.then((data) => QueryDidDocumentsResponse.decode(_m0.Reader.create(data)));
  }

  CredentialStatusByID(request: QueryCredentialStatusRequest): Promise<QueryCredentialStatusResponse> {
    const data = QueryCredentialStatusRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CredentialStatusByID", data);
    return promise.then((data) => QueryCredentialStatusResponse.decode(_m0.Reader.create(data)));
  }

  CredentialStatuses(request: QueryCredentialStatusesRequest): Promise<QueryCredentialStatusesResponse> {
    const data = QueryCredentialStatusesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CredentialStatuses", data);
    return promise.then((data) => QueryCredentialStatusesResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

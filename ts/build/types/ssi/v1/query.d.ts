import _m0 from "protobufjs/minimal";
import { PageRequest } from "../../cosmos/base/query/v1beta1/pagination";
import { CredentialSchemaState } from "./credential_schema";
import { CredentialStatusState } from "./credential_status";
import { DidDocument, DidDocumentMetadata, DidDocumentState } from "./did";
export declare const protobufPackage = "hypersign.ssi.v1";
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
export declare const QueryCredentialSchemaRequest: {
    encode(message: QueryCredentialSchemaRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCredentialSchemaRequest;
    fromJSON(object: any): QueryCredentialSchemaRequest;
    toJSON(message: QueryCredentialSchemaRequest): unknown;
    create<I extends {
        schemaId?: string | undefined;
    } & {
        schemaId?: string | undefined;
    } & { [K in Exclude<keyof I, "schemaId">]: never; }>(base?: I): QueryCredentialSchemaRequest;
    fromPartial<I_1 extends {
        schemaId?: string | undefined;
    } & {
        schemaId?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "schemaId">]: never; }>(object: I_1): QueryCredentialSchemaRequest;
};
export declare const QueryCredentialSchemaResponse: {
    encode(message: QueryCredentialSchemaResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCredentialSchemaResponse;
    fromJSON(object: any): QueryCredentialSchemaResponse;
    toJSON(message: QueryCredentialSchemaResponse): unknown;
    create<I extends {
        credentialSchemas?: {
            credentialSchemaDocument?: {
                "@context"?: string[] | undefined;
                type?: string | undefined;
                modelVersion?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                author?: string | undefined;
                authored?: string | undefined;
                schema?: {
                    schema?: string | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    properties?: string | undefined;
                    required?: string[] | undefined;
                    additionalProperties?: boolean | undefined;
                } | undefined;
            } | undefined;
            credentialSchemaProof?: {
                type?: string | undefined;
                created?: string | undefined;
                verificationMethod?: string | undefined;
                proofPurpose?: string | undefined;
                proofValue?: string | undefined;
                clientSpecType?: import("./client_spec").ClientSpecType | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        credentialSchemas?: ({
            credentialSchemaDocument?: {
                "@context"?: string[] | undefined;
                type?: string | undefined;
                modelVersion?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                author?: string | undefined;
                authored?: string | undefined;
                schema?: {
                    schema?: string | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    properties?: string | undefined;
                    required?: string[] | undefined;
                    additionalProperties?: boolean | undefined;
                } | undefined;
            } | undefined;
            credentialSchemaProof?: {
                type?: string | undefined;
                created?: string | undefined;
                verificationMethod?: string | undefined;
                proofPurpose?: string | undefined;
                proofValue?: string | undefined;
                clientSpecType?: import("./client_spec").ClientSpecType | undefined;
            } | undefined;
        }[] & ({
            credentialSchemaDocument?: {
                "@context"?: string[] | undefined;
                type?: string | undefined;
                modelVersion?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                author?: string | undefined;
                authored?: string | undefined;
                schema?: {
                    schema?: string | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    properties?: string | undefined;
                    required?: string[] | undefined;
                    additionalProperties?: boolean | undefined;
                } | undefined;
            } | undefined;
            credentialSchemaProof?: {
                type?: string | undefined;
                created?: string | undefined;
                verificationMethod?: string | undefined;
                proofPurpose?: string | undefined;
                proofValue?: string | undefined;
                clientSpecType?: import("./client_spec").ClientSpecType | undefined;
            } | undefined;
        } & {
            credentialSchemaDocument?: ({
                "@context"?: string[] | undefined;
                type?: string | undefined;
                modelVersion?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                author?: string | undefined;
                authored?: string | undefined;
                schema?: {
                    schema?: string | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    properties?: string | undefined;
                    required?: string[] | undefined;
                    additionalProperties?: boolean | undefined;
                } | undefined;
            } & {
                "@context"?: (string[] & string[] & { [K in Exclude<keyof I["credentialSchemas"][number]["credentialSchemaDocument"]["@context"], keyof string[]>]: never; }) | undefined;
                type?: string | undefined;
                modelVersion?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                author?: string | undefined;
                authored?: string | undefined;
                schema?: ({
                    schema?: string | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    properties?: string | undefined;
                    required?: string[] | undefined;
                    additionalProperties?: boolean | undefined;
                } & {
                    schema?: string | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    properties?: string | undefined;
                    required?: (string[] & string[] & { [K_1 in Exclude<keyof I["credentialSchemas"][number]["credentialSchemaDocument"]["schema"]["required"], keyof string[]>]: never; }) | undefined;
                    additionalProperties?: boolean | undefined;
                } & { [K_2 in Exclude<keyof I["credentialSchemas"][number]["credentialSchemaDocument"]["schema"], keyof import("./credential_schema").CredentialSchemaProperty>]: never; }) | undefined;
            } & { [K_3 in Exclude<keyof I["credentialSchemas"][number]["credentialSchemaDocument"], keyof import("./credential_schema").CredentialSchemaDocument>]: never; }) | undefined;
            credentialSchemaProof?: ({
                type?: string | undefined;
                created?: string | undefined;
                verificationMethod?: string | undefined;
                proofPurpose?: string | undefined;
                proofValue?: string | undefined;
                clientSpecType?: import("./client_spec").ClientSpecType | undefined;
            } & {
                type?: string | undefined;
                created?: string | undefined;
                verificationMethod?: string | undefined;
                proofPurpose?: string | undefined;
                proofValue?: string | undefined;
                clientSpecType?: import("./client_spec").ClientSpecType | undefined;
            } & { [K_4 in Exclude<keyof I["credentialSchemas"][number]["credentialSchemaProof"], keyof import("./proof").DocumentProof>]: never; }) | undefined;
        } & { [K_5 in Exclude<keyof I["credentialSchemas"][number], keyof CredentialSchemaState>]: never; })[] & { [K_6 in Exclude<keyof I["credentialSchemas"], keyof {
            credentialSchemaDocument?: {
                "@context"?: string[] | undefined;
                type?: string | undefined;
                modelVersion?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                author?: string | undefined;
                authored?: string | undefined;
                schema?: {
                    schema?: string | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    properties?: string | undefined;
                    required?: string[] | undefined;
                    additionalProperties?: boolean | undefined;
                } | undefined;
            } | undefined;
            credentialSchemaProof?: {
                type?: string | undefined;
                created?: string | undefined;
                verificationMethod?: string | undefined;
                proofPurpose?: string | undefined;
                proofValue?: string | undefined;
                clientSpecType?: import("./client_spec").ClientSpecType | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I, "credentialSchemas">]: never; }>(base?: I): QueryCredentialSchemaResponse;
    fromPartial<I_1 extends {
        credentialSchemas?: {
            credentialSchemaDocument?: {
                "@context"?: string[] | undefined;
                type?: string | undefined;
                modelVersion?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                author?: string | undefined;
                authored?: string | undefined;
                schema?: {
                    schema?: string | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    properties?: string | undefined;
                    required?: string[] | undefined;
                    additionalProperties?: boolean | undefined;
                } | undefined;
            } | undefined;
            credentialSchemaProof?: {
                type?: string | undefined;
                created?: string | undefined;
                verificationMethod?: string | undefined;
                proofPurpose?: string | undefined;
                proofValue?: string | undefined;
                clientSpecType?: import("./client_spec").ClientSpecType | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        credentialSchemas?: ({
            credentialSchemaDocument?: {
                "@context"?: string[] | undefined;
                type?: string | undefined;
                modelVersion?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                author?: string | undefined;
                authored?: string | undefined;
                schema?: {
                    schema?: string | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    properties?: string | undefined;
                    required?: string[] | undefined;
                    additionalProperties?: boolean | undefined;
                } | undefined;
            } | undefined;
            credentialSchemaProof?: {
                type?: string | undefined;
                created?: string | undefined;
                verificationMethod?: string | undefined;
                proofPurpose?: string | undefined;
                proofValue?: string | undefined;
                clientSpecType?: import("./client_spec").ClientSpecType | undefined;
            } | undefined;
        }[] & ({
            credentialSchemaDocument?: {
                "@context"?: string[] | undefined;
                type?: string | undefined;
                modelVersion?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                author?: string | undefined;
                authored?: string | undefined;
                schema?: {
                    schema?: string | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    properties?: string | undefined;
                    required?: string[] | undefined;
                    additionalProperties?: boolean | undefined;
                } | undefined;
            } | undefined;
            credentialSchemaProof?: {
                type?: string | undefined;
                created?: string | undefined;
                verificationMethod?: string | undefined;
                proofPurpose?: string | undefined;
                proofValue?: string | undefined;
                clientSpecType?: import("./client_spec").ClientSpecType | undefined;
            } | undefined;
        } & {
            credentialSchemaDocument?: ({
                "@context"?: string[] | undefined;
                type?: string | undefined;
                modelVersion?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                author?: string | undefined;
                authored?: string | undefined;
                schema?: {
                    schema?: string | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    properties?: string | undefined;
                    required?: string[] | undefined;
                    additionalProperties?: boolean | undefined;
                } | undefined;
            } & {
                "@context"?: (string[] & string[] & { [K_8 in Exclude<keyof I_1["credentialSchemas"][number]["credentialSchemaDocument"]["@context"], keyof string[]>]: never; }) | undefined;
                type?: string | undefined;
                modelVersion?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                author?: string | undefined;
                authored?: string | undefined;
                schema?: ({
                    schema?: string | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    properties?: string | undefined;
                    required?: string[] | undefined;
                    additionalProperties?: boolean | undefined;
                } & {
                    schema?: string | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    properties?: string | undefined;
                    required?: (string[] & string[] & { [K_9 in Exclude<keyof I_1["credentialSchemas"][number]["credentialSchemaDocument"]["schema"]["required"], keyof string[]>]: never; }) | undefined;
                    additionalProperties?: boolean | undefined;
                } & { [K_10 in Exclude<keyof I_1["credentialSchemas"][number]["credentialSchemaDocument"]["schema"], keyof import("./credential_schema").CredentialSchemaProperty>]: never; }) | undefined;
            } & { [K_11 in Exclude<keyof I_1["credentialSchemas"][number]["credentialSchemaDocument"], keyof import("./credential_schema").CredentialSchemaDocument>]: never; }) | undefined;
            credentialSchemaProof?: ({
                type?: string | undefined;
                created?: string | undefined;
                verificationMethod?: string | undefined;
                proofPurpose?: string | undefined;
                proofValue?: string | undefined;
                clientSpecType?: import("./client_spec").ClientSpecType | undefined;
            } & {
                type?: string | undefined;
                created?: string | undefined;
                verificationMethod?: string | undefined;
                proofPurpose?: string | undefined;
                proofValue?: string | undefined;
                clientSpecType?: import("./client_spec").ClientSpecType | undefined;
            } & { [K_12 in Exclude<keyof I_1["credentialSchemas"][number]["credentialSchemaProof"], keyof import("./proof").DocumentProof>]: never; }) | undefined;
        } & { [K_13 in Exclude<keyof I_1["credentialSchemas"][number], keyof CredentialSchemaState>]: never; })[] & { [K_14 in Exclude<keyof I_1["credentialSchemas"], keyof {
            credentialSchemaDocument?: {
                "@context"?: string[] | undefined;
                type?: string | undefined;
                modelVersion?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                author?: string | undefined;
                authored?: string | undefined;
                schema?: {
                    schema?: string | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    properties?: string | undefined;
                    required?: string[] | undefined;
                    additionalProperties?: boolean | undefined;
                } | undefined;
            } | undefined;
            credentialSchemaProof?: {
                type?: string | undefined;
                created?: string | undefined;
                verificationMethod?: string | undefined;
                proofPurpose?: string | undefined;
                proofValue?: string | undefined;
                clientSpecType?: import("./client_spec").ClientSpecType | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_15 in Exclude<keyof I_1, "credentialSchemas">]: never; }>(object: I_1): QueryCredentialSchemaResponse;
};
export declare const QueryCredentialSchemasRequest: {
    encode(message: QueryCredentialSchemasRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCredentialSchemasRequest;
    fromJSON(object: any): QueryCredentialSchemasRequest;
    toJSON(message: QueryCredentialSchemasRequest): unknown;
    create<I extends {
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & { [K in Exclude<keyof I["pagination"], keyof PageRequest>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "pagination">]: never; }>(base?: I): QueryCredentialSchemasRequest;
    fromPartial<I_1 extends {
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & { [K_2 in Exclude<keyof I_1["pagination"], keyof PageRequest>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "pagination">]: never; }>(object: I_1): QueryCredentialSchemasRequest;
};
export declare const QueryCredentialSchemasResponse: {
    encode(message: QueryCredentialSchemasResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCredentialSchemasResponse;
    fromJSON(object: any): QueryCredentialSchemasResponse;
    toJSON(message: QueryCredentialSchemasResponse): unknown;
    create<I extends {
        count?: number | undefined;
        credentialSchemas?: {
            credentialSchemaDocument?: {
                "@context"?: string[] | undefined;
                type?: string | undefined;
                modelVersion?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                author?: string | undefined;
                authored?: string | undefined;
                schema?: {
                    schema?: string | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    properties?: string | undefined;
                    required?: string[] | undefined;
                    additionalProperties?: boolean | undefined;
                } | undefined;
            } | undefined;
            credentialSchemaProof?: {
                type?: string | undefined;
                created?: string | undefined;
                verificationMethod?: string | undefined;
                proofPurpose?: string | undefined;
                proofValue?: string | undefined;
                clientSpecType?: import("./client_spec").ClientSpecType | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        count?: number | undefined;
        credentialSchemas?: ({
            credentialSchemaDocument?: {
                "@context"?: string[] | undefined;
                type?: string | undefined;
                modelVersion?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                author?: string | undefined;
                authored?: string | undefined;
                schema?: {
                    schema?: string | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    properties?: string | undefined;
                    required?: string[] | undefined;
                    additionalProperties?: boolean | undefined;
                } | undefined;
            } | undefined;
            credentialSchemaProof?: {
                type?: string | undefined;
                created?: string | undefined;
                verificationMethod?: string | undefined;
                proofPurpose?: string | undefined;
                proofValue?: string | undefined;
                clientSpecType?: import("./client_spec").ClientSpecType | undefined;
            } | undefined;
        }[] & ({
            credentialSchemaDocument?: {
                "@context"?: string[] | undefined;
                type?: string | undefined;
                modelVersion?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                author?: string | undefined;
                authored?: string | undefined;
                schema?: {
                    schema?: string | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    properties?: string | undefined;
                    required?: string[] | undefined;
                    additionalProperties?: boolean | undefined;
                } | undefined;
            } | undefined;
            credentialSchemaProof?: {
                type?: string | undefined;
                created?: string | undefined;
                verificationMethod?: string | undefined;
                proofPurpose?: string | undefined;
                proofValue?: string | undefined;
                clientSpecType?: import("./client_spec").ClientSpecType | undefined;
            } | undefined;
        } & {
            credentialSchemaDocument?: ({
                "@context"?: string[] | undefined;
                type?: string | undefined;
                modelVersion?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                author?: string | undefined;
                authored?: string | undefined;
                schema?: {
                    schema?: string | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    properties?: string | undefined;
                    required?: string[] | undefined;
                    additionalProperties?: boolean | undefined;
                } | undefined;
            } & {
                "@context"?: (string[] & string[] & { [K in Exclude<keyof I["credentialSchemas"][number]["credentialSchemaDocument"]["@context"], keyof string[]>]: never; }) | undefined;
                type?: string | undefined;
                modelVersion?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                author?: string | undefined;
                authored?: string | undefined;
                schema?: ({
                    schema?: string | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    properties?: string | undefined;
                    required?: string[] | undefined;
                    additionalProperties?: boolean | undefined;
                } & {
                    schema?: string | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    properties?: string | undefined;
                    required?: (string[] & string[] & { [K_1 in Exclude<keyof I["credentialSchemas"][number]["credentialSchemaDocument"]["schema"]["required"], keyof string[]>]: never; }) | undefined;
                    additionalProperties?: boolean | undefined;
                } & { [K_2 in Exclude<keyof I["credentialSchemas"][number]["credentialSchemaDocument"]["schema"], keyof import("./credential_schema").CredentialSchemaProperty>]: never; }) | undefined;
            } & { [K_3 in Exclude<keyof I["credentialSchemas"][number]["credentialSchemaDocument"], keyof import("./credential_schema").CredentialSchemaDocument>]: never; }) | undefined;
            credentialSchemaProof?: ({
                type?: string | undefined;
                created?: string | undefined;
                verificationMethod?: string | undefined;
                proofPurpose?: string | undefined;
                proofValue?: string | undefined;
                clientSpecType?: import("./client_spec").ClientSpecType | undefined;
            } & {
                type?: string | undefined;
                created?: string | undefined;
                verificationMethod?: string | undefined;
                proofPurpose?: string | undefined;
                proofValue?: string | undefined;
                clientSpecType?: import("./client_spec").ClientSpecType | undefined;
            } & { [K_4 in Exclude<keyof I["credentialSchemas"][number]["credentialSchemaProof"], keyof import("./proof").DocumentProof>]: never; }) | undefined;
        } & { [K_5 in Exclude<keyof I["credentialSchemas"][number], keyof CredentialSchemaState>]: never; })[] & { [K_6 in Exclude<keyof I["credentialSchemas"], keyof {
            credentialSchemaDocument?: {
                "@context"?: string[] | undefined;
                type?: string | undefined;
                modelVersion?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                author?: string | undefined;
                authored?: string | undefined;
                schema?: {
                    schema?: string | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    properties?: string | undefined;
                    required?: string[] | undefined;
                    additionalProperties?: boolean | undefined;
                } | undefined;
            } | undefined;
            credentialSchemaProof?: {
                type?: string | undefined;
                created?: string | undefined;
                verificationMethod?: string | undefined;
                proofPurpose?: string | undefined;
                proofValue?: string | undefined;
                clientSpecType?: import("./client_spec").ClientSpecType | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I, keyof QueryCredentialSchemasResponse>]: never; }>(base?: I): QueryCredentialSchemasResponse;
    fromPartial<I_1 extends {
        count?: number | undefined;
        credentialSchemas?: {
            credentialSchemaDocument?: {
                "@context"?: string[] | undefined;
                type?: string | undefined;
                modelVersion?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                author?: string | undefined;
                authored?: string | undefined;
                schema?: {
                    schema?: string | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    properties?: string | undefined;
                    required?: string[] | undefined;
                    additionalProperties?: boolean | undefined;
                } | undefined;
            } | undefined;
            credentialSchemaProof?: {
                type?: string | undefined;
                created?: string | undefined;
                verificationMethod?: string | undefined;
                proofPurpose?: string | undefined;
                proofValue?: string | undefined;
                clientSpecType?: import("./client_spec").ClientSpecType | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        count?: number | undefined;
        credentialSchemas?: ({
            credentialSchemaDocument?: {
                "@context"?: string[] | undefined;
                type?: string | undefined;
                modelVersion?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                author?: string | undefined;
                authored?: string | undefined;
                schema?: {
                    schema?: string | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    properties?: string | undefined;
                    required?: string[] | undefined;
                    additionalProperties?: boolean | undefined;
                } | undefined;
            } | undefined;
            credentialSchemaProof?: {
                type?: string | undefined;
                created?: string | undefined;
                verificationMethod?: string | undefined;
                proofPurpose?: string | undefined;
                proofValue?: string | undefined;
                clientSpecType?: import("./client_spec").ClientSpecType | undefined;
            } | undefined;
        }[] & ({
            credentialSchemaDocument?: {
                "@context"?: string[] | undefined;
                type?: string | undefined;
                modelVersion?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                author?: string | undefined;
                authored?: string | undefined;
                schema?: {
                    schema?: string | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    properties?: string | undefined;
                    required?: string[] | undefined;
                    additionalProperties?: boolean | undefined;
                } | undefined;
            } | undefined;
            credentialSchemaProof?: {
                type?: string | undefined;
                created?: string | undefined;
                verificationMethod?: string | undefined;
                proofPurpose?: string | undefined;
                proofValue?: string | undefined;
                clientSpecType?: import("./client_spec").ClientSpecType | undefined;
            } | undefined;
        } & {
            credentialSchemaDocument?: ({
                "@context"?: string[] | undefined;
                type?: string | undefined;
                modelVersion?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                author?: string | undefined;
                authored?: string | undefined;
                schema?: {
                    schema?: string | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    properties?: string | undefined;
                    required?: string[] | undefined;
                    additionalProperties?: boolean | undefined;
                } | undefined;
            } & {
                "@context"?: (string[] & string[] & { [K_8 in Exclude<keyof I_1["credentialSchemas"][number]["credentialSchemaDocument"]["@context"], keyof string[]>]: never; }) | undefined;
                type?: string | undefined;
                modelVersion?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                author?: string | undefined;
                authored?: string | undefined;
                schema?: ({
                    schema?: string | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    properties?: string | undefined;
                    required?: string[] | undefined;
                    additionalProperties?: boolean | undefined;
                } & {
                    schema?: string | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    properties?: string | undefined;
                    required?: (string[] & string[] & { [K_9 in Exclude<keyof I_1["credentialSchemas"][number]["credentialSchemaDocument"]["schema"]["required"], keyof string[]>]: never; }) | undefined;
                    additionalProperties?: boolean | undefined;
                } & { [K_10 in Exclude<keyof I_1["credentialSchemas"][number]["credentialSchemaDocument"]["schema"], keyof import("./credential_schema").CredentialSchemaProperty>]: never; }) | undefined;
            } & { [K_11 in Exclude<keyof I_1["credentialSchemas"][number]["credentialSchemaDocument"], keyof import("./credential_schema").CredentialSchemaDocument>]: never; }) | undefined;
            credentialSchemaProof?: ({
                type?: string | undefined;
                created?: string | undefined;
                verificationMethod?: string | undefined;
                proofPurpose?: string | undefined;
                proofValue?: string | undefined;
                clientSpecType?: import("./client_spec").ClientSpecType | undefined;
            } & {
                type?: string | undefined;
                created?: string | undefined;
                verificationMethod?: string | undefined;
                proofPurpose?: string | undefined;
                proofValue?: string | undefined;
                clientSpecType?: import("./client_spec").ClientSpecType | undefined;
            } & { [K_12 in Exclude<keyof I_1["credentialSchemas"][number]["credentialSchemaProof"], keyof import("./proof").DocumentProof>]: never; }) | undefined;
        } & { [K_13 in Exclude<keyof I_1["credentialSchemas"][number], keyof CredentialSchemaState>]: never; })[] & { [K_14 in Exclude<keyof I_1["credentialSchemas"], keyof {
            credentialSchemaDocument?: {
                "@context"?: string[] | undefined;
                type?: string | undefined;
                modelVersion?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                author?: string | undefined;
                authored?: string | undefined;
                schema?: {
                    schema?: string | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    properties?: string | undefined;
                    required?: string[] | undefined;
                    additionalProperties?: boolean | undefined;
                } | undefined;
            } | undefined;
            credentialSchemaProof?: {
                type?: string | undefined;
                created?: string | undefined;
                verificationMethod?: string | undefined;
                proofPurpose?: string | undefined;
                proofValue?: string | undefined;
                clientSpecType?: import("./client_spec").ClientSpecType | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_15 in Exclude<keyof I_1, keyof QueryCredentialSchemasResponse>]: never; }>(object: I_1): QueryCredentialSchemasResponse;
};
export declare const QueryCredentialStatusRequest: {
    encode(message: QueryCredentialStatusRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCredentialStatusRequest;
    fromJSON(object: any): QueryCredentialStatusRequest;
    toJSON(message: QueryCredentialStatusRequest): unknown;
    create<I extends {
        credId?: string | undefined;
    } & {
        credId?: string | undefined;
    } & { [K in Exclude<keyof I, "credId">]: never; }>(base?: I): QueryCredentialStatusRequest;
    fromPartial<I_1 extends {
        credId?: string | undefined;
    } & {
        credId?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "credId">]: never; }>(object: I_1): QueryCredentialStatusRequest;
};
export declare const QueryCredentialStatusResponse: {
    encode(message: QueryCredentialStatusResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCredentialStatusResponse;
    fromJSON(object: any): QueryCredentialStatusResponse;
    toJSON(message: QueryCredentialStatusResponse): unknown;
    create<I extends {
        credentialStatus?: {
            credentialStatusDocument?: {
                "@context"?: string[] | undefined;
                id?: string | undefined;
                revoked?: boolean | undefined;
                suspended?: boolean | undefined;
                remarks?: string | undefined;
                issuer?: string | undefined;
                issuanceDate?: string | undefined;
                credentialMerkleRootHash?: string | undefined;
            } | undefined;
            credentialStatusProof?: {
                type?: string | undefined;
                created?: string | undefined;
                verificationMethod?: string | undefined;
                proofPurpose?: string | undefined;
                proofValue?: string | undefined;
                clientSpecType?: import("./client_spec").ClientSpecType | undefined;
            } | undefined;
        } | undefined;
    } & {
        credentialStatus?: ({
            credentialStatusDocument?: {
                "@context"?: string[] | undefined;
                id?: string | undefined;
                revoked?: boolean | undefined;
                suspended?: boolean | undefined;
                remarks?: string | undefined;
                issuer?: string | undefined;
                issuanceDate?: string | undefined;
                credentialMerkleRootHash?: string | undefined;
            } | undefined;
            credentialStatusProof?: {
                type?: string | undefined;
                created?: string | undefined;
                verificationMethod?: string | undefined;
                proofPurpose?: string | undefined;
                proofValue?: string | undefined;
                clientSpecType?: import("./client_spec").ClientSpecType | undefined;
            } | undefined;
        } & {
            credentialStatusDocument?: ({
                "@context"?: string[] | undefined;
                id?: string | undefined;
                revoked?: boolean | undefined;
                suspended?: boolean | undefined;
                remarks?: string | undefined;
                issuer?: string | undefined;
                issuanceDate?: string | undefined;
                credentialMerkleRootHash?: string | undefined;
            } & {
                "@context"?: (string[] & string[] & { [K in Exclude<keyof I["credentialStatus"]["credentialStatusDocument"]["@context"], keyof string[]>]: never; }) | undefined;
                id?: string | undefined;
                revoked?: boolean | undefined;
                suspended?: boolean | undefined;
                remarks?: string | undefined;
                issuer?: string | undefined;
                issuanceDate?: string | undefined;
                credentialMerkleRootHash?: string | undefined;
            } & { [K_1 in Exclude<keyof I["credentialStatus"]["credentialStatusDocument"], keyof import("./credential_status").CredentialStatusDocument>]: never; }) | undefined;
            credentialStatusProof?: ({
                type?: string | undefined;
                created?: string | undefined;
                verificationMethod?: string | undefined;
                proofPurpose?: string | undefined;
                proofValue?: string | undefined;
                clientSpecType?: import("./client_spec").ClientSpecType | undefined;
            } & {
                type?: string | undefined;
                created?: string | undefined;
                verificationMethod?: string | undefined;
                proofPurpose?: string | undefined;
                proofValue?: string | undefined;
                clientSpecType?: import("./client_spec").ClientSpecType | undefined;
            } & { [K_2 in Exclude<keyof I["credentialStatus"]["credentialStatusProof"], keyof import("./proof").DocumentProof>]: never; }) | undefined;
        } & { [K_3 in Exclude<keyof I["credentialStatus"], keyof CredentialStatusState>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, "credentialStatus">]: never; }>(base?: I): QueryCredentialStatusResponse;
    fromPartial<I_1 extends {
        credentialStatus?: {
            credentialStatusDocument?: {
                "@context"?: string[] | undefined;
                id?: string | undefined;
                revoked?: boolean | undefined;
                suspended?: boolean | undefined;
                remarks?: string | undefined;
                issuer?: string | undefined;
                issuanceDate?: string | undefined;
                credentialMerkleRootHash?: string | undefined;
            } | undefined;
            credentialStatusProof?: {
                type?: string | undefined;
                created?: string | undefined;
                verificationMethod?: string | undefined;
                proofPurpose?: string | undefined;
                proofValue?: string | undefined;
                clientSpecType?: import("./client_spec").ClientSpecType | undefined;
            } | undefined;
        } | undefined;
    } & {
        credentialStatus?: ({
            credentialStatusDocument?: {
                "@context"?: string[] | undefined;
                id?: string | undefined;
                revoked?: boolean | undefined;
                suspended?: boolean | undefined;
                remarks?: string | undefined;
                issuer?: string | undefined;
                issuanceDate?: string | undefined;
                credentialMerkleRootHash?: string | undefined;
            } | undefined;
            credentialStatusProof?: {
                type?: string | undefined;
                created?: string | undefined;
                verificationMethod?: string | undefined;
                proofPurpose?: string | undefined;
                proofValue?: string | undefined;
                clientSpecType?: import("./client_spec").ClientSpecType | undefined;
            } | undefined;
        } & {
            credentialStatusDocument?: ({
                "@context"?: string[] | undefined;
                id?: string | undefined;
                revoked?: boolean | undefined;
                suspended?: boolean | undefined;
                remarks?: string | undefined;
                issuer?: string | undefined;
                issuanceDate?: string | undefined;
                credentialMerkleRootHash?: string | undefined;
            } & {
                "@context"?: (string[] & string[] & { [K_5 in Exclude<keyof I_1["credentialStatus"]["credentialStatusDocument"]["@context"], keyof string[]>]: never; }) | undefined;
                id?: string | undefined;
                revoked?: boolean | undefined;
                suspended?: boolean | undefined;
                remarks?: string | undefined;
                issuer?: string | undefined;
                issuanceDate?: string | undefined;
                credentialMerkleRootHash?: string | undefined;
            } & { [K_6 in Exclude<keyof I_1["credentialStatus"]["credentialStatusDocument"], keyof import("./credential_status").CredentialStatusDocument>]: never; }) | undefined;
            credentialStatusProof?: ({
                type?: string | undefined;
                created?: string | undefined;
                verificationMethod?: string | undefined;
                proofPurpose?: string | undefined;
                proofValue?: string | undefined;
                clientSpecType?: import("./client_spec").ClientSpecType | undefined;
            } & {
                type?: string | undefined;
                created?: string | undefined;
                verificationMethod?: string | undefined;
                proofPurpose?: string | undefined;
                proofValue?: string | undefined;
                clientSpecType?: import("./client_spec").ClientSpecType | undefined;
            } & { [K_7 in Exclude<keyof I_1["credentialStatus"]["credentialStatusProof"], keyof import("./proof").DocumentProof>]: never; }) | undefined;
        } & { [K_8 in Exclude<keyof I_1["credentialStatus"], keyof CredentialStatusState>]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I_1, "credentialStatus">]: never; }>(object: I_1): QueryCredentialStatusResponse;
};
export declare const QueryCredentialStatusesRequest: {
    encode(message: QueryCredentialStatusesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCredentialStatusesRequest;
    fromJSON(object: any): QueryCredentialStatusesRequest;
    toJSON(message: QueryCredentialStatusesRequest): unknown;
    create<I extends {
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & { [K in Exclude<keyof I["pagination"], keyof PageRequest>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "pagination">]: never; }>(base?: I): QueryCredentialStatusesRequest;
    fromPartial<I_1 extends {
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & { [K_2 in Exclude<keyof I_1["pagination"], keyof PageRequest>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "pagination">]: never; }>(object: I_1): QueryCredentialStatusesRequest;
};
export declare const QueryCredentialStatusesResponse: {
    encode(message: QueryCredentialStatusesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCredentialStatusesResponse;
    fromJSON(object: any): QueryCredentialStatusesResponse;
    toJSON(message: QueryCredentialStatusesResponse): unknown;
    create<I extends {
        count?: number | undefined;
        credentialStatuses?: {
            credentialStatusDocument?: {
                "@context"?: string[] | undefined;
                id?: string | undefined;
                revoked?: boolean | undefined;
                suspended?: boolean | undefined;
                remarks?: string | undefined;
                issuer?: string | undefined;
                issuanceDate?: string | undefined;
                credentialMerkleRootHash?: string | undefined;
            } | undefined;
            credentialStatusProof?: {
                type?: string | undefined;
                created?: string | undefined;
                verificationMethod?: string | undefined;
                proofPurpose?: string | undefined;
                proofValue?: string | undefined;
                clientSpecType?: import("./client_spec").ClientSpecType | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        count?: number | undefined;
        credentialStatuses?: ({
            credentialStatusDocument?: {
                "@context"?: string[] | undefined;
                id?: string | undefined;
                revoked?: boolean | undefined;
                suspended?: boolean | undefined;
                remarks?: string | undefined;
                issuer?: string | undefined;
                issuanceDate?: string | undefined;
                credentialMerkleRootHash?: string | undefined;
            } | undefined;
            credentialStatusProof?: {
                type?: string | undefined;
                created?: string | undefined;
                verificationMethod?: string | undefined;
                proofPurpose?: string | undefined;
                proofValue?: string | undefined;
                clientSpecType?: import("./client_spec").ClientSpecType | undefined;
            } | undefined;
        }[] & ({
            credentialStatusDocument?: {
                "@context"?: string[] | undefined;
                id?: string | undefined;
                revoked?: boolean | undefined;
                suspended?: boolean | undefined;
                remarks?: string | undefined;
                issuer?: string | undefined;
                issuanceDate?: string | undefined;
                credentialMerkleRootHash?: string | undefined;
            } | undefined;
            credentialStatusProof?: {
                type?: string | undefined;
                created?: string | undefined;
                verificationMethod?: string | undefined;
                proofPurpose?: string | undefined;
                proofValue?: string | undefined;
                clientSpecType?: import("./client_spec").ClientSpecType | undefined;
            } | undefined;
        } & {
            credentialStatusDocument?: ({
                "@context"?: string[] | undefined;
                id?: string | undefined;
                revoked?: boolean | undefined;
                suspended?: boolean | undefined;
                remarks?: string | undefined;
                issuer?: string | undefined;
                issuanceDate?: string | undefined;
                credentialMerkleRootHash?: string | undefined;
            } & {
                "@context"?: (string[] & string[] & { [K in Exclude<keyof I["credentialStatuses"][number]["credentialStatusDocument"]["@context"], keyof string[]>]: never; }) | undefined;
                id?: string | undefined;
                revoked?: boolean | undefined;
                suspended?: boolean | undefined;
                remarks?: string | undefined;
                issuer?: string | undefined;
                issuanceDate?: string | undefined;
                credentialMerkleRootHash?: string | undefined;
            } & { [K_1 in Exclude<keyof I["credentialStatuses"][number]["credentialStatusDocument"], keyof import("./credential_status").CredentialStatusDocument>]: never; }) | undefined;
            credentialStatusProof?: ({
                type?: string | undefined;
                created?: string | undefined;
                verificationMethod?: string | undefined;
                proofPurpose?: string | undefined;
                proofValue?: string | undefined;
                clientSpecType?: import("./client_spec").ClientSpecType | undefined;
            } & {
                type?: string | undefined;
                created?: string | undefined;
                verificationMethod?: string | undefined;
                proofPurpose?: string | undefined;
                proofValue?: string | undefined;
                clientSpecType?: import("./client_spec").ClientSpecType | undefined;
            } & { [K_2 in Exclude<keyof I["credentialStatuses"][number]["credentialStatusProof"], keyof import("./proof").DocumentProof>]: never; }) | undefined;
        } & { [K_3 in Exclude<keyof I["credentialStatuses"][number], keyof CredentialStatusState>]: never; })[] & { [K_4 in Exclude<keyof I["credentialStatuses"], keyof {
            credentialStatusDocument?: {
                "@context"?: string[] | undefined;
                id?: string | undefined;
                revoked?: boolean | undefined;
                suspended?: boolean | undefined;
                remarks?: string | undefined;
                issuer?: string | undefined;
                issuanceDate?: string | undefined;
                credentialMerkleRootHash?: string | undefined;
            } | undefined;
            credentialStatusProof?: {
                type?: string | undefined;
                created?: string | undefined;
                verificationMethod?: string | undefined;
                proofPurpose?: string | undefined;
                proofValue?: string | undefined;
                clientSpecType?: import("./client_spec").ClientSpecType | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I, keyof QueryCredentialStatusesResponse>]: never; }>(base?: I): QueryCredentialStatusesResponse;
    fromPartial<I_1 extends {
        count?: number | undefined;
        credentialStatuses?: {
            credentialStatusDocument?: {
                "@context"?: string[] | undefined;
                id?: string | undefined;
                revoked?: boolean | undefined;
                suspended?: boolean | undefined;
                remarks?: string | undefined;
                issuer?: string | undefined;
                issuanceDate?: string | undefined;
                credentialMerkleRootHash?: string | undefined;
            } | undefined;
            credentialStatusProof?: {
                type?: string | undefined;
                created?: string | undefined;
                verificationMethod?: string | undefined;
                proofPurpose?: string | undefined;
                proofValue?: string | undefined;
                clientSpecType?: import("./client_spec").ClientSpecType | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        count?: number | undefined;
        credentialStatuses?: ({
            credentialStatusDocument?: {
                "@context"?: string[] | undefined;
                id?: string | undefined;
                revoked?: boolean | undefined;
                suspended?: boolean | undefined;
                remarks?: string | undefined;
                issuer?: string | undefined;
                issuanceDate?: string | undefined;
                credentialMerkleRootHash?: string | undefined;
            } | undefined;
            credentialStatusProof?: {
                type?: string | undefined;
                created?: string | undefined;
                verificationMethod?: string | undefined;
                proofPurpose?: string | undefined;
                proofValue?: string | undefined;
                clientSpecType?: import("./client_spec").ClientSpecType | undefined;
            } | undefined;
        }[] & ({
            credentialStatusDocument?: {
                "@context"?: string[] | undefined;
                id?: string | undefined;
                revoked?: boolean | undefined;
                suspended?: boolean | undefined;
                remarks?: string | undefined;
                issuer?: string | undefined;
                issuanceDate?: string | undefined;
                credentialMerkleRootHash?: string | undefined;
            } | undefined;
            credentialStatusProof?: {
                type?: string | undefined;
                created?: string | undefined;
                verificationMethod?: string | undefined;
                proofPurpose?: string | undefined;
                proofValue?: string | undefined;
                clientSpecType?: import("./client_spec").ClientSpecType | undefined;
            } | undefined;
        } & {
            credentialStatusDocument?: ({
                "@context"?: string[] | undefined;
                id?: string | undefined;
                revoked?: boolean | undefined;
                suspended?: boolean | undefined;
                remarks?: string | undefined;
                issuer?: string | undefined;
                issuanceDate?: string | undefined;
                credentialMerkleRootHash?: string | undefined;
            } & {
                "@context"?: (string[] & string[] & { [K_6 in Exclude<keyof I_1["credentialStatuses"][number]["credentialStatusDocument"]["@context"], keyof string[]>]: never; }) | undefined;
                id?: string | undefined;
                revoked?: boolean | undefined;
                suspended?: boolean | undefined;
                remarks?: string | undefined;
                issuer?: string | undefined;
                issuanceDate?: string | undefined;
                credentialMerkleRootHash?: string | undefined;
            } & { [K_7 in Exclude<keyof I_1["credentialStatuses"][number]["credentialStatusDocument"], keyof import("./credential_status").CredentialStatusDocument>]: never; }) | undefined;
            credentialStatusProof?: ({
                type?: string | undefined;
                created?: string | undefined;
                verificationMethod?: string | undefined;
                proofPurpose?: string | undefined;
                proofValue?: string | undefined;
                clientSpecType?: import("./client_spec").ClientSpecType | undefined;
            } & {
                type?: string | undefined;
                created?: string | undefined;
                verificationMethod?: string | undefined;
                proofPurpose?: string | undefined;
                proofValue?: string | undefined;
                clientSpecType?: import("./client_spec").ClientSpecType | undefined;
            } & { [K_8 in Exclude<keyof I_1["credentialStatuses"][number]["credentialStatusProof"], keyof import("./proof").DocumentProof>]: never; }) | undefined;
        } & { [K_9 in Exclude<keyof I_1["credentialStatuses"][number], keyof CredentialStatusState>]: never; })[] & { [K_10 in Exclude<keyof I_1["credentialStatuses"], keyof {
            credentialStatusDocument?: {
                "@context"?: string[] | undefined;
                id?: string | undefined;
                revoked?: boolean | undefined;
                suspended?: boolean | undefined;
                remarks?: string | undefined;
                issuer?: string | undefined;
                issuanceDate?: string | undefined;
                credentialMerkleRootHash?: string | undefined;
            } | undefined;
            credentialStatusProof?: {
                type?: string | undefined;
                created?: string | undefined;
                verificationMethod?: string | undefined;
                proofPurpose?: string | undefined;
                proofValue?: string | undefined;
                clientSpecType?: import("./client_spec").ClientSpecType | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_11 in Exclude<keyof I_1, keyof QueryCredentialStatusesResponse>]: never; }>(object: I_1): QueryCredentialStatusesResponse;
};
export declare const QueryDidDocumentRequest: {
    encode(message: QueryDidDocumentRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDidDocumentRequest;
    fromJSON(object: any): QueryDidDocumentRequest;
    toJSON(message: QueryDidDocumentRequest): unknown;
    create<I extends {
        didId?: string | undefined;
    } & {
        didId?: string | undefined;
    } & { [K in Exclude<keyof I, "didId">]: never; }>(base?: I): QueryDidDocumentRequest;
    fromPartial<I_1 extends {
        didId?: string | undefined;
    } & {
        didId?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "didId">]: never; }>(object: I_1): QueryDidDocumentRequest;
};
export declare const QueryDidDocumentResponse: {
    encode(message: QueryDidDocumentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDidDocumentResponse;
    fromJSON(object: any): QueryDidDocumentResponse;
    toJSON(message: QueryDidDocumentResponse): unknown;
    create<I extends {
        didDocument?: {
            "@context"?: string[] | undefined;
            id?: string | undefined;
            controller?: string[] | undefined;
            alsoKnownAs?: string[] | undefined;
            verificationMethod?: {
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyMultibase?: string | undefined;
                blockchainAccountId?: string | undefined;
            }[] | undefined;
            authentication?: string[] | undefined;
            assertionMethod?: string[] | undefined;
            keyAgreement?: string[] | undefined;
            capabilityInvocation?: string[] | undefined;
            capabilityDelegation?: string[] | undefined;
            service?: {
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            }[] | undefined;
        } | undefined;
        didDocumentMetadata?: {
            created?: string | undefined;
            updated?: string | undefined;
            deactivated?: boolean | undefined;
            versionId?: string | undefined;
        } | undefined;
    } & {
        didDocument?: ({
            "@context"?: string[] | undefined;
            id?: string | undefined;
            controller?: string[] | undefined;
            alsoKnownAs?: string[] | undefined;
            verificationMethod?: {
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyMultibase?: string | undefined;
                blockchainAccountId?: string | undefined;
            }[] | undefined;
            authentication?: string[] | undefined;
            assertionMethod?: string[] | undefined;
            keyAgreement?: string[] | undefined;
            capabilityInvocation?: string[] | undefined;
            capabilityDelegation?: string[] | undefined;
            service?: {
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            }[] | undefined;
        } & {
            "@context"?: (string[] & string[] & { [K in Exclude<keyof I["didDocument"]["@context"], keyof string[]>]: never; }) | undefined;
            id?: string | undefined;
            controller?: (string[] & string[] & { [K_1 in Exclude<keyof I["didDocument"]["controller"], keyof string[]>]: never; }) | undefined;
            alsoKnownAs?: (string[] & string[] & { [K_2 in Exclude<keyof I["didDocument"]["alsoKnownAs"], keyof string[]>]: never; }) | undefined;
            verificationMethod?: ({
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyMultibase?: string | undefined;
                blockchainAccountId?: string | undefined;
            }[] & ({
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyMultibase?: string | undefined;
                blockchainAccountId?: string | undefined;
            } & {
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyMultibase?: string | undefined;
                blockchainAccountId?: string | undefined;
            } & { [K_3 in Exclude<keyof I["didDocument"]["verificationMethod"][number], keyof import("./did").VerificationMethod>]: never; })[] & { [K_4 in Exclude<keyof I["didDocument"]["verificationMethod"], keyof {
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyMultibase?: string | undefined;
                blockchainAccountId?: string | undefined;
            }[]>]: never; }) | undefined;
            authentication?: (string[] & string[] & { [K_5 in Exclude<keyof I["didDocument"]["authentication"], keyof string[]>]: never; }) | undefined;
            assertionMethod?: (string[] & string[] & { [K_6 in Exclude<keyof I["didDocument"]["assertionMethod"], keyof string[]>]: never; }) | undefined;
            keyAgreement?: (string[] & string[] & { [K_7 in Exclude<keyof I["didDocument"]["keyAgreement"], keyof string[]>]: never; }) | undefined;
            capabilityInvocation?: (string[] & string[] & { [K_8 in Exclude<keyof I["didDocument"]["capabilityInvocation"], keyof string[]>]: never; }) | undefined;
            capabilityDelegation?: (string[] & string[] & { [K_9 in Exclude<keyof I["didDocument"]["capabilityDelegation"], keyof string[]>]: never; }) | undefined;
            service?: ({
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            }[] & ({
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            } & {
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            } & { [K_10 in Exclude<keyof I["didDocument"]["service"][number], keyof import("./did").Service>]: never; })[] & { [K_11 in Exclude<keyof I["didDocument"]["service"], keyof {
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_12 in Exclude<keyof I["didDocument"], keyof DidDocument>]: never; }) | undefined;
        didDocumentMetadata?: ({
            created?: string | undefined;
            updated?: string | undefined;
            deactivated?: boolean | undefined;
            versionId?: string | undefined;
        } & {
            created?: string | undefined;
            updated?: string | undefined;
            deactivated?: boolean | undefined;
            versionId?: string | undefined;
        } & { [K_13 in Exclude<keyof I["didDocumentMetadata"], keyof DidDocumentMetadata>]: never; }) | undefined;
    } & { [K_14 in Exclude<keyof I, keyof QueryDidDocumentResponse>]: never; }>(base?: I): QueryDidDocumentResponse;
    fromPartial<I_1 extends {
        didDocument?: {
            "@context"?: string[] | undefined;
            id?: string | undefined;
            controller?: string[] | undefined;
            alsoKnownAs?: string[] | undefined;
            verificationMethod?: {
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyMultibase?: string | undefined;
                blockchainAccountId?: string | undefined;
            }[] | undefined;
            authentication?: string[] | undefined;
            assertionMethod?: string[] | undefined;
            keyAgreement?: string[] | undefined;
            capabilityInvocation?: string[] | undefined;
            capabilityDelegation?: string[] | undefined;
            service?: {
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            }[] | undefined;
        } | undefined;
        didDocumentMetadata?: {
            created?: string | undefined;
            updated?: string | undefined;
            deactivated?: boolean | undefined;
            versionId?: string | undefined;
        } | undefined;
    } & {
        didDocument?: ({
            "@context"?: string[] | undefined;
            id?: string | undefined;
            controller?: string[] | undefined;
            alsoKnownAs?: string[] | undefined;
            verificationMethod?: {
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyMultibase?: string | undefined;
                blockchainAccountId?: string | undefined;
            }[] | undefined;
            authentication?: string[] | undefined;
            assertionMethod?: string[] | undefined;
            keyAgreement?: string[] | undefined;
            capabilityInvocation?: string[] | undefined;
            capabilityDelegation?: string[] | undefined;
            service?: {
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            }[] | undefined;
        } & {
            "@context"?: (string[] & string[] & { [K_15 in Exclude<keyof I_1["didDocument"]["@context"], keyof string[]>]: never; }) | undefined;
            id?: string | undefined;
            controller?: (string[] & string[] & { [K_16 in Exclude<keyof I_1["didDocument"]["controller"], keyof string[]>]: never; }) | undefined;
            alsoKnownAs?: (string[] & string[] & { [K_17 in Exclude<keyof I_1["didDocument"]["alsoKnownAs"], keyof string[]>]: never; }) | undefined;
            verificationMethod?: ({
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyMultibase?: string | undefined;
                blockchainAccountId?: string | undefined;
            }[] & ({
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyMultibase?: string | undefined;
                blockchainAccountId?: string | undefined;
            } & {
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyMultibase?: string | undefined;
                blockchainAccountId?: string | undefined;
            } & { [K_18 in Exclude<keyof I_1["didDocument"]["verificationMethod"][number], keyof import("./did").VerificationMethod>]: never; })[] & { [K_19 in Exclude<keyof I_1["didDocument"]["verificationMethod"], keyof {
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyMultibase?: string | undefined;
                blockchainAccountId?: string | undefined;
            }[]>]: never; }) | undefined;
            authentication?: (string[] & string[] & { [K_20 in Exclude<keyof I_1["didDocument"]["authentication"], keyof string[]>]: never; }) | undefined;
            assertionMethod?: (string[] & string[] & { [K_21 in Exclude<keyof I_1["didDocument"]["assertionMethod"], keyof string[]>]: never; }) | undefined;
            keyAgreement?: (string[] & string[] & { [K_22 in Exclude<keyof I_1["didDocument"]["keyAgreement"], keyof string[]>]: never; }) | undefined;
            capabilityInvocation?: (string[] & string[] & { [K_23 in Exclude<keyof I_1["didDocument"]["capabilityInvocation"], keyof string[]>]: never; }) | undefined;
            capabilityDelegation?: (string[] & string[] & { [K_24 in Exclude<keyof I_1["didDocument"]["capabilityDelegation"], keyof string[]>]: never; }) | undefined;
            service?: ({
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            }[] & ({
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            } & {
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            } & { [K_25 in Exclude<keyof I_1["didDocument"]["service"][number], keyof import("./did").Service>]: never; })[] & { [K_26 in Exclude<keyof I_1["didDocument"]["service"], keyof {
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_27 in Exclude<keyof I_1["didDocument"], keyof DidDocument>]: never; }) | undefined;
        didDocumentMetadata?: ({
            created?: string | undefined;
            updated?: string | undefined;
            deactivated?: boolean | undefined;
            versionId?: string | undefined;
        } & {
            created?: string | undefined;
            updated?: string | undefined;
            deactivated?: boolean | undefined;
            versionId?: string | undefined;
        } & { [K_28 in Exclude<keyof I_1["didDocumentMetadata"], keyof DidDocumentMetadata>]: never; }) | undefined;
    } & { [K_29 in Exclude<keyof I_1, keyof QueryDidDocumentResponse>]: never; }>(object: I_1): QueryDidDocumentResponse;
};
export declare const QueryDidDocumentsRequest: {
    encode(message: QueryDidDocumentsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDidDocumentsRequest;
    fromJSON(object: any): QueryDidDocumentsRequest;
    toJSON(message: QueryDidDocumentsRequest): unknown;
    create<I extends {
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & { [K in Exclude<keyof I["pagination"], keyof PageRequest>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "pagination">]: never; }>(base?: I): QueryDidDocumentsRequest;
    fromPartial<I_1 extends {
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & { [K_2 in Exclude<keyof I_1["pagination"], keyof PageRequest>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "pagination">]: never; }>(object: I_1): QueryDidDocumentsRequest;
};
export declare const QueryDidDocumentsResponse: {
    encode(message: QueryDidDocumentsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDidDocumentsResponse;
    fromJSON(object: any): QueryDidDocumentsResponse;
    toJSON(message: QueryDidDocumentsResponse): unknown;
    create<I extends {
        count?: number | undefined;
        didDocuments?: {
            didDocument?: {
                "@context"?: string[] | undefined;
                id?: string | undefined;
                controller?: string[] | undefined;
                alsoKnownAs?: string[] | undefined;
                verificationMethod?: {
                    id?: string | undefined;
                    type?: string | undefined;
                    controller?: string | undefined;
                    publicKeyMultibase?: string | undefined;
                    blockchainAccountId?: string | undefined;
                }[] | undefined;
                authentication?: string[] | undefined;
                assertionMethod?: string[] | undefined;
                keyAgreement?: string[] | undefined;
                capabilityInvocation?: string[] | undefined;
                capabilityDelegation?: string[] | undefined;
                service?: {
                    id?: string | undefined;
                    type?: string | undefined;
                    serviceEndpoint?: string | undefined;
                }[] | undefined;
            } | undefined;
            didDocumentMetadata?: {
                created?: string | undefined;
                updated?: string | undefined;
                deactivated?: boolean | undefined;
                versionId?: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        count?: number | undefined;
        didDocuments?: ({
            didDocument?: {
                "@context"?: string[] | undefined;
                id?: string | undefined;
                controller?: string[] | undefined;
                alsoKnownAs?: string[] | undefined;
                verificationMethod?: {
                    id?: string | undefined;
                    type?: string | undefined;
                    controller?: string | undefined;
                    publicKeyMultibase?: string | undefined;
                    blockchainAccountId?: string | undefined;
                }[] | undefined;
                authentication?: string[] | undefined;
                assertionMethod?: string[] | undefined;
                keyAgreement?: string[] | undefined;
                capabilityInvocation?: string[] | undefined;
                capabilityDelegation?: string[] | undefined;
                service?: {
                    id?: string | undefined;
                    type?: string | undefined;
                    serviceEndpoint?: string | undefined;
                }[] | undefined;
            } | undefined;
            didDocumentMetadata?: {
                created?: string | undefined;
                updated?: string | undefined;
                deactivated?: boolean | undefined;
                versionId?: string | undefined;
            } | undefined;
        }[] & ({
            didDocument?: {
                "@context"?: string[] | undefined;
                id?: string | undefined;
                controller?: string[] | undefined;
                alsoKnownAs?: string[] | undefined;
                verificationMethod?: {
                    id?: string | undefined;
                    type?: string | undefined;
                    controller?: string | undefined;
                    publicKeyMultibase?: string | undefined;
                    blockchainAccountId?: string | undefined;
                }[] | undefined;
                authentication?: string[] | undefined;
                assertionMethod?: string[] | undefined;
                keyAgreement?: string[] | undefined;
                capabilityInvocation?: string[] | undefined;
                capabilityDelegation?: string[] | undefined;
                service?: {
                    id?: string | undefined;
                    type?: string | undefined;
                    serviceEndpoint?: string | undefined;
                }[] | undefined;
            } | undefined;
            didDocumentMetadata?: {
                created?: string | undefined;
                updated?: string | undefined;
                deactivated?: boolean | undefined;
                versionId?: string | undefined;
            } | undefined;
        } & {
            didDocument?: ({
                "@context"?: string[] | undefined;
                id?: string | undefined;
                controller?: string[] | undefined;
                alsoKnownAs?: string[] | undefined;
                verificationMethod?: {
                    id?: string | undefined;
                    type?: string | undefined;
                    controller?: string | undefined;
                    publicKeyMultibase?: string | undefined;
                    blockchainAccountId?: string | undefined;
                }[] | undefined;
                authentication?: string[] | undefined;
                assertionMethod?: string[] | undefined;
                keyAgreement?: string[] | undefined;
                capabilityInvocation?: string[] | undefined;
                capabilityDelegation?: string[] | undefined;
                service?: {
                    id?: string | undefined;
                    type?: string | undefined;
                    serviceEndpoint?: string | undefined;
                }[] | undefined;
            } & {
                "@context"?: (string[] & string[] & { [K in Exclude<keyof I["didDocuments"][number]["didDocument"]["@context"], keyof string[]>]: never; }) | undefined;
                id?: string | undefined;
                controller?: (string[] & string[] & { [K_1 in Exclude<keyof I["didDocuments"][number]["didDocument"]["controller"], keyof string[]>]: never; }) | undefined;
                alsoKnownAs?: (string[] & string[] & { [K_2 in Exclude<keyof I["didDocuments"][number]["didDocument"]["alsoKnownAs"], keyof string[]>]: never; }) | undefined;
                verificationMethod?: ({
                    id?: string | undefined;
                    type?: string | undefined;
                    controller?: string | undefined;
                    publicKeyMultibase?: string | undefined;
                    blockchainAccountId?: string | undefined;
                }[] & ({
                    id?: string | undefined;
                    type?: string | undefined;
                    controller?: string | undefined;
                    publicKeyMultibase?: string | undefined;
                    blockchainAccountId?: string | undefined;
                } & {
                    id?: string | undefined;
                    type?: string | undefined;
                    controller?: string | undefined;
                    publicKeyMultibase?: string | undefined;
                    blockchainAccountId?: string | undefined;
                } & { [K_3 in Exclude<keyof I["didDocuments"][number]["didDocument"]["verificationMethod"][number], keyof import("./did").VerificationMethod>]: never; })[] & { [K_4 in Exclude<keyof I["didDocuments"][number]["didDocument"]["verificationMethod"], keyof {
                    id?: string | undefined;
                    type?: string | undefined;
                    controller?: string | undefined;
                    publicKeyMultibase?: string | undefined;
                    blockchainAccountId?: string | undefined;
                }[]>]: never; }) | undefined;
                authentication?: (string[] & string[] & { [K_5 in Exclude<keyof I["didDocuments"][number]["didDocument"]["authentication"], keyof string[]>]: never; }) | undefined;
                assertionMethod?: (string[] & string[] & { [K_6 in Exclude<keyof I["didDocuments"][number]["didDocument"]["assertionMethod"], keyof string[]>]: never; }) | undefined;
                keyAgreement?: (string[] & string[] & { [K_7 in Exclude<keyof I["didDocuments"][number]["didDocument"]["keyAgreement"], keyof string[]>]: never; }) | undefined;
                capabilityInvocation?: (string[] & string[] & { [K_8 in Exclude<keyof I["didDocuments"][number]["didDocument"]["capabilityInvocation"], keyof string[]>]: never; }) | undefined;
                capabilityDelegation?: (string[] & string[] & { [K_9 in Exclude<keyof I["didDocuments"][number]["didDocument"]["capabilityDelegation"], keyof string[]>]: never; }) | undefined;
                service?: ({
                    id?: string | undefined;
                    type?: string | undefined;
                    serviceEndpoint?: string | undefined;
                }[] & ({
                    id?: string | undefined;
                    type?: string | undefined;
                    serviceEndpoint?: string | undefined;
                } & {
                    id?: string | undefined;
                    type?: string | undefined;
                    serviceEndpoint?: string | undefined;
                } & { [K_10 in Exclude<keyof I["didDocuments"][number]["didDocument"]["service"][number], keyof import("./did").Service>]: never; })[] & { [K_11 in Exclude<keyof I["didDocuments"][number]["didDocument"]["service"], keyof {
                    id?: string | undefined;
                    type?: string | undefined;
                    serviceEndpoint?: string | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_12 in Exclude<keyof I["didDocuments"][number]["didDocument"], keyof DidDocument>]: never; }) | undefined;
            didDocumentMetadata?: ({
                created?: string | undefined;
                updated?: string | undefined;
                deactivated?: boolean | undefined;
                versionId?: string | undefined;
            } & {
                created?: string | undefined;
                updated?: string | undefined;
                deactivated?: boolean | undefined;
                versionId?: string | undefined;
            } & { [K_13 in Exclude<keyof I["didDocuments"][number]["didDocumentMetadata"], keyof DidDocumentMetadata>]: never; }) | undefined;
        } & { [K_14 in Exclude<keyof I["didDocuments"][number], keyof DidDocumentState>]: never; })[] & { [K_15 in Exclude<keyof I["didDocuments"], keyof {
            didDocument?: {
                "@context"?: string[] | undefined;
                id?: string | undefined;
                controller?: string[] | undefined;
                alsoKnownAs?: string[] | undefined;
                verificationMethod?: {
                    id?: string | undefined;
                    type?: string | undefined;
                    controller?: string | undefined;
                    publicKeyMultibase?: string | undefined;
                    blockchainAccountId?: string | undefined;
                }[] | undefined;
                authentication?: string[] | undefined;
                assertionMethod?: string[] | undefined;
                keyAgreement?: string[] | undefined;
                capabilityInvocation?: string[] | undefined;
                capabilityDelegation?: string[] | undefined;
                service?: {
                    id?: string | undefined;
                    type?: string | undefined;
                    serviceEndpoint?: string | undefined;
                }[] | undefined;
            } | undefined;
            didDocumentMetadata?: {
                created?: string | undefined;
                updated?: string | undefined;
                deactivated?: boolean | undefined;
                versionId?: string | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_16 in Exclude<keyof I, keyof QueryDidDocumentsResponse>]: never; }>(base?: I): QueryDidDocumentsResponse;
    fromPartial<I_1 extends {
        count?: number | undefined;
        didDocuments?: {
            didDocument?: {
                "@context"?: string[] | undefined;
                id?: string | undefined;
                controller?: string[] | undefined;
                alsoKnownAs?: string[] | undefined;
                verificationMethod?: {
                    id?: string | undefined;
                    type?: string | undefined;
                    controller?: string | undefined;
                    publicKeyMultibase?: string | undefined;
                    blockchainAccountId?: string | undefined;
                }[] | undefined;
                authentication?: string[] | undefined;
                assertionMethod?: string[] | undefined;
                keyAgreement?: string[] | undefined;
                capabilityInvocation?: string[] | undefined;
                capabilityDelegation?: string[] | undefined;
                service?: {
                    id?: string | undefined;
                    type?: string | undefined;
                    serviceEndpoint?: string | undefined;
                }[] | undefined;
            } | undefined;
            didDocumentMetadata?: {
                created?: string | undefined;
                updated?: string | undefined;
                deactivated?: boolean | undefined;
                versionId?: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        count?: number | undefined;
        didDocuments?: ({
            didDocument?: {
                "@context"?: string[] | undefined;
                id?: string | undefined;
                controller?: string[] | undefined;
                alsoKnownAs?: string[] | undefined;
                verificationMethod?: {
                    id?: string | undefined;
                    type?: string | undefined;
                    controller?: string | undefined;
                    publicKeyMultibase?: string | undefined;
                    blockchainAccountId?: string | undefined;
                }[] | undefined;
                authentication?: string[] | undefined;
                assertionMethod?: string[] | undefined;
                keyAgreement?: string[] | undefined;
                capabilityInvocation?: string[] | undefined;
                capabilityDelegation?: string[] | undefined;
                service?: {
                    id?: string | undefined;
                    type?: string | undefined;
                    serviceEndpoint?: string | undefined;
                }[] | undefined;
            } | undefined;
            didDocumentMetadata?: {
                created?: string | undefined;
                updated?: string | undefined;
                deactivated?: boolean | undefined;
                versionId?: string | undefined;
            } | undefined;
        }[] & ({
            didDocument?: {
                "@context"?: string[] | undefined;
                id?: string | undefined;
                controller?: string[] | undefined;
                alsoKnownAs?: string[] | undefined;
                verificationMethod?: {
                    id?: string | undefined;
                    type?: string | undefined;
                    controller?: string | undefined;
                    publicKeyMultibase?: string | undefined;
                    blockchainAccountId?: string | undefined;
                }[] | undefined;
                authentication?: string[] | undefined;
                assertionMethod?: string[] | undefined;
                keyAgreement?: string[] | undefined;
                capabilityInvocation?: string[] | undefined;
                capabilityDelegation?: string[] | undefined;
                service?: {
                    id?: string | undefined;
                    type?: string | undefined;
                    serviceEndpoint?: string | undefined;
                }[] | undefined;
            } | undefined;
            didDocumentMetadata?: {
                created?: string | undefined;
                updated?: string | undefined;
                deactivated?: boolean | undefined;
                versionId?: string | undefined;
            } | undefined;
        } & {
            didDocument?: ({
                "@context"?: string[] | undefined;
                id?: string | undefined;
                controller?: string[] | undefined;
                alsoKnownAs?: string[] | undefined;
                verificationMethod?: {
                    id?: string | undefined;
                    type?: string | undefined;
                    controller?: string | undefined;
                    publicKeyMultibase?: string | undefined;
                    blockchainAccountId?: string | undefined;
                }[] | undefined;
                authentication?: string[] | undefined;
                assertionMethod?: string[] | undefined;
                keyAgreement?: string[] | undefined;
                capabilityInvocation?: string[] | undefined;
                capabilityDelegation?: string[] | undefined;
                service?: {
                    id?: string | undefined;
                    type?: string | undefined;
                    serviceEndpoint?: string | undefined;
                }[] | undefined;
            } & {
                "@context"?: (string[] & string[] & { [K_17 in Exclude<keyof I_1["didDocuments"][number]["didDocument"]["@context"], keyof string[]>]: never; }) | undefined;
                id?: string | undefined;
                controller?: (string[] & string[] & { [K_18 in Exclude<keyof I_1["didDocuments"][number]["didDocument"]["controller"], keyof string[]>]: never; }) | undefined;
                alsoKnownAs?: (string[] & string[] & { [K_19 in Exclude<keyof I_1["didDocuments"][number]["didDocument"]["alsoKnownAs"], keyof string[]>]: never; }) | undefined;
                verificationMethod?: ({
                    id?: string | undefined;
                    type?: string | undefined;
                    controller?: string | undefined;
                    publicKeyMultibase?: string | undefined;
                    blockchainAccountId?: string | undefined;
                }[] & ({
                    id?: string | undefined;
                    type?: string | undefined;
                    controller?: string | undefined;
                    publicKeyMultibase?: string | undefined;
                    blockchainAccountId?: string | undefined;
                } & {
                    id?: string | undefined;
                    type?: string | undefined;
                    controller?: string | undefined;
                    publicKeyMultibase?: string | undefined;
                    blockchainAccountId?: string | undefined;
                } & { [K_20 in Exclude<keyof I_1["didDocuments"][number]["didDocument"]["verificationMethod"][number], keyof import("./did").VerificationMethod>]: never; })[] & { [K_21 in Exclude<keyof I_1["didDocuments"][number]["didDocument"]["verificationMethod"], keyof {
                    id?: string | undefined;
                    type?: string | undefined;
                    controller?: string | undefined;
                    publicKeyMultibase?: string | undefined;
                    blockchainAccountId?: string | undefined;
                }[]>]: never; }) | undefined;
                authentication?: (string[] & string[] & { [K_22 in Exclude<keyof I_1["didDocuments"][number]["didDocument"]["authentication"], keyof string[]>]: never; }) | undefined;
                assertionMethod?: (string[] & string[] & { [K_23 in Exclude<keyof I_1["didDocuments"][number]["didDocument"]["assertionMethod"], keyof string[]>]: never; }) | undefined;
                keyAgreement?: (string[] & string[] & { [K_24 in Exclude<keyof I_1["didDocuments"][number]["didDocument"]["keyAgreement"], keyof string[]>]: never; }) | undefined;
                capabilityInvocation?: (string[] & string[] & { [K_25 in Exclude<keyof I_1["didDocuments"][number]["didDocument"]["capabilityInvocation"], keyof string[]>]: never; }) | undefined;
                capabilityDelegation?: (string[] & string[] & { [K_26 in Exclude<keyof I_1["didDocuments"][number]["didDocument"]["capabilityDelegation"], keyof string[]>]: never; }) | undefined;
                service?: ({
                    id?: string | undefined;
                    type?: string | undefined;
                    serviceEndpoint?: string | undefined;
                }[] & ({
                    id?: string | undefined;
                    type?: string | undefined;
                    serviceEndpoint?: string | undefined;
                } & {
                    id?: string | undefined;
                    type?: string | undefined;
                    serviceEndpoint?: string | undefined;
                } & { [K_27 in Exclude<keyof I_1["didDocuments"][number]["didDocument"]["service"][number], keyof import("./did").Service>]: never; })[] & { [K_28 in Exclude<keyof I_1["didDocuments"][number]["didDocument"]["service"], keyof {
                    id?: string | undefined;
                    type?: string | undefined;
                    serviceEndpoint?: string | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_29 in Exclude<keyof I_1["didDocuments"][number]["didDocument"], keyof DidDocument>]: never; }) | undefined;
            didDocumentMetadata?: ({
                created?: string | undefined;
                updated?: string | undefined;
                deactivated?: boolean | undefined;
                versionId?: string | undefined;
            } & {
                created?: string | undefined;
                updated?: string | undefined;
                deactivated?: boolean | undefined;
                versionId?: string | undefined;
            } & { [K_30 in Exclude<keyof I_1["didDocuments"][number]["didDocumentMetadata"], keyof DidDocumentMetadata>]: never; }) | undefined;
        } & { [K_31 in Exclude<keyof I_1["didDocuments"][number], keyof DidDocumentState>]: never; })[] & { [K_32 in Exclude<keyof I_1["didDocuments"], keyof {
            didDocument?: {
                "@context"?: string[] | undefined;
                id?: string | undefined;
                controller?: string[] | undefined;
                alsoKnownAs?: string[] | undefined;
                verificationMethod?: {
                    id?: string | undefined;
                    type?: string | undefined;
                    controller?: string | undefined;
                    publicKeyMultibase?: string | undefined;
                    blockchainAccountId?: string | undefined;
                }[] | undefined;
                authentication?: string[] | undefined;
                assertionMethod?: string[] | undefined;
                keyAgreement?: string[] | undefined;
                capabilityInvocation?: string[] | undefined;
                capabilityDelegation?: string[] | undefined;
                service?: {
                    id?: string | undefined;
                    type?: string | undefined;
                    serviceEndpoint?: string | undefined;
                }[] | undefined;
            } | undefined;
            didDocumentMetadata?: {
                created?: string | undefined;
                updated?: string | undefined;
                deactivated?: boolean | undefined;
                versionId?: string | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_33 in Exclude<keyof I_1, keyof QueryDidDocumentsResponse>]: never; }>(object: I_1): QueryDidDocumentsResponse;
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
export declare const QueryServiceName = "hypersign.ssi.v1.Query";
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    CredentialSchemaByID(request: QueryCredentialSchemaRequest): Promise<QueryCredentialSchemaResponse>;
    CredentialSchemas(request: QueryCredentialSchemasRequest): Promise<QueryCredentialSchemasResponse>;
    DidDocumentByID(request: QueryDidDocumentRequest): Promise<QueryDidDocumentResponse>;
    DidDocuments(request: QueryDidDocumentsRequest): Promise<QueryDidDocumentsResponse>;
    CredentialStatusByID(request: QueryCredentialStatusRequest): Promise<QueryCredentialStatusResponse>;
    CredentialStatuses(request: QueryCredentialStatusesRequest): Promise<QueryCredentialStatusesResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
//# sourceMappingURL=query.d.ts.map
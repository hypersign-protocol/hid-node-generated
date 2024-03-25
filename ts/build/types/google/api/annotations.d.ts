import { HttpRule } from "./http";
export declare const protobufPackage = "google.api";
export declare const http: Extension<HttpRule>;
export interface Extension<T> {
    number: number;
    tag: number;
    singularTag?: number;
    encode?: (message: T) => Uint8Array[];
    decode?: (tag: number, input: Uint8Array[]) => T;
    repeated: boolean;
    packed: boolean;
}
//# sourceMappingURL=annotations.d.ts.map
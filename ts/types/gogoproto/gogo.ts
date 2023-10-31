/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "gogoproto";

export const goprotoEnumPrefix: Extension<boolean> = {
  number: 62001,
  tag: 496008,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const goprotoEnumStringer: Extension<boolean> = {
  number: 62021,
  tag: 496168,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const enumStringer: Extension<boolean> = {
  number: 62022,
  tag: 496176,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const enumCustomname: Extension<string> = {
  number: 62023,
  tag: 496186,
  repeated: false,
  packed: false,
  encode: (value: string): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value !== undefined && value !== "") {
      const writer = _m0.Writer.create();
      writer.string(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): string => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.string();
  },
};

export const enumdecl: Extension<boolean> = {
  number: 62024,
  tag: 496192,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const enumvalueCustomname: Extension<string> = {
  number: 66001,
  tag: 528010,
  repeated: false,
  packed: false,
  encode: (value: string): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value !== undefined && value !== "") {
      const writer = _m0.Writer.create();
      writer.string(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): string => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.string();
  },
};

export const goprotoGettersAll: Extension<boolean> = {
  number: 63001,
  tag: 504008,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const goprotoEnumPrefixAll: Extension<boolean> = {
  number: 63002,
  tag: 504016,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const goprotoStringerAll: Extension<boolean> = {
  number: 63003,
  tag: 504024,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const verboseEqualAll: Extension<boolean> = {
  number: 63004,
  tag: 504032,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const faceAll: Extension<boolean> = {
  number: 63005,
  tag: 504040,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const gostringAll: Extension<boolean> = {
  number: 63006,
  tag: 504048,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const populateAll: Extension<boolean> = {
  number: 63007,
  tag: 504056,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const stringerAll: Extension<boolean> = {
  number: 63008,
  tag: 504064,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const onlyoneAll: Extension<boolean> = {
  number: 63009,
  tag: 504072,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const equalAll: Extension<boolean> = {
  number: 63013,
  tag: 504104,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const descriptionAll: Extension<boolean> = {
  number: 63014,
  tag: 504112,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const testgenAll: Extension<boolean> = {
  number: 63015,
  tag: 504120,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const benchgenAll: Extension<boolean> = {
  number: 63016,
  tag: 504128,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const marshalerAll: Extension<boolean> = {
  number: 63017,
  tag: 504136,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const unmarshalerAll: Extension<boolean> = {
  number: 63018,
  tag: 504144,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const stableMarshalerAll: Extension<boolean> = {
  number: 63019,
  tag: 504152,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const sizerAll: Extension<boolean> = {
  number: 63020,
  tag: 504160,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const goprotoEnumStringerAll: Extension<boolean> = {
  number: 63021,
  tag: 504168,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const enumStringerAll: Extension<boolean> = {
  number: 63022,
  tag: 504176,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const unsafeMarshalerAll: Extension<boolean> = {
  number: 63023,
  tag: 504184,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const unsafeUnmarshalerAll: Extension<boolean> = {
  number: 63024,
  tag: 504192,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const goprotoExtensionsMapAll: Extension<boolean> = {
  number: 63025,
  tag: 504200,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const goprotoUnrecognizedAll: Extension<boolean> = {
  number: 63026,
  tag: 504208,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const gogoprotoImport: Extension<boolean> = {
  number: 63027,
  tag: 504216,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const protosizerAll: Extension<boolean> = {
  number: 63028,
  tag: 504224,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const compareAll: Extension<boolean> = {
  number: 63029,
  tag: 504232,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const typedeclAll: Extension<boolean> = {
  number: 63030,
  tag: 504240,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const enumdeclAll: Extension<boolean> = {
  number: 63031,
  tag: 504248,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const goprotoRegistration: Extension<boolean> = {
  number: 63032,
  tag: 504256,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const messagenameAll: Extension<boolean> = {
  number: 63033,
  tag: 504264,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const goprotoSizecacheAll: Extension<boolean> = {
  number: 63034,
  tag: 504272,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const goprotoUnkeyedAll: Extension<boolean> = {
  number: 63035,
  tag: 504280,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const goprotoGetters: Extension<boolean> = {
  number: 64001,
  tag: 512008,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const goprotoStringer: Extension<boolean> = {
  number: 64003,
  tag: 512024,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const verboseEqual: Extension<boolean> = {
  number: 64004,
  tag: 512032,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const face: Extension<boolean> = {
  number: 64005,
  tag: 512040,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const gostring: Extension<boolean> = {
  number: 64006,
  tag: 512048,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const populate: Extension<boolean> = {
  number: 64007,
  tag: 512056,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const stringer: Extension<boolean> = {
  number: 67008,
  tag: 536064,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const onlyone: Extension<boolean> = {
  number: 64009,
  tag: 512072,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const equal: Extension<boolean> = {
  number: 64013,
  tag: 512104,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const description: Extension<boolean> = {
  number: 64014,
  tag: 512112,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const testgen: Extension<boolean> = {
  number: 64015,
  tag: 512120,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const benchgen: Extension<boolean> = {
  number: 64016,
  tag: 512128,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const marshaler: Extension<boolean> = {
  number: 64017,
  tag: 512136,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const unmarshaler: Extension<boolean> = {
  number: 64018,
  tag: 512144,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const stableMarshaler: Extension<boolean> = {
  number: 64019,
  tag: 512152,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const sizer: Extension<boolean> = {
  number: 64020,
  tag: 512160,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const unsafeMarshaler: Extension<boolean> = {
  number: 64023,
  tag: 512184,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const unsafeUnmarshaler: Extension<boolean> = {
  number: 64024,
  tag: 512192,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const goprotoExtensionsMap: Extension<boolean> = {
  number: 64025,
  tag: 512200,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const goprotoUnrecognized: Extension<boolean> = {
  number: 64026,
  tag: 512208,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const protosizer: Extension<boolean> = {
  number: 64028,
  tag: 512224,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const compare: Extension<boolean> = {
  number: 64029,
  tag: 512232,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const typedecl: Extension<boolean> = {
  number: 64030,
  tag: 512240,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const messagename: Extension<boolean> = {
  number: 64033,
  tag: 512264,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const goprotoSizecache: Extension<boolean> = {
  number: 64034,
  tag: 512272,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const goprotoUnkeyed: Extension<boolean> = {
  number: 64035,
  tag: 512280,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const nullable: Extension<boolean> = {
  number: 65001,
  tag: 520008,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const embed: Extension<boolean> = {
  number: 65002,
  tag: 520016,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const customtype: Extension<string> = {
  number: 65003,
  tag: 520026,
  repeated: false,
  packed: false,
  encode: (value: string): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value !== undefined && value !== "") {
      const writer = _m0.Writer.create();
      writer.string(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): string => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.string();
  },
};

export const customname: Extension<string> = {
  number: 65004,
  tag: 520034,
  repeated: false,
  packed: false,
  encode: (value: string): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value !== undefined && value !== "") {
      const writer = _m0.Writer.create();
      writer.string(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): string => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.string();
  },
};

export const jsontag: Extension<string> = {
  number: 65005,
  tag: 520042,
  repeated: false,
  packed: false,
  encode: (value: string): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value !== undefined && value !== "") {
      const writer = _m0.Writer.create();
      writer.string(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): string => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.string();
  },
};

export const moretags: Extension<string> = {
  number: 65006,
  tag: 520050,
  repeated: false,
  packed: false,
  encode: (value: string): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value !== undefined && value !== "") {
      const writer = _m0.Writer.create();
      writer.string(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): string => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.string();
  },
};

export const casttype: Extension<string> = {
  number: 65007,
  tag: 520058,
  repeated: false,
  packed: false,
  encode: (value: string): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value !== undefined && value !== "") {
      const writer = _m0.Writer.create();
      writer.string(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): string => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.string();
  },
};

export const castkey: Extension<string> = {
  number: 65008,
  tag: 520066,
  repeated: false,
  packed: false,
  encode: (value: string): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value !== undefined && value !== "") {
      const writer = _m0.Writer.create();
      writer.string(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): string => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.string();
  },
};

export const castvalue: Extension<string> = {
  number: 65009,
  tag: 520074,
  repeated: false,
  packed: false,
  encode: (value: string): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value !== undefined && value !== "") {
      const writer = _m0.Writer.create();
      writer.string(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): string => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.string();
  },
};

export const stdtime: Extension<boolean> = {
  number: 65010,
  tag: 520080,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const stdduration: Extension<boolean> = {
  number: 65011,
  tag: 520088,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const wktpointer: Extension<boolean> = {
  number: 65012,
  tag: 520096,
  repeated: false,
  packed: false,
  encode: (value: boolean): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value === true) {
      const writer = _m0.Writer.create();
      writer.bool(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): boolean => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.bool();
  },
};

export const castrepeated: Extension<string> = {
  number: 65013,
  tag: 520106,
  repeated: false,
  packed: false,
  encode: (value: string): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value !== undefined && value !== "") {
      const writer = _m0.Writer.create();
      writer.string(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): string => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.string();
  },
};

export interface Extension<T> {
  number: number;
  tag: number;
  singularTag?: number;
  encode?: (message: T) => Uint8Array[];
  decode?: (tag: number, input: Uint8Array[]) => T;
  repeated: boolean;
  packed: boolean;
}

function fail(message?: string): never {
  throw new Error(message ?? "Failed");
}

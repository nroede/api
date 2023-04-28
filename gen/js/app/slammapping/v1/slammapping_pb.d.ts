// package: viam.app.slammapping.v1
// file: app/slammapping/v1/slammapping.proto

import * as jspb from "google-protobuf";

export class StartMappingSessionRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartMappingSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartMappingSessionRequest): StartMappingSessionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartMappingSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartMappingSessionRequest;
  static deserializeBinaryFromReader(message: StartMappingSessionRequest, reader: jspb.BinaryReader): StartMappingSessionRequest;
}

export namespace StartMappingSessionRequest {
  export type AsObject = {
    id: string,
  }
}

export class StartMappingSessionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartMappingSessionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StartMappingSessionResponse): StartMappingSessionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartMappingSessionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartMappingSessionResponse;
  static deserializeBinaryFromReader(message: StartMappingSessionResponse, reader: jspb.BinaryReader): StartMappingSessionResponse;
}

export namespace StartMappingSessionResponse {
  export type AsObject = {
  }
}


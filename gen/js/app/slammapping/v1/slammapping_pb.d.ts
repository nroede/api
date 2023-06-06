// package: viam.app.slammapping.v1
// file: app/slammapping/v1/slammapping.proto

import * as jspb from "google-protobuf";
import * as common_v1_common_pb from "../../../common/v1/common_pb";

export class StartMappingSessionRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getOptimizeEveryNNodes(): number;
  setOptimizeEveryNNodes(value: number): void;

  getNumRangeData(): number;
  setNumRangeData(value: number): void;

  getMissingDataRayLength(): number;
  setMissingDataRayLength(value: number): void;

  getMaxRange(): number;
  setMaxRange(value: number): void;

  getMinRange(): number;
  setMinRange(value: number): void;

  getMaxSubmapsToKeep(): number;
  setMaxSubmapsToKeep(value: number): void;

  getFreshSubmapsCount(): number;
  setFreshSubmapsCount(value: number): void;

  getMinCoveredArea(): number;
  setMinCoveredArea(value: number): void;

  getMinAddedSubmapsCount(): number;
  setMinAddedSubmapsCount(value: number): void;

  getOccupiedSpaceWeight(): number;
  setOccupiedSpaceWeight(value: number): void;

  getTranslationWeight(): number;
  setTranslationWeight(value: number): void;

  getRotationWeight(): number;
  setRotationWeight(value: number): void;

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
    optimizeEveryNNodes: number,
    numRangeData: number,
    missingDataRayLength: number,
    maxRange: number,
    minRange: number,
    maxSubmapsToKeep: number,
    freshSubmapsCount: number,
    minCoveredArea: number,
    minAddedSubmapsCount: number,
    occupiedSpaceWeight: number,
    translationWeight: number,
    rotationWeight: number,
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

export class GetMappingSessionRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMappingSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMappingSessionRequest): GetMappingSessionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMappingSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMappingSessionRequest;
  static deserializeBinaryFromReader(message: GetMappingSessionRequest, reader: jspb.BinaryReader): GetMappingSessionRequest;
}

export namespace GetMappingSessionRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetMappingSessionResponse extends jspb.Message {
  getPointCloud(): Uint8Array | string;
  getPointCloud_asU8(): Uint8Array;
  getPointCloud_asB64(): string;
  setPointCloud(value: Uint8Array | string): void;

  hasPose(): boolean;
  clearPose(): void;
  getPose(): common_v1_common_pb.Pose | undefined;
  setPose(value?: common_v1_common_pb.Pose): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMappingSessionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMappingSessionResponse): GetMappingSessionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMappingSessionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMappingSessionResponse;
  static deserializeBinaryFromReader(message: GetMappingSessionResponse, reader: jspb.BinaryReader): GetMappingSessionResponse;
}

export namespace GetMappingSessionResponse {
  export type AsObject = {
    pointCloud: Uint8Array | string,
    pose?: common_v1_common_pb.Pose.AsObject,
  }
}


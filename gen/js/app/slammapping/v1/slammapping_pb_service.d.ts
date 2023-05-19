// package: viam.app.slammapping.v1
// file: app/slammapping/v1/slammapping.proto

import * as app_slammapping_v1_slammapping_pb from "../../../app/slammapping/v1/slammapping_pb";
import {grpc} from "@improbable-eng/grpc-web";

type SLAMMappingServiceStartMappingSession = {
  readonly methodName: string;
  readonly service: typeof SLAMMappingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_slammapping_v1_slammapping_pb.StartMappingSessionRequest;
  readonly responseType: typeof app_slammapping_v1_slammapping_pb.StartMappingSessionResponse;
};

type SLAMMappingServiceGetMappingSession = {
  readonly methodName: string;
  readonly service: typeof SLAMMappingService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof app_slammapping_v1_slammapping_pb.GetMappingSessionRequest;
  readonly responseType: typeof app_slammapping_v1_slammapping_pb.GetMappingSessionResponse;
};

export class SLAMMappingService {
  static readonly serviceName: string;
  static readonly StartMappingSession: SLAMMappingServiceStartMappingSession;
  static readonly GetMappingSession: SLAMMappingServiceGetMappingSession;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class SLAMMappingServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  startMappingSession(
    requestMessage: app_slammapping_v1_slammapping_pb.StartMappingSessionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_slammapping_v1_slammapping_pb.StartMappingSessionResponse|null) => void
  ): UnaryResponse;
  startMappingSession(
    requestMessage: app_slammapping_v1_slammapping_pb.StartMappingSessionRequest,
    callback: (error: ServiceError|null, responseMessage: app_slammapping_v1_slammapping_pb.StartMappingSessionResponse|null) => void
  ): UnaryResponse;
  getMappingSession(requestMessage: app_slammapping_v1_slammapping_pb.GetMappingSessionRequest, metadata?: grpc.Metadata): ResponseStream<app_slammapping_v1_slammapping_pb.GetMappingSessionResponse>;
}


// package: viam.app.slammapping.v1
// file: app/slammapping/v1/slammapping.proto

var app_slammapping_v1_slammapping_pb = require("../../../app/slammapping/v1/slammapping_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var SLAMMappingService = (function () {
  function SLAMMappingService() {}
  SLAMMappingService.serviceName = "viam.app.slammapping.v1.SLAMMappingService";
  return SLAMMappingService;
}());

SLAMMappingService.StartMappingSession = {
  methodName: "StartMappingSession",
  service: SLAMMappingService,
  requestStream: false,
  responseStream: false,
  requestType: app_slammapping_v1_slammapping_pb.StartMappingSessionRequest,
  responseType: app_slammapping_v1_slammapping_pb.StartMappingSessionResponse
};

exports.SLAMMappingService = SLAMMappingService;

function SLAMMappingServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

SLAMMappingServiceClient.prototype.startMappingSession = function startMappingSession(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SLAMMappingService.StartMappingSession, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.SLAMMappingServiceClient = SLAMMappingServiceClient;


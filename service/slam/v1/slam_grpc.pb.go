// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             (unknown)
// source: service/slam/v1/slam.proto

package v1

import (
	context "context"
	v1 "go.viam.com/api/common/v1"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// SLAMServiceClient is the client API for SLAMService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type SLAMServiceClient interface {
	// GetPosition returns the current estimated position of the robot with
	// respect to a returned component reference.
	GetPosition(ctx context.Context, in *GetPositionRequest, opts ...grpc.CallOption) (*GetPositionResponse, error)
	// GetPointCloudMap returns the latest pointcloud map available where XY is the ground
	// plane and positive Z is up, following the Right Hand Rule.
	GetPointCloudMap(ctx context.Context, in *GetPointCloudMapRequest, opts ...grpc.CallOption) (SLAMService_GetPointCloudMapClient, error)
	// GetInternalState returns the internal map as defined by the specified slam
	// algorithm required to continue mapping/localizing.
	// This endpoint is not intended for end users.
	GetInternalState(ctx context.Context, in *GetInternalStateRequest, opts ...grpc.CallOption) (SLAMService_GetInternalStateClient, error)
	// DoCommand sends/receives arbitrary commands.
	DoCommand(ctx context.Context, in *v1.DoCommandRequest, opts ...grpc.CallOption) (*v1.DoCommandResponse, error)
}

type sLAMServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewSLAMServiceClient(cc grpc.ClientConnInterface) SLAMServiceClient {
	return &sLAMServiceClient{cc}
}

func (c *sLAMServiceClient) GetPosition(ctx context.Context, in *GetPositionRequest, opts ...grpc.CallOption) (*GetPositionResponse, error) {
	out := new(GetPositionResponse)
	err := c.cc.Invoke(ctx, "/viam.service.slam.v1.SLAMService/GetPosition", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *sLAMServiceClient) GetPointCloudMap(ctx context.Context, in *GetPointCloudMapRequest, opts ...grpc.CallOption) (SLAMService_GetPointCloudMapClient, error) {
	stream, err := c.cc.NewStream(ctx, &SLAMService_ServiceDesc.Streams[0], "/viam.service.slam.v1.SLAMService/GetPointCloudMap", opts...)
	if err != nil {
		return nil, err
	}
	x := &sLAMServiceGetPointCloudMapClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type SLAMService_GetPointCloudMapClient interface {
	Recv() (*GetPointCloudMapResponse, error)
	grpc.ClientStream
}

type sLAMServiceGetPointCloudMapClient struct {
	grpc.ClientStream
}

func (x *sLAMServiceGetPointCloudMapClient) Recv() (*GetPointCloudMapResponse, error) {
	m := new(GetPointCloudMapResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *sLAMServiceClient) GetInternalState(ctx context.Context, in *GetInternalStateRequest, opts ...grpc.CallOption) (SLAMService_GetInternalStateClient, error) {
	stream, err := c.cc.NewStream(ctx, &SLAMService_ServiceDesc.Streams[1], "/viam.service.slam.v1.SLAMService/GetInternalState", opts...)
	if err != nil {
		return nil, err
	}
	x := &sLAMServiceGetInternalStateClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type SLAMService_GetInternalStateClient interface {
	Recv() (*GetInternalStateResponse, error)
	grpc.ClientStream
}

type sLAMServiceGetInternalStateClient struct {
	grpc.ClientStream
}

func (x *sLAMServiceGetInternalStateClient) Recv() (*GetInternalStateResponse, error) {
	m := new(GetInternalStateResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *sLAMServiceClient) DoCommand(ctx context.Context, in *v1.DoCommandRequest, opts ...grpc.CallOption) (*v1.DoCommandResponse, error) {
	out := new(v1.DoCommandResponse)
	err := c.cc.Invoke(ctx, "/viam.service.slam.v1.SLAMService/DoCommand", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// SLAMServiceServer is the server API for SLAMService service.
// All implementations must embed UnimplementedSLAMServiceServer
// for forward compatibility
type SLAMServiceServer interface {
	// GetPosition returns the current estimated position of the robot with
	// respect to a returned component reference.
	GetPosition(context.Context, *GetPositionRequest) (*GetPositionResponse, error)
	// GetPointCloudMap returns the latest pointcloud map available where XY is the ground
	// plane and positive Z is up, following the Right Hand Rule.
	GetPointCloudMap(*GetPointCloudMapRequest, SLAMService_GetPointCloudMapServer) error
	// GetInternalState returns the internal map as defined by the specified slam
	// algorithm required to continue mapping/localizing.
	// This endpoint is not intended for end users.
	GetInternalState(*GetInternalStateRequest, SLAMService_GetInternalStateServer) error
	// DoCommand sends/receives arbitrary commands.
	DoCommand(context.Context, *v1.DoCommandRequest) (*v1.DoCommandResponse, error)
	mustEmbedUnimplementedSLAMServiceServer()
}

// UnimplementedSLAMServiceServer must be embedded to have forward compatible implementations.
type UnimplementedSLAMServiceServer struct {
}

func (UnimplementedSLAMServiceServer) GetPosition(context.Context, *GetPositionRequest) (*GetPositionResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetPosition not implemented")
}
func (UnimplementedSLAMServiceServer) GetPointCloudMap(*GetPointCloudMapRequest, SLAMService_GetPointCloudMapServer) error {
	return status.Errorf(codes.Unimplemented, "method GetPointCloudMap not implemented")
}
func (UnimplementedSLAMServiceServer) GetInternalState(*GetInternalStateRequest, SLAMService_GetInternalStateServer) error {
	return status.Errorf(codes.Unimplemented, "method GetInternalState not implemented")
}
func (UnimplementedSLAMServiceServer) DoCommand(context.Context, *v1.DoCommandRequest) (*v1.DoCommandResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DoCommand not implemented")
}
func (UnimplementedSLAMServiceServer) mustEmbedUnimplementedSLAMServiceServer() {}

// UnsafeSLAMServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to SLAMServiceServer will
// result in compilation errors.
type UnsafeSLAMServiceServer interface {
	mustEmbedUnimplementedSLAMServiceServer()
}

func RegisterSLAMServiceServer(s grpc.ServiceRegistrar, srv SLAMServiceServer) {
	s.RegisterService(&SLAMService_ServiceDesc, srv)
}

func _SLAMService_GetPosition_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetPositionRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SLAMServiceServer).GetPosition(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.service.slam.v1.SLAMService/GetPosition",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SLAMServiceServer).GetPosition(ctx, req.(*GetPositionRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _SLAMService_GetPointCloudMap_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(GetPointCloudMapRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(SLAMServiceServer).GetPointCloudMap(m, &sLAMServiceGetPointCloudMapServer{stream})
}

type SLAMService_GetPointCloudMapServer interface {
	Send(*GetPointCloudMapResponse) error
	grpc.ServerStream
}

type sLAMServiceGetPointCloudMapServer struct {
	grpc.ServerStream
}

func (x *sLAMServiceGetPointCloudMapServer) Send(m *GetPointCloudMapResponse) error {
	return x.ServerStream.SendMsg(m)
}

func _SLAMService_GetInternalState_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(GetInternalStateRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(SLAMServiceServer).GetInternalState(m, &sLAMServiceGetInternalStateServer{stream})
}

type SLAMService_GetInternalStateServer interface {
	Send(*GetInternalStateResponse) error
	grpc.ServerStream
}

type sLAMServiceGetInternalStateServer struct {
	grpc.ServerStream
}

func (x *sLAMServiceGetInternalStateServer) Send(m *GetInternalStateResponse) error {
	return x.ServerStream.SendMsg(m)
}

func _SLAMService_DoCommand_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(v1.DoCommandRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SLAMServiceServer).DoCommand(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.service.slam.v1.SLAMService/DoCommand",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SLAMServiceServer).DoCommand(ctx, req.(*v1.DoCommandRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// SLAMService_ServiceDesc is the grpc.ServiceDesc for SLAMService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var SLAMService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "viam.service.slam.v1.SLAMService",
	HandlerType: (*SLAMServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetPosition",
			Handler:    _SLAMService_GetPosition_Handler,
		},
		{
			MethodName: "DoCommand",
			Handler:    _SLAMService_DoCommand_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "GetPointCloudMap",
			Handler:       _SLAMService_GetPointCloudMap_Handler,
			ServerStreams: true,
		},
		{
			StreamName:    "GetInternalState",
			Handler:       _SLAMService_GetInternalState_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "service/slam/v1/slam.proto",
}

/**
 * CreateSession返回参数结构体
 */
export interface CreateSessionResponse {
    /**
     * 服务端session信息，返回给SDK
     */
    ServerSession?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * StopPublishStream请求参数结构体
 */
export interface StopPublishStreamRequest {
    /**
     * 唯一用户身份标识，由业务方自定义，平台不予理解。（可根据业务需要决定使用用户的唯一身份标识或是使用时间戳随机生成；在用户重连时应保持UserId不变）
     */
    UserId: string;
}
/**
 * StopPublishStream返回参数结构体
 */
export interface StopPublishStreamResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DestroySession返回参数结构体
 */
export interface DestroySessionResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * StartPublishStream返回参数结构体
 */
export interface StartPublishStreamResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ApplyConcurrent返回参数结构体
 */
export interface ApplyConcurrentResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ApplyConcurrent请求参数结构体
 */
export interface ApplyConcurrentRequest {
    /**
     * 唯一用户身份标识，由业务方自定义，平台不予理解。（可根据业务需要决定使用用户的唯一身份标识或是使用时间戳随机生成；在用户重连时应保持UserId不变）
     */
    UserId: string;
    /**
     * 用户IP，用户客户端的公网IP，用于就近调度
     */
    UserIp: string;
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 应用版本ID
     */
    ApplicationVersionId?: string;
    /**
     * 应用ID。如果是独享项目，将忽略该参数，使用项目绑定的应用。如果是共享项目，使用该参数来指定应用。
     */
    ApplicationId?: string;
}
/**
 * DestroySession请求参数结构体
 */
export interface DestroySessionRequest {
    /**
     * 唯一用户身份标识，由业务方自定义，平台不予理解。（可根据业务需要决定使用用户的唯一身份标识或是使用时间戳随机生成；在用户重连时应保持UserId不变）
     */
    UserId: string;
}
/**
 * StartPublishStream请求参数结构体
 */
export interface StartPublishStreamRequest {
    /**
     * 唯一用户身份标识，由业务方自定义，平台不予理解。（UserId将作为StreamId进行推流，比如绑定推流域名为abc.livepush.myqcloud.com，那么推流地址为rtmp://abc.livepush.myqcloud.com/live/UserId?txSecret=xxx&txTime=xxx）
     */
    UserId: string;
}
/**
 * CreateSession请求参数结构体
 */
export interface CreateSessionRequest {
    /**
     * 唯一用户身份标识，由业务方自定义，平台不予理解。（可根据业务需要决定使用用户的唯一身份标识或是使用时间戳随机生成；在用户重连时应保持UserId不变）
     */
    UserId: string;
    /**
     * 用户IP，用户客户端的公网IP，用于就近调度
     */
    UserIp: string;
    /**
     * 客户端session信息，从SDK请求中获得。特殊的，当 RunMode 参数为 RunWithoutClient 时，该字段可以为空
     */
    ClientSession?: string;
    /**
     * 云端运行模式。
  RunWithoutClient：允许无客户端连接的情况下仍保持云端 App 运行
  默认值（空）：要求必须有客户端连接才会保持云端 App 运行。
     */
    RunMode?: string;
    /**
     * 应用启动参数。
  如果请求的是多应用共享项目，此参数生效；
  如果请求的是关闭预启动的单应用独享项目，此参数生效；
  如果请求的是开启预启动的单应用独享项目，此参数失效。
     */
    ApplicationParameters?: string;
    /**
     * 【多人互动】房主用户ID，在多人互动模式下为必填字段。
  如果该用户是房主，HostUserId需要和UserId保持一致；
  如果该用户非房主，HostUserId需要填写房主的HostUserId。
     */
    HostUserId?: string;
    /**
     * 【多人互动】角色。
  Player：玩家（可通过键鼠等操作应用）
  Viewer：观察者（只能观看，无法操作）
     */
    Role?: string;
}

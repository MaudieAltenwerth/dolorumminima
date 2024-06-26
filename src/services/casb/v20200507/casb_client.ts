/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  CopyCryptoColumnPolicyRequest,
  CryptoCopyColumnPolicyTableFilter,
  CopyCryptoColumnPolicyResponse,
} from "./casb_models"

/**
 * casb client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("casb.tencentcloudapi.com", "2020-05-07", clientConfig)
  }

  /**
     * 同region下 根据用户输入的CasbId,MetaDataId 复制策略到DstCasbId,MetaDataId中。
场景1：
相同CasbId，不同MetadataId 下策略复制
场景2：
不同Casbid,不同MetaDataId 下策略复制
场景3:
相同CasbId,相同MetaDataId 且 DatabaseName不同 策略复制

     */
  async CopyCryptoColumnPolicy(
    req: CopyCryptoColumnPolicyRequest,
    cb?: (error: string, rep: CopyCryptoColumnPolicyResponse) => void
  ): Promise<CopyCryptoColumnPolicyResponse> {
    return this.request("CopyCryptoColumnPolicy", req, cb)
  }
}

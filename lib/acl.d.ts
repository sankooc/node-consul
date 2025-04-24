import { AclLegacy } from "./acl/legacy";
import { AclToken } from "./acl/token";
import { AclMethod } from "./acl/method";
import { AclPolicy } from "./acl/policy";
import { AclTemplatedPolicy } from "./acl/templatedPolicy";
import { AclRole } from "./acl/role";
import { AclBindingRule } from "./acl/rule";
import { CommonOptions, Consul } from "./consul";

interface BootstrapOptions extends CommonOptions {
  bootstrapsecret?: string;
}

type BootstrapResult = any;

interface ReplicationOptions extends CommonOptions {
  dc?: string;
}

interface ReplicationResult {
  Enabled: boolean;
  Running: boolean;
  SourceDatacenter: string;
  ReplicatedType: "policies" | "tokens";
  ReplicatedIndex: number;
  ReplicatedTokenIndex: number;
  LastSuccess: string;
  LastError: string;
  LastErrorMessage: string;
}

declare class Acl {
  constructor(consul: Consul);

  consul: Consul;

  legacy: AclLegacy;
  token: AclToken;
  method: AclMethod;
  policy: AclPolicy;
  templatedPolicy: AclTemplatedPolicy;
  role: AclRole;
  bindingRule: AclBindingRule;

  static Legacy: typeof AclLegacy;
  static Token: typeof AclToken;
  static Method: typeof AclMethod;
  static Policy: typeof AclPolicy;
  static TemplatedPolicy: typeof AclTemplatedPolicy;
  static Role: typeof AclRole;
  static BindingRule: typeof AclBindingRule;

  bootstrap(options?: BootstrapOptions): Promise<BootstrapResult>;

  replication(options?: ReplicationOptions): Promise<ReplicationResult>;
}

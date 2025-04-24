import { Consul } from "../consul";

export interface TokenCreateOptions {
  AccessorID?: string;
  SecretID?: string;
  Description?: string;
  Policies?: { ID?: string; Name?: string }[];
  Roles?: { ID?: string; Name?: string }[];
  TemplatedPolicies?: {
    TemplateName: string;
    TemplateVariables?: Record<string, any>;
  }[];
  ServiceIdentities?: { ServiceName: string }[];
  Datacenters?: string[];
  NodeIdentities?: { NodeName: string; Datacenter: string }[];
  Local?: boolean;
  ExpirationTime?: string;
  ExpirationTTL?: string;
  Namespace?: string;
  Partition?: string;
}

export interface CreateResult {
  AccessorID: string;
  SecretID: string;
  Description: string;
  Policies: { Name: string }[];
  Local: boolean;
  CreateTime: string;
}

export interface TokenResult {
  AccessorID: string;
  SecretID: string;
  Description: string;
  Policies: { Name: string }[];
  Local: boolean;
  CreateTime: string;
  Hash: string;
}

interface TokenUpdateOptions {
  Description?: string;
  Policies?: { Name: string }[];
  Local?: boolean;
}

interface UpdateResult {
  AccessorID: string;
  SecretID: string;
  Description: string;
  Policies: { Name: string }[];
  Local: boolean;
  CreateTime: string;
}

interface DestroyResult {
  AccessorID: string;
}

interface ListOptions {
  Filter?: string;
}

interface ListResult {
  Tokens: TokenResult[];
}

declare class AclToken {
  constructor(consul: Consul);

  consul: Consul;

  create(options?: TokenCreateOptions): Promise<CreateResult>;

  read(accessorID: string): Promise<TokenResult>;

  clone(accessorID: string): Promise<TokenResult>;

  readSelf(): Promise<TokenResult>;

  update(
    accessorID: string,
    options: TokenUpdateOptions,
  ): Promise<UpdateResult>;

  delete(accessorID: string): Promise<boolean>;

  list(options?: ListOptions): Promise<TokenResult[]>;
}

import { Consul } from "../consul";

interface PolicyRule {
  PathInfo?: {
    path: string;
    policy: string;
  }[];
  ServiceIdentities?: {
    ServiceName: string;
    Datacenters?: string[];
  }[];
  NodeIdentities?: {
    NodeName: string;
    Datacenters?: string[];
  }[];
}

export interface PolicyResult {
  ID?: string;
  Name: string;
  Description?: string;
  Rules?: string;
  Datacenters?: string[];
  CreateIndex?: number;
  ModifyIndex?: number;
}

export interface PolicyCreateOption {
  Name?: string;
  Description?: string;
  Rules?: string;
  Datacenters?: string[];
}

interface ListPoliciesResponse {
  Policies: PolicyResult[];
}

// interface ReadPolicyResponse {
//   Policy: Policy;
// }

declare class AclPolicy {
  constructor(consul: Consul);

  /**
   * Lists all the ACL policies
   */
  list(): Promise<PolicyResult[]>;

  /**
   * Creates a new ACL policy
   */
  create(policy: PolicyCreateOption): Promise<PolicyResult>;

  /**
   * Reads an ACL policy by ID or name
   */
  read(id: string): Promise<PolicyResult>;

  readByName(name: string): Promise<PolicyResult>;

  /**
   * Updates an existing ACL policy
   */
  update(id: string, policy: PolicyCreateOption): Promise<PolicyResult>;

  /**
   * Deletes an ACL policy
   */
  delete(id: string): Promise<void>;
}

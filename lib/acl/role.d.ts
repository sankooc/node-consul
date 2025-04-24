import { Consul } from "../consul";

interface ServiceIdentity {
  ServiceName: string;
  Datacenters?: string[];
}

interface NodeIdentity {
  NodeName: string;
  Datacenters?: string[];
}

interface RolePolicyLink {
  ID?: string;
  Name?: string;
}

interface Role {
  ID?: string;
  Name: string;
  Description?: string;
  Policies?: RolePolicyLink[];
  ServiceIdentities?: ServiceIdentity[];
  NodeIdentities?: NodeIdentity[];
  CreateIndex?: number;
  ModifyIndex?: number;
}

interface ListRolesResponse {
  Roles: Role[];
}

interface ReadRoleResponse {
  Role: Role;
}

declare class AclRole {
  constructor(consul: Consul);

  /**
   * Lists all the ACL roles
   */
  list(): Promise<Role[]>;

  /**
   * Creates a new ACL role
   */
  create(role: Role): Promise<ReadRoleResponse>;

  /**
   * Reads an ACL role by ID or name
   */
  read(idOrName: string): Promise<ReadRoleResponse>;

  /**
   * Updates an existing ACL role
   */
  update(idOrName: string, role: Role): Promise<ReadRoleResponse>;

  /**
   * Deletes an ACL role
   */
  delete(idOrName: string): Promise<void>;
}

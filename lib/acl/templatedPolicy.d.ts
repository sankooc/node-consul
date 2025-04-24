import { Consul } from "../consul";

export interface TemplatedPolicy {
  TemplateName: string;
  Schema?: string;
  Description?: string;
  Template?: string;
}

interface TemplatedPolicyVariables {
  name: string;
  [key: string]: string;
}

interface ListTemplatedPoliciesResponse {
  TemplatedPolicies: TemplatedPolicy[];
}

interface ReadTemplatedPolicyResponse {
  TemplatedPolicy: TemplatedPolicy;
}

interface RenderTemplatedPolicyResponse {
  Policy: {
    ID?: string;
    Name: string;
    Description?: string;
    Rules: string;
    Datacenters?: string[];
  };
}

declare class AclTemplatedPolicy {
  constructor(consul: Consul);
  list(): Promise<TemplatedPolicy[]>;
  read(name: string): Promise<ReadTemplatedPolicyResponse>;
}

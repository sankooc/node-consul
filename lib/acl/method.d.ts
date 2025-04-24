import { Consul } from "../consul";

declare class AclMethod {
  constructor(consul: Consul);
  list(): Promise<any>;
}

import { Consul } from "./consul";

export class ConfigResult {
  Kind: string;
  Name: string;
  Protocol: string;
  CreateIndex?: number;
  ModifyIndex?: number;
}

declare class Config {
  constructor(consul: Consul);
  consul: Consul;
  read(kind: string, name: string): Promise<void>;
  delete(kind: string, name: string): Promise<void>;
  list(kind: string): Promise<ConfigResult[]>;
  endpoints() : Record<string, string>;
}

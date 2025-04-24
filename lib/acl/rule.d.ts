import { Consul } from "../consul";

interface BindingRule {
  ID?: string;
  Description?: string;
  AuthMethod: string;
  Selector?: string;
  BindType: "service" | "role";
  BindName: string;
  CreateIndex?: number;
  ModifyIndex?: number;
}

interface ListBindingRulesResponse {
  BindingRules: BindingRule[];
}

interface ReadBindingRuleResponse {
  BindingRule: BindingRule;
}

declare class AclBindingRule {
  constructor(consul: Consul);

  /**
   * Lists all the ACL binding rules
   */
  list(): Promise<BindingRule[]>;

  /**
   * Creates a new ACL binding rule
   */
  create(rule: BindingRule): Promise<ReadBindingRuleResponse>;

  /**
   * Reads an ACL binding rule by ID
   */
  read(id: string): Promise<ReadBindingRuleResponse>;

  /**
   * Updates an existing ACL binding rule
   */
  update(id: string, rule: BindingRule): Promise<ReadBindingRuleResponse>;

  /**
   * Deletes an ACL binding rule
   */
  delete(id: string): Promise<void>;
}

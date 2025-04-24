const AclLegacy = require("./acl/legacy").AclLegacy;
const AclToken = require("./acl/token").AclToken;
const AclMethod = require("./acl/method").AclMethod;
const AclPolicy = require("./acl/policy").AclPolicy;
const AclTemplatedPolicy = require("./acl/templatedPolicy").AclTemplatedPolicy;
const AclRole = require("./acl/role").AclRole;
const AclBindingRule = require("./acl/rule").AclBindingRule;
const utils = require("./utils");

class Acl {
  constructor(consul) {
    this.consul = consul;
    this.legacy = new Acl.Legacy(consul);
    this.token = new Acl.Token(consul);
    this.method = new Acl.Method(consul);
    this.policy = new Acl.Policy(consul);
    this.templatedPolicy = new Acl.TemplatedPolicy(consul);
    this.role = new Acl.Role(consul);
    this.bindingRule = new Acl.BindingRule(consul);
  }

  /**
   * Creates one-time management token if not configured
   */
  async bootstrap(opts) {
    opts = utils.normalizeKeys(opts);
    opts = utils.defaults(opts, this.consul._defaults);

    const req = {
      name: "acl.bootstrap",
      path: "/acl/bootstrap",
      type: "json",
    };

    utils.options(req, opts);

    return await this.consul._put(req, utils.body);
  }

  /**
   * Check ACL replication
   */
  async replication(opts) {
    opts = utils.normalizeKeys(opts);
    opts = utils.defaults(opts, this.consul._defaults);

    const req = {
      name: "acl.replication",
      path: "/acl/replication",
      query: {},
    };

    utils.options(req, opts);

    return await this.consul._get(req, utils.body);
  }
}

Acl.Legacy = AclLegacy;
Acl.Token = AclToken;
Acl.Method = AclMethod;
Acl.Policy = AclPolicy;
Acl.TemplatedPolicy = AclTemplatedPolicy;
Acl.Role = AclRole;
Acl.BindingRule = AclBindingRule;

exports.Acl = Acl;

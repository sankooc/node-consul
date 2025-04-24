const utils = require("../utils");
const Model = require("../base");

class TemplatedPolicy extends Model {
  get _list() {
    return "/acl/templated-policies";
  }
  get _item() {
    return "/acl/templated-policy";
  }
  async readByName(name) {
    const opts = utils.defaults({}, this.consul._defaults);
    const req = {
      path: this._item + "/name/" + name,
      query: {},
    };
    utils.options(req, opts);
    return await this.consul._get(req, utils.body);
  }
  async list(opts) {
    const _sup = await super.list(opts);
    return Object.values(_sup);
  }
}
exports.AclTemplatedPolicy = TemplatedPolicy;

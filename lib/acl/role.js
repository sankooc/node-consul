const utils = require("../utils");
const Model = require("../base");

class Role extends Model {
  get _list() {
    return "/acl/roles";
  }
  get _item() {
    return "/acl/role";
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
}
exports.AclRole = Role;

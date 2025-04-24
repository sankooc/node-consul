const utils = require("../utils");
const Model = require("../base");

class Method extends Model {
  get _list() {
    return "/acl/auth-methods";
  }
  get _item() {
    return "/acl/auth-method";
  }
}
exports.AclMethod = Method;

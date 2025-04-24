const utils = require("../utils");
const Model = require("../base");

class Rule extends Model {
  get _list() {
    return "/acl/binding-rules";
  }
  get _item() {
    return "/acl/binding-rule";
  }
}
exports.AclBindingRule = Rule;

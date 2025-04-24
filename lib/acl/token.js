const utils = require("../utils");
const Model = require("../base");
const anonymousTokenId = '00000000-0000-0000-0000-000000000002';

class Token extends Model {
  constructor(consul) {
    super(consul);
  }

  get _list() {
    return "/acl/tokens";
  }
  get _item() {
    return "/acl/token";
  }
  async clone(id) {
    const opts = utils.defaults({}, this.consul._defaults);
    const req = {
      path: `/acl/token/${id}/clone`,
      query: {},
      type: "json",
      body: {},
    };
    utils.options(req, opts);
    return await this.consul._put(req, utils.body);
  }
  async readSelf() {
    if(!this.consul._defaults || !this.consul._defaults.token){
      return this.read(anonymousTokenId);
    }
    const opts = utils.defaults({}, this.consul._defaults);
    const req = {
      path: this._item + "/self",
      query: {},
    };
    utils.options(req, opts);
    return await this.consul._get(req, utils.body);
  }
}
exports.AclToken = Token;

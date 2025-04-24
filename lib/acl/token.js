const utils = require("../utils");
const Model = require("../base");
// class Token {
//     constructor(consul) {
//         this.consul = consul;
//     }
//     async create(data) {
//         // opts = utils.normalizeKeys(opts);
//         const opts = utils.defaults({}, this.consul._defaults);
//         const req = {
//             path: "/acl/token",
//             query: {},
//             type: "json",
//             body: data
//         };
//         utils.options(req, opts);
//         return await this.consul._put(req, utils.body);
//     }

//     async read(accessorID) {
//         const opts = utils.defaults({}, this.consul._defaults);
//         const req = {
//             path: `/acl/token/${accessorID}`,
//             query: {},
//         };
//         utils.options(req, opts);
//         return await this.consul._get(req, utils.body);
//     }

//     async readSelf() {
//         const opts = utils.defaults({}, this.consul._defaults);
//         const req = {
//             path: "/acl/token/self",
//             query: {},
//         };
//         utils.options(req, opts);
//         return await this.consul._get(req, utils.body);
//     }

//     async update(accessorID, opts) {
//         opts = utils.normalizeKeys(opts);
//         opts = utils.defaults(opts, this.consul._defaults);
//         const req = {
//             path: `/acl/token/${accessorID}`,
//             query: {},
//         };
//         utils.options(req, opts);
//         const res = await this.consul._put(req, opts);
//         return res.data;
//     }

//     async delete(accessorID) {
//         const opts = utils.defaults({}, this.consul._defaults);
//         const req = {
//             path: `/acl/token/${accessorID}`,
//             query: {},
//         };
//         utils.options(req, opts);
//         const res = await this.consul._delete(req);
//         return res.data;
//     }

//     async list(opts) {
//         opts = utils.normalizeKeys(opts);
//         opts = utils.defaults(opts, this.consul._defaults);
//         const req = {
//             path: "/acl/tokens",
//             query: {},
//         };

//         utils.options(req, opts);
//         return await this.consul._get(req, utils.body);
//     }
// }

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

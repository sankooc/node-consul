const utils = require("./utils");

class Model {
  constructor(consul) {
    this.consul = consul;
  }
  get _list() {
    throw new Error("not implemented");
  }
  get _item() {
    throw new Error("not implemented");
  }
  async create(data) {
    const opts = utils.defaults({}, this.consul._defaults);
    const req = {
      path: this._item,
      query: {},
      type: "json",
      body: data,
    };
    utils.options(req, opts);
    return await this.consul._put(req, utils.body);
  }

  async read(accessorID) {
    const opts = utils.defaults({}, this.consul._defaults);
    const req = {
      path: `${this._item}/${accessorID}`,
      query: {},
    };
    utils.options(req, opts);
    return await this.consul._get(req, utils.body);
  }

  async update(accessorID, data) {
    const opts = utils.defaults({}, this.consul._defaults);
    const req = {
      path: `${this._item}/${accessorID}`,
      query: {},
      type: "json",
      body: data,
    };
    utils.options(req, opts);
    return await this.consul._put(req, utils.body);
  }

  async delete(accessorID) {
    const opts = utils.defaults({}, this.consul._defaults);
    const req = {
      path: `${this._item}/${accessorID}`,
      query: {},
    };
    utils.options(req, opts);
    return await this.consul._delete(req, utils.body);
  }

  async list(opts) {
    opts = utils.normalizeKeys(opts);
    opts = utils.defaults(opts, this.consul._defaults);
    const req = {
      path: this._list,
      query: {},
    };

    utils.options(req, opts);
    const list = await this.consul._get(req, utils.body);
    return list;
  }
}

module.exports = Model;

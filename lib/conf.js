const utils = require("./utils");

class Model {
    constructor(consul) {
        this.consul = consul;
    }
    _list(kind) {
        return "/config/" + kind;
    }
    _item(kind, name) {
        return "/config/" + kind + "/" + name;
    }

    async read(kind, name) {
        const opts = utils.defaults({}, this.consul._defaults);
        const req = {
            path: this._item(kind, name),
            query: {},
        };
        utils.options(req, opts);
        return await this.consul._get(req, utils.body);
    }

    async delete(kind, name) {
        const opts = utils.defaults({}, this.consul._defaults);
        const req = {
            path: this._item(kind, name),
            query: {},
        };
        utils.options(req, opts);
        return await this.consul._delete(req, utils.body);
    }

    async list(kind) {
        const opts = utils.defaults({}, this.consul._defaults);
        const req = {
            path: this._list(kind),
            query: {},
        };

        utils.options(req, opts);
        const list = await this.consul._get(req, utils.body);
        return list;
    }
    endpoints() {
        return {
            "api-gateway": "service:read",
            "bound-api-gateway": "service:read",
            "exported-services": "mesh:read or operator:read",
            "file-system-certificate": "mesh:read or operator:read",
            "http-route": "mesh:read or operator:read",
            "ingress-gateway": "service:read",
            "inline-certificate": "mesh:read or operator:read",
            "mesh": "No ACL required",
            "proxy-defaults": "No ACL required",
            "service-defaults": "service:read",
            "service-intentions": "intentions:read",
            "service-resolver": "service:read",
            "service-router": "service:read",
            "service-splitter": "service:read",
            "tcp-route": "mesh:read or operator:read",
            "terminating-gateway": "service:read",
        }
    }
}

exports.Config = Model;

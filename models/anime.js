var orm = require("../config/orm.js");

var anime = {
    all: function (cb) {
        orm.all("anime", function (res) {
            cb(res);
        });
    },

    create: function (cols, vals, cb) {
        orm.create("anime", cols, vals, function (res) {
            cb(res);
        });
    },

    update: function (objColVals, condition, cb) {
        orm.update("anime", objColVals, condition, function (res) {
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete("anime", condition, function(res) {
          cb(res);
        });
      }
};

module.exports = anime;
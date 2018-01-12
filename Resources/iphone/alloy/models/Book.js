var Alloy = require('/alloy'),
    _ = require("/alloy/underscore")._,
    model,
    collection;

exports.definition = {
	config: {

		adapter: {
			type: "properties",
			collection_name: "Book"
		}
	},
	extendModel: function (Model) {
		_.extend(Model.prototype, {});

		return Model;
	},
	extendCollection: function (Collection) {
		_.extend(Collection.prototype, {});

		return Collection;
	}
};

model = Alloy.M('Book', exports.definition, []);

collection = Alloy.C('Book', exports.definition, model);

exports.Model = model;
exports.Collection = collection;
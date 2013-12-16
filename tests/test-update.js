var assert = require('assert');
var insert = require('./insert');

insert([{
	hello:'world'
}], function(db, done) {
	db.a.update({hello:'world'}, {$set:{hello:'verden'}}, function(err) {
		assert.ok(!err);
		assert.ok(arguments.length <= 1);

		db.a.findOne(function(err, doc) {
			assert.ok(!err);
			assert.equal(doc.hello, 'verden');
			done();
		});
	});
});
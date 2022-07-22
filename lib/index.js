'use strict';

var Concept = require('./concept');
var WikiPage = require('./wiki_page');
var Entity = require('./entity');
var db = require('./db');
var mongoose = require('mongoose');
var AccessService = require('./access_service');
var ControlService = require('./control_service');

function connect(connectionString, options, cb) {
	return (
        /* TODO: JSFIX could not patch the breaking change:
        BREAKING CHANGE: mongoose.connect() returns a promise, removed MongooseThenable #5796
        Suggested fix: Only relevant if you depend on the return value being a reference to the mongoose object. In that case, you need to modify the usages of the return value to get the mongoose object from somewhere else.*/
        mongoose.createConnection(connectionString, options, cb)
    );
}

// exports: ============

exports.AccessService = AccessService;
exports.ControlService = ControlService;
exports.Concept = Concept;
exports.WikiPage = WikiPage;
exports.Entity = Entity;
exports.connect = connect;
exports.db = db;

// src/index.js
var m = require("mithril")
var Dashboard = require("./views/Dashboard")
var Active = require("./views/Active")
var Layout = require("./views/Layout")
var Completed = require("./views/Completed")



m.route(document.body, "/All", {
    "/All": {
    	render: function() {
    	return m(Layout, m(Dashboard))
    	}
	},
    "/Active": {
    	render: function() {
    		return m(Layout, m(Active))
    	}
    },
    "/Completed": {
        render: function() {
            return m(Layout, m(Completed))
        }
    }
})


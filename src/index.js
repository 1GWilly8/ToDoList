// src/index.js
var m = require("mithril")
var Dashboard = require("./views/Dashboard")
var Active = require("./views/Active")
var Layout = require("./views/Layout")
var Completed = require("./views/Completed")


m.route(document.body, "/All:All", {
    "/All:state": {
    	render: function() {
    	return m(Layout, m(Dashboard))
    	}
	},
    "/Active:state": {
    	render: function() {
    		return m(Layout, m(Active))
    	}
    },
    "/Completed:state": {
        render: function() {
            return m(Layout, m(Completed))
        }
    }
})
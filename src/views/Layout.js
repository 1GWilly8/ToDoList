// src/views/Layout.js
var m = require("mithril")
var List = require("../model/List")

module.exports = {
	oninit: function(vnode) {state = vnode.attrs.state
    },

    view: function(vnode) {
        curList: [],
        curList = List.displayList(state)
        return m("main.layout", [
        	m("header.title", "todos"),
        	m("input.input", {
                placeholder: "What needs to be done?",
        		onkeydown: function(e) {
        			if(e.keyCode == 13 && e.target.value != "") {
                        List.addToList(e.target.value);
                        e.target.value = '';
        			}
        		}
          	}),
        	m("ul.dynamicList", vnode.children),
        	m("nav.menu", [
        		m("div", "" + List.list.length +" item left"),
        		m("a", {href: "/All:Active", oncreate: m.route.link}, "All"),
        		m("a", {href: "/Active:Active", oncreate: m.route.link}, "Active"),
        		m("a", {href: "/Completed:Completed", oncreate: m.route.link}, "Completed"),
        		m("button", {
        			oninput: function() {
        				
        			}
        		}, "Clear Completed")
        	])
        ])
    }
}


    // m("nav.menu", [
    //     m("a[href='#!/list']", {oncreate: m.route.link}, "Users")
    // ]),
    // m("section", vnode.children)
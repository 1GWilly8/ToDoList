// src/views/Layout.js
var m = require("mithril")
var List = require("../model/List")();

module.exports = {
	//keystrokes: "",
    view: function(vnode) {
        return m("main.layout", [
        	m("header.title", "ToDo"),
        	m("input.input", {
                placeholder: "What needs to be done?",
        		onkeydown: function(e) {
        			if(e.keyCode == 13 && e.target.value != "") {
                        List.addToList(e.target.value);
                        e.target.value = '';
                        console.log("List.list is now equal to: ", List.list)
        			}
        		}
          	}),
        	m("ul.dynamicList", 
                [List.list.map(function(text) {
                    return m("li", [
                        m("div.roundedTwo", [
                            m("input", {type: "checkbox",
                                        id: "roundedTwo"}),
                            m("label", {for: "roundedTwo"})]),
                        m("div.task", text)])
                })]),
        	m("nav.menu", [
        		m("div", "1 item left"),
        		m("button", {//href: "/All", oncreate: m.route.link,
                    onclick: console.log(List.list)}, "All"),
        		m("button", {//href: "/Active", oncreate: m.route.link,
                    onclick: List.displayList("Active")}, "Active"),
        		m("button", {//href: "/Completed", oncreate: m.route.link,
                    onclick: List.displayList("Completed")}, "Completed"),
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
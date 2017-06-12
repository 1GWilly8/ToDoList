// src/model/List
var m = require("mithril")
var Element = require("./ListElement")

//var oldList = localStorage.getItem(JSON.parse("list"))

var ToDoList = {
    list: [],

    addToList: function(text) {
        element = new Element,
        element.add(this.list.length, "Active", text),
        this.list[this.list.length] = element
        // localStorage.setItem(JSON.stringify(list))
    },

    displayList: function(state) {
        if (state == "All") {
            return this.list
        }

        var displayList = [];
        for (var i = 0; i < this.list.length; i++) {
            if (this.list[i].tag == state) {
                displayList.push(this.list[i])
            }
        }
        return displayList;
    },

    markCompleted: function(id) {   
        this.list[id].tag = "Completed"
        // localStorage.setItem(JSON.stringify(list))
    },

    removeFromList: function(id) {
        this.list.splice(id, 1);
        for (var i = id; i < this.list.length; i++) {
            this.list[i].id = this.list[i].id - 1
            
        }
        // localStorage.setItem(JSON.stringify(list))
    }
}
    
    module.exports = ToDoList;

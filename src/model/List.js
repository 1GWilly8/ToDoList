// src/model/List
var m = require("mithril")
var Element = require("./ListElement")

var ToDoList = {
    list: [],
    allstatechecked: false,
    addToList: function(text) {
        element = new Element,
        element.add(this.list.length, "Active", text),
        this.list[this.list.length] = element
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
    },

    removeFromList: function(id) {
        this.list.splice(id, 1);
        for (var i = id; i < this.list.length; i++) {
            this.list[i].id = this.list[i].id - 1
            
        }
        this.checkAllComp();
    },

    checkAllComp: function() {
        var allItems = this.displayList("Active");
        if (allItems.length == 0) {
            console.log(this.allstatechecked)
            this.allstatechecked = true
        } else {
            console.log(this.allstatechecked)
            this.allstatechecked = false
        }
    }
}
    
    module.exports = ToDoList;
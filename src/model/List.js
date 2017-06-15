// src/model/List
var m = require("mithril")

var ToDoList = {
    displayList: [],
    list: [],
    allstatechecked: false,
    addToList: function(text, checkboxstate) {
        var task = {text: text, checkboxstate: checkboxstate};
        console.log(task);
        return m.request({
            method: "POST",
            url: "http://localhost:8000/tasks",
            data: task
        })
        .then(function(response) {
            ToDoList.list.push(response);
            ToDoList.loadList();
        })
        
    },

    loadList: function() {
        return m.request({
            method: "GET",
            url: "http://localhost:8000/tasks",
        })
        .then(function(response) {
            ToDoList.list = response
            var actList = ToDoList.displayList("Active");
            //console.log("---", ToDoList.list)
              if (actList.length == 0) {
                ToDoList.allstatechecked = true
              } else {
                ToDoList.allstatechecked = false
              }
              m.redraw();
        })
    },

    displayList: function(state) {

        var TF;
        if (state == "All") {
            return this.list
        }
        if (state == "Completed") {
            TF = true
        } else if (state == "Active") {
            TF = false
        }
        var displayList = [];
        for (var i = 0; i < this.list.length; i++) {
            if (this.list[i].checkboxstate == TF) {
                displayList.push(this.list[i])
            }
        }
        return displayList;

    },

    toggleCompleted: function(id, checkbox) {
       task = {checkboxstate: !checkbox}
        return m.request({
            method: "PUT",
            url: "http://localhost:8000/tasks/" + id,
            data: task

        }).then(function(response){
            ToDoList.loadList();
        })
    
    },



    removeFromList: function(id) {
        return m.request({
        method: "DELETE",
        url: "http://localhost:8000/tasks/" + id
        }).then(function(response){
            ToDoList.list.forEach(function(listItem, index){
                if(listItem.objectId == id){
                    ToDoList.list.splice(index, 1);
                }
                ToDoList.loadList();
                m.redraw();
            })
        console.log("Item removed", arguments, ToDoList.list);
        })
    },

    toggleAllComp: function(TF) {
        for (var i = 0; i < ToDoList.list.length; i++) {
            console.log(i),
            ToDoList.toggleCompleted(ToDoList.list[i].objectId, !TF),
            console.log(ToDoList.list[i].checkboxstate)
        }
    }
}
    
    module.exports = ToDoList;
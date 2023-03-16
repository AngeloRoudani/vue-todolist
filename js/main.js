const { createApp } = Vue;

    createApp({
            data() {
                return {
                    newTask:[
                        {
                            text:"",
                            done: false
                        }
                    ],
                    taskArray: [
                        {
                            text:"Comprare Pane",
                            done: false,
                        }
                        
                    ]
                }
            },
            methods: {
                deleteTask (index) {
                    this.taskArray = this.taskArray.splice(index,1)
                },
                getDone () {
                    if(this.taskArray.done == false) {
                        this.taskArray.done = true;
                        this.taskArray.text.style.textDecoration = 'line-through';
                    } else if (this.taskArray.done == true) {
                        this.taskArray.done = false
                    }
                },
                taskPush () {
                    this.taskArray.push(this.newTask);
                    this.newTask = "";
                }

            }
      
        
    }).mount('#app')
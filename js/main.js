const { createApp } = Vue;

    createApp({
            data() {
                return {
                    erased: 'wellDone',
                    newTask:{
                        text:"",
                        done: false
                        },
                    
                    taskArray: []    
                }
            },
            methods: {
                deleteTask (index) {
                    this.taskArray = this.taskArray.splice(index,1)
                },
                getDone () {
                    
                    this.taskArray.done = true;
                        
                },
                taskPush () {
                    this.taskArray.unshift(this.newTask);
                    this.newTask = "";
                }

            }
      
        
    }).mount('#app')
const { createApp } = Vue;

    createApp({
        data() {
            return {
                erased: 'wellDone',
                allert: false,
                newTask:"",
                
                taskArray: [
                ]    
            }
        },
        methods: {
            deleteTask (index) {
                this.taskArray.splice(index,1)
            },
            getDone () {
                
                this.taskArray.done = true;
                    
            },
            taskPush () {
                if (this.newTask.length >= 10) {
                    this.taskArray.unshift(this.newTask);
                    this.newTask = "";
                    this.allert = false;
                    
                } else {
                    this.allert = true;
                }
                
            }

        }
      
        
    }).mount('#app')
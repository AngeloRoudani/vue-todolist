const { createApp } = Vue;

    createApp({
            data() {
                return {
                    erased: 'wellDone',
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
                    this.taskArray.unshift(this.newTask);
                    this.newTask = "";
                }

            }
      
        
    }).mount('#app')
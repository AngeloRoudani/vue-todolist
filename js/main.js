const { createApp } = Vue;

    createApp({
            data() {
                return {

                    taskArray: [
                        {
                            text:"Comprare Pane",
                            done: false,
                        },
                        {
                            text:"Andare in posta",
                            done: true,
                        },
                        {
                            text:"Andare in banca",
                            done: true,
                        },
                        {
                            text:"Comprare computer nuovo",
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
                        this.taskArray.text.style.textDecoration = "line-through";
                    } else {
                        this.taskArray.done = false
                    }
                },

            }
      
        
    }).mount('#app')
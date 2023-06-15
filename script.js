//your code here
let button = document.getElementById('addTodoBtn');
      
      
      
      button.addEventListener('click', ()=>{
        let orderList = document.getElementById('todoList');
        let todo = document.getElementById('newTodoInput');

        if(todo.value === ''){
          alert('Please Enter Text')
          return;
        }
        let tag = document.createElement('li');
        let text = document.createTextNode(todo.value)

        tag.appendChild(text);

        orderList.appendChild(tag);

        todo.value = '';
        
      })

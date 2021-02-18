const element = [
  {'id': '1', 'name' : 'dilan', 'age' : '25', 'gender' : 'female' },
  {'id': '2', 'name': 'gokhan', 'age' : '25', 'gender' : 'male' },
  {'id': '3', 'name' : 'emre', 'age' : '23', 'gender' : 'male' },
  {'id': '4', 'name' : 'merve', 'age' : '25', 'gender' : 'female' }
]

const container = document.querySelector('.container');
const holder = document.querySelector('.holder')

function editItems(e){
  const edit = e.currentTarget.parentElement;
  const id = edit.dataset.id
  var selectedItem = element.find(item => item.id === id)
  selectedItem.id = 'heyyo'
  selectedItem.name = 'jojee';
  selectedItem.age = 'nothing';
  selectedItem.gender = 'others';
  renderItems()
}
function deleteItems(e){
  const deleted = e.currentTarget.parentElement;
  const id = deleted.dataset.id;
  
  var deletedItems = element.find(function(item) {
    return item.id === id
  })
  var indexOfDelete = element.indexOf(deletedItems);
  element.splice(indexOfDelete, 1);
  renderItems()

}

function renderItems(){
  holder.innerHTML = '';
  element.forEach(function(item){
    const id = item.id;
    const name = item.name;
    const age = item.age;
    const gender = item.gender;
    const adding = document.createElement('div');
    adding.classList.add('adding');
    adding.setAttribute('data-id', id)
    adding.innerHTML = `<span><p>id: ${id} name: ${name} age: ${age} gender: ${gender}</p></span>
    <button type="button" class="edit">edit</button>
    <button type="button" class="delete">delete</button>
    </div>`
    const editBtn = adding.querySelector('.edit');
    editBtn.addEventListener('click', editItems);
    const deleteBtn = adding.querySelector('.delete')
    deleteBtn.addEventListener('click', deleteItems)
    holder.appendChild(adding);
  })
  }
 
renderItems()
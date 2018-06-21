var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//FORM SUBMIT

form.addEventListener('submit', addItem);

//Delete Item

itemList.addEventListener('click', removeItem)

//Filter Event

filter.addEventListener('keyup', filterItems)

//Add item

function addItem(e)	{

	e.preventDefault();


//Get input value

	var newItem = document.getElementById('item').value;

// Create new li item
	var li = document.createElement('li');


	li.className = 'list-group-item';

	li.appendChild(document.createTextNode(newItem));

	var deleteBtn = document.createElement('button');

	deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

	deleteBtn.appendChild(document.createTextNode('x'));

	li.appendChild(deleteBtn);

	itemList.appendChild(li);
}




//Remove item

function removeItem(e)	{

	if(e.target.classList.contains('delete')){
		if(confirm('Are you sure?')){
			var li = e.target.parentElement;
			itemList.removeChild(li);
		}
	}

}

//Filter Items

function filterItems(e){

	var text = e.target.value.toLowerCase();

	var items = itemList.getElementsByTagName('li');

	Array.from(items).forEach(function(item){
		var itemName = item.firstChild.textContent;
		if(itemName.toLowerCase().indexof(text) != -1) {
			item.style.display = 'block';
		}
		else {
			item.style.display = 'name';
		}
		
		});
}
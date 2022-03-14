let div = document.createElement('div');
div.setAttribute('class', 'header-container');

const colors = ['red','green','blue','purple','yellow','orange','aqua','gray'];

/* Testing multiple ways for double click */
/*
const onClick = (event) => {
    if (event.target.className == 'h1' || 'h2' || 'h3' || 'h4' || 'h5' || 'h6') {
      console.log(event.target.className);
      event.target.style.color = colors[Math.floor(Math.random() * colors.length)];
    }
}
*/

/*
const onClickItemColor = (event) => {
    if (event.target == 'li') {
      console.log("Item Clicked: " + event.target.className);
      event.target.style.color = colors[Math.floor(Math.random() * colors.length)];
    }
}
*/

/*
function myFunction(event , element) {
    if (event.target.className == 'h1' || 'h2' || 'h3' || 'h4' || 'h5' || 'h6') {
        $(document).ready(function () {
            var toggle = true; // Toggle state
            $(element).on({
                dblclick: function () {
                    if (toggle) {
                        // Change background to red
                        //$(this).css("background-color", "red");
                        $(this).css("color", colors[Math.floor(Math.random() * colors.length)]);
                        //toggle = false;
                        console.log('Double Click: ' + event.target.className);
                    } else {
                        // Change background to default
                        $(this).css("background-color", "red");
                        $(this).css("color", "black");
                        toggle = true;
                    }
                    
                }
            });
        });
        console.log('Single Click: ' + event.target.className);
        //event.target.style.color = colors[Math.floor(Math.random() * colors.length)];
    }
}
*/

function randomColor(el){
    var num = Math.floor(Math.random() * colors.length);
    el.style.color = colors[num];
}


let h1 = document.createElement('h1');
h1.setAttribute('class', 'h1');
h1.setAttribute('ondblclick', 'randomColor(this)');
let h1_text = document.createTextNode('This is an h1');
h1.appendChild(h1_text);
/* Testing multiple ways for double click */
//h1.setAttribute('onclick', 'myFunction(event, this)');
//h1.onclick = onClick;
//h1.addEventListener("dblclick", randomColor(h1));

let h2 = document.createElement('h2');
h2.setAttribute('class', 'h2');
h2.setAttribute('ondblclick', 'randomColor(this)');
let h2_text = document.createTextNode('This is an h2');
h2.appendChild(h2_text);

let h3 = document.createElement('h3');
h3.setAttribute('class', 'h3');
h3.setAttribute('ondblclick', 'randomColor(this)');
let h3_text = document.createTextNode('This is an h3');
h3.appendChild(h3_text);

let h4 = document.createElement('h4');
h4.setAttribute('class', 'h4');
h4.setAttribute('ondblclick', 'randomColor(this)');
let h4_text = document.createTextNode('This is an h4');
h4.appendChild(h4_text);

let h5 = document.createElement('h5');
h5.setAttribute('class', 'h5');
h5.setAttribute('ondblclick', 'randomColor(this)');
let h5_text = document.createTextNode('This is an h5');
h5.appendChild(h5_text);

let h6 = document.createElement('h6');
h6.setAttribute('class', 'h6');
h6.setAttribute('ondblclick', 'randomColor(this)');
let h6_text = document.createTextNode('This is an h6');
h6.appendChild(h6_text);

/*Testing random coloring*/
/*
h1.style.color = colors[Math.floor(Math.random() * colors.length)];
h2.style.color = colors[Math.floor(Math.random() * colors.length)];
h3.style.color = colors[Math.floor(Math.random() * colors.length)];
h4.style.color = colors[Math.floor(Math.random() * colors.length)];
h5.style.color = colors[Math.floor(Math.random() * colors.length)];
h6.style.color = colors[Math.floor(Math.random() * colors.length)];
*/

function deleteItem(parent, child){
    parent.removeChild(child);
}

let listItems = document.createElement('ul');

let count = 1;

const addDeleteItems = event => {
    let node = document.createElement('li');
    node.appendChild(document.createTextNode("This is list item "+count));
    node.setAttribute('onclick', 'randomColor(this)'); //When clicked once it changes the item color
    listItems.appendChild(node);
    node.setAttribute('ondblclick', 'deleteItem(listItems, this)'); //When double clicked it deletes the item from the list

    count++;
    div.appendChild(listItems);
}

div.appendChild(h1);
div.appendChild(h2);
div.appendChild(h3);
div.appendChild(h4);
div.appendChild(h5);
div.appendChild(h6);

window.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(div);
});


/*
* Developed by : Hilman Ramadhan
*/

var btnStart = document.getElementById("btnStart");
var btnAddGroup = document.getElementById("btnAddGroup");
var letters = /^[A-Za-z]+$/;
var x = 0, y = 0;
var i;


//function when enter key pressed
function onEnter(e, item){

  if (e.keyCode == 13 ){
     switch(item){

        case 'name':
          submitName();
          break;

        case 'grName':
          addGroup();
          break;

            default:
     }
  }
}

//-------- Hide indexPage and Display the TodoList -----------
function submitName() {

  var textName = document.getElementById("nameText").value;
  var length = textName.length;

  if ( length<5 || !textName.match(letters) ) {
    return false;
  }

  document.getElementById("index").style.display = "none";
  document.getElementById("Home").style.display = "block";
  document.getElementById("userName").innerHTML = textName;
}

//--------display and add a new Group-------------------
function addGroup() {
  var group = document.getElementById("Group");
  var textGroup = document.getElementById("groupText").value;
  var length = textGroup.length;

  if (!textGroup.match(letters) ) {
    return false;
  }

  group.style.display = "block";
  addNewGroup(group, textGroup);
}


/* Function add a group :
   Called by addGroup
   parameter :  1)Div id, 2)GroupName
*/

function addNewGroup(group, groupText){
  x++;
  var id = "" + x;

  var groupName = document.createElement("h1");
  groupName.id = "h1-" +id;
  groupName.innerHTML = groupText;

  var inputItem = document.createElement("input");
  inputItem.type = "text";
  inputItem.className = "inputItemList";
  inputItem.id = "inputItem-" +id;

  var btnItem = document.createElement("BUTTON");
  var btnText = document.createTextNode("Add List");
  btnItem.appendChild(btnText);
  btnItem.className = "btnList";
  btnItem.id = id;

  var ulItem = document.createElement("ul");
  ulItem.id = "ulItem-" + id;

  var eachGroup = document.createElement("div");
  eachGroup.className = "each-group";
  eachGroup.id = "each-group-" + id;

  eachGroup.appendChild(groupName);
  eachGroup.appendChild(inputItem);
  eachGroup.appendChild(btnItem);
  eachGroup.appendChild(ulItem);

  document.getElementById("Group").appendChild(eachGroup);

  addNewItem();
}


function addNewItem() {
    var btnLists = document.getElementsByClassName("btnList");
    var inputItemLists = document.getElementsByClassName("inputItemList");

    for(i = 0; i<btnLists.length; i++) {

        var btnList = btnLists[i];
        var item = inputItemLists[i]

        //submitted by button clicked
        btnList.onclick = function() {
          var id = this.id;

          var listText = document.getElementById("inputItem-" + id).value;
          addItem(document.getElementById("ulItem-" + id), listText);
        }

        //submitted by keyboard enter
        item.onkeypress =function (event){

          if(event.keyCode == 13){

            var id = this.id;
            id = id.replace("inputItem-", "");

            var listText = document.getElementById("inputItem-" + id).value;
            addItem(document.getElementById("ulItem-" + id), listText);
        }
      }

    }


    //parameter : 1) ul , 2) listText
    function addItem(list, itemText){
      y++;
      var id = "" + y;

      var listItem = document.createElement("li");
      listItem.id = "li-" + id;

      var checkBox = document.createElement("input");
      checkBox.type = "checkbox";
      checkBox.id = id;
      checkBox.onclick = updateItemStatus;

      var span = document.createElement("span");
      span.id = "item-" + id;
      span.innerText = itemText;
      span.onclick = renameItem;
      //span.ondblclick = removeItem;

      listItem.appendChild(checkBox);
      listItem.appendChild(span);

      list.appendChild(listItem);

    }

}


//when checkbox clicked
function updateItemStatus(){
  //this refer to cb
  var id = this.id;
  var itemText = document.getElementById("item-" + id);

  if(this.checked) {
    itemText.className = "checked";
  }

  else {
    itemText.className = "";
  }

}

//rename item when clicked on item
function renameItem() {
  var newText = prompt(" change list to.. ");

  if(newText === "" || newText.match(/^\s*$/) ){

  } else if (newText) {
    this.innerHTML = newText;
  }else{

  }
}


// //doublecliuck span to remove
// function removeItem() {
//   var spanId = this.id.replace("item_","");
//   document.getElementById("li_" + spanId).style.display = "none";
// }

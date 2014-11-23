//document   Index Page
//------ Refactor write nice JS

var btnName  = document.getElementById("btnName");

/*
check if the value at least 6 characters
and only letters
*/
btnName.onclick = function() {

  var textName = nameText.value;
  var length = textName.length;
  var letters = /^[A-Za-z]+$/;

  if (length<1 || !textName.match(letters) ) {
    return false;
  }

  document.getElementById("index").style.display = "none";
  document.getElementById("Home").style.display = "block";
  document.getElementById("userName").innerHTML = textName;

}

//----------- End of Index Page  -----------

//display and add a new Group
var btnGroup = document.getElementById("btnAddGroup");
btnGroup.onclick = function() {
  var textGroup = groupText.value;
  var length = textGroup.length;
  var letters = /^[A-Za-z]+$/;

  if (!textGroup.match(letters) ) {
    return false;
  }

  Group.style.display = "block";

  addNewGroup(Group, textGroup);
}

var x=0;

function addNewGroup(group, groupText){

  //var id just to pick a random but not repeated number. We could clearly (BETTER) use global variabel total item that increase each func called
  x++;
  // convert id to string by adding ""
  var id = " " + x;

  var groupName = document.createElement("h1");
  groupName.id = "h1_" + id;
  groupName.innerHTML = groupText;
  groupName.className = "groupName";

  var inputItem = document.createElement("input");
  inputItem.type = "text";
  inputItem.id = "inputItem_" + id;

  var btnItem = document.createElement("BUTTON");
  var btnText = document.createTextNode("Add List");
  btnItem.id = id;
  btnItem.className = "btnList";
  btnItem.appendChild(btnText);

  var ulItem = document.createElement("ul");
  ulItem.id = "ulItem_" + id;

  var newDiv = document.createElement("div");
  newDiv.id = "newDiv_" + id;


  newDiv.appendChild(groupName);
  newDiv.appendChild(inputItem);
  newDiv.appendChild(btnItem);
  newDiv.appendChild(ulItem);

  group.appendChild(newDiv);

  start();

}


//------- TO DO LIST ----------------------
var i;

function start() {

 var btnList = document.getElementsByClassName("btnList");

  for(i = 0; i<btnList.length; i++) {
  var adds = btnList[i];

  adds.onclick = function(){

    var id = this.id;

    var listText = document.getElementById("inputItem_"+id).value;
    addNewItem(document.getElementById("ulItem_"+id), listText);
  }
}

}

//this function reusable, just choose which id if we have multiple ul
function addNewItem(list, itemText){

  //var id just to pick a random but not repeated number. We could clearly (BETTER) use global variabel total item that increase each func called
  var date = new Date();
  // convert id to string by adding ""
  var id = "" + date.getHours() +date.getMinutes() + date.getSeconds() + date.getMilliseconds() ;

  var listItem = document.createElement("li");
  listItem.id = "li_" + id;

  var checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.id = "cb_" + id;
  checkBox.onclick = updateItemStatus;

  var span = document.createElement("span");
  span.id = "item_" + id;
  span.innerText = itemText;
  //span.onclick = renameItem;
  //span.ondblclick = removeItem;

  listItem.appendChild(checkBox);
  listItem.appendChild(span);

  list.appendChild(listItem);

}


//when checkbox clicked
function updateItemStatus(){
  //only take the numbers each checkbox to use for itemlist
  // because each has the same id
  var cbId = this.id.replace("cb_", "");
  var itemText = document.getElementById("item_" + cbId);

  //this refer to cb , we can add multiple styling :D
  if(this.checked)itemText.className = "checked";
  else itemText.className = "";
}


// // !!! Still problem : doubleclick can't acces because by onclick
// function renameItem() {
//    var newText = prompt(" change list to.. ");
//    this.innerText = newText;
//  }
//
// //doublecliuck span to remove
// function removeItem() {
//   var spanId = this.id.replace("item_","");
//   document.getElementById("li_" + spanId).style.display = "none";
// }

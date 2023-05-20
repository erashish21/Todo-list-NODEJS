$(document).ready(function () {
  let categories = document.getElementsByClassName("ctg"); // getting category using classname
  for (let i = 0; i < categories.length; i++) {

    //useing loop use different color on each select category
    if (categories[i].innerHTML.trim() == "PERSONAL") {
      categories[i].classList.add("yellow");
    } else if (categories[i].innerHTML.trim() == "WORK") {
      categories[i].classList.add("red");
    } else if (categories[i].innerHTML.trim() == "SCHOOL") {
      categories[i].classList.add("green");
    } else if (categories[i].innerHTML.trim() == "CLEANING") {
      categories[i].classList.add("orange");
    } else {
      categories[i].classList.add("purple");
    }
  }
});

//Function to check the card checkbox is checked or not.
function checkedOrNot() {
  let cb = document.querySelectorAll(".delecheck"); // getting all the card using class.
  let descdisp = document.querySelectorAll(".dispdsc"); // gettong all the class where descripting of TODO is defined
  let ddsp = document.querySelectorAll(".dueDt"); // getting all the class for dueDate
  for (let i = 0; i < descdisp.length; i++) {
    let dueDate = ddsp[i].innerHTML;
    // checking if checkbox is checked  if checked a line will pass through the text(-) else if it is unchecked no line will pass through date and description
    if (cb[i].checked == true) {
      descdisp[i].style.textDecoration = "line-through";
      ddsp[i].style.textDecoration = "line-through";
    } else if (cb[i].checked == false) {
      descdisp[i].style.textDecoration = "none";
      ddsp[i].style.textDecoration = "none";
    }
  }
}


//Send the post request to the mongodb to the delete checked list 
document.getElementById("delete-task").addEventListener("click", function () {
  let checedvaluew = document.querySelectorAll(".delecheck:checked"); // getting only checked value
  let arrayID = []; // creating the list of checked array
  for (let i of checedvaluew) {
    let valID = "";
    valID = i.getAttribute("uid"); // getting uniue id from and pushing into array
    console.log(valID);
    arrayID.push(valID);
  }
  if (arrayID.length === 0) {
    // checking if array is null the
    console.log("no item is checked");
    swal("No item is checked!!", "please select item to remove!", "error"); // if no item select then alert 
    return;
  }
  //Here are we making delete request with the help of Ajax request
  $.ajax({
    type: "post",
    url: "/delete-list/?_id=" + arrayID,
    success: function () { //if data delete then success 
      
      swal("Item is deleted ", "click ok to go back Home ", "success") // amazing alert on delete time 
        .then((redir) => {
          window.location = "/";
        });
    },
    error: function (err) {
      console.log(err);
    },
  });
});




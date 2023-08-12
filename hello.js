function getAndUpdate(){
    console.log("Updating List...");
    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    if (localStorage.getItem('itemsJson')==null){
        itemJsonArray = [];
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    else{
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    update();
}

function update(){
    if (localStorage.getItem('itemsJson')==null){
        itemJsonArray = []; 
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    } 
    // Retrieve 'itemsJson' from local storage and parse it to an array
    else
    {
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr); 
    }
    // Populate the table
    let tableBody = document.getElementById("tableBody");

    let str = "";  // Initialize an empty string to hold the HTML for the table rows

// Loop through each element in the itemJsonArray
    itemJsonArray.forEach((element, index) => {
        // Create a new row with table cells for each element
        //An empty string str is initialized to store the HTML for the table rows
        str += `         
        <tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td> 
        <td><button class="btn btn-sm btn-warning btn-outline-dark" onclick="deleted(${index})"><b>Delete</b></button></td> 
        </tr>`; 
    });
    
     /* NOTE:
     The HTML content for each row in the table is constructed as a string using template literals. Template literals are enclosed within backticks (`) and allow you to embed variables and expressions using ${}.
     */
 // Set the inner HTML of the table body to the generated HTML string
    tableBody.innerHTML = str;
}
add = document.getElementById("add");
add.addEventListener("click", getAndUpdate);
update();
function deleted(itemIndex){
    console.log("Delete", itemIndex);
    itemJsonArrayStr = localStorage.getItem('itemsJson')
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    // Delete itemIndex element from the array
    itemJsonArray.splice(itemIndex, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    update();

}
function clearStorage(){
    if (confirm("Do you really want to clear?")){
    console.log('Clearing the storage')
    localStorage.clear();
    update()
    }
}


    
    const addButton = document.getElementById('five');
    addButton.addEventListener('click', (event) => {
      event.preventDefault(); 
      window.location.href = "contact.html";
    });

        const addButtonTwo = document.getElementById('six');
        addButtonTwo.addEventListener('click', (event) => {
          event.preventDefault(); 
          window.location.href = "about.html";
        });
    
let myTable=document.querySelector('#table');
let people=[
    {name:"Hanife",surname:"Suleymanzade",age:21},
    { name:"Asli",surname:"Namazova",age:20},
    { name:"Shabnam",surname:"Mammadova",age:19},
    { name:"Konul",surname:"Miriyeva",age:20} 
]

let heaaders=["Name","Surname","Age"]
let table=document.createElement("table");
let headerRow=document.createElement("tr");

headers.forEach(headerText=> {
    let header=document.createElement("th");
    let textNode=document.createTextNode(headerText);
    header.appendChild(textNode);
    headerRow.appendChild(header);

});
table.appendChild(headerRow);

people.forEach( people=> {
let row=document.createElement("tr");

Object.values(people).forEach(text=>{
    let cell=document.createElement("td");
    let textNode=document.createTextNode(text);
    cell.appendChild(textNode);
    row.appendChild(cell);

})
table.appendChild("row");

})
myTable.appendChild(table);

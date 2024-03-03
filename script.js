let name1 = document.getElementById('name1'); 
let lastname = document.getElementById('lastname'); 
let age = document.getElementById('age'); 
let company = document.getElementById('company'); 
let tbody = document.getElementById('tbody')
let table = document.getElementById('myTable');

let headers = table.getElementsByTagName('th');

let data = [];

let rows = table.getElementsByTagName('tr');
for (let i = 1; i < rows.length; i++) { 
    let rowData = {};
    let cells = rows[i].getElementsByTagName('td');
    

    for (let j = 0; j < cells.length; j++) {
        let headerText = headers[j].innerText.toLowerCase();  
        rowData[headerText] = cells[j].innerText;  
        
   
    }

   
    data.push(rowData);
}
function compareNames(a, b) {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    return 0;
} 

function compareLastNames(a, b) {
    const lastNameA = a.lastname.toLowerCase();
    const lastNameB = b.lastname.toLowerCase();

    if (lastNameA < lastNameB) {
        return -1;
    }
    if (lastNameA > lastNameB) {
        return 1;
    }
    return 0;
} 

function compareCompanies(a, b) {
    const companyA = a.company.toLowerCase();
    const companyB = b.company.toLowerCase();

    if (companyA < companyB) {
        return -1;
    }
    if (companyA > companyB) {
        return 1;
    }
    return 0;
} 

function compareAges(a, b) {
    const ageA = parseInt(a.age, 10); 
    const ageB = parseInt(b.age, 10);

    return ageA - ageB;
}

 
name1.addEventListener('click', function(){ 
    
    let sortedData = data.sort(compareNames);

    
    tbody.innerHTML = '';

   
    sortedData.forEach(function(rowData) {
        let row = tbody.insertRow();
        
        
        for (let j = 0; j < headers.length; j++) {
            let headerText = headers[j].innerText.toLowerCase();
            let cell = row.insertCell(j);
            cell.innerText = rowData[headerText]; 
            
        }
    });
}); 


lastname.addEventListener('click', function(){ 
    
    let sortedData = data.sort(compareLastNames);

    
    tbody.innerHTML = '';

   
    sortedData.forEach(function(rowData) {
        let row = tbody.insertRow();
        
        
        for (let j = 0; j < headers.length; j++) {
            let headerText = headers[j].innerText.toLowerCase();
            let cell = row.insertCell(j);
            cell.innerText = rowData[headerText];
        }
    });
}); 



company.addEventListener('click', function(){ 
    
    let sortedData = data.sort(compareCompanies);

    
    tbody.innerHTML = '';

   
    sortedData.forEach(function(rowData) {
        let row = tbody.insertRow();
        
        
        for (let j = 0; j < headers.length; j++) {
            let headerText = headers[j].innerText.toLowerCase();
            let cell = row.insertCell(j);
            cell.innerText = rowData[headerText];
        }
    });
}); 


age.addEventListener('click', function(){ 
    
    let sortedData = data.sort(compareAges);

    
    tbody.innerHTML = '';

   
    sortedData.forEach(function(rowData) {
        let row = tbody.insertRow();
        
        
        for (let j = 0; j < headers.length; j++) {
            let headerText = headers[j].innerText.toLowerCase();
            let cell = row.insertCell(j);
            cell.innerText = rowData[headerText];
        }
    });
});







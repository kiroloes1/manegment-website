let body=document.querySelector(".body");




let Add_customers=[];
let y;
let edit_number;
Add_customers=JSON.parse(localStorage.getItem(("customers")));
console.log(Add_customers.length);


function Data(){
    let table='';
for(let i=0; i< Add_customers.length;i++){
    table+=`
    
    
              <tr>
            <th scope="row">${i+1}</th>
            <td>${Add_customers[i].First_name } </td>
            <td class="">${Add_customers[i].Email }<span> جنيه</span></td>
            <td>${Add_customers[i].Gender }</td>
            <td class="d-flex flex-wrap w-12 d-flex justify-content-center" >
              <a onclick="Edit(${i})" class="btn btn-primary m-1 btn-sm " data-bs-toggle="tooltip" data-bs-title="eye customer" href="./view.html"> 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill  " viewBox="0 0 16 16">
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                
              </svg>
            </a>

            <a   onclick="Edit(${i})" class="btn btn-success m-1 btn-sm" href="./edit.html" data-bs-toggle="tooltip" data-bs-title="Edit customer">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill " viewBox="0 0 16 16">
                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
             
              </svg>

            </a>
            <button onclick="  Error(), Delete(${i}), Confirm()"  class="btn btn-danger m-1 btn-sm"  >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  class="bi bi-archive-fill   " viewBox="0 0 16 16">
                <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8z"/>
             
              </svg>
            </button>



              
            </td>
            
          </tr>
    
    `
    body.innerHTML=table;
}
}
Data();


function Error(){
    Swal.fire({
        title: "warning",
        text: "Are you sure for delete this customer",
        icon: "warning",
        confirmButtonText: "OK",
        showCancelButton: true,
        confirmButtonColor: "red",
        cancelButtonText: "Cancel"
    })
    .then((result) => {
        if (result.isConfirmed) {
            if(Add_customers.length==1){
                location.reload();
                Add_customers.splice(y,1);
            localStorage.customers=JSON.stringify(Add_customers);
            Data(); 
            } 
            Add_customers.splice(y,1);
            localStorage.customers=JSON.stringify(Add_customers);
            Data(); 
          
        }
    });
    
}



function Delete(x){
  

y=x;
}

// function Confirm(){
  


// }

function Edit(i)
{
    edit_number=i;
    localStorage.setItem("edit_number",JSON.stringify(edit_number) )
    console.log(JSON.parse(localStorage.getItem(("productList"))));
}









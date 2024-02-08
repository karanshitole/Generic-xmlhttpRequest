const cl = console.log;
const Cardcontainer =document.getElementById("Cardcontainer");
const updateBtn =document.getElementById("updateBtn");
const submitBtn =document.getElementById("submitBtn");
const postForm =document.getElementById("postForm");
const titleControl=document.getElementById("title");
const contentControl =document.getElementById("content");
const userIdControl =document.getElementById("userId");

let baseurl=`https://jsonplaceholder.typicode.com/`;

let PostUrl =`${baseurl}/posts`;
let msgbody = null;

const CreateCards=(arr)=>{
   let result = arr.map(post=>{
      return `
                     <div class="card">
                     <div class="card-header">
                        <h4 class="m-0">${post.title}</h4>
                     </div>
                     <div class="card-body">
                     <p class="m-0">${post.content
                     }</p>
                     </div> 
                     <div class="card-footer d-none justify-content-between">
                        <button class="btn btn-outline-sucess"> Edit</button>
                        <button class="btn btn-outline-sucess">Delete</button>
                     </div>
                  </div>`
   }).join(" ")
}

// let xhr = new XMLHttpRequest(); // no chsnge 
// xhr.open("GET", PostUrl);// methodname and apiurl can changes
// xhr.send(msgbody);// msgBody can changes

// xhr.onload = function(){
//    if(xhr.status>=200&& xhr.status<300 &&xhr.readyState===4){
//     // API call success
//     // callback functnality can changes 
//     cl(xhr.response)
//    }
// }

const makeApicall = (methodName, apiUrl, msgBody=null, callFun)=>{
     let xhr = new XMLHttpRequest();
     xhr.open(methodName, apiUrl);
     xhr.send(msgBody)
     xhr.onload= function(){
      if(xhr.status>=200 && xhr.status<300 && xhr.readyState===4){
         let data=JSON.parse(xhr.response)
         callFun(data)
      }
     }
}
makeApicall("GET", PostUrl, null, cl)
































//   let result = ``;
//  const CreateCards = (arr)=>{
//     Cardcontainer.innerHTML=arr.map(obj=>{
//          return `  <div class="card mb-4" id="${obj.id}">
//                            <div class="card-header">
//                               <h4 class="m-0">${obj.title}</h4>
//                            </div>
//                            <div class="card-body">
//                            <p class="m-0">${obj.body}</p>
//                            </div>     
//                            <div class="card-footer d-flex justify-content-between">
//                               <button class="btn btn-primary"> Edit</button>
//                               <button class="btn btn-danger">Delete</button>
//                            </div>
//                         </div>`
//                        }).join(" ")
//  }
// let Posturl =`${baseurl}/posts`;
// let xhr = new XMLHttpRequest()
// xhr.open("Get",Posturl)
// xhr.send()
// xhr.onload=function(){
//     if(xhr.status>=200 && xhr.status<300){
//         let data = JSON.parse(xhr.response);
//         // cl(data)
//         CreateCards(data)
//     }
// }

// const onPostSubmit = (eve)=>{
//    eve.preventDefault();
//    let postObj ={
//     title : titleControl.value,
//     body : contentControl.value,
//     userId : userIdControl.value
//    }
//    cl(postObj)
//    let xhr = new XMLHttpRequest();
//    xhr.open("POST", Posturl)
//    xhr.send(JSON.stringify(postObj));
//    xhr.onload = function(){
//     if(xhr.status >=200 && xhr.status <300 && xhr.readyState===4){
//         cl(xhr.response)
//         postObj.id=JSON.parse(xhr.response).id;
//         cl(postObj)

        
//         let div = document.createElement("div");
//         div.className =`card mb-4`;
//         div.id=postObj.id;
//         div.innerHTML=`
//                  <div class="card-header">
//                    <h4 class="m-0">${postObj.title}</h4>
//                  </div>
//                  <div class="card-body">
//                     <p class="m-0">${postObj.body}</p>
//                   </div>     
//                  <div class="card-footer d-flex justify-content-between">
//                       <button class="btn btn-primary"> Edit</button>
//                       <button class="btn btn-danger">Delete</button>
//                  </div>`

//                  cl(div)
//                  Cardcontainer.append(div)
//                  postForm.reset()
//     }
//    }
// }


// postForm.addEventListener("submit", onPostSubmit)
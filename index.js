// var state = {
//     taskList:[
//         {
//             imageUrl: "",
//             tasktitle: "",
//             taskType: "",
//             taskdescription: "",
//         },
//         {
//             imageUrl: "",
//             tasktitle: "",
//             taskType: "",
//             taskdescription: "",
//         },
//         {
//             imageUrl: "",
//             tasktitle: "",
//             taskType: "",
//             taskdescription: "",
//         },
//         {
//             imageUrl: "",
//             tasktitle: "",
//             taskType: "",
//             taskdescription: "",
//         },
//         {
//             imageUrl: "",
//             tasktitle: "",
//             taskType: "",
//             taskdescription: "",
//         },
//     ]
// }

const state ={
    tasklist:[],
};

// DOM operation
const taskConents = document.querySelector(".task__contents");
const taskModal = document.querySelector(".task__modal__body")

// console.log(taskConents);
// console.log(taskModal);


// Template for the card on screen 
const htmlTaskContent = ({id, title, description, type, url}) =>
    <div class="col-md-6 col-lg-4 mt-3">
        <div class="card shadow-sm task__card">
            {/* element identifier key=${id} */}
            <div class="card-header d-flex justify-content-end task__card__header">
                <button type="button" class="btn btn-outline-primary mr=1.5 name=${id}">
                    <i class='fas fa-pencil-alt name=${id} '></i>
                </button>
                <button type="button" class="btn btn-outline-danger mr=1.5 name=${id}">
                    <i class='fas fa-trash-alt name=${id} '></i>
                </button>
            </div>
            <div class="card-body ">
               ${
                 url &&
                 "<img width='100%' src=${url} alt='card-img-top md-3 rounded-lg'/>"
               }
               <h4 class="card-title task__card__title">${title}</h4>
               <p class='description trim-3-lines'>${description}</p>
               <div class="tags text-white d-flex flex-wrap">
                <span> class="badge bg-primary m-1"${type}</span>
               </div>
            </div>
            {/* to get the content of html in jvascript we have to use $ sign in it */}

            <div class="card-footer">
                <button type='button' class='btn btn-primary float-right' data-bs-toggle="modal" data-bs-target="#exampleModal1"></button>
            </div>
        </div>
    </div>
;

// Modal body on click of open task
const htmlModalContent = ({id, title, description, url}) => {
    const date = new Date(parseInt(id));
    return
    // id name is not written which is ${id}
    <div id>
        ${
            url &&
            "<img width='100%' src=${url} alt='card image' class='img-fluid place__holder__image mb-3'/>"
        }
        <strong class='text-muted text-sm'>Created on : ${date.toDateString()}</strong>
        <h2 class='my-3'>${title}</h2>
        <p class='text-muted'>${description}</p>
    </div>
    ;
};

const updateLocalStorage = () => {
    localStorage.setItem(
        "tasky",
        JSON.stringify({
            tasks: state.tasklist,
        })
    );
};
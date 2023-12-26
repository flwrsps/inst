let ion_logo_btn = document.querySelector(".ion-logo_btn");
let btn = document.querySelector(".ion-logo_btn button");
let list = document.querySelector(".list");

let ava_img = document.querySelector(".ava-img");
let inp_img = document.querySelector(".inp-img");
let logo_inp = document.querySelector(".logo-inp");
let btn_save = document.querySelector(".btn-save");
let main_img = document.querySelector(".main_img");
readAva();

btn.addEventListener("click", () => {
  list.style.display = "block";
  listblock();
});

list.addEventListener("click", () => {
  list.style.display = "none";
});
ava_img.addEventListener("click", () => {
  logo_inp.style.display = "block";
  //   readAva();
});

btn_save.addEventListener("click", () => {
  let data = JSON.parse(localStorage.getItem("foto")) || [];

  let newObj = {
    ava: inp_img.value,
  };

  data.push(newObj);
  console.log(newObj);
  localStorage.setItem("foto", JSON.stringify(data));
  readAva();
});

function readAva() {
  let newData = JSON.parse(localStorage.getItem("foto")) || [];
  newData.forEach((el) => {
    ava_img.src = el.ava;
    main_img.src = el.ava;
  });
}

function listblock() {
  let blockTitle = document.createElement("div");
  let info = document.createElement("div");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  let p4 = document.createElement("p");
  let p5 = document.createElement("p");
  let p6 = document.createElement("p");
  let p7 = document.createElement("p");

  p1.innerHTML = `<ion-icon name="cog"></ion-icon> Настройки`;
  p2.innerHTML = `<ion-icon name="reader"></ion-icon> Ваши действия`;
  p3.innerHTML = `<ion-icon name="bookmark"></ion-icon> Сохраненное`;
  p4.innerHTML = `<ion-icon name="moon"></ion-icon> Переключить режим`;
  p5.innerHTML = `<ion-icon name="alert-circle"></ion-icon> Сообщение о проблеме`;
  p5.innerText = "Переключение между акк...";
  p6.innerText = "Выйти";

  //classlist
  blockTitle.classList.add("blockTitle");
  info.classList.add("info");
  p6.classList.add("info-p6");
  p5.classList.add("info-p5");
  //classlist

  //? style
  info.style.textAlign = "start";

  //? style

  info.append(p1);
  info.append(p2);
  info.append(p3);
  info.append(p4);
  info.append(p5);
  info.append(p6);
  info.append(p7);
  blockTitle.append(info);
  list.append(blockTitle);
  console.log(list);
}
let listPost = document.querySelector(".post");
let Create_post = document.querySelector(".Create_post");
let modal_post = document.querySelector(".modal_post");
let new_post_inp = document.querySelector(".new_post_inp");
let post_create = document.querySelector(".post_create");
let create_post_img = document.querySelector(".create_post_img");

Create_post.addEventListener("click", () => {
  modal_post.style.display = "block";
});

readPost();

post_create.addEventListener("click", () => {
  let obj = {
    new_post: new_post_inp.value,
  };
  let post = JSON.parse(localStorage.getItem("new_post")) || [];
  post.push(obj);
  localStorage.setItem("new_post", JSON.stringify(post));
  readPost();
});

function readPost() {
  let newPost = JSON.parse(localStorage.getItem("new_post")) || [];
  listPost.innerHTML = "";
  newPost.forEach((el, index) => {
    let create_post_img = document.createElement("img");
    let block_post = document.createElement("div");
    let deletebtn = document.createElement("button");
    deletebtn.innerText = "delete";
    create_post_img.src = el.new_post;
    block_post.append(deletebtn);
    listPost.append(block_post);
    block_post.append(create_post_img);
    console.log(block_post);
    block_post.classList.add("block_post");
    create_post_img.classList.add("create_post_img");
    deletebtn.classList.add("delete_btn");
    block_post.style.margin = "5px";
    create_post_img.style.width = "210px";
    create_post_img.style.height = "210px";

    create_post_img.addEventListener("click", () => {
      deletebtn.style.display = "block";
    });

    deletebtn.addEventListener("click", () => {
      deletePost(index);
    });
  });
}

function deletePost(id) {
  let post = JSON.parse(localStorage.getItem("new_post")) || [];
  post.splice(id, 1);
  localStorage.setItem("new_post", JSON.stringify(post));
  readPost();
}

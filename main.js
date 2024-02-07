const answers = document.querySelectorAll(".faq_item");
const showHides = document.querySelectorAll(".show");

function toggAns(id) {
  const targetItem = event.currentTarget.parentElement;
  showHides.forEach((showHide)=>{
    if(showHide.src !== "./assets/images/icon-plus.svg"){
      showHide.src = "./assets/images/icon-plus.svg";
    }
  })
  answers.forEach((answer)=>{
    answer.classList.remove("active");
  })
  
  targetItem.parentElement.classList.toggle("active");
  //console.log(event.currentTarget.src.value);
  if(event.currentTarget.src !== "./assets/images/icon-minus.svg"){
    event.currentTarget.src = "./assets/images/icon-minus.svg";
  }
}
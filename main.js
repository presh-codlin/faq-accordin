const answers = document.querySelectorAll(".faq_item");
const showHides = document.querySelectorAll(".show");

function toggAns(id) {
  const targetItem = event.currentTarget.parentElement;
  showHides.forEach((showHide)=>{
    showHide.src = "./assets/icon-plus.svg";
  })
  answers.forEach((answer)=>{
    answer.classList.remove("active");
  })
  targetItem.parentElement.classList.toggle("active");
  event.currentTarget.src = "./assets/icon-minus.svg";
}

const loading = document.querySelectorAll(".loading");
window.setTimeout(removeLoading, 2000);
function removeLoading(){
    loading.forEach((element) => {
       element.classList.remove("loading")
    })
}
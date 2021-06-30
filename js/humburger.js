document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('bar').addEventListener('click', function(){
        this.classList.toggle('active');
        document.getElementsByClassName("border").classList.toggle('active');
    })
});
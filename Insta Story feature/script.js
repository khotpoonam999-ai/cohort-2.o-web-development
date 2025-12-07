var arr = [
    {dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjj7qaqmr3SUvxIb3E-iMgXjfzcAmoEGQO7A&s",
    story:"https://i.pinimg.com/736x/06/39/42/063942828a94e22804f251a28df05ad0.jpg"},
    {dp:"https://i.pinimg.com/736x/12/d6/94/12d694f54fa6c8ddaf26a193c858de0c.jpg",
    story:"https://s6573.pcdn.co/wp-content/uploads/2025/02/Chota-Bheem.jpg"},
    {dp:"https://play-lh.googleusercontent.com/NiSFTgI1pGeWbMJRwHDFk5r93laHboV0vmcCB2UEF0Q8iaFoWMCTLAQpsF9ehaV6QQ8",
    story:"https://files.prokerala.com/movies/pics/800/movie-poster-62964.jpg"},
    {dp:"https://w0.peakpx.com/wallpaper/830/24/HD-wallpaper-doraemon-anime-doraemon-and-nobita-mini-doraemon-nobita-nobita-and-doraemon.jpg",
    story:"https://i.pinimg.com/474x/4f/8b/75/4f8b758aa770582c0206563509ca92ef.jpg"},

]

var storiyan = document.querySelector("#storiyan")
var clutter = ""
arr.forEach(function(elem,idx){
   clutter += `<div class="story">
    <img  id="${idx}"  src="${elem.dp}" alt="">
</div>`
   
    
})
storiyan.innerHTML = clutter;

storiyan.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display = "block" 
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`
    
    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none"
    },3000)
});





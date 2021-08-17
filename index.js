fetch("https://api.vadoo.tv/get_channel_info")
.then((response) => {
    return response.json()
})
.then((data) => {
    var count = 1
    data.forEach(i => {
        var card = document.createElement("div")    //bootstrap card
        card.classList.add("card","bg-transparent","card-"+count,"col-4","m-3","p-0","border-0")
        document.querySelector(".card-container").appendChild(card) 

        var video = document.createElement("a")     //link to video
        video.classList.add("fancybox","fancybox.iframe","video-link","link-"+count)
        video.setAttribute("data-fancybox", "video-gallery")
        video.setAttribute("data-fancybox-type", "iframe")
        video.setAttribute("data-src", i.url) 
        video.setAttribute("crossOrigin", "anonymous")
        document.querySelector(".card-"+count).appendChild(video) 

        // var vidLink = document.createElement("a")     //link to vidLink
        // vidLink.classList.add("video-link","link-"+count)
        // vidLink.setAttribute("data-fancybox", "dialog")
        // vidLink.setAttribute("data-fancybox-type", "iframe")
        // vidLink.setAttribute("data-src", "#vidLink-display-"+count) 
        // vidLink.setAttribute("crossOrigin", "anonymous")
        // document.querySelector(".card-"+count).appendChild(vidLink) 

        var image = document.createElement("img")       //thumbnail
        image.classList.add("card-image","card-image-"+count) 
        image.src = i.thumbnail 
        document.querySelector(".link-"+count).appendChild(image) 

        var body = document.createElement("div")    // card body
        body.classList.add("card-body","card-body-"+count,"p-0") 
        body.id = "card-body-"+count
        document.querySelector(".card-"+count).appendChild(body) 

        var title = document.createElement("h5")        //card title
        title.classList.add("card-title","fw-bold","card-title-"+count) 
        title.innerHTML = i.title 
        document.querySelector(".card-body-"+count).appendChild(title)

        // var videoBody = document.createElement("div")
        // videoBody.classList.add("video-body","video-body-"+count)
        // videoBody.style ="display:none"
        // videoBody.id = "video-display-"+count
        // document.querySelector(".card-body-"+count).appendChild(videoBody)

        // var video = document.createElement("iframe")
        // video.classList.add("video","video-"+count)
        // video.src =i.url
        // video.setAttribute("muted", "muted")
        // video.setAttribute("allow", "autoplay")
        // document.querySelector(".video-body-"+count).appendChild(video)

        document.querySelector(".card-"+count).addEventListener('mouseover', () => {
            image.src=i.gif_thumbnail
            image.classList.add("border","border-dark","border-5")  
        })
        document.querySelector(".card-"+count).addEventListener('mouseout', () => {
            image.src=i.thumbnail
            image.classList.remove("border","border-dark","border-5")  
        })
        count++
    }); 
})
.catch()



document.querySelector(".scroll-left").addEventListener('click', function() {
    document.querySelector(".card-container").scrollLeft += 330;
})
document.querySelector(".scroll-right").addEventListener('click', function() {
    document.querySelector(".card-container").scrollLeft -= 330;
})


if (matchMedia) {
    const mq = window.matchMedia("(max-width: 1024px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
    }
    
function WidthChange(mq) {
    if (mq.matches) {
        document.querySelector(".page-wrapper").classList.remove("vw-100");
        document.querySelector(".control-container").classList.add("d-none");
        document.querySelector(".card-container").classList.remove("flex-row");
        document.querySelector(".card-container").classList.remove("vw-100");
        document.querySelector(".card-container").classList.remove("mt-5");
        document.querySelector(".card-container").classList.add("flex-column");
        document.querySelector(".bg-gif").classList.add("d-none");
    }
    else{
        document.querySelector(".page-wrapper").classList.add("vw-100");
        document.querySelector(".control-container").classList.remove("d-none");
        document.querySelector(".card-container").classList.add("flex-row");
        document.querySelector(".card-container").classList.add("vw-100");
        document.querySelector(".card-container").classList.add("mt-5");
        document.querySelector(".card-container").classList.remove("flex-column");
        document.querySelector(".bg-gif").classList.remove("d-none");
    }
    
}
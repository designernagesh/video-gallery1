fetch("data.json")
.then(response => response.json())
.then(result => 
    {
        appendData(data);
    }
);

function appendData(data) {
    let videoContainer = document.querySelector('.video-container');
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = `<div class="video">
                 <video src=${result[0].path} muted />
             </div>`;
             videoContainer.appendChild(div);
    }
}

let video = document.querySelectorAll('video');

video.forEach(play => play.addEventListener('click', () => {
    play.classList.toggle('active');
    if(play.paused){
        play.play()
    }else{
        play.pause();
        play.currentTime = 0;
    }
}))
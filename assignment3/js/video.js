var video = {
    controls: true, 
    width: 320,
    height: 240,
    source: [
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/movie.mp4", type: "video/mp4"},
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/movie.ogg", type: "video/ogg"},
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/movie.webm", type: "video/webm"}
    ]
};
window.onload=function(){
    var myvideo=document.querySelector("#video");
    var showVideo="<video width='"+video.width+"'"+" height='"+video.height+"'"+" controls='"+video.controls+"'/>";
       for(var i=0;i<video.source.length;i++){
            showVideo+= "<source src='"+video.source[i].src+"'"+" type='"+video.source[i].type+"'/>";
        }
    myvideo.innerHTML=showVideo;
}
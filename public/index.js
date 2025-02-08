import './assets/scss/_variables.scss'
import './assets/scss/style.scss';
import './index.html';

document.addEventListener('DOMContentLoaded', ()=>{
    const videoPlayer = document.getElementById('videoPlayer');
    const videoPreview = document.getElementById('videoPreview');
    const videoButton = document.getElementById('videoButton');

    videoButton.addEventListener('click', ()=>{
        console.log('test');
        videoPlayer.classList.add('video__player--show');
        videoPreview.classList.add('video__preview--hidden');
        videoButton.classList.add('video__button--hidden');

        const videoSrc = videoPlayer.getAttribute('src');
        videoPlayer.setAttribute('src', `${videoSrc}&autoplay=1`);
    });
});
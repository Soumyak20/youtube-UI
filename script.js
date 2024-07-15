document.addEventListener('DOMContentLoaded', () => {
    // Extract video id from URL
    const params = new URLSearchParams(window.location.search);
    const videoId = params.get('id');
    
    if (videoId) {
        loadVideo(videoId);
    }
});

function loadVideo(id) {
    const videoData = {
        1: {
            src: 'video1.mp4',
            title: 'Video 1 Title'
        },
        2: {
            src: 'video2.mp4',
            title: 'Video 2 Title'
        }
    };

    const video = videoData[id];
    if (video) {
        document.getElementById('video-source').src = video.src;
        document.getElementById('video-title').innerText = video.title;
        document.getElementById('video').load();
    } else {
        alert('Video not found');
    }
}

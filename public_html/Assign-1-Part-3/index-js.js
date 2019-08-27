isSmile = 0;

function toSmile() {
    if (!isSmile) {
        document.getElementById('faceImage').src = 'smile.png';
        isSmile = 1;
    }
    else 
    {
        document.getElementById('faceImage').src = 'frown.png';
        isSmile = 0;
    }
}
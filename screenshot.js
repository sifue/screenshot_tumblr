function showScreenshot(dataUrl) {
    var pDate = document.createElement('p');
    pDate.innerHTML = 'Captured at ' + new Date().toString();
    document.body.appendChild(pDate);

    var imgScreenShot = document.createElement('img');
    imgScreenShot.setAttribute('src', dataUrl);
    imgScreenShot.setAttribute('id', 'movie_screenshot');
    document.body.appendChild(imgScreenShot);
}

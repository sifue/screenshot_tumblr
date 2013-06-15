// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function setScreenshotUrl(url) {

    var imgScreenShot = document.createElement('img');
    imgScreenShot.setAttribute('src', url);
    imgScreenShot.setAttribute('id', 'movie_screenshot');
    document.body.appendChild(imgScreenShot);

    var s = window.getSelection()
    var r = document.createRange();
    r.selectNode(imgScreenShot);
    s.addRange(r);
}

(function(){
    // Resuest to gazo.cc proxy
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function() {
        var READYSTATE_COMPLETED = 4;
        var HTTP_STATUS_OK = 200;
        if( this.readyState == READYSTATE_COMPLETED) {
            if (this.status == HTTP_STATUS_OK ) {
                var tumblr_photo_source = this.responseText;
                var tumblr_photo_caption = document.title;
                var tumblr_photo_click_thru = document.location;

                // 投稿した画像URLが存在して、FAILという文字列でない時のみ実施
                if(tumblr_photo_source && tumblr_photo_source !== 'FAIL') {
                    // button script of tumblr http://www.tumblr.com/buttons
                    var shareURL = "http://www.tumblr.com/share/photo?source=" + encodeURIComponent(tumblr_photo_source) + "&caption=" + encodeURIComponent(tumblr_photo_caption) + "&clickthru=" + encodeURIComponent(tumblr_photo_click_thru);
                    window.open(shareURL, "Share on tumblr", "width=500,height=400");
                } else {
                    alert('すみませんが、サーバー上で正しく変換することができませんでした');
                }

            } else {
                alert('すみませんが、画像変換サーバーにアクセスできませんでした');
            }
        }
    };
    xmlHttpRequest.open('POST', 'http://www.soichiro.org/gazo/post.php', true);
    xmlHttpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    var params = 'upfile=' + encodeURIComponent(screenshotDataUrl);
    xmlHttpRequest.send(params);
})();
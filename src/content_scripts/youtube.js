// コンテンツ読み込み時に拡張機能が有効か確認して有効なら処理を実行
chrome.runtime.sendMessage({ contents: 'youtube' }, (isAvailable) => {
    if (isAvailable) {
        setTimeout(() => {
            removeRelatedVideos();
            removeAdvertisement();
        }, 3000);

    }
});

// 関連動画の削除
function removeRelatedVideos() {
    // 関連動画などが表示されているブロック全体
    const secondary = document.getElementById('secondary');
    // 自動再生のトグル操作を行う要素
    const head = document.getElementById('head');
    // 次の動画と表示されるテキスト
    const upnext = document.getElementById('upnext');
    // 動画終了時に表示される関連動画
    const videos = document.querySelector('.videowall-endscreen');

    secondary.style.visibility = 'hidden';
    head.style.visibility = 'visible';
    upnext.style.visibility = 'hidden';
    videos.remove();
};

// 広告の削除
function removeAdvertisement() {
    // 関連動画がある場所の広告
    const playerAds = document.querySelectorAll('#player-ads');
    // 動画内の広告
    const videoAds = document.querySelectorAll('.video-ads');

    for (const playerAd of playerAds) {
        playerAd.remove();
    }
    for (const videoAd of videoAds) {
        videoAd.remove();
    }
};
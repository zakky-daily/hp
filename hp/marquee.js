'use strict'

// 横自動スクロール
function marqueeMessage() {
    const $message = $('.title .message');
    const $inner   = $('.title .message .inner');
    $inner.css({'display': 'block', 'translate': $message.width() + 'px'});
    $inner.animate({'translate': -$inner.width() + 'px'}, 30000, 'linear', marqueeMessage);
}

// 初期呼び出し
$(window).on('load', () => {
    marqueeMessage();
});


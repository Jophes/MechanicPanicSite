var btns, tabContainer, spanIndicator, target = 0, current = 0, timerActive, timerId;

function updateMargin() {
    current = current + (target - current) * 0.15;
    if (Math.abs(current-target) <= 0.1) {
        current = target;
        timerActive = false;
        clearInterval(timerId);
    }
    tabContainer.style = 'margin-left: -' + current + '%;';
    spanIndicator.style = 'left: ' + (48 + current * 1.6) + 'px;';
}

function btnPressed(index) {
    target = (index * 100);
    if (!timerActive) {
        timerActive = true;
        timerId = setInterval(updateMargin, 17);
    }
}

function onLoad() {
    spanIndicator = document.getElementById('content-indicator');
    tabContainer = document.getElementsByClassName('container-tabs')[0];
    tabViewer = document.getElementsByClassName('container-tabs-viewer')[0];
    btns = document.getElementsByClassName('container-nav')[0].getElementsByTagName('nav')[0].getElementsByTagName('button');
    for (i = 0; i < btns.length; i++) {
        (function() {
            var k = i;
            btns[i].addEventListener('click', function() { btnPressed(k); });
        })();
    }
}

window.addEventListener('load', onLoad);
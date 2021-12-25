function zeroPadding(num,length){
    return ('0000000000' + num).slice(-length);
}

function countDown () {
    const nowDate = Date.now();

    const nowYear = new Date().getFullYear();
    
    const target = new Date(`2022-01-01T00:00+09:00`);
    const targetDate = target.getTime();

    let diffTime = targetDate - nowDate;
    if( diffTime < 0 ) return $('.times').css('display','none');

    const day = diffTime / ( 1000 * 60 * 60 * 24 );
    diffTime = diffTime % ( 1000 * 60 * 60 * 24 );

    const hour = diffTime / ( 1000 * 60 * 60 );
    diffTime = diffTime % ( 1000 * 60 * 60);

    const min = diffTime / ( 1000 * 60 ); 
    diffTime = diffTime % ( 1000 * 60);

    const sec = diffTime / 1000;
    diffTime = diffTime % 1000;

    $('#days').text(Math.floor(day))
    $('#hours').text(zeroPadding(Math.floor(hour), 2))
    $('#minutes').text(zeroPadding(Math.floor(min), 2))
    $('#seconds').text(zeroPadding(Math.floor(sec), 2))
}

setInterval('countDown()', 100);
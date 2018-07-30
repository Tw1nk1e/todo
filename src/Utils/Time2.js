export default function timePass(d0) {

    var d1 = new Date();

    var diff = Math.abs(d1.getTime() - d0.getTime());

    var msec = diff;

    var dd = Math.floor(msec / 1000 / 60 / 60 / 24);
    msec -= dd * 1000 * 60 * 60 * 24;

    var hh = Math.floor(msec / 1000 / 60 / 60);
    if (hh < 10) hh = '0' + hh;
    msec -= hh * 1000 * 60 * 60;

    var mm = Math.floor(msec / 1000 / 60);
    if (mm < 10) mm = '0' + mm;
    msec -= mm * 1000 * 60;

    var ss = Math.floor(msec / 1000);
    if (ss < 10) ss = '0' + ss;
    msec -= ss * 1000;

    var result = ss + ' sec';

    if (mm > 0) {
        result = mm + ':' + ss
    } if (hh > 0) {
        result = hh + ':' + mm + ':' + ss
    }

    return (
        result
    );

}

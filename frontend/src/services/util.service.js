export const utilService = {
    makeId,
    makeLorem,
    getRandomIntInclusive,
    delay,
    timeSince,
    isValidUrl,
    getTimeDiff,
    getDateByTimestamp
}

function makeId(length = 6) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return txt;
}

function makeLorem(size = 100) {
    var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn'];
    var txt = '';
    while (size > 0) {
        size--;
        txt += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    return txt;
}

function isValidUrl(txt) {
    const urlExp = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/g
    return urlExp.test(txt)
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function delay(ms = 1500) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}

function timeSince(date) {
    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
        if (Math.floor(interval) === 1) return "a year ago";
        return Math.floor(interval) + " years ago";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        if (Math.floor(interval) === 1) return "a month ago";
        return Math.floor(interval) + " months ago";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        if (Math.floor(interval) === 1) return "a day ago";
        return Math.floor(interval) + " days ago";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        if (Math.floor(interval) === 1) return "an hour ago";
        return Math.floor(interval) + " hours ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
        if (Math.floor(interval) === 1) return "an minute ago";
        return Math.floor(interval) + " minutes ago";
    }
    if (Math.floor(seconds) === 0) return "a few seconds ago";
    return Math.floor(seconds) + " seconds ago";
}


const _duration = (difference) => {
    let secondsInMiliseconds = 1000,
        minutesInMiliseconds = 60 * secondsInMiliseconds,
        hoursInMiliseconds = 60 * minutesInMiliseconds;
    var differenceInHours = difference / hoursInMiliseconds,
        differenceInMinutes = differenceInHours % 1 * 60,
        differenceInSeconds = differenceInMinutes % 1 * 60;
    return {
        "hours": Math.floor(differenceInHours),
        "minutes": Math.floor(differenceInMinutes),
        "seconds": Math.floor(differenceInSeconds)
    }
}

function getTimeDiff(createdAt, action = "Added") {
    const timeDiff = _duration(Date.now() - createdAt)
    if (!timeDiff.minutes && !timeDiff.hours) {
        console.log('im here');
        return `${action}  ${timeDiff.seconds} seconds ago`
    } else if (timeDiff.minutes && !timeDiff.hours) {
        console.log('im here!!!');
        return `${action}  ${timeDiff.minutes} minutes ago`
    } else {
        console.log('im here@@@@@');

        return `${action}  ${timeDiff.hours} hours ago`
    }
}




function getDateByTimestamp(timestamp) {
    const currYear = new Date().getFullYear()
    const dueYear = new Date(timestamp).getFullYear()
    let strDate = ''
    strDate += `${new Date(timestamp).toLocaleString('en-GB', { day: 'numeric' })} `
    strDate += `${new Date(timestamp).toLocaleString('en-GB', { month: 'short' })} at `
    if (dueYear !== currYear) {
        strDate += `${dueYear} `
    }
    strDate += `${new Date(timestamp).toLocaleString('en-GB', { hour: 'numeric', minute: 'numeric', hour12: true }).toLocaleUpperCase()}`
    return strDate
}
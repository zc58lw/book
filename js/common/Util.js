module.exports = {
    transitionTo: function (url) {
        var loc = window.location;
        var addr = loc.protocol + '//' + loc.host + '/';
        // loc.hash = '#' + url;
        if(window.location.href.indexOf(url) != -1){
            return;
        }
        window.location.replace(addr + '#' + url);
    },
};

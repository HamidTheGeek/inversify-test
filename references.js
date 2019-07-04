requirejs.config({
    baseUrl: './dist',
    paths: {
        // "inversify": "../node_modules/inversify/lib/inversify"
    },
    map: {
    },
    shim: {
    }
});

$(document).ready(function () {
    $('button').click(function () {
        require(['index'], function (index) {
            debugger;
            index.default.Set();
        });
    });
});
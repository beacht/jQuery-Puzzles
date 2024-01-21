$(document).ready(function () {
    $('#menu a').on('click', function (e) {
        var page = $(this).attr('href');
        console.log("clicky");
        
        // Redirect the browser to the selected page
        window.location.href = page;
    });
});

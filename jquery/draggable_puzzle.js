$(document).ready(function () {
    // Initialize draggable pieces
    $('.puzzle-piece').draggable({
        stack: '.puzzle-piece',
    });

    // Snap each piece to its target position
    $('#piece1').draggable('option', 'snap', '#piece1, #piece2, #piece3, #piece4, #piece5, #piece6');
    $('#piece2').draggable('option', 'snap', '#piece1, #piece2, #piece3, #piece4, #piece5, #piece6');
    $('#piece3').draggable('option', 'snap', '#piece1, #piece2, #piece3, #piece4, #piece5, #piece6');
    $('#piece4').draggable('option', 'snap', '#piece1, #piece2, #piece3, #piece4, #piece5, #piece6');
    $('#piece5').draggable('option', 'snap', '#piece1, #piece2, #piece3, #piece4, #piece5, #piece6');
    $('#piece6').draggable('option', 'snap', '#piece1, #piece2, #piece3, #piece4, #piece5, #piece6');
});

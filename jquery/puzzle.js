$(document).ready(function () {
    const piecePositions = {
        piece1: { top: Math.floor(Math.random() * 400), left: Math.floor(Math.random() * 600) },
        piece2: { top: Math.floor(Math.random() * 400), left: Math.floor(Math.random() * 600) },
        piece3: { top: Math.floor(Math.random() * 400), left: Math.floor(Math.random() * 600) },
        piece4: { top: Math.floor(Math.random() * 400), left: Math.floor(Math.random() * 600) },
        piece5: { top: Math.floor(Math.random() * 400), left: Math.floor(Math.random() * 600) },
        piece6: { top: 10, left: 0 }, // Adjust the initial position of the movable piece
    };

    const targetPositions = {
        piece1: { top: 0, left: 0 },
        piece2: { top: 0, left: 160 },
        piece3: { top: 0, left: 320 },
        piece4: { top: 270, left: 0 },
        piece5: { top: 270, left: 160 },
        piece6: { top: 10, left: 0 }, // Starting position of the movable piece
    };

    const pieceStep = 10; // Set the amount to move the piece
    const delayBeforeMove = 1000; // Delay in milliseconds (1 second)

    function movePiece(pieceId, top, left) {
        $('#' + pieceId).animate({
            top: '+=' + top, // Use relative movement
            left: '+=' + left
        }, 250);
    }

    // Move pieces 1-5 to their initial random positions
    for (const piece in piecePositions) {
        if (piece !== 'piece6') {
            const initialPosition = piecePositions[piece];
            $('#' + piece).css(initialPosition);
        }
    }

    // Delay before moving pieces 1-5 to their target positions
    setTimeout(function () {
        for (const piece in piecePositions) {
            if (piece !== 'piece6') {
                const targetPosition = targetPositions[piece];
                movePiece(piece, targetPosition.top - piecePositions[piece].top, targetPosition.left - piecePositions[piece].left); // Animate each piece to its target position
            }
        }
    }, delayBeforeMove);

    $('#up').click(function () {
        movePiece('piece6', -pieceStep, 0);
    });

    $('#down').click(function () {
        movePiece('piece6', pieceStep, 0);
    });

    $('#left').click(function () {
        movePiece('piece6', 0, -pieceStep);
    });

    $('#right').click(function () {
        movePiece('piece6', 0, pieceStep);
    });
});

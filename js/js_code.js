document.addEventListener("DOMContentLoaded", function () {

    let cursor_coordinates = document.getElementById('cursor_coordinates');

    // document.addEventListener('mousemove', function (event) {
    //     cursor_coordinates.innerHTML = event.clientX + ' : ' + event.clientY;
    // });

    document.addEventListener('mousemove', function (event) {
        const x = event.clientX;
        const y = event.clientY;

        cursor_coordinates.textContent = `X: ${x}, Y: ${y}`;

        if (x > 500) {
            cursor_coordinates.style.color = 'red';
        }
        if (x < 500) {
            cursor_coordinates.style.color = 'blue';
        }
    });

})


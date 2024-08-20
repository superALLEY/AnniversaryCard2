$(document).ready(function() {
    let elements = ['#message-1', '#message-2', '#message-3', '.photo'];
    let index = 0;

    $('#afficher-btn').on('click', function() {
        if (index < elements.length) {
            $(elements[index]).fadeIn(500).addClass('photo-visible');
            index++;
        }
        if (index === elements.length) {
            $('#afficher-btn').prop('disabled', true).text('Tout est affiché');
        }
    });
});

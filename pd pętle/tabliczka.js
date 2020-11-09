function renderSheet(length) {
    var final = '<table>';
    for (var i = 1; i <= length; i++) {
        final += '<tr>';
        for (var j = 1; j <= length; j++) {
            final += "<td>" + j * i + "</td>";
        }
        final += '</tr>';
    }
    return final;
}
document.write(renderSheet(10));

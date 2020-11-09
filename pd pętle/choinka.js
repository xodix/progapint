function renderChristmassTree(length) {
    var final = '';
    for (var i = 1; i <= length; i++) {
        for (var j = 1; j <= i; j++) {
            final += "*";
        }
        final += "<br />";
    }
    return final;
}
document.write(`<div style="text-align: center;">${renderChristmassTree(40)}*<br />*</div>`);

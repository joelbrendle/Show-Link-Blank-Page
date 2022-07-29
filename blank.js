
// add element after body
var el = document.createElement('div');
el.innerHTML = '<div id="custom_blank_element">_blank</div>';
document.body.appendChild(el);


// onhover any a tag
document.querySelector('body').addEventListener('mouseover', function(e) {
    if (e.target.tagName === 'A') {
        if ( e.target.target === '_blank' ) {
            // set visibility of element to visible
            document.getElementById('custom_blank_element').style.visibility = 'visible';

            // set position of element to mouse position
            document.getElementById('custom_blank_element').style.top = e.pageY + 'px';
            document.getElementById('custom_blank_element').style.left = (e.pageX + 15) + 'px';
        }
    }
});

// if not mouseover a tag, set visibility of element to hidden
document.querySelector('body').addEventListener('mouseout', function(e) {
    if (e.target.tagName !== 'A') {
        document.getElementById('custom_blank_element').style.visibility = 'hidden';
    }
});

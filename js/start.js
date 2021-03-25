var learn = document.getElementsByName('learn');

for (let i = 0; i < learn.length; i++) {
    learn[i].addEventListener('click', function () {
        alert('test');
    });
}

// learn.addEventListener('click', function onClick() {
//     alert('test');
// });

// $('a[name="learn"]').click(function () {
//     alert('test');
// });

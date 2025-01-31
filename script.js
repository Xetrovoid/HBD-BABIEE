const correctPassword = 'AASHI01'; // Set your password here

function checkPassword() {
    const passwordInput = document.getElementById('password').value;
    if (passwordInput === correctPassword) {
        document.getElementById('cover').style.display = 'none';
        document.getElementById('diary').style.display = 'block';
    } else {
        alert('Incorrect password! Try again.');
    }
}

function saveDiary() {
    const diaryContent = document.getElementById('diaryContent').value;
    localStorage.setItem('secretDiary', diaryContent);
    alert('Diary saved successfully!');
}

window.onload = function() {
    const savedContent = localStorage.getItem('secretDiary');
    if (savedContent) {
        document.getElementById('diaryContent').value = savedContent;
    }
};

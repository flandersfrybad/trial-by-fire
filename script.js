function useName(event) {
    event.preventDefault();
    const inputusername = document.getElementById('username-field');
    const username = inputusername.value;

    if (username.trim() === "") { // Check for empty or whitespace-only input
        alert("Please enter a username.");
        return; // Stop the function if the input is invalid
    }

    const topheading = document.getElementById('top-heading');
    topheading.innerText = `hello ${username}`;
    console.log({ username });
}

function appendnumbertonumberlist() {
    const list = document.getElementById('numbered-list');
    const newbullet = document.createElement('li');
    const randomnumber = Math.round(Math.random() * 10);
    newbullet.innerText = randomnumber;
    list.append(newbullet);
}
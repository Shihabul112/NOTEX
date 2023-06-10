shownotes();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function() {
  let title = document.getElementById("noteTitle").value;
  let desc = document.getElementById("noteDesc").value;

  let note = localStorage.getItem("note");
  if (note == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(note);
  }

  notesObj.push({ title, desc });
  localStorage.setItem("note", JSON.stringify(notesObj));

  document.getElementById("noteTitle").value = "";
  document.getElementById("noteDesc").value = "";

  shownotes();
});

function shownotes() {
  let note = localStorage.getItem("note");
  if (note == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(note);
  }

  let html = "";
  notesObj.forEach(function(element, index) {
    html += `
    <div class="new card mx-2 my-3" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${element.title}</h5>
        <p class="card-text">${element.desc}</p>
        <button id="${index}" onclick="deleteNode(this.id)" class="btn btn-primary">Delete Note</button>
        <button id="${index}" onclick="editNode(this.id)" class="btn btn-primary">Edit Note</button>
      </div>
    </div>`;
  });

  let display = document.getElementById("notes");
  if (notesObj.length != 0) {
    display.innerHTML = html;
  } else {
    display.innerHTML = `<h4>No notes present at the moment</h4>`;
  }
}

function deleteNode(id) {
  let note = localStorage.getItem("note");
  if (note == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(note);
  }

  notesObj.splice(id, 1);
  localStorage.setItem("note", JSON.stringify(notesObj));

  shownotes();
}

function editNode(id) {
  let note = localStorage.getItem("note");
  if (note == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(note);
  }

  let editedTitle = prompt("Enter new title:");
  let editedDesc = prompt("Enter new description:");

  notesObj[id].title = editedTitle;
  notesObj[id].desc = editedDesc;

  localStorage.setItem("note", JSON.stringify(notesObj));

  shownotes();
}



document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    var userData = {
      username: username,
      password: password
    };
  
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        data.users.push(userData);
  
        return fetch('data.json', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
      })
      .then(() => {
        alert('Registration successful. Please login.');
        window.location.href = 'login.php';
      })
      .catch(error => {
        console.log('Error:', error);
      });
  });

  



  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        var user = data.users.find(user => user.username === username && user.password === password);
  
        if (user) {
          alert('Login successful.');
          window.location.href = 'index.html';
        } else {
          alert('Invalid username or password.');
        }
      })
      .catch(error => {
        console.log('Error:', error);
      });
  });

  




  function openNotepad() {
    window.location.href = "login.php";
  }
  
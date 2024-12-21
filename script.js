const courses = ["Mathematics", "Physics", "Chemistry", "Biology", "Computer Science"];

const courseList = document.getElementById('courseList');
if (courseList) {
  courses.forEach(course => {
    const li = document.createElement('li');
    li.textContent = course;
    courseList.appendChild(li);
  });
}

// Registration
const registerForm = document.getElementById('registerForm');
if (registerForm) {
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    localStorage.setItem('user', JSON.stringify({ name, email, password }));
    alert("Registration successful!");
    window.location.href = "login.html";
  });
}

// Login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.email === email && user.password === password) {
      alert("Login successful!");
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid email or password!");
    }
  });
}

let cart = [];

function add(product) {
    cart.push(product);

    document.querySelector(".cart").innerHTML =
        cart.map(item => `<li>${item}</li>`).join("");
}

function addTask() {
    let task = document.querySelector("#task").value;
    let comment = document.querySelector("#comment").value;

    document.querySelector("#tasks").innerHTML += `
        <div class="task">
            ✅ ${task}<br>
            💬 ${comment}<br>
            Status: Todo
        </div>
    `;
}

function register() {
    alert("Registered successfully!");
}

function login() {
    alert("Login successful!");
}
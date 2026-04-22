// Student Number: 224100339

window.onload = function () {

    const makes = ["VW", "BMW", "Benz", "Audi", "Ford", "Toyota"];

    const cars = [
        { name: "Golf 1", type: "Hatchback", make: "VW", img: "img/golf1.jpg" },
        { name: "M3 E30", type: "Sedan", make: "BMW", img: "img/m3.jpg" },
        { name: "C-Class", type: "Sedan", make: "Benz", img: "img/cclass.jpg" },
        { name: "A4", type: "Sedan", make: "Audi", img: "img/a4.jpg" },
        { name: "Mustang", type: "Coupe", make: "Ford", img: "img/mustang.jpg" },
        { name: "Supra", type: "Sports", make: "Toyota", img: "img/supra.jpg" },

        // YOUR 2 EXTRA CARS
        { name: "Hilux", type: "Bakkie", make: "Toyota", img: "img/hilux.jpg" },
        { name: "Ranger", type: "Bakkie", make: "Ford", img: "img/ranger.jpg" }
    ];

    let currentCar = null;
    let correct = 0;
    let total = 0;

    const makeList = document.getElementById("make-list");
    const carName = document.getElementById("car-name");
    const carType = document.getElementById("car-type");
    const carImg = document.getElementById("car-img");
    const guessBtn = document.getElementById("guess-btn");

    const correctSpan = document.getElementById("correct");
    const totalSpan = document.getElementById("total");

    // populate dropdown
    makes.forEach((make, index) => {
        let option = document.createElement("option");
        option.value = make;
        option.text = make;
        makeList.appendChild(option);
    });

    function loadRandomCar() {
        currentCar = cars[Math.floor(Math.random() * cars.length)];

        carName.textContent = currentCar.name;
        carType.textContent = currentCar.type;
        carImg.src = currentCar.img;

        carImg.classList.remove("hidden");
        guessBtn.classList.remove("disabled");
    }

    // initial load
    loadRandomCar();

    guessBtn.onclick = function () {
        guessBtn.classList.add("disabled");

        let selectedMake = makeList.value;

        if (selectedMake === currentCar.make) {
            correct++;
            correctSpan.textContent = correct;
        }

        total++;
        totalSpan.textContent = total;

        loadRandomCar();
    };
};


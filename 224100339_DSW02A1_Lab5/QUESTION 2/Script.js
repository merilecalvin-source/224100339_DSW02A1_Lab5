window.onload = function () {

    document.getElementById("blendBtn").onclick = function () {

        let surname = document.getElementById("surname").value;
        let font = document.getElementById("font").value;
        let color = document.getElementById("color").value;
        let size = document.getElementById("size").value;

        let output = document.getElementById("output");
        output.innerHTML = ""; // clear previous

        let pos = document.querySelector('input[name="pos"]:checked').value;

        let chars = surname.split("");

        if (pos === "rev") {
            chars = chars.reverse();
        }

        chars.forEach((char, index) => {

            let span = document.createElement("span");
            span.textContent = char;
            span.style.position = "absolute";
            span.style.fontFamily = font;
            span.style.color = color;
            span.style.fontSize = size + "px";

            if (pos === "rand") {
                span.style.left = Math.floor(Math.random() * 300) + "px";
                span.style.top = Math.floor(Math.random() * 100) + "px";
            } else {
                span.style.left = (15 * (index + 1)) + "px";
                span.style.top = (15 * (index + 1)) + "px";
            }

            output.appendChild(span);
        });
    };
};
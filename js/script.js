let form = document.getElementById("formulario");
let cont = document.getElementById("cont");

let fg = [];

form.addEventListener("submit", (event) => { 
    event.preventDefault();
    let data = new FormData(form);
    fg.push({
        name: data.get("name"),
        fg: data.get("fg"),
        color: data.get("color"),
    });
    llenar_figuras();
});

const llenar_figuras = () => {
    cont.innerHTML = "";
    fg.forEach((e) => {
        cont.insertAdjacentHTML(
            "beforeend",
            <div
            class="${e.fg}"
            style="background:${e.color};"
            >
                ${e.name}
            </div>
        );
    });
};
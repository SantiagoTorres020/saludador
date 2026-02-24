const { default: saludar } = require("./saludador");
const saludador = require("./saludador");

describe("Saludador", () => {
    it("Saludar a Juan en idioma default por la mañana", () =>{
        let saludador = new saludador();
        expect(saludador.saludar("Juan","M",40,"ES")).toEqual("Buenos días, Sr. Juan");
    });
})
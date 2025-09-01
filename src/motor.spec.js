import {obtenerEstadoPartida} from './motor.js';

describe("obtenerEstadoPartida", () => {

    it("debe mostrar 'Game Over' y reiniciar si el puntaje es mayor a 7.5", () => {
        //Arrange
        const puntaje = 8;

        //Act
        const mensaje = obtenerEstadoPartida(puntaje);

        //Assert
        expect(mensaje).toBe("TE_HAS_PASADO");
    });

    it("debe llamar a partidaGanada si el puntaje es exactamente 7.5", () => {
        //Arrange
        const puntaje = 7.5;

        //Act
        const mensaje = obtenerEstadoPartida(puntaje);

        //Assert
        expect(mensaje).toBe("JUSTO_MAXIMA");
    });

    it("no debe hacer nada si el puntaje es menor a 7.5", () => {
        //Arrange
        const puntaje = 6;

        //Act
        const mensaje = obtenerEstadoPartida(puntaje);

        //Assert
        expect(mensaje).toBe("POR_DEBAJO_MAXIMO");
        // expect(mensaje).toBeUndefined();
    });
});

// 'npm run test' para correr los tests
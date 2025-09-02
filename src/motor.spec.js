import {obtenerEstadoPartida, obtenerNumRandom, obtenerNumCarta, obtenerPuntosCarta} from './motor.js';

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

describe("obtenerNumRandom", () => {

    it('debe retornar un número entre 1 y 10', () => {
        for (let i = 0; i < 100; i++) {
            const numero = obtenerNumRandom();
            expect(numero).toBeGreaterThanOrEqual(1);
            expect(numero).toBeLessThanOrEqual(10);
        }
    });

    it('debe retornar un número entero', () => {
        const numero = obtenerNumRandom();
        expect(Number.isInteger(numero)).toBe(true);
    });
});

describe("obtenerNumCarta", () => {

    it("Debe sumar 2 al numero si el número es estrictamente mayor a 7", () => {
        //Arrange
        const numero = 8;

        //Act
        const mensaje = obtenerNumCarta(numero);

        //Assert
        expect(mensaje).toBe(numero+2);
    });

    it("Si el número es entre 1 y 7 (ambos incluidos) la función devuelve el número tal cual", () => {
        //Arrange
        const numero = 6;

        //Act
        const mensaje = obtenerNumCarta(numero);

        //Assert
        expect(mensaje).toBe(numero);
    });
});

describe("obtenerPuntosCarta", () => {

    it("Debe devolver 0.5 al numero si el número es estrictamente mayor a 7", () => {
        //Arrange
        const numero = 8;

        //Act
        const mensaje = obtenerPuntosCarta(numero);

        //Assert
        expect(mensaje).toBe(0.5);
    });

    it("Si el número es entre 1 y 7 (ambos incluidos) la función devuelve el número tal cual", () => {
        //Arrange
        const numero = 6;

        //Act
        const mensaje = obtenerPuntosCarta(numero);

        //Assert
        expect(mensaje).toBe(numero);
    });
});

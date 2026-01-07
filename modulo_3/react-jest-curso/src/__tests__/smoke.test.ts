describe("smoke", () => {
  test("jest está configurado", () => {
    expect(true).toBe(true);
  });
  test("jest está configurado", () => {
    const num1:number = 5;
    const num2:number = 3;
    const resultado:number = num1+num2;
    expect(resultado).toBe(8);
  });
  test("calcular área de un trapecio", () => {
    const baseMayor: number = 10;
    const baseMenor: number = 6;
    const altura: number = 4;
    const area: number = ((baseMayor + baseMenor) * altura) / 2;
    expect(area).toBe(32);
  });
});
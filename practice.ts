type Persona = "gay" | "hetero" | "bi";

enum Personas {
  KRAKEN,
  EDU,
  JOSE,
}

const getName = (persona: Persona): number => {
  return persona.length;
};

const hola = <T>(hola: T): T => {
  return hola;
};

hola<number>(4);

console.log(getName("gay"));

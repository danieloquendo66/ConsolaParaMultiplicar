import yargs from "yargs/yargs";

const argv = yargs(process.argv.slice(2))
  .options({
    b: {
      type: "number",
      default: 1,
      alias: "base",
      demandOption: true,
      describe: "El numero a multiplicar",
    },
    m: {
      type: "number",
      alias: "multiply",
      default: 10,
      demandOption: true,
      describe: "El  numero por el cual se va a multiplicar",
    },
    l: {
      type: "boolean",
      alias: "listar",
      default: false,
      demandOption: false,
      describe: "Mostar en consola la tabla que se creo",
    },
  })
  .check((argv) => {
    if (isNaN(argv.b) || isNaN(argv.m)) {
      throw "La base y el multiply tiene que ser un numero";
    }

    return true;
  })
  .parseSync();

export default argv;

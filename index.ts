// const [, , arg3, arg4]: string[] = process.argv;
// const [, base]: string[] = arg3.split("=");
// const [, multiplicador]: string[] = arg4.split("=");
import { Tabla, Multiply, FsWrite } from "./src/tablas/index";

import argv from "./src/yargConfig";

const tabla: Tabla = {
  multiplying: argv.b,
  multiplier: argv.m,
  listar: argv.l,
};

Multiply.multiply(tabla);

const write: FsWrite = {
  data: Multiply.getTabla(),
  name: `Tabla - ${tabla.multiplying.toString()}.txt`,
};

Multiply.createtextFile(write)
  .then(() => {
    if (argv.l) {
      console.log(Multiply.getTabla());
      Multiply.setDefaultTabla();
    }
  })
  .catch((err) => console.error(err));

// console.log(argv);

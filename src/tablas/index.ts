import * as fs from "fs";

export type Tabla = {
  multiplying: number;
  multiplier: number;
  listar: boolean;
};

export type FsWrite = {
  name: fs.PathOrFileDescriptor;
  data: string;
};

export class Multiply {
  protected static tabla = "";

  static multiply(obj: Tabla): string {
    console.clear();

    const labelTabla = `
################################################
              Tabla del ${obj.multiplying}
################################################
        
`;

    Multiply.tabla += labelTabla;

    for (let i: number = 1; i <= obj.multiplier; i++) {
      const product: number = obj.multiplying * i;

      Multiply.tabla += `${obj.multiplying} X ${i} = ${product}\n`;
    }

    return Multiply.tabla;
  }

  static setDefaultTabla(): void {
    Multiply.tabla = "";
  }

  static getTabla(): string {
    return Multiply.tabla;
  }

  static createtextFile(obj: FsWrite): Promise<void> {
    return new Promise((resolve, reject) => {
      fs.writeFile(obj.name, obj.data, "utf-8", (err) => {
        if (err) {
          reject(err);
          throw err;
        }

        console.log(`${obj.name} created`);
        // Multiply.setDefaultTabla();
        resolve();
      });
    });
  }
}

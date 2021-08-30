export class JsonData {
  id: number;
  name: string;
  status: boolean;
  constructor(newNum: number, nuevoNombre: string, nuevostatus: boolean) {
    this.id = newNum;
    this.name = nuevoNombre;
    this.status = nuevostatus;
  }
  getData() {
    return [this.name, this.status];
  }
}

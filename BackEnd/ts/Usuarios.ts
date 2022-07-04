//import bcrypt from "bcryptjs";


export interface Usuarios {
  rut: number;
  nombre: string;
  email:string;
  password: string;

 /* hashPassword(): void {
    const salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
  }

  checkPassword(password: string): boolean {
    return bcrypt.compareSync(password, this.password);
  }*/
}
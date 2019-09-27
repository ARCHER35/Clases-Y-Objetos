//let cuentabcp:cuenta =new cuentabcp(0,[]);
//cuentabcp ingreso(22)
//cuentabcp tranferencia
//cuentabcp reintegro
export class Cuenta {
    private ingreso: number;
    private transferencia: number;
    private reintegro: number;
    public constructor(ing:number, trans:number, reint:number) {
        this.ingreso = ing;
        this.transferencia = trans;
        this.reintegro = reint;
    }
    public setIngreso(ing:number): void {
        this.ingreso = ing;
    }
    public setTransferencia(trans:number): void {
        this.ingreso = trans;
    }
    public setReintegro(reint:number): void {
        this.reintegro = reint;
    }
    public getIngreso(): number {
        return this.ingreso;
    }
    public getTransferencia(): number {
        return this.transferencia;
    }
    public getReintegro(): number {
        return this.ingreso;
    }
}

let cuentabcp:Cuenta = new Cuenta(0,0,0);
console.log(cuentabcp);
cuentabcp.setIngreso(200);
console.log(cuentabcp);
cuentabcp.setIngreso(200);
console.log(cuentabcp);

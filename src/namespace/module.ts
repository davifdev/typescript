/* eslint-disable @typescript-eslint/no-namespace */
export namespace MeuNameSpace {
  export class PessoaDoNameSpace {
    constructor(public name: string) {}
  }

  const pessoaNameSpace = new PessoaDoNameSpace("Davi");
  console.log(pessoaNameSpace);

  export namespace OutroNameSpace {
    export const nomeDoNamespace = "Chico";
  }
}

export const pessoaNameSpace1 = new MeuNameSpace.PessoaDoNameSpace("Robson");
console.log(pessoaNameSpace1);
console.log(MeuNameSpace.OutroNameSpace.nomeDoNamespace);

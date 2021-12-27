/*
Ser autenticavel significa ter o método autenticar

DUCKY TYPE
Em programação de computadores com linguagens de programação orientadas a objetos, 
duck typing (em português literal tipagem pato) é um estilo de tipagem em que os métodos e propriedades de um objeto determinam a semântica válida, 
em vez de sua herança de uma classe particular ou implementação de uma interface explicita.
[1] O nome do conceito refere-se ao teste do pato, atribuído à James Whitcomb Riley (ver a história abaixo), que pode ser expressa como se segue:
Quando eu vejo um pássaro que caminha como um pato, nada como um pato e grasna como um pato, eu chamo aquele pássaro de pato.
https://en.wikipedia.org/wiki/Duck_typing
*/

export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticavel){
       return "autenticar" in autenticavel &&
        autenticavel.autenticar instanceof Function
    }
}
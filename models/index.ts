export interface FipeItem {
    codigo: string,
    nome: string,
}

export interface Marca extends FipeItem { };
export interface Modelos extends FipeItem { };
export interface Anos extends FipeItem { };
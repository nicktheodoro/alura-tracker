export enum ETipoNotificacao {
  SUCESSO,
  FALHA,
  ATENCAO
}

export interface INotificacao {
  id: number;
  tipo: ETipoNotificacao;
  titulo: string;
  texto: string;
}
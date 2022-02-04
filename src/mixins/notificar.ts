import { ETipoNotificacao } from "@/interfaces/INotificacao";
import { NOTIFICAR } from "@/store/tipo-mutations";
import { store } from "@/store/index";

export const notificacaoMixin = {
  methods: {
    notificar(tipo: ETipoNotificacao, titulo: string, texto: string): void {
      store.commit(NOTIFICAR, {
        tipo,
        titulo,
        texto,
      });
    },
  },
};

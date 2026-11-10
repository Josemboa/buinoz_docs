---
title: Permissões
sidebar_position: 13.5
---

# Permissões (ADM04 e ADM05)

Cada utilizador de uma loja tem dois sítios onde recebe permissões:

| Onde | Ecrã | Nome no Buinoz | Quantas permissões |
|---|---|---|---|
| No próprio utilizador | **ADM04 Gestão de Utilizadores** -> "Perfil: Sem perfil" | Permissões **individuais** (próprias) | 27 |
| Na função (perfil) | **ADM05 Gerir Funções** | Permissões da **função** | mais de 70 |

:::warning As permissões individuais são poucas
As permissões individuais (ADM04) cobrem só o básico: vendas, clientes, produtos, fornecedores, compras, despesas, postos e stock. **Contabilidade, Tesouraria, Aprovações, Câmbios, Vendedores, Microcrédito, Lavandaria, INSS e Gestão de Utilizadores só existem na função (ADM05).** Para dar estas permissões, crie uma função e atribua-a ao utilizador.
:::

## Como o Buinoz decide

```text
Utilizador abre um ecrã
  -> Dono da loja ou super-admin?            sim -> tem acesso
  -> Permissão individual (ADM04) ligada?    sim -> tem acesso
  -> Alguma função activa (ADM05) a tem?     sim -> tem acesso
  -> senão: o ecrã não aparece no menu
```

1. O **dono da loja** tem todas as permissões. Não precisa de função.
2. Para os outros, basta **uma** das duas: a permissão individual **ou** a permissão da função. Não é preciso ligar nas duas.
3. As permissões valem **só para a loja activa**. Numa segunda loja, o utilizador precisa de permissões nessa loja.
4. Se o ecrã não aparece no menu, falta a permissão. Depois de mudar permissões, o utilizador deve **sair e entrar** outra vez (ou mudar de loja) para o menu actualizar.

**Exemplo:** um utilizador não vê **CD04 Apoio a Encomenda**. O CD04 precisa de **Criar Compra**. Ligue "Criar compra" no ADM04 (individual) ou "Criar Compra" na função dele no ADM05.

## Tabela de permissões

**Individual** = existe no ADM04. **Função** = existe no ADM05. Os códigos são os ecrãs que a permissão mostra no menu.

### Vendas e facturação

| Permissão | O que faz | Individual | Função |
|---|---|---|---|
| Criar VD (venda a dinheiro) | Vender no POS. Mostra POS01 Venda a Dinheiro, POS03 Tela de Produção, POS05 Marcações. | Sim | Sim |
| Venda a dinheiro offline | Vender sem internet (POS02). Precisa também de Criar VD. | Sim | Não |
| Remover producto em venda | Tirar um produto do carrinho antes de finalizar a venda. | Sim | Sim |
| Criar FA (factura) | Facturas e documentos de cliente: F02 Facturas, F03 Cotação, F05 Extrato, F06 Observações, F07 Converter em Factura, F08 Notas de Crédito, F09 Recriar Factura, F10 Corrigir IVA, F11 Guia de Remessa, F12 Imprimir, F14 Modelo A. | Sim | Sim |
| Criar ND/NC | Emitir nota de débito ou nota de crédito (anular ou corrigir uma factura). | Sim | Sim |
| Criar cliente | Criar clientes (F01 Clientes, F13 Fidelização). | Sim | Sim |
| Editar cliente | Alterar dados de clientes (F01, F13). | Sim | Sim |

### Produtos e stock

| Permissão | O que faz | Individual | Função |
|---|---|---|---|
| Criar produto | P01 Produtos, P02 Alteração de Preço, P03 Produtos por Categoria, P06 Produtos Compostos. | Sim | Sim |
| Editar produto | Alterar produtos e preços (P01-P03, P06) e F10 Corrigir IVA. | Sim | Sim |
| Ver stock | I03 Visão de Stock. | Sim | Sim |
| Gerir stock | P04 Estantes e Prateleiras, P05 Localização de Produtos, F04 Inventário, GA01 Armazém. | Sim | Sim |
| Criar Entrada de stock | GA02 Entrada de Stock. | Sim | Sim |
| Criar Saída de stock | GA03 Saída de Stock. | Sim | Sim |
| Criar Transferência de stock | GA04 Transferência de Stock entre armazéns. | Sim | Sim |
| Criar Acerto (Ajuste) de stock | GA05 Acerto de Stock. | Sim | Sim |
| Actualizar stock do armazém | Dar entrada no stock quando confirma uma compra (botão "Actualizar stock"). | Sim | Sim |
| Gestão de Lotes | LV01 Gestão de Lote, LV02 Reconciliação de Lotes. | Sim | Sim |
| Bloquear/Desbloquear transações (inventário) | Bloquear vendas e movimentos durante a contagem de inventário. | Não | Sim |

### Compras, fornecedores e despesas

| Permissão | O que faz | Individual | Função |
|---|---|---|---|
| Criar fornecedor | CD01 Fornecedor. | Sim | Sim |
| Editar fornecedor | Alterar dados de fornecedores. | Sim | Sim |
| Criar compra | CD02 Compras, **CD04 Apoio a Encomenda**, CD05 RPA de Compra, CD06 Anexos de Compras, ADM02 Histórico RPA. | Sim | Sim |
| Editar compra | Alterar compras já criadas. | Sim | Sim |
| Criar despesa | CD03 Despesas, AR03 Nova Despesa. | Sim | Sim |
| Editar despesa | Alterar despesas já criadas. | Sim | Sim |

### Relatórios e postos

| Permissão | O que faz | Individual | Função |
|---|---|---|---|
| Ver relatórios | I02 Exploração, I07 Fluxo do Negócio, POS04 Sincronização Offline, CD07 Painel de Despesas. | Sim | Sim |
| Criar posto | ADM08 Gestão de Postos (mesas, balcões). | Sim | Sim |
| Editar posto | Alterar postos. | Sim | Sim |
| Ver posto | Ver os postos e o que está aberto em cada um. | Sim | Sim |
| Ver todos os postos em tela | Ver os postos de todos os vendedores no mesmo ecrã. | Não | Sim |

### Só na função (ADM05)

| Permissão | O que faz | Individual | Função |
|---|---|---|---|
| Ver Tesouraria | TSR01 Painel de Tesouraria. | Não | Sim |
| Gerir Tesouraria | Criar e configurar caixas (TSR02, TSR05). | Não | Sim |
| Operar Tesouraria | Fechar caixa e reconciliar (TSR02). | Não | Sim |
| Criar / Editar / Ver Taxas de Câmbio | ADM07 Taxas de Câmbio. | Não | Sim |
| Criar / Editar / Ver Vendedores | ADM06 Gerir Vendedores (PIN do POS). | Não | Sim |
| Gerir INSS Guias | AU01 INSS Guias. | Não | Sim |
| Microcrédito: gerir mutuários e empréstimos | MC01-MC08 (precisa da licença Microcrédito). | Não | Sim |
| Microcrédito: aprovar, desembolsar, estornar | Aprovar e pagar empréstimos. | Não | Sim |
| Microcrédito: registar pagamentos | Receber prestações. | Não | Sim |
| Microcrédito: ver relatórios | Relatórios de crédito. | Não | Sim |
| Lavandaria: configurar | Sectores, artigos, sacos (LA01-LA06, precisa da licença Lavandaria). | Não | Sim |
| Lavandaria: registar guias e lotes | Registo diário. | Não | Sim |
| Lavandaria: ver relatórios | Relatórios da lavandaria. | Não | Sim |
| Lavandaria: facturar | FA mensal da lavandaria. | Não | Sim |
| Ver Contabilidade | Abrir os ecrãs de contabilidade (CBL). | Não | Sim |
| Criar / Editar / Eliminar Lançamento | Lançamentos no diário. | Não | Sim |
| Contabilizar Lançamento | CBL07 Aprovação de Lançamentos. | Não | Sim |
| Ver Balancete | Balancete. | Não | Sim |
| Ver Modelo A IVA | F14 Modelo A - IVA. | Não | Sim |
| Exportar Relatórios Contabilísticos | Exportar para Excel/PDF/SAF-T. | Não | Sim |
| Importar Plano de Contas | Carregar um plano de contas. | Não | Sim |
| Criar Ano Fiscal / Encerrar / Reabrir Exercício | Gerir o exercício fiscal. | Não | Sim |
| Editar Relatório e Contas | Relatório anual. | Não | Sim |
| Criar PR / Editar PR / Resubmeter PR | AR01 Requisições de Compra, AR02 Nova Requisição. | Não | Sim |
| Aprovar PR | AR04 Painel de Aprovações. | Não | Sim |
| Criar / Editar / Cancelar PO | Passar a requisição aprovada a compra (AR01). | Não | Sim |
| Criar Fluxo de Aprovação | AR05 Regras de Aprovação. | Não | Sim |
| Ver Histórico de Aprovações | AR06 Histórico de Aprovações. | Não | Sim |
| Gerir Grupos de Aprovação | AR07 Gestão de Grupos. | Não | Sim |
| Adicionar / Editar / Ver Função | ADM04 Gestão de Utilizadores e ADM05 Gerir Funções. | Não | Sim |
| Criar / Editar / Ver / Remover Utilizador | Gestão de utilizadores da loja. | Não | Sim |

### Só o dono da loja

Estes ecrãs não têm permissão: só o **dono** da loja os vê. I08, ADM14 Auditoria da Loja, ADM15 Séries de Documentos, ADM16 Trocar Proprietário, ADM17 Subscrição.

## Boas práticas

- Crie funções por cargo (ex.: "Caixa", "Compras", "Gerente") e atribua a função. É mais fácil de manter do que ligar permissões uma a uma.
- Use as permissões individuais só para excepções de uma pessoa.
- Dê a cada pessoa só o que ela precisa.

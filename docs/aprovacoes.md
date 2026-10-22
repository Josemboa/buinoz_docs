---
title: Aprovações e Requisições
sidebar_position: 9
---

# Aprovações e Requisições (AR01 - AR07)

Do pedido de compra à entrada de stock, com aprovação por valor e por etapas. As despesas também podem passar pela aprovação.

[Descarregar este guia em PDF](/pdf/buinoz-guia-aprovacoes.pdf)

```
AR02 Requisição -> Regras AR05 -> Passo 1 -> Passo 2 -> Aprovada -> Converter em PO -> I02 Actualizar stock -> I03 Stock
                                    | Rejeitar
                                    v
                               Rejeitada (passos seguintes Cancelados)
```

**Regras importantes**

- O total usado nas regras inclui IVA.
- Cada regra aplica-se só dentro da sua faixa de valor (mínimo a máximo).
- Os passos são sequenciais, pela ordem do Número de Sequência.
- Uma rejeição fecha o documento e cancela os passos seguintes.
- Na compra (PO), **Actualizar stock** faz a entrada da mercadoria e fecha a compra no mesmo passo.

## AR07 - Gestão de Grupos {#ar07}

Um grupo diz **quem aprova**. O grupo aponta para uma **função** (ex.: Comercial I), não para uma pessoa: todos os utilizadores com essa função activa podem aprovar.

1. Abra **AR07** e carregue em **Novo Grupo**.
2. Escreva o nome (ex.: Direcção) e uma descrição.
3. Escolha a **Função dos Membros** e a **Função dos Aprovadores Backup** (suplente).
4. Junte os **e-mails de notificação**: cada decisão envia um e-mail a estes endereços, com o comentário do aprovador.
5. Carregue em **Salvar**.

![Grupos](/img/guias/aprovacoes/01_ar07_lista.webp)
![Formulário do grupo](/img/guias/aprovacoes/02_ar07_form.webp)

## AR05 - Regras de Aprovação {#ar05}

Uma regra diz **quando** um documento precisa de aprovação e **que grupo** aprova.

| Campo | O que é |
|---|---|
| Tipo de Entidade | PR (requisição de compra) ou EX (despesa). Também JE e PO. |
| Valor Mínimo / Valor Máximo | A regra aplica-se se o total com IVA estiver nesta faixa |
| Número de Sequência | A ordem dos passos (o mais baixo é o passo 1) |
| Grupo de Aprovação | O grupo que decide esse passo |

Exemplo: L3 (10 001 a 100 000, Managers, seq. 3) e Direcção (10 001 a 1 000 000, seq. 2). Uma requisição de 11 600 MT tem 2 passos: Direcção e depois Managers.

![Nova regra](/img/guias/aprovacoes/04_ar05_form.webp)
![Regras por faixa de valor](/img/guias/aprovacoes/03_ar05_lista.webp)

## AR02 - Nova Requisição {#ar02}

1. Abra **AR02** e carregue em **+ Producto**.
2. Toque nos produtos; toque numa linha para mudar a quantidade.
3. Confira o total com IVA (no exemplo: 2 Polo Black = 11 600 MT).
4. Carregue em **Finalizar**. O Buinoz cria a requisição, aplica as regras e abre os passos de aprovação.

![Carrinho da requisição](/img/guias/aprovacoes/05_ar02_carrinho.webp)
![Requisição fechada](/img/guias/aprovacoes/06_ar02_fechada.webp)

## AR01 - Requisições de Compra {#ar01}

A lista mostra requisições (PR) e despesas (EX). Filtre por tipo (Requisições, Despesas) e por estado (Submetido, Aprovado, Rejeitado). Toque numa linha para ver o detalhe: cada passo, o grupo, quem decidiu e quando.

![Lista](/img/guias/aprovacoes/18_ar01_lista.webp)
![Detalhe com os passos aprovados](/img/guias/aprovacoes/09_detalhe_aprovado.webp)

## AR04 - Painel de Aprovações {#ar04}

O painel mostra os documentos pendentes das funções do utilizador e os totais de pendentes, aprovados e rejeitados. A aprovação é sequencial: o painel mostra só o passo seguinte de cada documento.

1. Toque no documento.
2. Escreva um comentário (opcional). O comentário vai no e-mail ao grupo.
3. Carregue em **Aprovar** ou **Rejeitar**.

![Painel](/img/guias/aprovacoes/07_ar04_painel.webp)
![Aprovar com comentário](/img/guias/aprovacoes/08_ar04_dialogo.webp)

### Converter em ordem de compra e dar entrada no stock

1. No detalhe da requisição aprovada, carregue em **Converter em PO**.
2. Escolha o fornecedor. O Buinoz compara o preço da requisição com o preço actual (com IVA) e mostra a variação.
3. Confirme. A PO fica criada com número da série (ex.: PO 11/LOJA56-2026).
4. Abra **I02 Exploração**, encontre a PO e carregue em **Actualizar stock**. Confirme.
5. Abra **I03 Visão de Stock**: o stock subiu (Polo Black: 33 para 35 na Loja01).

| SAP | Buinoz |
|---|---|
| ME51N (requisição) | AR02 Nova Requisição |
| ME54N (libertação) | AR04 Painel de Aprovações |
| ME21N (pedido de compra) | Converter em PO |
| MIGO + MIRO | I02 **Actualizar stock**: entrada da mercadoria e fecho da compra num só passo |

![Converter em PO](/img/guias/aprovacoes/10_converter.webp)
![A PO na Exploração](/img/guias/aprovacoes/12_i02_po.webp)
![Stock antes: 33](/img/guias/aprovacoes/11_i03_antes.webp)
![Stock depois: 35](/img/guias/aprovacoes/14_i03_depois.webp)

## AR03 - Nova Despesa {#ar03}

Uma despesa criada em AR03 passa pelas regras do tipo EX. **Só entra nas contas depois de aprovada.** No exemplo, uma despesa de 2 320 MT foi rejeitada no passo 1 (Managers) com o comentário "Sem orçamento este mês"; o passo 2 (Direcção) ficou **Cancelado**.

As despesas lançadas em **CD03** não passam por aprovação.

![Nova despesa](/img/guias/aprovacoes/15_ar03_despesa.webp)
![Rejeitar com comentário](/img/guias/aprovacoes/16_ar04_rejeitar.webp)
![Despesa rejeitada](/img/guias/aprovacoes/17_ex_rejeitada.webp)

## AR06 - Histórico de Aprovações {#ar06}

Cada passo de cada documento fica no histórico: tipo (PR, EX, PO, JE), nome do fluxo, estado, etapa e datas. Filtre por tipo e estado. Toque num passo para ver o detalhe.

![Histórico](/img/guias/aprovacoes/19_ar06_historico.webp)
![Detalhe do passo](/img/guias/aprovacoes/20_ar06_detalhe.webp)

## Permissões

| Menu | Permissão |
|---|---|
| AR01 Requisições de Compra | createPR, editPR ou createPO |
| AR02 Nova Requisição | createPR |
| AR03 Nova Despesa | createExpense |
| AR04 Painel de Aprovações | approvePR |
| AR05 Regras de Aprovação | createApprovalFlow |
| AR06 Histórico | viewApprovalHistory |
| AR07 Gestão de Grupos | manageApprovalGroups |

---
title: Microcrédito
sidebar_position: 11
---

# Microcrédito (MC01 - MC08)

[Descarregar este guia em PDF](/pdf/buinoz-guia-microcredito.pdf)

Gestão de crédito do princípio ao fim: produtos de crédito, contratos, mutuários, empréstimos, pagamentos, cobranças e relatórios.

```
MC08 Configurações -> MC02 Produto -> MC07 Contrato -> MC01 Mutuário
-> MC04 Novo empréstimo -> MC03 Aprovar -> Desembolsar -> Pagamentos -> MC05 Cobranças -> MC06 Relatórios
```

## Apresentação {#apresentacao}

**O problema:** o crédito vive em cadernos e Excel. O juro e a multa são calculados à mão. Ninguém sabe ao certo quem está em atraso hoje.

**A solução:** o produto define as regras uma vez. A calculadora mostra o plano antes de assinar. Cada empréstimo passa por aprovação, tem contrato em PDF e cada pagamento tem recibo. A multa entra sozinha. O ecrã Cobranças diz quem paga hoje. Os relatórios mostram a carteira em risco (PAR).

**Demo em 10 passos** (5 000 MT, 10% ao mês, 4 prestações mensais, taxa de 2% descontada):

1. **MC08**: active o relatório diário e envie um teste.
2. **MC02**: crie o produto (prestação constante, 10% por mês, 4 prestações, taxa 2% descontada no desembolso).
3. **MC07**: crie o modelo de contrato padrão.
4. **MC01**: crie a mutuária.
5. **MC04**: calcule o plano. Prestação de 1 577,35 MT, juros 1 309,43 MT, valor a entregar 4 900,00 MT.
6. Crie o empréstimo. Fica **Em análise**.
7. **MC03**: **Aprovar** e **Desembolsar**. Imprima o **Contrato**.
8. **Registar pagamento** de 1 577,35 MT. Recibo em PDF. Saldo em dívida: 4 732,08 MT.
9. **MC05**: veja o que há a cobrar e envie o **Lembrete WhatsApp**.
10. **MC06**: Resumo, PAR e Resultados e caixa, em PDF.

## Permissões {#permissoes}

As permissões são por perfil, em cada loja. O servidor confirma cada acção.

| Permissão | O que deixa fazer |
|---|---|
| Gerir mutuários, produtos e empréstimos | Criar mutuários, produtos, modelos e empréstimos; configurações |
| Aprovar e desembolsar | Aprovar, recusar, desembolsar e estornar pagamentos |
| Registar pagamentos | Registar pagamentos, pagamentos em lote e liquidação antecipada |
| Ver relatórios | MC06 Relatórios |

O dono da loja tem sempre todas as permissões.

## MC08 - Configurações {#mc08}

- **Hora de envio** dos e-mails e lembretes.
- **Lembrete ao mutuário** N dias antes de cada prestação, e também no dia do vencimento.
- **E-mail diário ao dono** com o que há a cobrar (só é enviado quando há algo a cobrar). Junte outros e-mails se quiser.
- **Envio de teste** para confirmar que chega.

![Configurações](/img/guias/microcredito/02_mc08_configuracoes.webp)

## MC02 - Produtos de crédito {#mc02}

O produto define as condições de cada empréstimo.

1. **Taxa de juro**: por mês, por ano ou por empréstimo.

   ![Período da taxa](/img/guias/microcredito/03_mc02_periodo_taxa.webp)

2. **Nº de prestações** e **periodicidade**: diária, semanal, quinzenal ou mensal.

   ![Periodicidade](/img/guias/microcredito/04_mc02_periodicidade.webp)

3. **Método de juro** (5): taxa fixa; saldo decrescente com prestação constante; saldo decrescente com capital constante; só juros (capital no fim); juro composto.

   ![Método de juro](/img/guias/microcredito/05_mc02_metodo_juro.webp)

4. **Taxa de abertura**: valor fixo ou % do capital. Pode ser descontada no desembolso, paga na primeira prestação ou dividida pelas prestações.

   ![Taxa de abertura](/img/guias/microcredito/06_mc02_tipo_taxa.webp)
   ![Como se cobra a taxa](/img/guias/microcredito/07_mc02_cobranca_taxa.webp)

5. **Multa por atraso**: valor fixo ou % do valor em atraso, uma só vez ou a cada semana, mês ou dia.

   ![Tipo de multa](/img/guias/microcredito/08_mc02_tipo_multa.webp)
   ![Frequência da multa](/img/guias/microcredito/09_mc02_frequencia_multa.webp)

6. Grave. O produto aparece na lista.

   ![Produto preenchido](/img/guias/microcredito/10_mc02_produto_preenchido.webp)
   ![Lista de produtos](/img/guias/microcredito/11_mc02_lista_produtos.webp)

## MC07 - Modelos de Contrato {#mc07}

O contrato padrão usa **{Campos}** (nome do cliente, valor, prazo...) que são preenchidos sozinhos em cada empréstimo. O modelo marcado como padrão é o usado no PDF. Apagar um modelo pede confirmação.

![Modelo de contrato](/img/guias/microcredito/12_mc07_modelo_contrato.webp)

## MC01 - Mutuários {#mc01}

1. Carregue em novo mutuário.
2. Preencha nome, telefone, documento (BI), data de nascimento, género e rendimento mensal.
3. Grave. Cada mutuário fica com o seu número na lista.

![Ficha do mutuário](/img/guias/microcredito/13_mc01_mutuario_form.webp)
![Lista de mutuários](/img/guias/microcredito/14_mc01_lista_mutuarios.webp)

## MC04 - Novo Empréstimo {#mc04}

A calculadora mostra o plano de pagamentos antes de criar o crédito. Exemplo: 5 000 MT a 4 meses, 10% ao mês.

| Método | Resultado |
|---|---|
| Taxa fixa | 2 000 MT de juros |
| Prestação constante | 1 577,35 MT por mês (1 309,43 MT de juros) |
| Capital constante | 1 250 MT de capital por mês; as prestações descem |
| Só juros | 500 MT por mês e o capital no fim |
| Juro composto | 2 320 MT de juros |

1. Escolha o **mutuário**, o **produto** e o **valor**. Sem mutuário, o ecrã serve só de calculadora.
2. Carregue em **Calcular plano** e confira. Se mudar o valor, o juro, as prestações ou as datas, o plano desaparece: carregue outra vez em **Calcular plano**.
3. Crie o crédito. Fica **Em análise**.

O juro não pode ser negativo. Mutuários **Inactivos** ou na **Lista negra** não podem receber novos empréstimos.

![Taxa fixa](/img/guias/microcredito/15a_mc04_flat.webp)
![Prestação constante](/img/guias/microcredito/15b_mc04_prestacao_constante.webp)
![Novo empréstimo](/img/guias/microcredito/16_mc04_novo_emprestimo_ana.webp)

## MC03 - Empréstimos {#mc03}

### Aprovar e desembolsar

1. Abra o empréstimo **Em análise**. Carregue em **Aprovar** (ou **Recusar**, com a causa).
2. Carregue em **Desembolsar**. A taxa de abertura é descontada (5 000 - 2% = 4 900 MT entregues).
3. O crédito fica **Em curso**, com o plano de pagamentos. O **Contrato** sai preenchido em PDF.

![Em análise](/img/guias/microcredito/17_mc03_detalhe_em_analise.webp)
![Desembolso](/img/guias/microcredito/19_mc03_dialogo_desembolso.webp)
![Em curso](/img/guias/microcredito/20_mc03_em_curso.webp)
![Contrato em PDF](/img/guias/microcredito/21_mc03_contrato_pdf.webp)

### Registar pagamentos

1. Carregue em **Registar pagamento**. O valor da prestação vem sugerido.
2. Confirme. O comprovativo em PDF pode ir por WhatsApp. O total pago e o saldo mudam na hora.

![Registar pagamento](/img/guias/microcredito/22_mc03_registar_pagamento.webp)
![Comprovativo em PDF](/img/guias/microcredito/24_recibo_pdf.webp)

### Atrasos, pagamento parcial e estorno

- Com atraso, a **multa** entra sozinha em cada prestação. O **Lembrete WhatsApp** está a um toque.
- Um pagamento parcial cobre primeiro a multa, depois a taxa, o juro e o capital, da prestação mais antiga para a mais nova.
- Um pagamento lançado por engano: **Estornar**, com a causa. O saldo volta atrás.
- O **Extracto** em PDF mostra o atraso, o plano e todos os pagamentos.

![Multa por atraso](/img/guias/microcredito/27_tina_atraso_multa.webp)
![Pagamento parcial](/img/guias/microcredito/28_tina_pagamento_parcial_dialogo.webp)
![Estornar](/img/guias/microcredito/30_tina_estornar_dialogo.webp)
![Extracto](/img/guias/microcredito/32_tina_extracto_pdf.webp)

### Liquidação antecipada

Calcula o valor para pagar tudo antes do prazo e permite **perdoar os juros futuros**. O histórico guarda os juros perdoados. Se estornar o recibo da liquidação, os juros perdoados voltam ao plano.

![Liquidação antecipada](/img/guias/microcredito/33_celina_liquidacao_dialogo.webp)

### Filtros

Filtre por estado: em curso, em atraso, em análise, pagos, em incumprimento. No topo, a carteira e o PAR. A lista mostra os 2000 empréstimos mais recentes; para a carteira completa use MC06.

![Filtros](/img/guias/microcredito/26_mc03_lista_filtros.webp)

## MC05 - Cobranças {#mc05}

O que há a cobrar (até hoje, próximos 7 dias, até ao fim do mês), o que está em atraso (só prestações já vencidas) e o que já entrou hoje. Cobre daqui mesmo com **Receber**, ou use **Pagamentos em lote** (até 30 de uma vez).

![Cobranças](/img/guias/microcredito/37_mc05_ate_hoje.webp)
![Receber](/img/guias/microcredito/40_mc05_receber_dialogo.webp)
![Pagamentos em lote](/img/guias/microcredito/41_mc05_pagamentos_lote.webp)

## MC06 - Relatórios de Crédito {#mc06}

Sete relatórios, em PDF (e em Excel na versão web): **Resumo**, **Carteira em risco (PAR)**, **Previsto vs cobrado**, **Desembolsos**, **Por gestor**, **Por produto** e **Resultados e caixa**.

- Escolha o período no botão de datas. Os valores da carteira (em curso, em atraso, PAR) são sempre à data de hoje.
- **Por gestor**: o gestor é o utilizador que registou o mutuário (nos mutuários antigos, quem criou o empréstimo).
- Os dias de atraso e as multas contam pela data de Moçambique (Africa/Maputo).

![Resumo](/img/guias/microcredito/42_mc06_resumo.webp)
![Carteira em risco](/img/guias/microcredito/43_mc06_par.webp)
![Previsto vs cobrado](/img/guias/microcredito/44_mc06_previsto_vs_cobrado.webp)
![Resultados e caixa](/img/guias/microcredito/48_mc06_resultados_caixa.webp)

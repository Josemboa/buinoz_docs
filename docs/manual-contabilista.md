---
title: Manual do contabilista
sidebar_position: 10.5
---

# Manual do contabilista

[Descarregar este manual em PDF](/pdf/buinoz-manual-contabilista.pdf)

Este manual é para o contabilista ou técnico de contas que trabalha com o Buinoz. Explica as regras que o sistema segue, as contas que usa, o que faz sozinho e o que tem de ser feito à mão.

Para saber onde carregar em cada ecrã, veja o guia [Contabilidade (CBL01 - CBL39)](/contabilidade). A lista de todas as contas está em [Plano de contas (PGC-NIRF)](/plano-de-contas).

## 1. Base legal {#base-legal}

| Tema | O que o Buinoz segue |
|---|---|
| Plano de contas | PGC-NIRF, Decreto n.º 70/2009, de 22 de Dezembro |
| IVA | Taxa normal de 16% |
| IRPS | Código do IRPS, Lei n.º 33/2007: cinco categorias de rendimentos |
| Retenção na fonte de IRPS | 20% (artigo 65 do Código do IRPS) |
| Moeda | Metical (MT). Documentos em moeda estrangeira são convertidos ao câmbio do documento |

Estas regras foram revistas com um contabilista em Novembro de 2026.

## 2. Como o Buinoz trata a contabilidade {#fluxo}

A contabilidade é **por loja**. Cada loja tem a sua configuração, os seus diários, os seus exercícios e os seus lançamentos. O plano de contas oficial é comum a todas.

Os documentos do dia a dia (vendas, facturas, compras, despesas, movimentos de stock) **não entram sozinhos** na contabilidade. Passam por três passos:

```
Documento fechado          Contabilizar              Aprovar e Lançar
(VD, FA, PO, EX, stock) -> (CBL02, CBL03, CBL04) ->  (CBL06)
                           cria um RASCUNHO          o lançamento fica LANÇADO
```

- **Rascunho**: o lançamento existe, mas não conta em nenhum relatório.
- **Lançado**: conta no balancete, nos resultados, no balanço, no razão, nas declarações fiscais e no SAF-T.
- Um lançamento lançado **não se apaga nem se edita**. Corrige-se com **Estornar**, que cria o lançamento inverso. Os dois ficam no histórico.
- Um documento só se contabiliza uma vez. Depois de contabilizado, sai da lista de pendentes.

:::danger Vendas sempre pela CBL02
As vendas contabilizam-se pela **CBL02**, nunca por lançamento manual. Se as lançar à mão e também pela CBL02, a receita fica a dobrar. O lançamento manual (CBL05) fica para o que não é documento do Buinoz: salários, rendas, amortizações, ajustes.
:::

## 3. Plano de contas {#plano}

O Buinoz traz as **488 contas** do PGC-NIRF. Veja a lista completa em [Plano de contas (PGC-NIRF)](/plano-de-contas).

| Classe | Nome | No balanço e nos resultados |
|---|---|---|
| 1 | Meios financeiros | Activo corrente |
| 2 | Inventários e activos biológicos | Activo corrente |
| 3 | Investimentos de capital | Activo não corrente |
| 4 | Contas a receber, contas a pagar, acréscimos e diferimentos | Activo ou passivo, conforme o saldo |
| 5 | Capital próprio | Capital próprio |
| 6 | Gastos e perdas | Demonstração de resultados |
| 7 | Rendimentos e ganhos | Demonstração de resultados |
| 8 | Resultados | Apuramento do resultado |

Regras do plano no Buinoz:

- As contas oficiais são **globais**: são as mesmas em todas as lojas.
- A loja pode criar **sub-contas** por baixo de uma conta oficial, em **CBL27 - Plano de Contas**, com **Nova Sub-conta**. Exemplo: 1211 Banco BIM e 1212 Banco BCI, por baixo de 121 Depósitos à ordem.
- O código de uma conta é único em todo o sistema. Se o código que quer já existir, escolha o seguinte.
- O Buinoz acrescenta três contas ao decreto: **111 Caixa Geral**, **511 Capital Subscrito** e **91 Garantias Prestadas**.

## 4. Configuração de cada loja (CBL28) {#configuracao}

Antes de contabilizar, confirme em **CBL28 - Configuração Contabilística** as contas que os lançamentos automáticos usam. Estes são os valores de origem:

| Campo no CBL28 | Conta | Nome oficial |
|---|---|---|
| Conta Caixa (VD - Venda a Dinheiro) | 111 | Caixa Geral |
| Conta Banco (Vendas por Depósito) | 121 | Depósitos à ordem |
| Conta Clientes (FA - Factura) | 411 | Clientes c/c |
| Conta Receitas - Mercadorias | 711 | Vendas de mercadorias |
| Conta Receitas - Serviços | 72 | Prestação de serviços |
| Conta IVA Liquidado (Vendas) | 4433 | IVA liquidado |
| Conta Compras - Mercadorias | 211 | Compras de mercadorias |
| Conta Compras - Serviços | 63299 | Outros fornecimentos e serviços |
| Conta Fornecedores | 421 | Fornecedores c/c |
| Conta IVA Dedutível (Compras) | 4432 | IVA dedutível |
| Conta IRPS a Pagar (Retenções) | 4422 | Impostos retidos na fonte - Rendimentos profissionais |
| Taxa IVA por defeito | 16% | |

Há também campos opcionais: receitas isentas (mercadorias e serviços) e as três contas de inventário (inventário, ganhos e perdas), usadas pela CBL04.

Ao gravar, o sistema avisa se uma conta não existe no plano ou está na classe errada.

:::note Compras: 21 ou 61
O valor de origem lança as compras de mercadoria na **211 Compras** (inventário periódico). Uma empresa com inventário permanente pode preferir outra conta. As duas formas são válidas: escolha a conta em **Conta Compras - Mercadorias** e use sempre a mesma.
:::

## 5. O que cada documento lança {#lancamentos}

### Venda a dinheiro (VD)

| Conta | Débito | Crédito |
|---|---|---|
| 111 Caixa (ou 121, se foi por banco) | Total | |
| 711 Vendas de mercadorias (ou 72 Serviços) | | Valor sem IVA |
| 4433 IVA liquidado | | IVA |

### Factura a crédito (FA)

| Conta | Débito | Crédito |
|---|---|---|
| 411 Clientes c/c | Total | |
| 711 Vendas de mercadorias (ou 72 Serviços) | | Valor sem IVA |
| 4433 IVA liquidado | | IVA |

Exemplo real: FA de 131,59 MT. Débito 411: 131,59. Crédito 711: 113,44. Crédito 4433: 18,15.

### Compra a um fornecedor (PO)

| Conta | Débito | Crédito |
|---|---|---|
| 211 Compras de mercadorias (ou 63299, se for serviço) | Valor sem IVA | |
| 4432 IVA dedutível | IVA | |
| 421 Fornecedores c/c | | Total |

### Despesa (EX)

Vai para a conta de gastos (63x), mais o IVA dedutível. A partir da versão 2.19.5, o Buinoz escolhe a conta pelo nome da despesa (água 63211, electricidade 63212, combustíveis 63213, comunicações 63224, rendas 63232, e outras). Sem palavra reconhecida, usa a 63299. A lista está em [Contabilidade por cenários](/contabilidade-cenarios#despesas).

A contrapartida é a conta de **caixa** se a despesa foi paga em numerário, a conta de **banco** se foi paga por outra forma, e **421** se ficou a dever. Se a conta de caixa ou de banco do CBL28 não existir no plano, o Buinoz recusa contabilizar e indica a conta em falta.

### Movimentos de stock (CBL04)

Os ganhos e as perdas de inventário (acertos, quebras) usam as três contas de inventário do CBL28. Se essas contas estiverem vazias, configure-as antes de contabilizar o stock.

## 6. IVA {#iva}

| Taxa no Buinoz | Valor | Estado |
|---|---|---|
| IVA a 16% | 16% | Activa. É a taxa de origem de um produto novo |
| IVA a 5% | 5% | Activa |
| IVA isento - mercadoria | 0% | Activa |
| IVA isento - serviço | 0% | Activa |
| IVA a 17% | 17% | **Inactiva** (taxa antiga) |

- O IVA das vendas vai para **4433 IVA liquidado**. O IVA das compras vai para **4432 IVA dedutível**.
- Produtos antigos que ainda têm a taxa de 17% continuam a vender a 17%. O Dashboard (I06) mostra um aviso com esses produtos. Corrija a taxa de cada produto em **P01**.
- As declarações estão em **F14 - Modelo A - IVA** (a partir dos documentos) e em **CBL23 - Modelo 2 - IVA** (a partir dos lançamentos lançados).

## 7. IRPS: retenção na fonte {#irps}

O Buinoz usa as **cinco categorias** do Código do IRPS. Cada categoria tem a sua sub-conta oficial de 442 Impostos retidos na fonte.

| Código | Categoria | Taxa de origem | Conta de retenção |
|---|---|---|---|
| 1 | Primeira - Trabalho dependente (salários) | Sem taxa fixa | 4421 |
| 2 | Segunda - Rendimentos empresariais e profissionais (honorários, serviços, comissões) | 20% | 4422 |
| 3 | Terceira - Capitais e mais-valias (juros, dividendos, royalties) | 20% | 4423 |
| 4 | Quarta - Rendimentos prediais (rendas) | 14% | 4424 |
| 5 | Quinta - Outros rendimentos | Sem taxa fixa | 4425 |

Notas sobre as taxas:

- **Rendas a 14%**: é a retenção de 20% sobre 70% da renda. Confirme com o seu contabilista se esta regra se mantém para o período que está a declarar. A taxa pode ser alterada à mão em cada lançamento.
- **Primeira e Quinta**: não têm taxa fixa. Escreva o valor retido à mão.
- A retenção calcula-se sobre o **valor sem IVA**.

### Como registar uma retenção

Há duas formas. Use só uma para cada documento.

**A. Numa compra de serviços (CBL03).** Ao contabilizar a compra, escolha a categoria no campo **Retenção IRPS**. O sistema calcula a retenção e cria as linhas.

![Categorias de IRPS no CBL03](/img/guias/contabilidade/CBL03_02_irps_categorias.webp)

Exemplo: honorários de 10 000 MT + IVA de 1 600 MT, com retenção da Segunda categoria (20%).

| Conta | Débito | Crédito |
|---|---|---|
| 63299 Outros fornecimentos e serviços | 10 000 | |
| 4432 IVA dedutível | 1 600 | |
| 4422 Retenção - Rendimentos profissionais | | 2 000 |
| 421 Fornecedores c/c | | 9 600 |

O fornecedor recebe 9 600 MT. Os 2 000 MT ficam em dívida ao Estado na 4422, até serem entregues.

Um lançamento real, de uma compra de 950,00 MT + 152,00 MT de IVA, com retenção de 20%:

![Linhas do lançamento com retenção](/img/guias/contabilidade/CBL06_04_irps_linhas.webp)

**B. Num lançamento manual (CBL05).** Na linha da conta de retenção, carregue no botão **IRPS** e indique a categoria, o valor retido, a taxa, o nome e o NUIT do fornecedor.

![Diálogo de retenção de IRPS](/img/guias/contabilidade/CBL05_02_irps_dialogo.webp)

:::caution Só contam as retenções registadas nos campos de IRPS
Uma linha com a descrição "IRPS retido" não chega. O Modelo 10 só lê as retenções registadas pelas formas A ou B.
:::

:::note Versão da app
As cinco categorias nos ecrãs CBL03 e CBL05, e a conta de retenção por categoria (4421 a 4425), existem a partir da **versão 2.19.4**. Actualize a app se vir letras de A a H.
:::

### Modelo 10 (M10)

**CBL22 - Modelo 10 - IRPS** junta as retenções do período, por categoria, com o NUIT e o nome de cada fornecedor, a base e o valor retido. Só entram lançamentos **lançados**.

### Salários

O Buinoz **não processa salários**. Não calcula o IRPS dos trabalhadores pela tabela de retenção, nem o INSS de cada um. Calcule os salários fora do Buinoz e registe o resultado com um lançamento manual (CBL05), nas contas **62 Gastos com o pessoal**, **462 Pessoal** e **4421** (IRPS retido aos trabalhadores). As guias do INSS têm um módulo próprio: veja [Automações](/automacoes).

## 8. IRPC {#irpc}

**CBL24 - Modelo 22 - IRPC** mostra os proveitos, os custos, o resultado contabilístico e uma estimativa do imposto. É uma **versão simplificada**: não faz as correcções fiscais (custos não aceites, benefícios, prejuízos de anos anteriores). Use-a como rascunho e confirme antes de submeter.

## 9. SAF-T {#saft}

**CBL25 - Exportar SAF-T** cria o ficheiro XML do período, com o plano de contas, os terceiros e os lançamentos **lançados**. Valide o ficheiro antes de o entregar à Autoridade Tributária.

## 10. Rotina de cada mês {#rotina-mensal}

1. **CBL02**: contabilize as vendas do mês (VD e FA).
2. **CBL03**: contabilize as compras e as despesas (PO e EX). Escolha a retenção de IRPS nas compras de serviços.
3. **CBL04**: contabilize os movimentos de stock, se a loja os usa.
4. **CBL05**: lance o que não é documento: salários, rendas, amortizações, juros.
5. **CBL06**: abra cada rascunho, confira e carregue em **Aprovar e Lançar**.
6. **CBL09**: faça a reconciliação bancária.
7. **CBL10**: veja o balancete. O total do débito tem de ser igual ao total do crédito.
8. **CBL23** e **F14**: confira o IVA do mês. **CBL22**: confira as retenções de IRPS.
9. **CBL15, CBL16**: veja quem deve e a quem se deve.

## 11. Fim do ano {#fim-do-ano}

1. Confirme que não há rascunhos por lançar (CBL06, filtro Rascunho).
2. **CBL37**: lance as depreciações do exercício (os bens estão em **CBL35**).
3. **CBL11** e **CBL12**: confira a demonstração de resultados e o balanço.
4. **CBL39**: gere o Relatório e Contas em PDF.
5. **CBL31**: feche o exercício. O fecho cria os lançamentos de encerramento e bloqueia o período.
6. **CBL30**: crie o exercício do ano seguinte, se ainda não existir.

## 12. Controlo e auditoria {#controlo}

- **CBL38 - Histórico de Alterações**: quem inseriu ou alterou o quê, e quando, com o valor antes e depois.
- **CBL07 - Aprovação de Lançamentos**: se a empresa quer que outra pessoa aprove os lançamentos, defina as regras em **AR05**.
- As permissões de contabilidade são dadas por loja e por utilizador. Veja [Permissões](/permissoes).

## 13. Limites que deve conhecer {#limites}

| Tema | Estado |
|---|---|
| Processamento de salários | Não existe. Lançamento manual |
| Tabela de retenção de IRPS dos trabalhadores | Não existe. O valor escreve-se à mão |
| Modelo 22 (IRPC) | Simplificado, sem correcções fiscais |
| Retenção das rendas | 14% de origem. Confirme a regra em vigor |
| Recebimentos e pagamentos | Confira no razão (CBL13) e no extracto (CBL14) como ficaram as contas 411 e 421 depois de um recebimento ou pagamento |

## 14. Para experimentar {#experimentar}

A loja de demonstração **HCB Demo** tem dados de contabilidade para experimentar. Veja [Vídeos de demonstração](/demonstracao/hcb-demo).

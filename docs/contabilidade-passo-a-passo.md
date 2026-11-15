---
title: Contabilidade passo a passo
sidebar_position: 10.2
---

# Contabilidade passo a passo (para quem não é contabilista)

[Descarregar este guia em PDF](/pdf/buinoz-contabilidade-passo-a-passo.pdf)

Este guia é para o dono de uma loja, farmácia, restaurante ou salão que **não sabe contabilidade**. Siga os passos pela ordem. No fim de cada mês terá as contas organizadas, e o contabilista só precisa de as rever e assinar.

Não precisa de saber o que é débito e crédito. O Buinoz escolhe as contas e faz os lançamentos. O seu trabalho é registar tudo o que acontece na loja e carregar em três botões por mês.

```
Todos os dias          Uma vez por mês          No fim
Vender, comprar,  ->   Contabilizar e      ->   Entregar ao
pagar despesas         Aprovar e Lançar         contabilista
```

:::info O que o contabilista continua a fazer
O Buinoz organiza as contas. O contabilista **revê, corrige o que for preciso, assina e entrega** as declarações na Autoridade Tributária. As contas e as declarações de uma empresa são, em regra, assinadas por um técnico de contas. O Buinoz não o substitui.
:::

## Parte 1. Preparar (faz-se uma vez) {#preparar}

Faça estes 6 passos antes do primeiro mês. Demora cerca de 20 minutos.

### Passo 1. Dados da loja

Abra **ADM01** e confirme o **nome**, o **NUIT** e o **endereço** da loja. O NUIT sai nas facturas e nos ficheiros para a Autoridade Tributária. Tem de estar certo.

### Passo 2. Ano fiscal

Abra **CBL30 - Exercícios Fiscais**. Tem de existir o ano em curso (ex.: 2026, de 01/01 a 31/12). Se não existir, crie-o com **+**.

### Passo 3. Configuração

Abra **CBL28 - Configuração Contabilística**.

1. Em **Ano fiscal activo**, escolha o ano.
2. Em **País / Plano**, escolha Moçambique.
3. Em **Conta Banco**, escolha a conta do seu banco (ex.: **12101 Banco BIM**). A 121 é conta-mãe. Se a conta do seu banco ainda não existe, ao gravar o Buinoz propõe criá-la (12101): escreva o nome do banco e confirme.
4. Não mude as outras contas. Já vêm certas para o plano oficial de Moçambique.
5. Grave.

![O Buinoz propõe criar a conta do banco](/img/guias/contabilidade/MX_03b_config_banco_dialogo.webp)

**O que faz cada campo**

| Campo | Conta proposta | Para que serve |
|---|---|---|
| Ano fiscal activo | ano actual | Referência. O ano e o mês de cada lançamento vêm da data do documento. |
| País / Plano | Moçambique (PGC-NIRF) | O plano de contas a usar. |
| Conta Caixa | 111 | Vendas e recebimentos em numerário; despesas pagas em numerário. |
| Conta Banco | sub-conta da 121 | Tudo o que não é numerário (transferência, POS, M-Pesa, e-Mola), a entrar e a sair. |
| Conta Clientes | 411 | O valor de cada factura até o cliente pagar. |
| Receitas - Mercadorias | 711 | Valor sem IVA dos produtos vendidos. |
| Receitas - Serviços | 72 | Valor sem IVA dos serviços. |
| IVA Liquidado | 4433 | IVA cobrado nas vendas. |
| Receitas isentas (opcional) | vazio | Se preencher, as vendas sem IVA vão para esta conta. |
| Compras - Mercadorias | 211 | Mercadoria comprada para revender. |
| Compras - Serviços | 63299 | Despesas. Com a 63299, o Buinoz escolhe a conta pelo nome da despesa; com outra conta, vão todas para ela. |
| Fornecedores | 421 | O que a loja deve aos fornecedores. |
| IVA Dedutível | 4432 | IVA pago nas compras. |
| IRPS a pagar | 4422 | Com 4422, cada retenção vai para a sub-conta da categoria (4421 a 4425). |
| Inventário, Ganhos, Perdas | vazio | Só para contabilizar acertos de stock. Vazias, o Buinoz recusa e avisa. Peça as contas ao contabilista. |
| Diários padrão | DV, DC, DO | Diário de cada tipo de documento. Definidos, o Buinoz não pergunta o diário. |

### Passo 4. Bancos

Abra **CBL32 - Contas Bancárias** e registe cada conta bancária da loja, com **+**. Serve para comparar o banco com a contabilidade no fim do mês.

### Passo 5. IVA dos produtos

Cada produto tem uma taxa de IVA. Abra **P01** e confirme os seus produtos:

| O que vende | Taxa a escolher |
|---|---|
| Produtos e serviços com IVA normal | IVA a 16% |
| Produtos isentos (ex.: muitos medicamentos, alguns alimentos básicos) | IVA isento - mercadoria |
| Serviços isentos | IVA isento - serviço |

Se não sabe se um produto é isento, pergunte ao contabilista **antes** de vender. Mudar depois dá trabalho.

Se o Dashboard (I06) mostrar um aviso laranja de **IVA inactivo**, abra os produtos da lista e mude a taxa para **IVA a 16%**.

### Passo 6. Dar acesso ao contabilista

Peça ao contabilista para se registar no Buinoz. Depois, em **ADM04**, adicione-o à loja e dê-lhe as permissões de contabilidade. Assim ele vê tudo sem precisar de papéis. Veja [Permissões](/permissoes).

:::caution A loja já existia antes do Buinoz?
Se a empresa já tinha dinheiro no banco, stock, dívidas ou clientes a dever antes de começar a usar o Buinoz, é preciso um **lançamento de abertura** com esses valores. Peça ao contabilista para o fazer em **CBL05**. É o único passo que não deve fazer sozinho.
:::

## Parte 2. Todos os dias {#todos-os-dias}

A regra é uma só: **tudo o que acontece na loja regista-se no Buinoz, no dia em que acontece.**

| O que aconteceu | Onde registar |
|---|---|
| Vendi e o cliente pagou na hora | **POS01** (venda a dinheiro) |
| Vendi a crédito, o cliente paga depois | **F02** (factura) |
| O cliente pagou uma factura antiga | **I02**, cartão da factura, **Confirmar** |
| Comprei mercadoria a um fornecedor | **CD02** (compra) |
| Paguei água, luz, renda, combustível, internet | **CD03** (despesa) |
| Devolveram-me mercadoria ou anulei uma factura | **F08** (nota de crédito) |
| Fechei a caixa no fim do dia | **TSR02** (caixa) |

Três hábitos que evitam quase todos os problemas:

1. **Não venda fora do Buinoz.** Uma venda que não está no sistema não está na contabilidade.
2. **Peça sempre factura ao fornecedor**, com o NUIT da sua loja. Sem factura, o IVA da compra não se pode descontar.
3. **Guarde os papéis** (facturas de compra, talões do banco) numa pasta por mês. O contabilista vai pedi-los.

## Parte 3. Uma vez por mês {#todos-os-meses}

Faça isto nos primeiros dias do mês seguinte. São 5 passos.

### Passo 1. Contabilizar as vendas (CBL02)

1. Abra **CBL02 - Vendas para Contabilizar**.
2. Escolha as datas do mês (dia 1 ao último dia).
3. No separador **Pendentes**, carregue em **Selecionar todos** e depois em **Contabilizar**.
4. As vendas passam para o separador **Contabilizadas**.

![Vendas pendentes](/img/guias/contabilidade/CBL02_02_pendente.webp)

### Passo 2. Contabilizar as compras e as despesas (CBL03)

Faça o mesmo em **CBL03 - Compras e Despesas para Contabilizar**: datas do mês, **Selecionar todos**, **Contabilizar**.

Se pagou a um prestador de serviços individual (um técnico, um consultor, o senhorio), fale com o contabilista antes: pode ter de **reter IRPS**. Veja [Reter IRPS](#reter-irps), mais abaixo.

![Compras para contabilizar](/img/guias/contabilidade/CBL03_01.webp)

### Passo 3. Aprovar e lançar (CBL06)

Contabilizar cria **rascunhos**. Um rascunho ainda não conta.

1. Abra **CBL06 - Lançamentos Contabilísticos**.
2. Filtre por **Rascunho**.
3. Abra cada lançamento e carregue em **Aprovar e Lançar**. Aparece uma mensagem verde.

![Lista de lançamentos](/img/guias/contabilidade/CBL06_02_lista.webp)

:::tip Como saber se terminou
Quando o filtro **Rascunho** da CBL06 fica vazio e o separador **Pendentes** da CBL02 e da CBL03 também, o mês está contabilizado.
:::

### Passo 4. Conferir

Abra **CBL10 - Balancete** e veja a última linha. O **total do débito** tem de ser igual ao **total do crédito**. Se for igual, as contas estão certas do ponto de vista aritmético.

Depois veja estes quatro sinais. Se algum aparecer, não tente corrigir: aponte e mostre ao contabilista.

| Sinal | O que quer dizer |
|---|---|
| A conta **111 Caixa** tem saldo a crédito (negativo) | Saiu mais dinheiro da caixa do que entrou. Falta registar uma venda ou um depósito |
| Um cliente aparece com valor negativo em **CBL15** | Pagou mais do que devia, ou o pagamento foi registado duas vezes |
| O saldo do banco no Buinoz é diferente do extracto | Falta registar um movimento. Use **CBL09 - Reconciliação Bancária** |
| A CBL02 avisa **Possível duplicado** | As vendas desse mês podem já ter sido lançadas à mão. Não confirme sem perguntar |

### Passo 5. Ver o resultado

- **CBL11 - Demonstração de Resultados**: quanto vendeu, quanto gastou e quanto ganhou.
- **CBL12 - Balanço**: o que a loja tem e o que deve.
- **CBL23 - Modelo 2 - IVA**: o IVA a entregar ou a recuperar no mês.

## Parte 4. O que entregar ao contabilista {#entregar}

Se o contabilista tem acesso à loja (Parte 1, passo 6), ele próprio abre os relatórios. Se não tem, exporte-os em PDF ou Excel e envie.

**Todos os meses**

| Relatório | Ecrã | Para quê |
|---|---|---|
| Balancete | CBL10 | Conferir todas as contas |
| IVA do mês | CBL23 e F14 | Declaração periódica do IVA |
| Retenções de IRPS | CBL22 | Modelo 10 (M10) |
| Extractos bancários | (do banco) | Reconciliação |
| Pasta com as facturas de compra | (papel ou fotos) | Prova das despesas |

**No fim do ano**

| Relatório | Ecrã |
|---|---|
| Demonstração de resultados | CBL11 |
| Balanço | CBL12 |
| Razão geral | CBL13 |
| Relatório e Contas em PDF | CBL39 |
| Ficheiro SAF-T | CBL25 |

O fecho do ano (**CBL31**) faz-se **depois** de o contabilista rever. Um ano fechado fica bloqueado.

## Parte 5. O que deixar para o contabilista {#deixar}

Estas operações não são documentos do dia a dia. Precisam de um lançamento manual (**CBL05**). Aponte os valores e peça ao contabilista para os lançar, ou para lhe mostrar uma vez como se faz.

| Operação | O que apontar |
|---|---|
| **Salários** | Nome, salário bruto, IRPS e INSS descontados, valor pago. O Buinoz não calcula salários |
| **Empréstimos** | Valor recebido, prestações pagas, juros |
| **Compra de equipamento** (computador, carro, arca) | Factura e data. É um investimento, não uma despesa |
| **Dinheiro que o dono pôs ou tirou da loja** | Data e valor |
| **Amortizações** | O contabilista calcula uma vez por ano |

### Reter IRPS {#reter-irps}

Quando a loja paga a uma **pessoa** (não a uma empresa) por um serviço, honorários, comissões ou renda, a lei pode obrigar a ficar com uma parte e entregá-la ao Estado. Chama-se **retenção na fonte**.

Exemplo: paga 10 000 MT de honorários a um técnico. A retenção é de 20%. A loja paga 8 000 MT ao técnico e entrega 2 000 MT ao Estado.

No Buinoz, ao contabilizar a compra em **CBL03**, escolha a categoria no campo **Retenção IRPS**. O sistema faz as contas.

![Escolher a retenção de IRPS](/img/guias/contabilidade/CBL03_02_irps_categorias.webp)
 As regras e as taxas estão em [Manual do contabilista: IRPS](/manual-contabilista#irps).

Na dúvida sobre se tem de reter, pergunte ao contabilista. Uma retenção em falta dá multa.

## Parte 6. Exemplos por negócio {#exemplos}

### Loja ou mercearia

- Vende quase tudo com IVA a 16%. Alguns alimentos básicos podem ser isentos: confirme a lista com o contabilista.
- Compras ao grossista em **CD02**, sempre com factura.
- Quebras e produtos estragados: faça o acerto de stock em **GA05**. O contabilista decide se os contabiliza (**CBL04**).

### Farmácia

- Muitos medicamentos são **isentos de IVA**; os outros produtos (cosméticos, higiene) levam normalmente 16%. Confirme a taxa de cada grupo com o contabilista e ponha-a certa em **P01**.
- Use os **lotes e validades**: um medicamento fora de prazo é uma perda que tem de ficar registada.
- Compras aos distribuidores em **CD02**, com o lote.

### Restaurante ou bar

- Vendas em **POS03** (mesas) ou **POS01**.
- Compras de ingredientes em **CD02**. Gás, carvão e limpeza são **despesas**.
- Feche a caixa todos os dias em **TSR02**.

### Salão ou serviços

- O que vende são **serviços**: marque cada um como **serviço** ao criá-lo em **P01**, para irem para a conta certa (72 Prestação de serviços).
- Se paga comissões a profissionais que não são seus empregados, veja [Reter IRPS](#reter-irps).

## Palavras que vai ouvir {#palavras}

| Palavra | Em linguagem simples |
|---|---|
| **Lançamento** | O registo de uma operação na contabilidade |
| **Rascunho** | Lançamento preparado, que ainda não conta |
| **Lançado** | Lançamento aprovado, que já conta nos relatórios |
| **Estornar** | Anular um lançamento com outro ao contrário. Nada se apaga |
| **Débito e crédito** | Os dois lados de um lançamento. Têm de ser sempre iguais |
| **Balancete** | A lista de todas as contas com os seus saldos |
| **Balanço** | O que a empresa tem (activo) e o que deve (passivo) num certo dia |
| **Demonstração de resultados** | Vendas menos gastos de um período: o lucro ou o prejuízo |
| **Exercício** | O ano da contabilidade |
| **IVA liquidado** | O IVA que cobrou aos clientes |
| **IVA dedutível** | O IVA que pagou aos fornecedores e pode descontar |
| **Retenção na fonte** | Imposto que a loja desconta de um pagamento e entrega ao Estado |
| **Plano de contas** | A lista oficial de contas. Em Moçambique é o PGC-NIRF |
| **SAF-T** | Ficheiro com a contabilidade, no formato que a Autoridade Tributária pede |

## Resumo numa página {#resumo}

1. **Uma vez:** NUIT, ano fiscal, configuração, bancos, IVA dos produtos, acesso do contabilista.
2. **Todos os dias:** tudo no Buinoz, no próprio dia. Guardar os papéis.
3. **Todos os meses:** CBL02 Contabilizar, CBL03 Contabilizar, CBL06 Aprovar e Lançar, CBL10 conferir.
4. **Deixar para o contabilista:** salários, empréstimos, equipamento, saldos de abertura, fecho do ano.
5. **No fim:** o contabilista revê, assina e entrega.

Quer ver cada situação com imagens? Veja [Contabilidade por cenários](/contabilidade-cenarios). Quer saber as regras por trás de cada passo? Veja o [Manual do contabilista](/manual-contabilista).

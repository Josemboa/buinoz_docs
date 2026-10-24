---
title: Contabilidade
sidebar_position: 10
---

# Contabilidade (CBL01 - CBL39)

[Descarregar este guia em PDF](/pdf/buinoz-guia-contabilidade.pdf)

Contabilidade completa, segundo o PGC-NIRF de Moçambique: lançamentos automáticos a partir das vendas, compras e stock, relatórios (balancete, resultados, balanço, razão), declarações fiscais (IVA, IRPS, IRPC), SAF-T e encerramento do exercício.

```
Configurar (CBL27-CBL33) -> Contabilizar vendas/compras/stock (CBL02-CBL04)
-> Lançamentos (CBL05-CBL08) -> Relatórios (CBL10-CBL20) -> Fiscal (CBL22-CBL25) -> Encerramento (CBL31)
```

## Configurar (faça primeiro)

### CBL27 - Plano de Contas {#cbl27}

As classes 1 a 9 do PGC-NIRF, com as sub-contas. Abra uma classe para ver as contas. **Nova Sub-conta** cria uma conta nova.

![Plano de contas](/img/guias/contabilidade/CBL27_01.webp)

### CBL28 - Configuração Contabilística {#cbl28}

Escolha o **ano fiscal activo**, o **país/plano** (Moçambique, PGC-NIRF) e as contas usadas nos lançamentos automáticos: caixa (VD), banco, clientes (FA), vendas de mercadorias, prestações de serviços, IVA liquidado, e as contas de receitas isentas. Ao gravar, a app avisa se uma conta não existe no plano ou está na classe errada.

Contas oficiais do PGC-NIRF (Decreto 70/2009) usadas por defeito:

| Uso | Conta | Nome oficial |
|---|---|---|
| Venda a dinheiro (VD) | 111 | Caixa |
| Pagamentos por banco | 121 | Depósitos à ordem |
| Factura a crédito (FA) | 411 | Clientes c/c |
| Compras a crédito (PO) | 421 | Fornecedores c/c |
| Compras de mercadorias | 211 | Compras de mercadorias |
| Despesas (EX) | 63299 | Outros fornecimentos e serviços |
| Água, electricidade, combustíveis | 63211, 63212, 63213 | Fornecimentos e serviços |
| Rendas | 63232 | Rendas e alugueres |
| Salários | 62 | Gastos com o pessoal |
| Empréstimos obtidos | 43 | Empréstimos obtidos |
| IVA das compras | 4432 | IVA dedutível |
| IVA das vendas | 4433 | IVA liquidado |
| Vendas de mercadorias | 711 | Vendas |
| Prestações de serviços | 721 | Prestações de serviços |

Uma despesa paga na hora (numerário ou banco) sai de 111 ou 121, não de 421.

![Configuração](/img/guias/contabilidade/CBL28_01.webp)

### CBL29 - Gestão de Diários {#cbl29}

Os diários (Vendas, Compras, Caixa, Bancos, Despesas, Operações Diversas, Pessoal...), com código, descrição e estado. Use o lápis para editar e **+** para criar.

![Diários](/img/guias/contabilidade/CBL29_01.webp)

### CBL30 - Exercícios Fiscais {#cbl30}

Os anos fiscais e o seu período (ex.: 2026, de 01/01 a 31/12). Criar, encerrar e reabrir exercícios precisa de permissões próprias.

![Exercícios fiscais](/img/guias/contabilidade/CBL30_01.webp)

### CBL32 - Contas Bancárias, CBL33 - Centros de Custo {#cbl32}

Registe as contas bancárias (para a reconciliação) e os centros de custo (para os relatórios por centro). Use **+** para criar.

![Centros de custo](/img/guias/contabilidade/CBL33_01.webp)

## Contabilizar {#cbl02}

### CBL02 - Vendas para Contabilizar

Exemplo: contabilizar a factura FA 6/LOJA56-2026.

1. Escolha **Data inicial** e **Data final** (ou **Todas as datas**). O separador **Pendentes** mostra as vendas por contabilizar. A linha **Contas:** mostra as contas que vão ser usadas.
2. Carregue em **Contabilizar** na venda (ou marque várias e use **Selecionar todos**).

   ![Venda pendente](/img/guias/contabilidade/CBL02_02_pendente.webp)

3. A venda passa para **Contabilizadas**, com o visto verde.

   ![Venda contabilizada](/img/guias/contabilidade/CBL02_03_contabilizada.webp)

4. Em **CBL06**, o lançamento aparece em **rascunho**. Neste exemplo: débito 411 Clientes 131,59; crédito 711 Vendas 113,44; crédito 4433 IVA liquidado 18,15.

   ![Lançamento gerado](/img/guias/contabilidade/CBL06_03_detalhe.webp)

5. **Contabilizar não é lançar.** Abra o lançamento em CBL06 e carregue em **Aprovar e Lançar**. Só os lançamentos **Lançados** contam no balancete, nos resultados, no balanço e na Vista Executiva (I01).

:::danger Atenção: vendas sempre pela CBL02
As vendas contabilizam-se sempre pela **CBL02**, nunca por diário manual (CBL05). O diário manual fica para o que não é documento: salários, rendas, ajustes. Se lançar as vendas à mão e depois também pela CBL02, a receita fica a dobrar.
:::

Se já existir um lançamento manual de vendas no mesmo mês com valor próximo (±5%), a CBL02 avisa **Possível duplicado** antes de contabilizar. Confirme só se tem a certeza de que não são as mesmas vendas.

![Aviso de possível duplicado](/img/guias/contabilidade/CBL02_04_duplicado.webp)

### CBL03 - Compras para Contabilizar, CBL04 - Stock para Contabilizar {#cbl03}

Funcionam como a CBL02, para as compras e para os movimentos de stock (ganhos e perdas). Uma compra (PO) vai para 211 Compras + 4432 IVA dedutível, contra 421 Fornecedores. Uma despesa (EX) vai para 63x, contra 111/121 se foi paga na hora. Depois, como nas vendas: **Aprovar e Lançar** em CBL06.

![Compras para contabilizar](/img/guias/contabilidade/CBL03_01.webp)

## Lançamentos

### CBL05 - Novo Lançamento {#cbl05}

1. Escolha o **Diário**, a **Data** e escreva a **Descrição**. O número do documento é automático.
2. Carregue em **Adicionar Linha** e escolha a conta, o débito ou o crédito.
3. O rodapé mostra **Total Débito**, **Total Crédito** e o estado **Balanceado**. Só se grava um lançamento balanceado.
4. Grave com o ícone do topo.

![Novo lançamento](/img/guias/contabilidade/CBL05_01.webp)

### CBL06 - Lançamentos Contabilísticos {#cbl06}

Todos os lançamentos, com número, diário, documento de origem, data e valor. Filtre por estado (Rascunho, Lançado). Toque num lançamento para ver as linhas; **Aprovar e Lançar** passa-o de rascunho para lançado (aparece uma mensagem verde). Um lançamento lançado não se apaga: corrige-se com **Estornar**.

![Lançamentos](/img/guias/contabilidade/CBL06_02_lista.webp)

### CBL07 - Aprovação de Lançamentos {#cbl07}

Os lançamentos que esperam aprovação (as regras são as de **AR05**, tipo JE).

![Aprovação de lançamentos](/img/guias/contabilidade/CBL07_01.webp)

### CBL08 - Lançamentos Recorrentes {#cbl08}

Modelos de lançamentos que se repetem (rendas, avenças). Carregue em **Criar Template**.

![Lançamentos recorrentes](/img/guias/contabilidade/CBL08_01.webp)

### CBL09 - Reconciliação Bancária {#cbl09}

Escolha a conta bancária e compare os movimentos do banco com os da contabilidade: **Todos**, **Pendentes**, **Conciliados**.

![Reconciliação bancária](/img/guias/contabilidade/CBL09_01.webp)

## Relatórios

### CBL01 - Dashboard de Gestão {#cbl01}

A receber, a pagar, saldo líquido, execução orçamental, vendas do mês e aging de clientes e fornecedores (top 5).

![Dashboard de gestão](/img/guias/contabilidade/CBL01_01.webp)

### CBL10 - Balancete {#cbl10}

Saldo anterior, movimento e saldo actual (débito e crédito) de cada conta. **Alterar** muda o período; **Incluir Rascunhos** junta os lançamentos por enviar. Exporte com o ícone de descarregar.

![Balancete](/img/guias/contabilidade/CBL10_01.webp)

### CBL11 - Demonstração de Resultados {#cbl11}

Vendas, custos, resultado operacional, resultado antes de impostos e resultado líquido do ano fiscal. Abra cada linha para ver o detalhe.

![Demonstração de resultados](/img/guias/contabilidade/CBL11_01.webp)

### CBL12 - Balanço {#cbl12}

Activo (não corrente e corrente), capital próprio e passivo, a 31 de Dezembro do ano escolhido.

![Balanço](/img/guias/contabilidade/CBL12_01.webp)

### CBL13 - Razão Geral {#cbl13}

1. Em **Conta**, pesquise e escolha a conta (ex.: 1111 Caixa Loja 1).
2. Veja cada movimento: data, nº de lançamento, diário, descrição, débito, crédito e saldo acumulado.
3. Exporte em PDF ou Excel (ícones do topo).

![Razão de uma conta](/img/guias/contabilidade/CBL13_02_caixa_loja1.webp)

### CBL14 - Extracto de Conta Corrente {#cbl14}

1. Escolha **Todos**, **Clientes** ou **Fornecedores** e depois o nome.
2. Veja o débito, o crédito, o saldo final e cada documento (FA, CT, NC...).

![Extracto de conta corrente](/img/guias/contabilidade/CBL14_02_leonel.webp)

### CBL15 / CBL16 / CBL17 - Antiguidade de saldos {#cbl15}

Quanto cada cliente (CBL15) e fornecedor (CBL16) deve, por escalões: corrente, 1-30, 31-60, 61-90 e mais de 90 dias. O **Mapa de Antiguidade** (CBL17) junta os dois.

![Aging clientes](/img/guias/contabilidade/CBL15_01.webp)
![Mapa de antiguidade](/img/guias/contabilidade/CBL17_01.webp)

### CBL18 - Fluxo de Caixa {#cbl18}

Actividades operacionais, de financiamento e a variação líquida de caixa do ano.

![Fluxo de caixa](/img/guias/contabilidade/CBL18_01.webp)

### CBL19 - Desvio Orçamental, CBL20 - Centro de Custo, CBL26 - Multi-Loja {#cbl19}

- **CBL19** compara o real com o orçamento do exercício (defina o orçamento em **CBL34**).
- **CBL20** mostra os movimentos de um centro de custo num período.
- **CBL26** consolida várias lojas: escolha pelo menos uma.

![Desvio orçamental](/img/guias/contabilidade/CBL19_01.webp)

### CBL39 - Relatório e Contas {#cbl39}

O relatório anual completo, em PDF.

1. Escolha o **Exercício** e o **Modelo** (Clássico, Moderno, Minimalista). Ligue **Em milhares de MT** se quiser.
2. Veja o resumo: balanço e demonstração de resultados, com o ano anterior.
3. Em **Texto do relatório**, edite os capítulos (Introdução, Mensagem do Presidente, A Empresa...), escolha a imagem de capa e carregue em **Guardar**.
4. Carregue em **Gerar PDF**.

![Relatório e contas](/img/guias/contabilidade/CBL39_02_2026.webp)

## Fiscal

### CBL23 - Modelo 2 - IVA {#cbl23}

A declaração mensal de IVA: escolha o **Ano** e o **Mês**. Mostra as operações tributáveis (vendas), as operações dedutíveis (compras) e o apuramento (IVA a entregar ou a recuperar). Gere o PDF ou o Excel.

![Modelo 2 IVA](/img/guias/contabilidade/CBL23_01.webp)

### CBL22 - Modelo 10 - IRPS {#cbl22}

As retenções na fonte de IRPS do período. Para aparecerem, registe a retenção nos lançamentos (CBL05) ou nas compras.

![Modelo 10](/img/guias/contabilidade/CBL22_01.webp)

### CBL24 - Modelo 22 - IRPC {#cbl24}

Proveitos, custos, resultado contabilístico e tributável, e o IRPC calculado para o exercício. É uma versão simplificada: confirme com o contabilista antes de submeter.

![Modelo 22](/img/guias/contabilidade/CBL24_01.webp)

### CBL25 - Exportar SAF-T {#cbl25}

Escolha o período e carregue em **Exportar SAF-T XML**. Valide o ficheiro antes de o submeter à Autoridade Tributária.

![SAF-T](/img/guias/contabilidade/CBL25_01.webp)

## Fecho e controlo

### CBL31 - Encerramento de Exercício {#cbl31}

Carregue em **Fechar** no exercício. O fecho cria os lançamentos de encerramento e bloqueia o período. Só se faz em exercícios não bloqueados.

![Encerramento](/img/guias/contabilidade/CBL31_01.webp)

### CBL34 - Orçamento, CBL35 - Imobilizado, CBL37 - Depreciações {#cbl34}

- **CBL34**: o orçamento de cada exercício (base do desvio orçamental).
- **CBL35**: os bens do imobilizado. Carregue em **+** para registar um bem.
- **CBL37**: as depreciações do exercício.

![Imobilizado](/img/guias/contabilidade/CBL35_01.webp)

### CBL38 - Histórico de Alterações {#cbl38}

Quem alterou o quê e quando (inserir, actualizar), por tabela e por período. Abra uma linha para ver o antes e o depois.

![Histórico de alterações](/img/guias/contabilidade/CBL38_01.webp)

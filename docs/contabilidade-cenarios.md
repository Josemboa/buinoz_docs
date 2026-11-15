---
title: Contabilidade por cenários
sidebar_position: 10.3
---

# Contabilidade por cenários

[Descarregar este guia em PDF](/pdf/buinoz-contabilidade-cenarios.pdf) · [Descarregar o livro completo em PDF](/livro-contabilidade)

Cada cenário desta página é uma situação real de uma loja: vendi, comprei, paguei a luz, paguei a renda. Para cada uma mostramos o que fazer no Buinoz, passo a passo, com imagens de uma loja de demonstração.

Há sempre **dois caminhos**:

| Caminho | Quando usar | Onde se faz |
|---|---|---|
| **A. O documento faz-se no Buinoz** | A loja vende, factura, compra e regista despesas no Buinoz | O ecrã do documento, depois **CBL02** ou **CBL03** |
| **B. O documento vem de fora** | A venda foi feita num livro de facturas manual, noutro sistema, ou só existe um papel | **CBL05 - Novo Lançamento**, à mão |

Use o caminho A sempre que puder. É mais rápido e o Buinoz escolhe as contas. O caminho B é para o que ficou fora do sistema.

:::danger Nunca os dois para o mesmo documento
Se a venda está no Buinoz (caminho A), não a lance também à mão (caminho B). Ficava a contar duas vezes.
:::

Se ainda não preparou a loja, comece por [Contabilidade passo a passo](/contabilidade-passo-a-passo).

## Como ler as tabelas de lançamento {#ler}

No caminho B escreve-se o lançamento à mão. Cada tabela desta página diz que contas usar:

| Conta | Débito | Crédito |
|---|---|---|
| A conta que recebe o valor do lado esquerdo | valor | |
| A conta que recebe o valor do lado direito | | valor |

A soma da coluna **Débito** tem de ser igual à soma da coluna **Crédito**. O Buinoz só deixa gravar quando estão iguais (aparece **Balanceado**).

Os códigos são os do plano oficial. Veja a lista em [Plano de contas](/plano-de-contas). Os valores são exemplos.

---

## 1. Venda a dinheiro {#venda-a-dinheiro}

O cliente compra e paga na hora.

### Caminho A: a venda faz-se no Buinoz

1. Abra **POS01 - Venda a dinheiro**, escolha o vendedor e escreva o PIN.

   ![Venda vazia](/img/guias/contabilidade/MX_20_vd_vazia.webp)

2. Carregue em **+ Producto**, toque no produto e feche a lista. A linha aparece com o preço, a quantidade e o IVA.

   ![Venda com um produto](/img/guias/contabilidade/MX_21_vd_produto.webp)

3. Escolha a forma de pagamento (Numerário, POS, Mpesa, Emola, Mkesh ou Banco), escreva o **Valor pago** e carregue em **Finalizar**. O Buinoz dá o número (VD 1) e o troco. Aqui o cliente pagou 600 MT por 580 MT e recebeu 20 MT de troco.

   ![Venda fechada](/img/guias/contabilidade/MX_22_vd_feita.webp)

No fim do mês, a venda aparece em **CBL02** para contabilizar (veja [Contabilizar o mês](#contabilizar)). O lançamento que o Buinoz cria:

![Lançamento de uma venda a dinheiro](/img/guias/contabilidade/MX_71_lanc_vd.webp)

A caixa recebe 580,00. A venda vale 500,00 e os 80,00 de diferença são IVA, que a loja deve ao Estado.

### Caminho B: a venda foi feita fora do Buinoz

Junte os talões ou o livro de vendas do dia e faça **um lançamento por dia** em **CBL05**. Exemplo: vendas do dia de 1 160,00 MT, com IVA de 16%.

| Conta | Débito | Crédito |
|---|---|---|
| 111 Caixa | 1 160,00 | |
| 711 Vendas de mercadorias | | 1 000,00 |
| 4433 IVA liquidado | | 160,00 |

Se o cliente pagou por banco ou M-Pesa, use **121 Depósitos à ordem** em vez da 111. Para serviços, use **72 Prestação de serviços** em vez da 711.

---

## 2. Factura a crédito {#factura}

O cliente leva hoje e paga depois.

### Caminho A: a factura faz-se no Buinoz

1. Abra **F02 - Facturas**.

   ![Factura vazia](/img/guias/contabilidade/MX_30_fa_vazia.webp)

2. Carregue em **Escolher Cliente** e toque no cliente. Se não existir, use **Criar Cliente** (nome, NUIT, email e cidade).

   ![Escolher o cliente](/img/guias/contabilidade/MX_32_cliente_escolher.webp)

3. Carregue em **+ Producto**, toque nos produtos e feche a lista.

   ![Factura com linhas](/img/guias/contabilidade/MX_33_fa_linhas.webp)

4. Carregue em **Finalizar** e confirme com **OK**.

   ![Confirmar](/img/guias/contabilidade/MX_34_fa_confirmar.webp)

5. A factura fica com número (FA 1), de 2 320 MT, e por pagar.

   ![Factura emitida](/img/guias/contabilidade/MX_35_fa_feita.webp)

O lançamento que o Buinoz cria quando a contabilizar em **CBL02**:

![Lançamento de uma factura](/img/guias/contabilidade/MX_72_lanc_fa.webp)

O valor fica em **411 Clientes**: é dinheiro que o cliente deve à loja.

### Caminho B: a factura foi passada fora do Buinoz

Um lançamento por factura, em **CBL05**. Exemplo: factura de 1 160,00 MT.

| Conta | Débito | Crédito |
|---|---|---|
| 411 Clientes c/c | 1 160,00 | |
| 711 Vendas de mercadorias | | 1 000,00 |
| 4433 IVA liquidado | | 160,00 |

---

## 3. O cliente paga a factura {#recebimento}

### Caminho A: a factura está no Buinoz

1. Abra **I02 - Exploração**. A factura por pagar tem o botão verde **Confirmar**.

   ![Lista de documentos](/img/guias/contabilidade/MX_40_rec_lista.webp)

2. Carregue em **Confirmar**, escolha o **Método de pagamento** e carregue em **OK**. O pagamento é sempre do valor total; para pagar aos poucos use **Criar Plano**.

   ![Confirmar o pagamento](/img/guias/contabilidade/MX_41_rec_metodo.webp)

3. A factura passa a **FA Paga**.

   ![Factura paga](/img/guias/contabilidade/MX_42_rec_paga.webp)

Quando contabilizar a factura em **CBL02**, o Buinoz lança também o recebimento: o banco (ou a caixa, se foi em numerário) recebe o dinheiro e a conta 411 do cliente fica a zero. Se a factura já estava contabilizada antes de ser paga, abra **CBL02**, separador **Contabilizadas**, e carregue em **Lançar recebimentos** no topo.

![Botão Lançar recebimentos](/img/guias/contabilidade/MX_76_rec_botao.webp)

![Lançamento do recebimento](/img/guias/contabilidade/MX_77_lanc_recebimento.webp)

Para conferir, abra **CBL14 - Extracto de Conta Corrente** e escolha o cliente: o saldo deve estar a zero. O recebimento automático existe a partir da **versão 2.19.6**.

### Caminho B: recebeu de uma factura feita fora

| Conta | Débito | Crédito |
|---|---|---|
| 121 Depósitos à ordem (ou 111 Caixa) | 1 160,00 | |
| 411 Clientes c/c | | 1 160,00 |

A dívida do cliente desaparece e o dinheiro entra no banco.

---

## 4. Compra de mercadoria {#compra}

### Caminho A: a compra regista-se no Buinoz

Mesmo que a factura seja do fornecedor (em papel), registe a compra no Buinoz. É assim que o stock entra e que o IVA se desconta.

1. Abra **CD02 - Compras**.

   ![Compra vazia](/img/guias/contabilidade/MX_10_compra_vazia.webp)

2. Toque no cartão **Geral** e escolha o fornecedor. Se não existir, use **Criar fornecedor**.

   ![Escolher o fornecedor](/img/guias/contabilidade/MX_12_fornecedor_escolher.webp)

3. Carregue em **+ Producto** e toque no produto uma vez por cada unidade comprada. Feche a lista.

   ![Compra com linhas](/img/guias/contabilidade/MX_13_compra_linhas.webp)

4. Carregue em **Finalizar**. A compra fica com número (PO 1). Neste exemplo, 10 sacos de arroz: 4 000 MT mais 640 MT de IVA.

   ![Compra registada](/img/guias/contabilidade/MX_14_compra_feita.webp)

5. Em **I02**, carregue em **Actualizar stock** no cartão da compra. Só aqui a mercadoria entra no armazém.

O lançamento que o Buinoz cria quando a contabilizar em **CBL03**:

![Lançamento de uma compra](/img/guias/contabilidade/MX_70_lanc_compra.webp)

A compra vale 4 000,00, o IVA de 640,00 pode ser descontado, e a loja fica a dever 4 640,00 ao fornecedor (**421**).

### Caminho B: só tem a factura do fornecedor

| Conta | Débito | Crédito |
|---|---|---|
| 211 Compras de mercadorias | 1 000,00 | |
| 4432 IVA dedutível | 160,00 | |
| 421 Fornecedores c/c | | 1 160,00 |

Com este caminho o stock **não** entra no Buinoz. Use-o só se a loja não controla o stock no sistema.

### Quando pagar ao fornecedor

| Conta | Débito | Crédito |
|---|---|---|
| 421 Fornecedores c/c | 1 160,00 | |
| 121 Depósitos à ordem (ou 111 Caixa) | | 1 160,00 |

---

## 5. Despesas: energia, água, combustível, internet {#despesas}

### Caminho A: a despesa regista-se no Buinoz

1. Abra **CD03 - Despesas**.

   ![Despesa vazia](/img/guias/contabilidade/MX_50_despesa_vazia.webp)

2. Carregue em **Despesa rápida**. Escreva o **Nome** (ex.: Electricidade de Novembro) e o **Preço**. Carregue em **Adicionar**.

   ![Despesa rápida](/img/guias/contabilidade/MX_51_despesa_rapida.webp)

3. A linha aparece. Escolha a forma de pagamento (aqui, **Banco**).

   ![Despesa com linha](/img/guias/contabilidade/MX_52_despesa_linha.webp)

4. Carregue em **Finalizar**. A despesa fica com número (EX 1): electricidade, 2 500 MT, paga por banco.

   ![Despesa registada](/img/guias/contabilidade/MX_53_despesa_feita.webp)

Ao contabilizar em **CBL03**, o Buinoz lê o nome da despesa e escolhe a conta. A electricidade vai para a 63212 e sai do banco:

![Lançamento da electricidade](/img/guias/contabilidade/MX_73_lanc_luz.webp)

A água, paga em numerário, vai para a 63211 e sai da caixa:

![Lançamento da água](/img/guias/contabilidade/MX_74_lanc_agua.webp)

As palavras que o Buinoz reconhece no nome da despesa:

| Se o nome tiver | Conta |
|---|---|
| água, FIPAG | 63211 Água |
| electricidade, energia, luz, EDM, Credelec | 63212 Electricidade |
| combustível, gasolina, gasóleo, diesel | 63213 Combustíveis |
| escritório, papel, toner, tinteiro | 63216 Material de escritório |
| manutenção, reparação, conserto | 63221 Manutenção e reparação |
| internet, telefone, telemóvel, recarga, megas | 63224 Comunicações |
| honorários, consultoria, advogado, contabilista | 63225 Honorários |
| publicidade, marketing, anúncio | 63227 Publicidade e propaganda |
| deslocação, viagem, hotel, estadia | 63228 Deslocações e estadias |
| renda, aluguer | 63232 Rendas e alugueres |
| seguro | 63233 Seguros |
| limpeza, higiene, detergente | 63235 Limpeza, higiene e conforto |
| vigilância, segurança, guarda | 63236 Vigilância e segurança |

Por isso, dê à despesa um nome claro: "Electricidade de Novembro", e não "Factura 1234". Se o nome não tiver nenhuma destas palavras, ou se a despesa tiver linhas de tipos diferentes, vai para **63299 Outros fornecimentos e serviços**.

O que deve saber sobre este caminho:

- A despesa rápida regista o **valor total**, sem separar o IVA. Se a factura da despesa tem IVA e a loja o quer descontar, use **+ Producto** com um produto de despesa que tenha a taxa de IVA.
- Uma despesa paga em numerário sai da conta de caixa. Uma despesa paga por outra forma sai da conta de banco. As duas contas escolhem-se em **CBL28**.
- Se a conta de caixa ou de banco do CBL28 não existir no plano, o Buinoz não contabiliza e diz que conta falta. Corrija a conta no CBL28 e contabilize de novo.
- Numa loja nova, a conta de banco tem de ser uma sub-conta da 121 (ex.: **12101 Banco BIM**). Se o CBL28 recusar gravar por a 121 ser conta-mãe, crie a sub-conta em **CBL27 - Plano de Contas**.

  ![Sub-conta do banco](/img/guias/contabilidade/MX_05_subconta_banco.webp)

  ![Aviso de conta em falta](/img/guias/contabilidade/LV_CBL03_02_erro_conta.webp)

- A escolha da conta pelo nome existe a partir da **versão 2.19.5**, para lojas que usam a conta de despesas de origem (63299).

### Caminho B: lançar a despesa à mão

Use este caminho quando a despesa não está no Buinoz. Um lançamento por factura, em **CBL05**. Mude só a primeira conta, conforme a despesa:

| Despesa | Conta |
|---|---|
| Água | 63211 |
| Electricidade | 63212 |
| Combustíveis | 63213 |
| Material de escritório | 63216 |
| Manutenção e reparação | 63221 |
| Comunicações (telefone, internet) | 63224 |
| Publicidade | 63227 |
| Seguros | 63233 |
| Limpeza e higiene | 63235 |
| Segurança | 63236 |
| Outras | 63299 |

Exemplo: factura de electricidade de 2 900,00 MT (2 500,00 + 400,00 de IVA), paga por banco.

| Conta | Débito | Crédito |
|---|---|---|
| 63212 Electricidade | 2 500,00 | |
| 4432 IVA dedutível | 400,00 | |
| 121 Depósitos à ordem | | 2 900,00 |

Se a factura não tem IVA, ou a loja não o pode descontar, ponha o valor todo na conta da despesa e não use a 4432.

---

## 6. Renda da loja {#renda}

A renda tem uma regra a mais. Se o senhorio é uma **pessoa** (não uma empresa), a loja pode ter de **reter IRPS**: paga menos ao senhorio e entrega a diferença ao Estado. Confirme com o contabilista se o seu caso obriga a reter.

### Caminho A: registar a renda como despesa

Registe-a em **CD03**, como no cenário 5. Ao contabilizar em **CBL03**, escolha no campo **Retenção IRPS** a opção **4 - Quarta categoria - Rendimentos prediais**. O Buinoz calcula a retenção.

![Escolher a retenção](/img/guias/contabilidade/CBL03_02_irps_categorias.webp)

### Caminho B: lançar a renda à mão

Exemplo: renda de 15 000,00 MT, com retenção de 20% (3 000,00). O senhorio recebe 12 000,00. Até 2025 retinha-se 20% sobre 70% da renda (14%); essa redução acabou com a reforma do IRPS.

| Conta | Débito | Crédito |
|---|---|---|
| 63232 Rendas e alugueres | 15 000,00 | |
| 4424 Retenção - Rendimentos prediais | | 3 000,00 |
| 121 Depósitos à ordem | | 12 000,00 |

Na linha da 4424, carregue no botão **IRPS** e indique a categoria, o valor, a taxa, o nome e o NUIT do senhorio. Sem isto, a retenção não aparece no Modelo 10.

![Diálogo de IRPS](/img/guias/contabilidade/CBL05_02_irps_dialogo.webp)

Sem retenção (senhorio empresa), o lançamento tem só duas linhas: 63232 a débito e 121 a crédito, pelos 15 000,00.

---

## 7. Salários {#salarios}

O Buinoz **não calcula salários**. Faça as contas fora (ou peça ao contabilista) e lance o resultado em **CBL05**. Só existe o caminho B.

**Quando processa o salário do mês**

| Conta | Débito | Crédito |
|---|---|---|
| 622 Remunerações dos trabalhadores | Salário bruto | |
| 4421 Retenção - Trabalho dependente | | IRPS descontado |
| 449 Contribuições para o INSS | | INSS descontado ao trabalhador (3%) |
| 4622 Remunerações a pagar aos trabalhadores | | Salário líquido |

**Quando paga o salário**

| Conta | Débito | Crédito |
|---|---|---|
| 4622 Remunerações a pagar aos trabalhadores | Salário líquido | |
| 121 Depósitos à ordem (ou 111 Caixa) | | Salário líquido |

A parte do INSS paga pela empresa (4%) é um gasto a mais: **623 Encargos sobre remunerações** a débito e **449** a crédito. Quando paga a guia do INSS, debite a 449 e credite o banco. As guias do INSS têm um módulo próprio: veja [Automações](/automacoes).

---

## 8. Depositar no banco o dinheiro da caixa {#deposito}

Não é venda nem despesa: o dinheiro só muda de sítio. Lance em **CBL05**.

| Conta | Débito | Crédito |
|---|---|---|
| 121 Depósitos à ordem | 10 000,00 | |
| 111 Caixa | | 10 000,00 |

Sem este lançamento, a caixa fica com dinheiro a mais e o banco com dinheiro a menos nos relatórios.

---

## 9. Empréstimo do banco {#emprestimo}

**Quando recebe o dinheiro**

| Conta | Débito | Crédito |
|---|---|---|
| 121 Depósitos à ordem | 100 000,00 | |
| 43 Empréstimos obtidos (sub-conta do empréstimo) | | 100 000,00 |

**Quando paga uma prestação** (exemplo: 9 000,00, dos quais 1 000,00 são juros)

| Conta | Débito | Crédito |
|---|---|---|
| 43 Empréstimos obtidos (a mesma sub-conta) | 8 000,00 | |
| 691 Juros suportados | 1 000,00 | |
| 121 Depósitos à ordem | | 9 000,00 |

O banco diz no extracto quanto de cada prestação é capital e quanto é juro.

---

## 10. Compra de equipamento {#equipamento}

Um computador, uma arca, uma viatura. Não é uma despesa do mês: é um bem que dura anos. Lance em **CBL05** e registe o bem em **CBL35 - Imobilizado**.

| Conta | Débito | Crédito |
|---|---|---|
| 323 Mobiliário e equipamento administrativo (ou 322, 324, conforme o bem) | 40 000,00 | |
| 4432 IVA dedutível | 6 400,00 | |
| 121 Depósitos à ordem | | 46 400,00 |

O desgaste do bem (amortização) é lançado uma vez por ano. Deixe isso para o contabilista.

---

## 11. Devolução ou anulação de uma venda {#nota-de-credito}

### Caminho A

Abra **F08 - Notas de Crédito**, escolha a factura e emita a nota de crédito. Não apague nem altere a factura original.

### Caminho B

Faça o lançamento ao contrário do da venda: o que estava a débito passa a crédito, e o contrário.

| Conta | Débito | Crédito |
|---|---|---|
| 711 Vendas de mercadorias | 1 000,00 | |
| 4433 IVA liquidado | 160,00 | |
| 411 Clientes c/c (ou 111 Caixa, se devolveu o dinheiro) | | 1 160,00 |

---

## 12. O dono põe ou tira dinheiro da loja {#dono}

Aponte a data e o valor e **mostre ao contabilista**. A conta certa depende de ser capital, empréstimo do sócio ou lucro, e isso tem consequências fiscais. Não lance sozinho.

---

## Contabilizar o mês {#contabilizar}

Depois de os documentos estarem no Buinoz (caminho A), faltam três passos para entrarem na contabilidade.

### 1. Vendas e facturas: CBL02

Abra **CBL02 - Vendas para Contabilizar** e escolha as datas. A linha **Contas:** mostra as contas que vão ser usadas. Carregue em **Contabilizar** em cada documento, ou em **Selecionar todos**.

![Vendas pendentes](/img/guias/contabilidade/MX_60_cbl02_pendentes.webp)

Os documentos passam para **Contabilizadas**, com o visto verde.

![Vendas contabilizadas](/img/guias/contabilidade/MX_61_cbl02_feitas.webp)

### 2. Compras e despesas: CBL03

O mesmo em **CBL03 - Compras e Despesas para Contabilizar**. Se a compra tem retenção de IRPS, escolha a categoria **antes** de carregar em Contabilizar.

![Compras pendentes](/img/guias/contabilidade/MX_63_cbl03_pendentes.webp)

### 3. Aprovar e lançar: CBL06

Contabilizar cria **rascunhos**. Abra **CBL06 - Lançamentos Contabilísticos**: estão todos na lista, com o estado **Rascunho**.

![Rascunhos](/img/guias/contabilidade/MX_64_cbl06_rascunhos.webp)

Carregue na seta de um lançamento e escolha **Aprovar e Lançar**.

![Aprovar e lançar](/img/guias/contabilidade/MX_65_cbl06_escolha.webp)

Confirme.

![Confirmar](/img/guias/contabilidade/MX_66_cbl06_confirmar.webp)

O lançamento sai da lista de rascunhos e passa a contar nos relatórios.

## O lançamento à mão (caminho B) {#manual}

Todos os lançamentos do caminho B fazem-se da mesma forma, em **CBL05 - Novo Lançamento**.

![Novo lançamento manual](/img/guias/contabilidade/MX_81_manual_rascunhos.webp)

1. Escolha o **Diário** (Vendas, Compras, Caixa, Bancos, Operações Diversas) e a **Data** do documento.
2. Escreva a **Descrição** (ex.: Renda da loja - Novembro).
3. Carregue em **Adicionar Linha** uma vez por cada linha da tabela do cenário.
4. Em cada linha, escreva o **código da conta** e o valor no **Débito** ou no **Crédito**.
5. Veja o rodapé: quando o total do débito é igual ao do crédito, o estado é **Balanceado**.
6. Grave com o ícone do topo. O lançamento fica em rascunho: lance-o em **CBL06**.

## Conferir no fim {#conferir}

**CBL10 - Balancete**: todas as contas, com o que entrou e o que saiu. A soma do débito tem de ser igual à do crédito.

![Balancete](/img/guias/contabilidade/MX_90_balancete.webp)

**CBL11 - Demonstração de Resultados**: o que a loja vendeu, o que gastou e o resultado.

![Demonstração de resultados](/img/guias/contabilidade/MX_91_resultados.webp)

**CBL23 - Modelo 2 - IVA**: o IVA das vendas, o IVA das compras e o que há a entregar no mês.

![IVA do mês](/img/guias/contabilidade/MX_93_iva.webp)

Entregue estes três relatórios ao contabilista, com a pasta das facturas do mês.

## Prazos de entrega ao Estado {#prazos}

| O quê | A quem | Prazo | No Buinoz |
|---|---|---|---|
| Contribuições do INSS (declaração e pagamento) | INSS | Do dia 20 do mês do salário até ao dia 10 do mês seguinte | **AU01 - INSS Guias**, Declarar mês |
| Retenções de IRPS | Autoridade Tributária | Até ao dia 20 do mês seguinte | **CBL22 - Modelo 10 - IRPS** |
| IVA (Modelo A) e pagamento | Autoridade Tributária | Do dia 1 ao último dia do mês seguinte | **CBL23 - Modelo 2 - IVA** |

No INSS, o atraso dá multa de 1 a 3 salários mínimos da área de actividade por trabalhador, mais juros. Depois de pagar, lance o pagamento em **CBL05**: a conta da dívida (449 INSS, 4421 a 4425 IRPS, 4433 IVA) a débito e o banco a crédito.

Os prazos podem mudar por lei. Confirme-os com o seu contabilista.

## Resumo dos cenários {#resumo}

| Cenário | Caminho A (Buinoz) | Caminho B: débito | Caminho B: crédito |
|---|---|---|---|
| Venda a dinheiro | POS01 | 111 | 711 e 4433 |
| Factura a crédito | F02 | 411 | 711 e 4433 |
| Cliente paga | I02, Confirmar | 121 ou 111 | 411 |
| Compra de mercadoria | CD02 | 211 e 4432 | 421 |
| Pagar ao fornecedor | | 421 | 121 ou 111 |
| Água, luz, combustível | CD03 (conta escolhida pelo nome) | 6321x e 4432 | 121 ou 111 |
| Renda com retenção | CD03 + CBL03 | 63232 | 4424 e 121 |
| Salários | (não há) | 622 | 4421, 449 e 4622 |
| Depósito da caixa no banco | (não há) | 121 | 111 |
| Empréstimo recebido | (não há) | 121 | 43 |
| Equipamento | (não há) | 32x e 4432 | 121 |
| Nota de crédito | F08 | 711 e 4433 | 411 ou 111 |

:::info Este guia ainda não foi revisto por um contabilista
Os passos no Buinoz foram todos feitos e capturados numa loja de demonstração, na versão 2.19.6. As contas dos lançamentos à mão seguem o plano oficial, mas a escolha da conta em casos concretos (isenções de IVA, retenções, salários) deve ser confirmada pelo seu contabilista.
:::

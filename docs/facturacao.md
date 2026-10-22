---
title: Facturação e Inventário
sidebar_position: 4
---

# Facturação e Inventário (F01 - F14)

[Descarregar este guia em PDF](/pdf/buinoz-guia-facturacao.pdf)

Clientes, facturas, cotações, notas de crédito, inventário e a declaração de IVA (Modelo A).

```
F01 Cliente -> F02 Factura (FA) -> I02 Confirmar pagamento -> FA Paga
            -> F03 Cotação (CT) -> F07 Converter em Factura
FA errada   -> I02 Nota de crédito (F08)
```

## F01 - Clientes {#f01}

1. Abra **F01 Clientes**. Filtre por **Activo** ou **Inactivo** e pesquise pelo nome.
2. Carregue em **Novo Cliente**.
3. Preencha **Cliente** (nome) e **Nuit**; **Email** e **Telefone**; **Endereço** e **Localização**.
4. Carregue em **Criar Cliente**. Aparece **Criado com sucesso**.
5. Feche com o **X**. O cliente aparece na lista e já pode ser escolhido nas facturas.

![Lista de clientes](/img/guias/facturacao/F01_01.webp)
![Novo cliente preenchido](/img/guias/facturacao/F01_03_preenchido.webp)
![Cliente criado](/img/guias/facturacao/F01_04_criado.webp)

## F02 - Facturas {#f02}

Exemplo: factura a **Leonel Duarte** com 2 Coca Cola e 1 Farinha.

1. Abra **F02 Facturas**.
2. Toque em **Escolher Cliente** e escolha o cliente (ou **Criar Cliente**).

   ![Escolher cliente](/img/guias/facturacao/F02_02_escolher_cliente.webp)

3. Toque em **Pagamento** para mudar a data de vencimento, se precisar.
4. Carregue em **+ Producto** e toque nos produtos. Cada toque junta 1 unidade. Feche com o **X**.

   ![Escolher produtos](/img/guias/facturacao/F02_03_produtos.webp)

5. Confira o carrinho: preço, desconto, quantidade, IVA e total por linha. Toque numa linha para mudar a quantidade; o caixote apaga a linha.

   ![Carrinho](/img/guias/facturacao/F02_04_carrinho.webp)

6. (Opcional) **Preview PDF**: escolha o modelo (Clássico, Simples, Moderno...) e veja a factura antes de emitir.

   ![Preview](/img/guias/facturacao/F02_06_preview.webp)

7. Carregue em **Finalizar** e confirme com **OK**.

   ![Confirmar](/img/guias/facturacao/F02_07_confirmar.webp)

8. A factura fica emitida com número da série (ex.: **FA 6/LOJA56-2026**). Use **Imprimir A4** ou **Novo** para a seguinte.

   ![Factura emitida](/img/guias/facturacao/F02_08_finalizada.webp)

### Receber o pagamento da factura

1. Abra **I02 Exploração** e encontre a factura.
2. Carregue em **Confirmar**.
3. Confira o **Valor a pagar**, a **Data do pagamento** e escolha o **Método de pagamento** (Dinheiro, M-Pesa, Transferência, Cartão).
4. Carregue em **OK**. A factura passa a **FA Paga**.

O pagamento tem de ser do valor total. Para pagar em partes, use **Criar Plano**.

![Confirmar pagamento](/img/guias/facturacao/F02_10_confirmar_pagamento.webp)
![Factura paga](/img/guias/facturacao/F02_11_paga.webp)

## F03 - Cotação {#f03}

Funciona como a factura (escolher cliente, juntar produtos, finalizar), mas cria uma **Cotação (CT)**: não conta como venda nem mexe no stock. Em **Validade** escolha até quando a proposta vale. Mais tarde, converta-a em factura em **F07**.

![Cotação](/img/guias/facturacao/F03_01.webp)

## F04 - Inventário {#f04}

Lista as contagens de inventário. Carregue em **Novo Inventário** para começar uma contagem. Durante o inventário as vendas ficam bloqueadas nessa loja, para o stock não mudar a meio.

![Inventário](/img/guias/facturacao/F04_01.webp)

## F05 - Extrato de Cliente {#f05}

O movimento de cada cliente: facturas (débito), pagamentos e notas de crédito (crédito) e o saldo em dívida, com o IVA de cada documento.

1. Escolha **Data inicial** e **Data final**.
2. Escolha o cliente (ou **All**) e o tipo de facturas.
3. Carregue em **Actualizar**. Marque **Mostrar Apenas Totais** para um resumo.
4. Exporte com o ícone **PDF** ou **Gerar Excel**.

![Extrato de cliente](/img/guias/facturacao/F05_01.webp)

## F06 - Observações {#f06}

Junte uma observação a um documento já emitido (aparece no PDF). Escolha o período, pesquise o documento e toque no ícone de edição.

![Observações](/img/guias/facturacao/F06_01.webp)

## F07 - Converter em Factura {#f07}

Lista as cotações (CT) do período. Toque numa cotação para a converter numa factura, com os mesmos produtos e cliente.

![Converter em factura](/img/guias/facturacao/F07_01.webp)

## F08 - Notas de Crédito {#f08}

A lista das notas de crédito emitidas: número, data, factura de origem, cliente, valor e motivo, com o PDF de cada uma. Exporte com **Gerar Excel**. A nota de crédito cria-se em **I02 Exploração**, no botão **Nota de crédito** da factura.

![Notas de crédito](/img/guias/facturacao/F08_01.webp)

## F09 - Recriar Factura {#f09}

Lista as facturas do período para emitir de novo uma factura a partir de outra, por exemplo quando a original foi anulada com nota de crédito. As facturas com nota de crédito têm a etiqueta vermelha **Tem NC**.

![Recriar factura](/img/guias/facturacao/F09_01.webp)

## F10 - Corrigir IVA {#f10}

Corrige o IVA dos produtos de um documento já emitido (VD, FA, PO, EX, CT).

1. Pesquise pelo cliente ou número e filtre pelo tipo de documento.
2. Abra o documento e escolha a taxa de IVA certa para cada produto.
3. Grave. As linhas do documento e o IVA do próprio produto são actualizados, e os totais e a desagregação do IVA são recalculados.

![Corrigir IVA](/img/guias/facturacao/F10_01.webp)

## F11 - Guia de Remessa {#f11}

Gera a Guia de Remessa em PDF a partir de uma factura.

1. Filtre pelas datas e pesquise pelo cliente ou número.
2. Toque no ícone do camião da factura.
3. Escolha a data e hora de início do transporte. O PDF tem remetente, destinatário, lista de bens e total de itens.

![Guia de remessa](/img/guias/facturacao/F11_01.webp)

## F12 - Imprimir Documentos {#f12}

Exporta e imprime documentos em PDF no formato talão. Escolha o documento e gere o PDF pronto a imprimir. Também serve para submeter os documentos à AT (Autoridade Tributária). Filtre por período e tipo e use **Exportar PDF**.

![Imprimir documentos](/img/guias/facturacao/F12_01.webp)

## F13 - Fidelização {#f13}

Os clientes com compras em atraso de repetição (por exemplo, medicamentos de uso contínuo). Filtre por **Atrasados**, **7 dias** ou **Todos**. Carregue em **Fidelizar** para juntar um cliente ao programa.

![Fidelização](/img/guias/facturacao/F13_01.webp)

## F14 - Modelo A - IVA {#f14}

A declaração periódica de IVA (Modelo A), preenchida com as vendas e compras do Buinoz.

1. Escolha o **Mês** e o **Ano**.
2. Confira os quadros: tipo de declaração, período, NUIT, nome, actividade e o apuramento do imposto (quadro 8).
3. Use o ícone **PDF** (topo direito) para gerar a declaração.

![Modelo A](/img/guias/facturacao/F14_01.webp)

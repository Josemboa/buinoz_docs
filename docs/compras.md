---
title: Compras e Despesas
sidebar_position: 6
---

# Compras e Despesas (CD01 - CD07)

[Descarregar este guia em PDF](/pdf/buinoz-guia-compras.pdf)

Fornecedores, compras de mercadoria (PO), despesas (EX), apoio à encomenda e o painel de despesas.

```
CD01 Fornecedor -> CD02 Compra (PO) -> I02 Actualizar stock -> stock sobe, compra Finalizada
CD03 Despesa (EX) -> entra logo nas contas
```

## CD01 - Fornecedor {#cd01}

1. Abra **CD01** e carregue em **Novo Fornecedor**.
2. Preencha **Fornecedor** (nome) e **Nuit**; **Email** e **Telefone**; **Endereço** e **Localização**.
3. Carregue em **Criar Fornecedor**.

![Fornecedores](/img/guias/compras/CD01_01.webp)
![Novo fornecedor](/img/guias/compras/CD01_02_novo_fornecedor.webp)

## CD02 - Compras {#cd02}

Exemplo: compra de 4 Coca Cola ao fornecedor UPA, para a Loja01.

1. Abra **CD02**. Em **Armazém**, escolha onde a mercadoria vai entrar (Loja01 ou Armazém central).

   ![Armazém](/img/guias/compras/CD02_02_armazem.webp)

2. Toque no cartão do fornecedor (aparece **Geral**) e escolha o fornecedor, ou **Criar fornecedor**.

   ![Fornecedor](/img/guias/compras/CD02_03_fornecedor.webp)

3. Carregue em **+ Producto** e toque nos produtos. O preço que aparece é o **preço de compra**. Feche com o **X**.

   ![Produtos](/img/guias/compras/CD02_04_produtos.webp)

4. Confira o carrinho e carregue em **Finalizar**. A compra fica com o número da série (ex.: **PO 12/LOJA56-2026**).

   ![Carrinho](/img/guias/compras/CD02_05_carrinho.webp)
   ![Compra emitida](/img/guias/compras/CD02_06_emitida.webp)

### Dar entrada no stock

A compra ainda não mexe no stock. Quando a mercadoria chega:

1. Abra **I02 Exploração**, escolha o tipo **Compra** e carregue em **Actualizar**.
2. Na compra, carregue em **Actualizar stock** e confirme com **OK**.
3. A compra passa a **Finalizado** e o stock sobe. (Para quem vem do SAP: MIGO e MIRO num só passo.)

![Compra na Exploração](/img/guias/compras/CD02_07_i02.webp)
![Confirmar entrada de stock](/img/guias/compras/CD02_08_confirmar_stock.webp)
![Compra finalizada](/img/guias/compras/CD02_09_finalizada.webp)

## CD03 - Despesas {#cd03}

Despesas do dia-a-dia: água, luz, transporte, material de escritório.

1. Abra **CD03**.
2. Carregue em **Despesa rápida**, escreva o **Nome** (ex.: Água do escritório), o **Preço** e a **Quantidade** e carregue em **Adicionar**. Ou use **+ Producto** para produtos marcados como despesa.
3. Escolha o método de pagamento e carregue em **Finalizar**. A despesa fica com número da série (ex.: **EX 4/LOJA56-2026**).

As despesas criadas aqui não passam por aprovação. Para despesas com aprovação, use **AR03** ([Aprovações](aprovacoes)).

![Despesa rápida](/img/guias/compras/CD03_02_despesa_rapida.webp)
![Carrinho da despesa](/img/guias/compras/CD03_03_carrinho.webp)
![Despesa emitida](/img/guias/compras/CD03_04_emitida.webp)

## CD04 - Apoio à Encomenda {#cd04}

Sugere o que comprar, agrupado por fornecedor.

1. Escolha o critério: **Abaixo stock min**, **Abaixo vendas mês ant**, **Abaixo vendas mês actual** ou **Stock zero**.
2. Carregue em **Actualizar**. Veja o número de produtos, de fornecedores e a **compra sugerida** em MZN.
3. Abra um fornecedor para ver os produtos. Use os ícones **PDF** e **Excel** para enviar a encomenda, ou **Exportar**.

![Apoio à encomenda](/img/guias/compras/CD04_01.webp)

## CD05 - RPA de Compra {#cd05}

**Importar Factura de Fornecedor**: carregue em **Selecionar PDF** e escolha a factura do fornecedor. O Buinoz lê o PDF e extrai os produtos, as quantidades e os preços para a compra.

![RPA de compra](/img/guias/compras/CD05_01.webp)

## CD06 - Anexos de Compras {#cd06}

Organiza as facturas dos fornecedores. Lista as compras (PO) e entradas de stock (ES), com filtros de data, tipo e fornecedor, e a etiqueta **Com anexo** / **Sem anexo**.

1. Abra o documento.
2. Carregue em **Anexar factura** (imagem ou PDF, até 3 MB).
3. Pode pré-visualizar a imagem, abrir o PDF noutra aba ou **Trocar Fornecedor**.

![Anexos de compras](/img/guias/compras/CD06_01.webp)
![Anexar factura](/img/guias/compras/CD06_02_anexo.webp)

## CD07 - Painel de Despesas {#cd07}

As despesas do dia e do período, as despesas por mês com previsão, e as despesas por item, por fornecedor e por pagamento. Escolha o período e carregue em **Actualizar**.

![Painel de despesas](/img/guias/compras/CD07_01.webp)

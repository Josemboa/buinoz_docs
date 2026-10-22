---
title: Gestão de Armazéns
sidebar_position: 7
---

# Gestão de Armazéns (GA01 - GA05)

[Descarregar este guia em PDF](/pdf/buinoz-guia-armazem.pdf)

Armazéns, entradas, saídas, transferências e acertos de stock.

```
GA02/GA03/GA04/GA05 -> Finalizar -> I02 Exploração -> Actualizar stock -> stock muda
```

> Os documentos de armazém só mexem no stock depois de **Actualizar stock** na **I02 Exploração**.

## GA01 - Armazém {#ga01}

A lista dos armazéns da loja (ex.: **Armazém central**). Use o lápis para criar ou editar um armazém.

![Armazéns](/img/guias/armazem/GA01_01.webp)

## GA02 - Entrada de Stock {#ga02}

Entrada de mercadoria sem compra (ex.: oferta, devolução, stock inicial).

1. Escolha o armazém de **Destino**.
2. Carregue em **+ Producto** e toque nos produtos (ou leia o código de barras).
3. Carregue em **Finalizar**.
4. Em **I02 Exploração**, filtre **Entrada de stock** e carregue em **Actualizar stock**.

![Entrada de stock](/img/guias/armazem/GA02_01.webp)

## GA03 - Saída de Stock {#ga03}

Saída de mercadoria sem venda (ex.: consumo interno, quebra). Os passos são iguais à entrada: escolha o armazém de **Origem**, junte os produtos e finalize.

![Saída de stock](/img/guias/armazem/GA03_01.webp)

## GA04 - Transferência de Stock {#ga04}

Exemplo: passar 2 Perfume Boss do Armazém central para a Loja01.

1. Abra **GA04**. Em **Origem**, escolha **Armazém central**.

   ![Origem](/img/guias/armazem/GA04_02_origem.webp)

2. Em **Destino**, deixe **Loja01**. Origem e destino não podem ser iguais (o Buinoz avisa).
3. Carregue em **+ Producto** e toque no produto duas vezes. Confira a coluna **Stock** da origem.

   ![Carrinho da transferência](/img/guias/armazem/GA04_03_carrinho.webp)

4. Carregue em **Finalizar**.
5. Abra **I02 Exploração**, filtre **Transferência de stock** e carregue em **Actualizar**. A transferência mostra a origem e o destino.

   ![Transferência na Exploração](/img/guias/armazem/GA04_05_i02.webp)

6. Carregue em **Actualizar stock** e confirme com **OK**.

   ![Confirmar](/img/guias/armazem/GA04_06_actualizar.webp)

7. Em **I03 Visão de Stock**: Loja01 passou de 9 para 11 e o Armazém central de 11 para 9. O total (20) não muda.

   ![Stock depois da transferência](/img/guias/armazem/GA04_07_stock.webp)

## GA05 - Acerto de Stock {#ga05}

Corrige o stock quando a contagem física não bate com o sistema. Escolha o armazém, junte os produtos com a quantidade de acerto e finalize. Depois, **Actualizar stock** na I02.

Para contar a loja inteira, use **F04 Inventário**.

![Acerto de stock](/img/guias/armazem/GA05_01.webp)

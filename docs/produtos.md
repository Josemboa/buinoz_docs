---
title: Produtos e Preços
sidebar_position: 3
---

# Produtos e Preços (P01 - P06)

[Descarregar este guia em PDF](/pdf/buinoz-guia-produtos.pdf)

Aqui cria e mantém os produtos: preço de venda (PVP), custo, IVA, categoria, stock mínimo, código de barras e onde ficam na loja.

## P01 - Produtos {#p01}

A lista de produtos mostra, para cada um: PVP, custo, lucro, IVA e stock actual.

1. Abra **P01 Produtos**.
2. Use os filtros **Status** (Activo/Inactivo) e **Tipo** (Venda, Compra, Serviço) e a pesquisa por nome ou código de barras.
3. Carregue em **Stock I/O** para ver as entradas e saídas de um produto.
4. Para criar ou editar, use o botão do lápis (canto inferior direito) ou toque no produto.

![Lista de produtos](/img/guias/productos/P01_01.webp)

### A ficha do produto

| Campo | O que é |
|---|---|
| Categoria | Grupo do produto (Bebida, Comida...). Obrigatório. |
| Activo / Inactivo | Inactivo deixa de aparecer nas vendas |
| É serviço | Marque para serviços (não controlam stock) |
| IVA | Taxa de IVA (ex.: 16%) |
| Desconto | Desconto por defeito, em % |
| Código / Producto | Código interno e nome |
| Vendas / Compras / Despesas | Em que documentos o produto pode entrar |
| Stock mínimo | Abaixo deste valor o produto aparece em **Baixo Stock** |
| Tamanho | Unidade (UN, KG, L...) |
| Preços: Venda / Compra | PVP e custo. **Calcular com IVA** ajuda a achar o preço sem IVA |
| Código de barras | Escreva ou leia com a câmara |
| Vender Online | Mostra o produto na loja online |

Depois de preencher, carregue em **Actualizar** (ou no ícone de guardar, no topo). Para sair sem gravar, use o **X** no canto superior esquerdo.

![Ficha do produto](/img/guias/productos/P01_02_ficha.webp)

## P02 - Alteração de Preço {#p02}

O histórico de alterações de preço e de produto: quem mudou, o quê e quando. Escolha o período no calendário e pesquise. Toque numa linha para ver o detalhe.

![Alteração de preço](/img/guias/productos/P02_01.webp)

## P03 - Produtos por Categoria {#p03}

Junte vários produtos a uma categoria de uma só vez.

1. Abra **P03 Produtos por Categoria**.
2. Em **Categoria**, escolha a categoria (por exemplo, **Bebida**). Os produtos que já estão nela aparecem marcados com **nesta categoria**.
3. Marque os produtos que quer juntar.
4. Carregue em **Guardar**.

![Produtos por categoria](/img/guias/productos/P03_02_bebida.webp)

## P04 - Estantes e Prateleiras {#p04}

Defina as estantes de cada armazém (colunas e prateleiras), para saber onde está cada produto.

1. Escolha o armazém (ex.: **Loja01**).
2. Carregue em **+** para criar uma estante, com o número de colunas e de prateleiras.
3. O ícone vermelho apaga a estante.

![Estantes](/img/guias/productos/P04_01.webp)

## P05 - Localização de Produtos {#p05}

Ponha cada produto numa prateleira.

1. Escolha o armazém.
2. À esquerda, pesquise o produto (ou leia o código de barras).
3. À direita, escolha a estante e toque na célula da prateleira onde o produto fica.

Os produtos sem lugar aparecem com **Sem localização**.

![Localização](/img/guias/productos/P05_01.webp)

## P06 - Productos Compostos {#p06}

Um produto composto é feito de outros (um combo, um prato, um cabaz). Ao vender o composto, o Buinoz desconta o stock de cada componente.

Para cada composto vê: PVP, custo, lucro, IVA, o **stock possível** (quantos se podem fazer com o stock dos componentes) e os componentes com as quantidades. Use o lápis para criar ou editar.

![Produtos compostos](/img/guias/productos/P06_01.webp)

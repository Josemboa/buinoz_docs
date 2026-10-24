---
title: Relatórios e Informação
sidebar_position: 2
---

# Relatórios e Informação (I01 - I07)

[Descarregar este guia em PDF](/pdf/buinoz-guia-relatorios.pdf)

Este módulo mostra as vendas, o stock e os resultados da loja. Não cria documentos: só lê. Use-o todos os dias para saber quanto vendeu, o que falta e onde está o lucro.

![Menu Relatórios e Informação](/img/guias/informacao/I01_03_mensal.webp)

## I01 - Dashboard {#i01}

O Dashboard tem vários relatórios de vendas. Escolha o tipo, o período e carregue em actualizar.

1. Abra **I01 Dashboard**.
2. Na primeira caixa, escolha o tipo de relatório: **Diário, Mensal, Anual, Top 20, Performance, Por producto, Detalhe diário, Por vendedor, Por hora, Por pagamento, Logs de productos** ou **Por documento**.

   ![Tipos de relatório](/img/guias/informacao/I01_02_tipos.webp)

3. Na segunda caixa, escolha **Todas vendas** ou um tipo de documento.
4. Toque em **Data inicial** e escolha o primeiro dia (por exemplo, dia 1 do mês). Confirme a data e a hora com **OK**. Faça o mesmo em **Data final**.
5. Carregue no botão **actualizar** (seta circular, à direita).
6. Veja os totais no topo: **QTD, Líquido, IVA** e **Total**. Ligue **Mostrar Gráfico** para ver o gráfico.
7. Carregue em **Gerar PDF** (ou **Gerar Excel**, em alguns relatórios) para guardar ou partilhar.

> Se aparecer **Sem informação**, o período não tem vendas. Alargue a **Data inicial**.

| Relatório | O que mostra |
|---|---|
| Mensal / Anual | Total vendido por mês ou por ano |
| Top 20 | Os 20 produtos que mais vendem |
| Performance | Entradas, saídas e lucro por produto, e as maiores despesas |
| Por producto / Por vendedor | Vendas por produto ou por vendedor |
| Por hora | As horas do dia com mais vendas |
| Por pagamento | Numerário, M-Pesa, POS e outros |
| Por documento | Total por tipo de documento |

![Relatório mensal com gráfico](/img/guias/informacao/I01_03_mensal.webp)
![Top 20 produtos](/img/guias/informacao/I01_05_top20.webp)
![Performance](/img/guias/informacao/I01_06_performance.webp)
![Vendas por hora](/img/guias/informacao/I01_09_por_hora.webp)

### Vista Executiva {#i01-executiva}

No topo do I01, o botão **Vista: Clássica | Executiva** troca de vista. A Vista Executiva mostra o negócio num relance, com separadores.

:::danger Atenção: só conta o que está contabilizado
O separador **Início** e os resultados usam a contabilidade. Uma venda ou compra só aparece depois de **Contabilizar** (CBL02/CBL03) e de **Aprovar e Lançar** (CBL06). Se o mês mostra 0, contabilize primeiro.
:::

| Separador | O que mostra |
|---|---|
| **Início** | Resultados (mês passado, este mês, este ano), despesas dos últimos 30 dias, saldo de caixa e bancos, fluxo de caixa de 12 meses e os relatórios favoritos |
| **Vendas** | Rendimentos ao longo do tempo (pode comparar com o ano anterior) e o estado das facturas |
| **Facturas** | As facturas por pagar e pagas, com filtros de estado, data e cliente |
| **Transacções de venda** | Todos os documentos de venda (facturas, cotações), com tipo, estado e valor |
| **Despesas** | Compras e despesas, com beneficiário, categoria, valor sem IVA, IVA e total |
| **Produtos e serviços** | Os artigos com stock, preço e custo; avisa artigos sem custo, sem stock ou com pouco stock |
| **Inventário** | Pouco stock, sem stock, produtos mais vendidos e ordens de compra em aberto |
| **Relatórios** | Lista de relatórios por tema; a estrela marca um relatório como favorito (aparece no Início) |

1. Abra **I01** e carregue em **Executiva**.
2. Em **Resultados**, escolha **Este ano** para ver um período maior. **Ver resultados por mês** abre a demonstração de resultados mês a mês.

   ![Início da Vista Executiva](/img/guias/informacao/I01_20_exec_inicio.webp)

3. Abra cada separador para ver o detalhe.

   ![Vendas](/img/guias/informacao/I01_21_exec_vendas.webp)
   ![Facturas](/img/guias/informacao/I01_22_exec_facturas.webp)
   ![Transacções de venda](/img/guias/informacao/I01_23_exec_transaccoes.webp)
   ![Despesas](/img/guias/informacao/I01_24_exec_despesas.webp)
   ![Produtos e serviços](/img/guias/informacao/I01_25_exec_produtos.webp)
   ![Inventário](/img/guias/informacao/I01_26_exec_inventario.webp)
   ![Relatórios e favoritos](/img/guias/informacao/I01_27_exec_relatorios.webp)

## I02 - Exploração {#i02}

A Exploração lista todos os documentos (vendas, facturas, compras, despesas) de um período. É aqui que se fazem as acções sobre cada documento.

1. Abra **I02 Exploração**.
2. Escolha o período no calendário (canto superior esquerdo) e o tipo de documento (**Todos**, ou um tipo).
3. Carregue em **Actualizar**. O contador mostra quantos documentos foram carregados.
4. Use **Pesquisar Pedido** para encontrar um documento pelo número ou pelo cliente.
5. Em cada documento, use os botões:
   - **Confirmar**: regista o pagamento de uma Factura (FA).
   - **Criar Plano**: divide o pagamento de uma Factura em prestações.
   - **Nota de crédito** / **Nota de Débito**: anula ou corrige o documento.
   - **Actualizar stock**: dá entrada no stock de uma Compra (PO).
6. Toque na seta **>** para abrir o documento, gerar o PDF ou o recibo.

![Exploração](/img/guias/informacao/I02_01.webp)
![Detalhe do documento](/img/guias/informacao/I02_02_detalhe.webp)

## I03 - Visão de Stock {#i03}

Mostra o stock de cada produto em cada armazém, o preço de venda (PVP), o stock mínimo e a validade.

1. Abra **I03 Visão de Stock**.
2. Pesquise pelo nome ou pelo código de barras (ou leia o código com a câmara).
3. Carregue em **Baixo Stock** para ver só os produtos abaixo do stock mínimo.
4. Carregue em **A Expirar** para ver os produtos com validade próxima.
5. Carregue em **Stock I/O** para ver as entradas e saídas de um produto.
6. Use o ícone **PDF** para exportar a lista.

As cores ajudam: verde = stock bom; vermelho = abaixo do mínimo ou validade a acabar.

![Visão de stock](/img/guias/informacao/I03_01.webp)
![Baixo stock](/img/guias/informacao/I03_02_baixo_stock.webp)
![A expirar](/img/guias/informacao/I03_03_a_expirar.webp)

## I04 - Sua Informação {#i04}

Os dados do seu utilizador e da loja: e-mail, **Full ID** (para outro administrador o juntar à loja), moeda, estado e versão do Buinoz.

- **Configuração de impressora de talão**: escreva o IP da impressora térmica e carregue em **Salvar**.
- **Idioma**: escolha e carregue em **Mudar Idioma**.
- **Actualizar dados do usuário**: recarrega as permissões depois de uma mudança.
- **Sair**: termina a sessão.

![Sua informação](/img/guias/informacao/I04_01.webp)

## I05 - Quadrante {#i05}

Um gráfico de quantidade vendida (eixo X) contra o total vendido (eixo Y). Cada ponto é um produto, e os quatro quadrantes dizem o que fazer com ele:

| Quadrante | Significado |
|---|---|
| Estrelas | Muita quantidade e muita receita. Garanta o stock. |
| Jóias escondidas | Pouca quantidade e muita receita. Promova. |
| Volume baixa-margem | Muita quantidade e pouca receita. Reveja o preço. |
| Peso | Pouca venda e pouca receita. Candidato a descontinuar. |

Escolha o período e carregue em actualizar. **Gerar PDF** guarda o gráfico.

![Quadrante](/img/guias/informacao/I05_01.webp)

## I06 - Dashboard Visual {#i06}

Num só ecrã: lucro, margem, receita, custo, despesas, perdas e valor do stock; vendas de hoje e do mês; top 50 produtos; vendas por dia e por mês com previsão; horas de pico; vendedores; e vendas por método de pagamento.

1. Escolha o período (**Mês actual**, por exemplo) e o tipo de vendas.
2. Carregue em **Actualizar**.
3. Toque no ícone de cada cartão do topo para ver o detalhe.

![Dashboard visual](/img/guias/informacao/I06_01.webp)
![Dashboard visual, parte de baixo](/img/guias/informacao/I06_02_scroll.webp)

## I07 - Fluxo do Negócio {#i07}

A rentabilidade do período: lucro por produto, margem por produto, maiores perdas, despesas por produto, reposição sugerida e a tabela de desempenho (entradas, saídas, despesas, perdas, lucro, stock e lead time). Exporte com **Gerar PDF** ou **Gerar Excel**.

![Fluxo do negócio](/img/guias/informacao/I07_01.webp)
![Tabela de desempenho](/img/guias/informacao/I07_02_scroll.webp)

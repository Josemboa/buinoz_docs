---
title: Lavandaria
sidebar_position: 11.5
---

# Lavandaria (LA01 - LA06)

[Descarregar este guia em PDF](/pdf/buinoz-guia-lavandaria.pdf)

Gestão para lavandarias que servem minas, hotéis e empresas: sectores do cliente, sacos por trabalhador, guias de recolha e entrega, lotes de produção, painel e factura do mês.

```
LA01 Configuração -> LA02 Sacos -> LA03 Guia de recolha (GR) -> LA04 Lotes
-> LA03 Guia de entrega (GE) -> LA05 Painel -> LA06 Factura do mês (FA)
```

## Apresentação {#apresentacao}

**O problema:** as guias são em papel. Os sacos e as peças perdem-se. O cliente diz que faltam peças e ninguém tem a prova. A factura do mês demora dias a somar.

**A solução:** cada guia fica no sistema, numerada, com quem assinou e a foto. Cada lote diz a etapa, o operador, o turno e a máquina. O painel mostra as peças recolhidas, entregues e pendentes. A factura do mês sai num clique.

[Apresentação Lavandaria (PDF)](/comercial/Buinoz_Apresentacao_Lavandaria_2026.pdf)

**Demo em 8 passos** (cliente Mina Demo Tete, sectores Hotel e Funcionários):

1. **P01**: crie os produtos de serviço (Lençol 25 MT, Toalha 20 MT, Fronha 10 MT, Cobertor 80 MT por peça). **F01**: crie o cliente.
2. **LA01**: crie os sectores do cliente e ligue os artigos aos produtos.
3. **LA02**: crie um saco por trabalhador.
4. **LA03**: guia de recolha (GR) do Hotel: 40 lençóis, 60 toalhas, 40 fronhas, 6 cobertores.
5. **LA04**: lotes de lavagem, secagem, engomar e dobrar.
6. **LA03**: guia de entrega (GE): 39 lençóis entregues, 1 perdido.
7. **LA05**: veja o painel: 8 peças pendentes, 1 perdida.
8. **LA06**: mapa do mês, 145 peças, 3 055,00 MT antes de IVA. **Criar factura**.

## Permissões {#permissoes}

As permissões são por perfil, em cada loja (ADM: Funções). O servidor confirma cada acção.

| Permissão | O que deixa fazer |
|---|---|
| Configurar lavandaria (sectores, artigos, sacos) | LA01 e LA02 |
| Registar guias e lotes | LA03 e LA04 |
| Ver relatórios da lavandaria | LA05 |
| Facturar a lavandaria (FA mensal) | LA06 |

O dono da loja tem sempre todas as permissões.

## LA01 - Configuração {#la01}

### Sectores

Cada cliente (empresa) tem os seus sectores. Exemplo: Hotel, Funcionários.

![Sectores](/img/guias/lavandaria/LA01_01_sectores.webp)

### Artigos

Cada artigo liga a um **produto de serviço** da loja. O preço por peça é o preço do produto (altere-o na ficha do produto).

1. Carregue em **Novo artigo**.
2. Pesquise o produto pelo nome.
3. Escolha a **Categoria** e a **Ordem na guia**.
4. Grave.

![Novo artigo](/img/guias/lavandaria/LA01_02_artigo_form.webp)
![Lista de artigos](/img/guias/lavandaria/LA01_03_artigos.webp)

## LA02 - Sacos por trabalhador {#la02}

Cada trabalhador do cliente tem o seu saco numerado, com nome e número. A guia de recolha pode indicar o saco.

![Sacos](/img/guias/lavandaria/LA02_01_sacos.webp)

## LA03 - Guias de recolha e entrega {#la03}

### Guia de recolha (GR)

1. Carregue em **Nova guia de recolha**.
2. Escolha o cliente, o sector e o saco (ou "sem saco").
3. Preencha a data, os kg (opcional) e **Assinado por**.
4. Escreva as peças por artigo. Peças **estragadas** ou **perdidas** levam uma nota do dano.
5. Grave. A guia recebe o número (GR-2026-0001).

![Guia de recolha do Hotel](/img/guias/lavandaria/LA03_01_gr_form.webp)
![Guia de recolha com saco](/img/guias/lavandaria/LA03_02_gr_saco.webp)

### Guia de entrega (GE)

Carregue em **Nova guia de entrega**. Os campos são os mesmos. Registe aqui as peças perdidas ou estragadas na entrega.

![Guia de entrega](/img/guias/lavandaria/LA03_03_ge_form.webp)

### Lista e detalhe

Filtre por data e tipo. Abra a guia e carregue em **Foto assinada** para juntar a foto da guia assinada e quem assinou.

![Lista de guias](/img/guias/lavandaria/LA03_04_lista.webp)
![Detalhe da guia](/img/guias/lavandaria/LA03_05_gr_detalhe.webp)

## LA04 - Lotes de produção {#la04}

Cada lote é uma etapa: **lavagem**, **secagem**, **engomar** ou **dobrar**.

1. Carregue em **Novo lote**.
2. Escolha a etapa, o estado e a guia de recolha.
3. Preencha o operador, o turno, a máquina, o programa e os kg.
4. Escreva as peças por artigo e as relavagens.
5. Grave, ou **Terminar agora** para fechar o lote.

![Novo lote](/img/guias/lavandaria/LA04_01_lote_form.webp)
![Lotes](/img/guias/lavandaria/LA04_02_lotes.webp)

## LA05 - Painel e relatórios {#la05}

Escolha o período, o cliente e o sector. O painel mostra os lotes em curso por etapa e as peças **recolhidas**, **entregues**, **pendentes**, **estragadas** e **perdidas**.

Relatórios: Por sector e artigo, Por artigo (valor), Recolhido vs entregue, Estragadas e perdidas, Peças lavadas por dia, Por operador e Relavagens. Carregue em **Gerar PDF** para imprimir.

![Painel](/img/guias/lavandaria/LA05_01_painel.webp)
![Por artigo (valor)](/img/guias/lavandaria/LA05_02_valor.webp)
![Peças lavadas por dia](/img/guias/lavandaria/LA05_03_por_dia.webp)
![Estragadas e perdidas](/img/guias/lavandaria/LA05_04_estragadas.webp)
![Por operador](/img/guias/lavandaria/LA05_05_operador.webp)

## LA06 - Facturação mensal {#la06}

Uma factura (FA) por mês ao cliente, com uma linha por artigo: peças entregues x preço do produto. Só entram guias de entrega abertas e ainda não facturadas.

1. Escolha o cliente, o sector (ou Todos) e o mês.
2. Confira o mapa: peças, preço por peça e valor.
3. Carregue em **Criar factura**. A FA fica em Facturas, pronta para PDF e pagamento.

![Mapa do mês](/img/guias/lavandaria/LA06_01_previa.webp)
![Factura criada](/img/guias/lavandaria/LA06_02_fa_criada.webp)
![Factura em PDF](/img/guias/lavandaria/LA06_03_fa_pdf.webp)

---
title: POS e Tesouraria
sidebar_position: 5
---

import YouTube from '@site/src/components/YouTube';

# POS e Tesouraria (POS01 - POS05, TSR01 - TSR05)

[Descarregar este guia em PDF](/pdf/buinoz-guia-pos.pdf)

### Vídeos

<YouTube id="J-TU0hW-7dc" title="Sessão 5: VD online/offline e venda por postos" />

<YouTube id="ZH3hlBOVCkI" title="Sessão 7: Buinoz em restaurantes" />


Venda ao balcão (Venda a Dinheiro, VD), venda sem internet, ecrã da cozinha, e o controlo da caixa: abertura, conferência e fecho.

```
POS01 Vendedor + PIN -> carrinho -> Finalizar -> talão (ou QR) -> TSR02 caixa -> Fechar e Reiniciar Caixa
```

## POS01 - Venda a Dinheiro {#pos01}

1. Abra **POS01**. Toque no seu nome em **Selecionar Vendedor**.
2. Escreva o seu **PIN de 6 dígitos** e carregue em **Validar**.

   ![Escolher vendedor e PIN](/img/guias/pos/POS01_02_pin_vendedor.webp)

3. O nome do vendedor aparece no topo (**Mudar Vendedor** troca). Carregue em **+ Producto** (ou leia o código de barras) e toque nos produtos. Feche com o **X**.

   ![Produtos](/img/guias/pos/POS01_04_produtos.webp)

4. Escolha o método de pagamento (**Numerário, POS, Mpesa, Emola, Mkesh, Banco**), escreva o **Valor pago** e veja o **Troco** (ex.: total 119,99, pago 200, troco 80,01).

   ![Carrinho](/img/guias/pos/POS01_05_carrinho.webp)

5. Carregue em **Finalizar**. A venda fica com número (ex.: **VD 68/LOJA56-2026**). Use **Imprimir A4**, **Talão**, **Abrir PDF**, **WhatsApp**, ou mostre o **código QR**: o cliente digitaliza-o e descarrega o talão em PDF, sem papel. **Novo** começa a venda seguinte.

   ![Venda finalizada](/img/guias/pos/POS01_06_finalizada.webp)

A VD usa sempre o cliente genérico **Geral**. Para facturar a um cliente com NUIT, use **F02 Facturas**.

![Vendedores](/img/guias/pos/POS01_01.webp)

## POS02 - Venda a Dinheiro Offline {#pos02}

Igual à POS01, mas funciona sem internet. As vendas ficam guardadas no aparelho e sobem sozinhas quando a internet volta.

![Venda offline](/img/guias/pos/POS02_01.webp)

## POS03 - Tela de Produção {#pos03}

Para restaurantes, bares, salões e qualquer negócio com **mesas, postos ou cadeiras**. O pedido fica aberto no posto enquanto o cliente consome. A cozinha (ou o barbeiro, ou o bar) vê o que tem de preparar. No fim, o vendedor cobra o pedido de uma só vez.

```
Vendedor -> Adicionar um Pedido -> escolher posto -> + Producto -> enviar para produção
         -> Pedidos (cozinha): Feito / Imprimir guia -> Finalizar (cobrar) -> posto livre
```

Antes de começar: crie os postos em **ADM08 Gestão de Postos** (ex.: Mesa 1, Caixa 1, Cadeira 2) e os vendedores com PIN.

### 1. Abrir um pedido

1. Abra **POS03**. O vendedor activo aparece no topo. **Mudar Vendedor** troca de vendedor (com PIN).

   ![Tela de produção](/img/guias/pos/POS03_01.webp)

2. Carregue em **Adicionar um Pedido** e toque no posto livre (ex.: **Caixa Cantina Songo**, estado **Disponível**). Confirme em **Criar um pedido**.

   ![Escolher o posto](/img/guias/pos/POS03_02_escolher_posto.webp)

3. O pedido aparece na lista com o nome do posto, a hora de abertura e há quanto tempo está aberto (**Criado há N min**). **Total** mostra quantos pedidos estão abertos.

   ![Pedido aberto](/img/guias/pos/POS03_03_pedido_aberto.webp)

4. O cartão do posto mostra também quem abriu a conta e os serviços ou produtos já lançados (ex.: **vendedor · serviço · serviço**). Assim, vê logo quem atende cada cadeira ou mesa.

   ![Cartão com quem abriu e os serviços](/img/guias/pos/POS03_11_cartao_funcionaria.webp)

### 2. Juntar produtos e enviar para a produção

1. Toque no posto para abrir o pedido. Carregue em **+ Producto** (ou leia o código de barras) e escolha os produtos.

   ![Carrinho do posto](/img/guias/pos/POS03_04_posto_carrinho.webp)

2. Carregue no ícone verde **guardar** (à esquerda do código de barras). As linhas ficam **trancadas** (cadeado vermelho) e o pedido segue para o ecrã **Pedidos** da cozinha. O ícone da **impressora** imprime só as linhas novas, ainda não enviadas.

   ![Enviado para a produção](/img/guias/pos/POS03_05_enviado_producao.webp)

3. O cliente pede mais? Abra o mesmo posto, junte produtos e envie outra vez. Só as linhas novas vão para a cozinha.

### 3. A cozinha: ecrã Pedidos

1. No topo da POS03, carregue em **Pedidos** (laranja). Ponha este ecrã num tablet ou TV na cozinha: actualiza sozinho.
2. Cada cartão é um posto, com o número do documento (**VD**) e o contador **feitos / total** (ex.: **0/1**).

   ![Pedidos da cozinha](/img/guias/pos/POS03_06_pedidos.webp)

3. Marque as caixas das linhas e carregue em **Imprimir (N)** para imprimir a **Guia de Entrega** (para o empregado levar à mesa).

   ![Seleccionar e imprimir](/img/guias/pos/POS03_07_seleccionar_imprimir.webp)

4. O **funil** filtra por categoria: por exemplo, o bar só vê **Bebidas** e a cozinha só vê **Comida**.

   ![Filtrar por categoria](/img/guias/pos/POS03_08_filtrar_categoria.webp)

5. Quando o produto está pronto, carregue em **Feito**. A linha fica riscada e o cartão fica verde quando tudo está feito (ex.: **1/1**).

   ![Feito](/img/guias/pos/POS03_09_feito.webp)

### 4. Cobrar e fechar o posto

1. Abra o posto. Escolha o método de pagamento (**Numerário, POS, Mpesa, Emola, Mkesh, Banco**) e escreva o **Valor pago**.
2. Carregue em **Finalizar**. A venda fica registada como **VD**. O ecrã mostra o número do documento (ex.: **Documento: VD 8/LOJA-2026**). Enquanto o número não chega do servidor, mostra **Documento nr: a sincronizar…**.

   ![Número do documento no fecho](/img/guias/pos/POS03_12_numero_documento.webp)

3. A venda conta para o vendedor que abriu a conta. O dinheiro conta para o vendedor que fecha a conta (ver **ADM06**).
4. **Cancelar Pedido** apaga um pedido aberto (precisa da permissão de apagar). Um pedido já finalizado não se apaga.

![Mudar vendedor](/img/guias/pos/POS03_10_mudar_vendedor.webp)

:::tip Ideias de uso
- **Restaurante e bar:** um posto por mesa, cozinha e bar com filtros de categoria diferentes.
- **Salão de beleza e barbearia:** um posto por cadeira; o cliente junta serviços e paga no fim.
- **Lavandaria e oficina:** um posto por cliente ou viatura; a equipa marca **Feito** em cada serviço.
:::

## POS04 - Sincronização Offline {#pos04}

Mostra o estado das vendas feitas sem internet: **aguardando sincronização** e **sincronizados**. Use o ícone da nuvem para forçar a sincronização, sem esperar pelo ciclo automático.

![Sincronização offline](/img/guias/pos/POS04_01.webp)

## POS05 - Marcações {#pos05}

A agenda do dia, por funcionária. Serve para salões de beleza, barbearias e clínicas. Também serve para reservas de restaurante: a mesa é o posto.

```
+ Nova marcação -> Cliente, Serviço, Funcionária, Cadeira/posto, data, hora, duração -> Gravar
   -> Marcada -> Confirmada -> Em atendimento -> Concluída
              -> Faltou / Cancelada
```

Antes de começar:
- Crie os clientes em **F01 Clientes**.
- Crie os serviços em **P01** (produto com **É serviço**) ou como produto composto.
- Crie as funcionárias em **ADM06 Gerir Vendedores**.
- Crie as cadeiras ou mesas em **ADM08 Gestão de Postos**.

### 1. Criar uma marcação

1. Abra **POS05** e carregue em **+ Nova marcação**.
2. Preencha os campos:

| Campo | O que é |
|---|---|
| Cliente * | Obrigatório. Só clientes activos desta loja |
| Serviço | Serviços e produtos compostos activos, à venda |
| Funcionária | Um vendedor da ADM06 |
| Cadeira / posto | Um posto da ADM08 (cadeira, mesa) |
| Data e hora | O início da marcação |
| Duração (minutos) | Por defeito, 60 |
| Observações | Texto livre |

3. Carregue em **Gravar**. A marcação fica com o estado **Marcada**.

   ![Nova marcação](/img/guias/pos/POS05_01_nova.webp)
   ![Marcação gravada](/img/guias/pos/POS05_02_marcada.webp)

### 2. Horário ocupado

A mesma funcionária não pode ter duas marcações à mesma hora. Se o horário se cruza com outra marcação aberta (Marcada, Confirmada ou Em atendimento), o Buinoz recusa e mostra **A funcionária já tem uma marcação nesse horário.** Escolha outra hora ou outra funcionária.

![Horário ocupado](/img/guias/pos/POS05_03_ocupada.webp)

### 3. A agenda do dia

1. Use as setas **<** e **>** para mudar de dia, ou toque na data para escolher no calendário.
2. O topo mostra o total de marcações do dia e quantas há em cada estado.
3. Cada linha mostra a hora de início e de fim, o cliente, o serviço, a funcionária e o estado.

![Agenda do dia](/img/guias/pos/POS05_04_dia.webp)

### 4. Mudar o estado

Toque no botão do estado seguinte:

| Estado actual | Pode passar para |
|---|---|
| Marcada | Confirmada, Em atendimento, Concluída, Faltou, Cancelada |
| Confirmada | Em atendimento, Concluída, Faltou, Cancelada |
| Em atendimento | Concluída |

**Editar** só aparece em Marcada e Confirmada. Uma marcação Concluída, Faltou ou Cancelada já não muda.

![Em atendimento](/img/guias/pos/POS05_05_atendimento.webp)
![Faltou](/img/guias/pos/POS05_06_faltou.webp)
![Concluída](/img/guias/pos/POS05_07_concluida.webp)

### 5. Lembrete por WhatsApp

Nas marcações abertas, carregue em **WhatsApp**. O Buinoz abre o WhatsApp com o número do cliente e esta mensagem: *Olá (cliente), lembramos a sua marcação de (serviço) no dia (dd/MM) às (HH:mm). Até já!* Confirme o envio no WhatsApp.

:::tip Depois da marcação
A marcação não cobra. Para cobrar, abra a conta na cadeira ou mesa em **POS03** e junte os serviços.
:::

## TSR01 - Painel de Tesouraria {#tsr01}

O resumo da tesouraria: o **histórico de fechos** (data, total de VD, diferença), a **caixa activa** (desde quando, saldo inicial, vendas) e as **caixas físicas**. Os atalhos levam à **Gestão de Caixa** e às **Caixas**.

![Painel de tesouraria](/img/guias/pos/TSR01_01.webp)

## TSR02 - Gestão de Caixa {#tsr02}

### Fechar a caixa

1. Abra **TSR02**, separador **Sessão Activa**.
2. Veja as vendas desde a abertura, separadas por método: numerário (gaveta) e electrónicos (POS, Mpesa, Emola, Mkesh, Banco).
3. Confira o **Esperado em numerário**.
4. Em **Conferência de numerário**, escreva o valor contado na gaveta. O Buinoz mostra a falta ou a sobra.
5. Carregue em **Fechar e Reiniciar Caixa**.

![Sessão activa](/img/guias/pos/TSR02_01.webp)

### Histórico

O separador **Histórico** lista todos os fechos, com o total de VD e a diferença. Os fechos automáticos têm a etiqueta **Fecho automático (diário)**.

![Histórico de fechos](/img/guias/pos/TSR02_02_historico.webp)

## TSR05 - Caixas {#tsr05}

As caixas físicas da loja (gavetas). Carregue em **+** para criar uma:

- **Nome da Caixa**.
- **Fecho automático**: diário (por defeito) ou desligado.
- **Hora de fecho automático**: a caixa fecha sozinha a essa hora, todos os dias, e o resumo vai por e-mail em PDF.

![Caixas](/img/guias/pos/TSR05_01.webp)
![Nova caixa física](/img/guias/pos/TSR05_02_nova_caixa.webp)

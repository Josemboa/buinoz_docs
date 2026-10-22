---
title: POS e Tesouraria
sidebar_position: 5
---

# POS e Tesouraria (POS01 - POS04, TSR01 - TSR05)

[Descarregar este guia em PDF](/pdf/buinoz-guia-pos.pdf)

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

O ecrã da cozinha ou da produção: mostra os pedidos de cada vendedor para preparar.

![Tela de produção](/img/guias/pos/POS03_01.webp)

## POS04 - Sincronização Offline {#pos04}

Mostra o estado das vendas feitas sem internet: **aguardando sincronização** e **sincronizados**. Use o ícone da nuvem para forçar a sincronização, sem esperar pelo ciclo automático.

![Sincronização offline](/img/guias/pos/POS04_01.webp)

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

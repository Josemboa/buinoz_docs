---
title: Administração
sidebar_position: 13
---

# Administração (ADM01 - ADM16)

A base do sistema: lojas, utilizadores, funções (permissões), vendedores, postos, câmbios, licença e séries de documentos. Tudo o resto depende destas definições, por isso só os administradores devem ter acesso completo.

[Descarregar este guia em PDF](/pdf/buinoz-guia-administracao.pdf)

> Este guia ainda não tem imagens.

```
Conta (e-mail) -> Loja (ADM01) -> Utilizador na loja (ADM04) -> Função com permissões (ADM05)
```

A mesma pessoa pode ser **Gerente** na Loja A e **Caixa** na Loja B.

## Primeiros passos numa conta nova

1. **ADM01**: crie a loja.
2. **ADM05**: crie as funções (ex.: Caixa, Gerente, Contabilista).
3. **ADM04**: junte os utilizadores e dê a cada um a sua função.
4. **ADM08**: crie os postos de venda (caixas).
5. **ADM09**: confirme a licença.

## ADM01 - Gestão de Lojas {#adm01}

Sem loja, os menus não aparecem. Carregue em **+ Nova Loja** e preencha o **Nome**, o **Tipo** (Restaurante, Supermercado, Mercado, Bottle Store, Take Away, Caseiros...), a **Cidade** e a **Moeda**. A loja fica logo activa para quem a criou.

## ADM02 - Histórico RPA {#adm02}

O histórico das facturas de fornecedores importadas em **CD05 RPA de Compra**.

## ADM03 - Mudar de Loja {#adm03}

Escolha outra loja onde trabalha. O Buinoz recarrega tudo (permissões, produtos, contas). Os relatórios mostram só a loja activa; a **CBL26 Consolidação Multi-Loja** junta várias.

## ADM04 - Gestão de Utilizadores {#adm04}

1. O novo utilizador abre **I04 Sua Informação**, copia o **Full ID** e envia-o ao administrador.
2. O administrador abre **ADM04**, carrega em **Adicionar usuário**, cola o Full ID e escolhe a função.
3. Carregue em **Actualizar**.

Apagar um utilizador tira-lhe o acesso à loja; os documentos que criou ficam.

## ADM05 - Gerir Funções {#adm05}

Uma função é um conjunto de permissões (ex.: criar VD, criar factura, aprovar requisições, lançar na contabilidade, ver relatórios). Carregue em **+ Nova Função**, dê um nome e marque só as permissões necessárias.

## ADM06 - Gerir Vendedores {#adm06}

Os vendedores do POS, com o **PIN de 6 dígitos** que usam em **POS01**. Serve para saber quem vendeu e calcular comissões.

## ADM07 - Taxas de Câmbio {#adm07}

Para vender ou facturar noutras moedas (USD, ZAR...): defina a taxa de cada moeda face ao metical.

## ADM08 - Gestão de Postos {#adm08}

Cada terminal ou caixa que vende é um posto (ex.: Caixa 1, Cozinha). O nome do posto aparece nos talões e nos relatórios.

## ADM09 - Ver Licença {#adm09}

O estado da licença (teste, activa ou expirada), os módulos incluídos e os limites de lojas e utilizadores. A 30 dias do fim aparece um aviso. Depois de expirar, as vendas ficam bloqueadas, mas os relatórios continuam a funcionar.

## ADM11 - Motivos {#adm11}

Os motivos das notas de crédito (ex.: Erro de facturação, Devolução). Escolhem-se ao emitir uma nota de crédito.

## ADM12 - Guia do App (PDF) {#adm12}

Gera o guia completo do Buinoz em PDF, dentro da aplicação.

## ADM13 - Sobre {#adm13}

A versão do Buinoz e as novidades de cada versão.

## ADM14 - Auditoria da Loja {#adm14}

O registo das acções feitas na loja (quem, o quê, quando).

## ADM15 - Séries de Documentos {#adm15}

As séries de numeração de cada tipo de documento (FA, VD, PO, EX...) por loja, por exemplo **FA 6/LOJA56-2026**.

## ADM16 - Trocar Proprietário {#adm16}

Passa a propriedade da loja para outra conta.

## ADM10 - Admin {#adm10}

Opções reservadas à equipa Buinoz.

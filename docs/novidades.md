---
title: Novidades
sidebar_position: 0.5
---

# Novidades

O que há de novo e o que melhorou em cada versão do Buinoz.

## Versão 2.19.7

- **Modelo A com as compras (F14)**: os campos 07 (existências) e 08 (outros bens e serviços) passam a ter o IVA das compras (CD02) e das despesas (CD03) do mês. Antes ficavam a zero e o IVA a entregar saía a mais. Entradas de stock não são compras e não entram.
- **CBL23 passa a ser o Modelo A da contabilidade**: o mesmo impresso do F14, preenchido a partir dos lançamentos lançados, com o crédito do mês anterior no campo 17. Os dois devem dar o mesmo resultado; se não derem, há documentos por contabilizar.

## Versão 2.19.5

- **Despesas na conta certa**: ao contabilizar uma despesa, o Buinoz lê o nome e escolhe a conta. "Electricidade de Novembro" vai para a 63212, "Água" para a 63211, "Renda" para a 63232. Veja a lista em [Contabilidade por cenários](/contabilidade-cenarios#despesas).
- **Despesa paga sem conta**: se a conta de caixa ou de banco da configuração não existir no plano, o Buinoz avisa e não contabiliza. Antes, a despesa ficava como dívida a fornecedores.
- **CBL03** passa a chamar-se **Compras e Despesas para Contabilizar**.
- **Guia novo**: [Contabilidade por cenários](/contabilidade-cenarios), com imagens de cada passo.

## Versão 2.19.4

- **Plano de contas oficial**: o Buinoz traz as 488 contas do PGC-NIRF (Decreto 70/2009). Veja a lista em [Plano de contas](/plano-de-contas).
- **IRPS com as cinco categorias**: a retenção na fonte usa as categorias do Código do IRPS (Primeira a Quinta), com a taxa de cada uma.
- **Retenção nas compras (CBL03)**: escolha a categoria ao contabilizar a compra. O Buinoz calcula a retenção sobre o valor sem IVA e lança-a na conta certa (4421 a 4425).
- **Lançamento manual (CBL05)**: o botão **IRPS** da linha mostra as cinco categorias e preenche a taxa.
- **Guias novos**: [Contabilidade passo a passo](/contabilidade-passo-a-passo), para quem não é contabilista, e [Manual do contabilista](/manual-contabilista).

## Versão 2.18.9

- **Título do documento**: dê um título à factura (ex.: "Renda Abril") em **F06 Observações**. O título aparece no PDF, no I02 Exploração e no Extrato de Cliente, e serve para pesquisar.
- **Grupos de clientes (F15)**: junte clientes num grupo e junte-os de uma só vez. Veja o extrato e os documentos de todo o grupo.
- **Extrato de Cliente (F05)**: escolha um cliente ou um grupo. O título do documento aparece no ecrã, no PDF e no Excel.
- **Exploração (I02)**: novo filtro **Cliente / Grupo**. A pesquisa encontra também pelo nome do cliente, do grupo e pelo título.
- **Calendário mais simples**: em todos os relatórios escolhe primeiro a data inicial e depois a data final, numa janela pequena.
- **Telemóvel**: os filtros do F05 e do I02 cabem em duas linhas.
- **Relatórios (I01)**: o Aging de clientes, o Balanço e o Fluxo de Caixa têm a seta para voltar aos Relatórios.

## Versão 2.18.7

- **Marcações (POS05)**: marque clientes em salões e reserve mesas. O Buinoz recusa a mesma funcionária ou a mesma cadeira ou mesa no mesmo horário.
- **Tela de Produção**: mostra quem abriu a conta e os serviços. No fecho, mostra o número do documento.
- **Vendas e caixa**: a venda conta para quem abre a conta. O dinheiro conta na caixa de quem fecha.
- **Cliente na venda a dinheiro**: pode escolher um cliente, se quiser. Não é obrigatório.
- **Extracto do cliente**: a venda a dinheiro aparece como paga.
- **Fidelização**: as vendas a dinheiro com cliente também contam.
- **Stock com casas decimais**: registe quantidades como 1,5 kg.
- **Importar produtos por Excel**: carregue a sua lista de produtos de uma só vez.
- **Novo tipo de loja Padaria** e novas categorias: Mercearia, Limpeza, Padaria e Pastelaria, Matéria-prima e Ingredientes.
- **Painel I06**: novos cartões Compras e Custo das vendas.
- **Auditoria**: mostra as anulações com o número do documento.
- **Notas de crédito**: a app avisa quando ainda não há motivos criados.
- **Criar loja**: a janela fecha com uma mensagem de sucesso e respeita o limite de lojas.
- **Mudar de loja**: a app pede o vendedor da nova loja.
- **Menu mais limpo**: esconde os ecrãs para os quais não tem permissão.
- **Teste grátis**: até 10 documentos por tipo.

## Versão 2.15.0

- **Documentos sem papel (POS01, POS02, Posto)**: depois de fechar uma venda a dinheiro, aparece um código QR. O cliente lê o código e descarrega o talão em PDF.
- **Partilhar o documento**: os botões WhatsApp e SMS enviam ao cliente a loja, o número do documento, o total e o link. "Copiar link" copia o endereço.
- **Abrir PDF na app**: o documento abre dentro do Buinoz. Pode descarregar, partilhar ou imprimir.
- **Link seguro**: o link só funciona para vendas a dinheiro fechadas. Facturas e cotações não ficam disponíveis por link.
- **Ecrã depois da venda**: o talão fica por baixo dos totais, ao lado dos botões.

## Versão 2.12.4

- **Produtos compostos (P06)**: crie produtos feitos de outros produtos, por exemplo um prato. Vende-se como um produto normal e o stock sai dos componentes.
- **Despesas**: fluxo mais simples e painel de acompanhamento melhorado.
- **Séries por loja (ADM15)**: crie séries de documentos para cada loja, com numeração própria.
- **Painel I06**: os cartões de Lucro, Margem, Receita, Custo, Despesas, Perdas e Stock abrem o detalhe.
- **Stock nas vendas**: o Buinoz confirma o stock disponível ao adicionar um produto, mesmo com várias caixas ao mesmo tempo.
- **Remover produto da venda**: o botão segue as permissões da função.
- **Preços decimais**: pode adicionar produtos com preço decimal à venda.
- **Detalhes de inventário**: valores com separador de milhares e diferença ao custo.

## Versão 2.11.5

- **Vendas bloqueadas durante o inventário**: enquanto conta o stock, as vendas ficam paradas. Pode ligar e desligar o bloqueio.
- **Imprimir documentos (F12)**: exporte e imprima os documentos em PDF, em formato de talão.
- **Apoio a Encomenda**: exporta só o documento escolhido.
- **Preços com casas decimais**: por exemplo 12,50, em toda a app.

## Versão 2.10.7

- **Painel Visual (I06)**: novo painel na página inicial, com os dados de hoje e do período escolhido.
- **Filtro de período**: mês actual, mês passado, últimos 3 meses, semana actual e semana passada.
- **Gráfico de vendas diárias**: mostra a média e os dias de maior e menor venda.
- **Top 50 produtos por valor**, com o stock ao lado.
- **Vendedores e formas de pagamento**: rankings do período.

## Versão 2.10.4

- **App mais rápida**: novos servidores mais perto de Moçambique. A app ficou muito mais rápida.
- **Estantes e prateleiras (P04)**: desenhe o seu armazém e diga que produtos ficam em cada prateleira.
- **Localizar produtos (P05)**: pesquise por nome ou leia o código de barras para ver onde está o produto.
- **Prateleira nas listas**: os produtos mostram a prateleira e a cor da categoria.
- **Produtos por categoria (P03)**: mude vários produtos de categoria de uma só vez.
- **Categorias por tipo de loja**: cada loja vê só as categorias do seu tipo.

## Versão 2.10.3

- **Guia de Remessa (F11)**: escolha a factura e gere a guia de remessa em PDF.
- **Gestão de IVA**: crie, edite, active e desactive taxas de IVA.
- **Nota de crédito em PDF (F08)**: cada nota de crédito tem um botão para gerar o PDF.
- **Recriar factura**: as facturas com nota de crédito têm a etiqueta "Tem NC".
- **Anexos de compras (CD06)**: anexe a factura do fornecedor (imagem ou PDF) a cada compra.
- **Recriar e converter factura**: o stock passa a ser actualizado como numa venda normal.
- **Novo produto**: o IVA por defeito é a taxa activa de 16%.

## Versão 2.10.1

- **Corrigir IVA (F10)**: corrija a taxa de IVA dos produtos de um documento já emitido. Os totais são recalculados.
- **Etiquetas na F10**: "IVA 17%" mostra os documentos com a taxa antiga. "IVA Corrigido" mostra os já corrigidos.
- **Nota de crédito**: quem tem a permissão de criar notas de crédito pode emiti-las.

## Versão 2.9.9

- **Quadrante (I05)**: os 20 melhores produtos num gráfico de quantidade e total, em quatro grupos.
- **Legenda interactiva**: mostre ou esconda cada grupo.
- **Quadrante em PDF**: exporte o relatório com os filtros escolhidos.

## Versão 2.9.8

- **Permissões**: cada utilizador vê só as opções que pode usar.

## Versão 2.9.7

- **Recriar facturas**: crie uma factura nova a partir de outra.
- **Despesas com aprovação**: pedido, aprovação e registo, como nas compras (CD03, CD04, CD05).
- **IVA no extracto do cliente**: colunas separadas para Isento, Reduzido, Normal e IVA a pagar.
- **Sincronização offline (POS04)**: veja as vendas feitas sem internet e envie-as quando quiser.
- **Termos e condições**: edite-os nas configurações da loja.
- **Vendas sem internet**: sincronizam melhor.
- **Notas nos documentos**: edição e gravação melhoradas.
- **Utilizadores e funções**: remover utilizadores de uma função ficou mais simples.

## Versão 2.9.0

- **POS e Tesouraria juntos**: venda, abra e feche a caixa no mesmo menu.
- **Contabilidade**: lançamentos, balancete, balanço, demonstração de resultados, SAF-T e modelos fiscais, dentro do Buinoz.
- **Talão com logótipo**: o logótipo da loja sai no talão, em impressoras USB e de rede.
- **Vendas sem internet**: a forma de pagamento escolhida fica registada.

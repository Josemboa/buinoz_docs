---
title: Automações
sidebar_position: 12
---

import YouTube from '@site/src/components/YouTube';

# Automações (AU01)

[Descarregar este guia em PDF](/pdf/buinoz-guia-automacoes.pdf)

### Vídeo

<YouTube id="R-EwkMSY0EE" title="Automação de Guias do INSS" />


## AU01 - INSS Guias {#au01}

O Buinoz entra no portal do INSS por si, lista as guias pendentes, gera de novo o PDF da guia e envia-o por e-mail. Também corre sozinho todos os dias e avisa quando há guias. **Só gera as guias: não faz pagamentos.**

O ecrã tem quatro separadores:

| Separador | O que faz |
|---|---|
| **Contas** | As suas contas do portal do INSS (utilizador e senha). Use **Testar** para confirmar o acesso. **Pendentes** mostra a lista do portal, sem gerar nada. |
| **Guias** | As guias de cada conta. **Gerar** cria o PDF da guia; pode enviá-lo por e-mail. Filtros: **Todas**, **Pendentes**, **Em atraso** e **Pagas**. |
| **Mapa** | O ano inteiro, mês a mês, para cada empresa: o estado da guia e o prazo. |
| **Alertas** | Para quem e quando enviar o aviso diário das guias. |

**Antes de usar**

1. O módulo tem de estar activo na licença da loja.
2. Aceite os termos: o serviço depende do portal do INSS, que pode estar em baixo ou bloquear o acesso.
3. Junte as suas contas do INSS em **Contas**. As senhas ficam cifradas.

> Se o portal do INSS pedir para mudar a senha, mude-a primeiro no portal e depois actualize-a em **Contas**.

### Prazos do INSS

A guia de um mês abre no dia **20** desse mês. O prazo para pagar é o dia **10 do mês seguinte**. Depois do prazo, o INSS junta **multa e juros**.

Exemplo: a guia de 11/2026 abre a 20/11/2026 e o prazo é 10/12/2026.

### Mapa

| Na célula | Quer dizer |
|---|---|
| **Paga** (verde) | A guia está em "Pagas e Zeradas" no portal do INSS. |
| **Pendente · faltam X dias** (amarelo) | A guia existe e ainda está no prazo. |
| **Criar até DD/MM · faltam X dias** (amarelo) | Ainda não há guia. Entregue a declaração do mês (**Declarar mês**). |
| **Por criar em X dias** (cinzento) | A guia do mês ainda não abriu. |
| **Em atraso** (vermelho) | O prazo passou ou a guia já tem multa. Pague o mais cedo possível. |
| **-** | Mês antes de a conta estar no Buinoz. |

As guias em atraso de anos anteriores aparecem numa faixa vermelha por cima do mapa.

![Mapa das guias](/img/guias/automacoes/AU01_02_mapa.webp)

![Guias com filtros](/img/guias/automacoes/AU01_03_guias.webp)

### Alertas por e-mail

1. **Prazo a vencer**: alguns dias antes do prazo (por defeito 5 e 1 dia).
2. **Em atraso**: no dia seguinte ao prazo e depois uma vez por semana, até a guia ser paga. Também avisa quando a guia já traz multa.
3. **Sem guia**: depois do dia 21, se ainda não houver guia do mês.
4. **Falha de acesso**: quando o Buinoz não consegue entrar no portal. O aviso diz também o prazo da guia do mês.

Quem pode gerir: o dono da loja, ou utilizadores com a função **Gerir INSS Guias**.

![INSS Guias](/img/guias/automacoes/AU01_01.webp)

// 2026-10-24: gera src/pages/arquivos.md a partir dos PDFs em static/pdf (corre antes de cada build).
// PDF novo: basta pô-lo em static/pdf. Titulo: TITLES abaixo, ou o nome do ficheiro.
import fs from 'node:fs';
const dir = 'static/pdf';
const TITLES = {
  relatorios: 'Relatórios e Informação (I01 - I07)', produtos: 'Produtos e Preços', facturacao: 'Facturação e Inventário',
  pos: 'POS e Tesouraria', compras: 'Compras e Despesas', armazem: 'Gestão de Armazéns', lotes: 'Lotes e Validade',
  aprovacoes: 'Aprovações e Requisições', contabilidade: 'Contabilidade (CBL01 - CBL39)', microcredito: 'Microcrédito',
  automacoes: 'Automações (INSS Guias)', administracao: 'Administração',
  'hcb-aprovacoes': 'Tour Aprovações e Requisições', 'hcb-compras-armazem': 'Tour Compras e Armazém (com Contabilizar)',
  'hcb-facturacao': 'Tour Facturação (com Contabilizar)', 'hcb-produtos': 'Tour Produtos',
  'hcb-administracao': 'Tour Administração', 'hcb-informacao': 'Tour Relatórios e Informação',
};
const ORDER = Object.keys(TITLES);
const nice = s => s.replace(/^hcb-/, 'Tour ').replace(/-/g, ' ').replace(/^./, c => c.toUpperCase());
const rows = fs.readdirSync(dir).filter(f => f.endsWith('.pdf')).map(f => {
  const key = f.replace(/^buinoz-guia-/, '').replace(/\.pdf$/, '');
  const buf = fs.readFileSync(`${dir}/${f}`);
  const pages = (buf.toString('latin1').match(/\/Type\s*\/Page[^s]/g) || []).length;
  const mb = (buf.length / 1048576).toFixed(1).replace('.', ',');
  return { f, key, title: TITLES[key] || nice(key), pages, mb };
}).sort((a, b) => ((ORDER.indexOf(a.key) + 1) || 999) - ((ORDER.indexOf(b.key) + 1) || 999) || a.key.localeCompare(b.key));
const table = list => '| Guia | Páginas | Tamanho | |\n|---|---|---|---|\n' +
  list.map(r => `| ${r.title} | ${r.pages || ''} | ${r.mb} MB | [Descarregar](/pdf/${r.f}) |`).join('\n');
const tours = rows.filter(r => r.key.startsWith('hcb-')), mods = rows.filter(r => !r.key.startsWith('hcb-'));
fs.writeFileSync('src/pages/arquivos.md', `---
title: Arquivos
---

{/* Gerado por scripts/gen_arquivos.mjs. Nao editar a mao. */}

# Arquivos

Todos os guias em PDF, para descarregar e imprimir.

## Guias por módulo

${table(mods)}

## Buinoz Academy: Tours HCB Demo

Guias dos vídeos Tour, com um caso completo de uma empresa (réplica para demonstração, dados públicos).

${table(tours)}
`);
console.log('arquivos.md:', rows.length, 'PDFs');

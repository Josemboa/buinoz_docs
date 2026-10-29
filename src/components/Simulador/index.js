// 2026-10-29: simulador de precos (modulo 500/mes, loja extra 500, utilizador extra 250; 1 loja e 2 utilizadores incluidos).
import React, {useState} from 'react';
import styles from './styles.module.css';

const MODULOS = ['Facturação', 'POS', 'Compras e Despesas', 'Gestão de Armazém', 'Lotes e Validade',
  'INSS Guias', 'Requisições e Aprovações', 'Contabilidade', 'Microcrédito'];
const P_MODULO = 500, P_LOJA = 500, P_USER = 250;
const mt = v => v.toLocaleString('pt-PT').replace(/\./g, ' ') + ' MT';

export default function Simulador() {
  const [sel, setSel] = useState(['Facturação']);
  const [lojas, setLojas] = useState(1);
  const [users, setUsers] = useState(2);
  const toggle = m => setSel(s => (s.includes(m) ? s.filter(x => x !== m) : [...s, m]));
  const mods = sel.length * P_MODULO;
  const extraL = sel.length ? Math.max(0, lojas - 1) * P_LOJA : 0;
  const extraU = sel.length ? Math.max(0, users - 2) * P_USER : 0;
  const mes = mods + extraL + extraU;
  return (
    <div className={styles.sim}>
      <div className={styles.cols}>
        <div>
          <div className={styles.lbl}>Módulos</div>
          <div className={styles.mods}>
            {MODULOS.map(m => (
              <label key={m} className={sel.includes(m) ? styles.on : ''}>
                <input type="checkbox" checked={sel.includes(m)} onChange={() => toggle(m)} /> {m}
              </label>
            ))}
          </div>
          <button type="button" className={styles.link}
            onClick={() => setSel(sel.length === MODULOS.length ? [] : MODULOS)}>
            {sel.length === MODULOS.length ? 'Limpar' : 'Todos os módulos'}
          </button>
        </div>
        <div>
          <label className={styles.num}>Lojas
            <input type="number" min="1" max="20" value={lojas}
              onChange={e => setLojas(Math.max(1, +e.target.value || 1))} />
          </label>
          <label className={styles.num}>Utilizadores
            <input type="number" min="1" max="50" value={users}
              onChange={e => setUsers(Math.max(1, +e.target.value || 1))} />
          </label>
          <table className={styles.tb}><tbody>
            <tr><td>{sel.length} módulo(s) × 500</td><td>{mt(mods)}</td></tr>
            <tr><td>{Math.max(0, lojas - 1)} loja(s) extra × 500</td><td>{mt(extraL)}</td></tr>
            <tr><td>{Math.max(0, users - 2)} utilizador(es) extra × 250</td><td>{mt(extraU)}</td></tr>
          </tbody></table>
          <div className={styles.tot}><span>Por mês</span><b>{mt(mes)}</b></div>
          <div className={styles.tot2}><span>Por ano</span><b>{mt(mes * 12)}</b></div>
          {(lojas > 5 || users > 10) && <p className={styles.note}>Mais de 5 lojas ou 10 utilizadores: fale connosco em suporte@buinoz.com.</p>}
        </div>
      </div>
      <p className={styles.note}>IVA incluído. 1 loja e 2 utilizadores incluídos.</p>
    </div>
  );
}

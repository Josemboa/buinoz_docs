// 2026-11-15: pedido de contacto antes de descarregar o livro.
// Envia os dados para suporte@buinoz.com (send-email-via-ses aceita este
// destinatario sem autenticacao) e so depois mostra o link do PDF.
import React, {useState} from 'react';
import Layout from '@theme/Layout';

const PDF = '/pdf/buinoz-livro-contabilidade.pdf';
const URL = 'https://us-central1-farma-844b5.cloudfunctions.net/send-email-via-ses';

const field = {display: 'block', width: '100%', padding: 10, margin: '6px 0 14px',
  border: '1px solid #ccc', borderRadius: 6, fontSize: 16};

export default function Livro() {
  const [f, setF] = useState({nome: '', email: '', negocio: ''});
  const [estado, setEstado] = useState('');
  const set = (k) => (e) => setF({...f, [k]: e.target.value});

  async function enviar(e) {
    e.preventDefault();
    if (!f.nome.trim() || !/^\S+@\S+\.\S+$/.test(f.email.trim())) {
      setEstado('erro-campos');
      return;
    }
    setEstado('a-enviar');
    const texto = `Pedido do livro Contabilidade para nao contabilistas\n\n` +
      `Nome: ${f.nome}\nEmail: ${f.email}\nNegocio: ${f.negocio}\n` +
      `Data: ${new Date().toISOString()}`;
    try {
      // Nunca deixar o leitor a espera: no maximo 8 s pelo email.
      const ctl = new AbortController();
      setTimeout(() => ctl.abort(), 8000);
      await fetch(URL, {
        method: 'POST',
        signal: ctl.signal,
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({to_emails: ['suporte@buinoz.com'],
          subject: `Livro contabilidade: ${f.nome}`, body: texto,
          reply_to: f.email || undefined}),
      });
    } catch (_) {
      // Se o envio falhar, o leitor nao fica sem o livro.
    }
    setEstado('ok');
    window.open(PDF, '_blank');
  }

  return (
    <Layout title="Livro: Contabilidade para não contabilistas">
      <main style={{maxWidth: 560, margin: '40px auto', padding: '0 16px'}}>
        <h1>Contabilidade para não contabilistas</h1>
        <p>Livro gratuito de José Leonel Boa, em PDF. Deixe o seu contacto e
          o download começa logo a seguir. Usamos o contacto só para lhe
          enviar novas edições e responder a dúvidas.</p>
        {estado === 'ok' ? (
          <p><b>Obrigado.</b> Se o download não começou,{' '}
            <a href={PDF} target="_blank" rel="noopener">carregue aqui</a>.</p>
        ) : (
          <form onSubmit={enviar}>
            <label>Nome *<input style={field} value={f.nome} onChange={set('nome')} /></label>
            <label>Email *<input style={field} type="email" value={f.email} onChange={set('email')} /></label>
            <label>Negócio (ex.: mercearia, farmácia)<input style={field} value={f.negocio} onChange={set('negocio')} /></label>
            {estado === 'erro-campos' && (
              <p style={{color: '#b00'}}>Escreva o nome e um email válido.</p>)}
            <button className="button button--primary button--lg" type="submit"
              disabled={estado === 'a-enviar'}>
              {estado === 'a-enviar' ? 'A enviar...' : 'Descarregar o livro'}
            </button>
          </form>
        )}
      </main>
    </Layout>
  );
}

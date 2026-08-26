'use client';
import { useState } from 'react';

type CardProps = { brand:'mail'|'disney'|'netflix'; eyebrow:string; title:string; email:string; password:string; meta:string };

function SecretCard({ brand, eyebrow, title, email, password, meta }: CardProps) {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState<'email'|'password'|null>(null);
  async function copy(value:string, field:'email'|'password') {
    await navigator.clipboard.writeText(value); setCopied(field); window.setTimeout(() => setCopied(null), 1400);
  }
  return <article className={`service-card ${brand}`}>
    <div className="card-topline"><span className="eyebrow">{eyebrow}</span><span className="status"><i /> Actif</span></div>
    <div className={`brand-mark ${brand}`} aria-hidden="true">{brand === 'netflix' ? 'N' : brand === 'disney' ? 'Disney+' : '@'}</div>
    <h2>{title}</h2><p className="meta">{meta}</p>
    <div className="credentials">
      <div className="field"><div><span>Adresse e-mail</span><strong>{email}</strong></div><button onClick={() => copy(email,'email')} aria-label={`Copier l’adresse de ${title}`}>{copied === 'email' ? 'Copié !':'Copier'}</button></div>
      <div className="field"><div><span>Mot de passe</span><strong>{visible ? password:'••••••••••••'}</strong></div><button onClick={() => setVisible(!visible)} aria-label={`${visible ? 'Masquer':'Afficher'} le mot de passe de ${title}`}>{visible ? 'Masquer':'Afficher'}</button></div>
    </div>
    <button className="copy-password" onClick={() => copy(password,'password')}>{copied === 'password' ? 'Mot de passe copié ✓':'Copier le mot de passe'}</button>
  </article>;
}

export default function Home() {
  return <main>
    <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
    <nav><a className="logo" href="#top" aria-label="Accueil Stream Club"><span>▶</span> Stream Club</a><div className="nav-note"><span>3</span> comptes partagés</div></nav>
    <section className="hero" id="top">
      <p className="kicker">Notre espace privé</p><h1>Une soirée cinéma,<br/><em>sans chercher les codes.</em></h1>
      <p className="intro">Tous nos accès au même endroit. Simple, rapide, entre nous.</p>
      <div className="members" aria-label="Membres du groupe"><div className="avatars"><span>KA</span><span>MO</span><span>SA</span><span>+2</span></div><p><strong>5 amis</strong><br/>partagent cet espace</p></div>
    </section>
    <section className="cards" aria-label="Identifiants partagés">
      <SecretCard brand="mail" eyebrow="Compte principal" title="Notre adresse commune" email="notre-groupe@exemple.com" password="Exemple-uniquement-2026" meta="Le point d’entrée pour tous nos abonnements"/>
      <SecretCard brand="disney" eyebrow="Streaming" title="Disney+" email="notre-groupe@exemple.com" password="Exemple-Disney-2026" meta="Formule Premium · Prochaine échéance le 1er septembre"/>
      <SecretCard brand="netflix" eyebrow="Streaming" title="Netflix" email="notre-groupe@exemple.com" password="Exemple-Netflix-2026" meta="Formule Premium · Prochaine échéance le 1er septembre"/>
    </section>
    <aside className="safety"><span aria-hidden="true">⌁</span><div><strong>Petit rappel entre amis</strong><p>Les données affichées ici sont fictives. Pour le vrai site, gardez les mots de passe dans un coffre partagé sécurisé.</p></div></aside>
    <footer><p>Fait pour les soirées qui commencent à l’heure.</p><span>Mis à jour le 26 août 2026</span></footer>
  </main>;
}

'use client';
import { useState } from 'react';

type CardProps = {
  brand: 'mail' | 'disney' | 'netflix';
  eyebrow: string;
  title: string;
  email: string;
  meta: string;
};

function DemoCard({ brand, eyebrow, title, email, meta }: CardProps) {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  }

  return (
    <article className={`service-card ${brand}`}>
      <div className="card-topline">
        <span className="eyebrow">{eyebrow}</span>
        <span className="status"><i /> Démo</span>
      </div>
      <div className={`brand-mark ${brand}`} aria-hidden="true">
        {brand === 'netflix' ? 'N' : brand === 'disney' ? 'Disney+' : '@'}
      </div>
      <h2>{title}</h2>
      <p className="meta">{meta}</p>
      <div className="credentials">
        <div className="field">
          <div><span>Adresse de démonstration</span><strong>{email}</strong></div>
          <button onClick={copyEmail} aria-label={`Copier l’adresse de démonstration de ${title}`}>
            {copied ? 'Copié !' : 'Copier'}
          </button>
        </div>
        <div className="field">
          <div><span>Mot de passe</span><strong>Non enregistré</strong></div>
          <button disabled aria-label="Aucun mot de passe enregistré">—</button>
        </div>
      </div>
      <button className="copy-password" disabled>Aucun secret stocké</button>
    </article>
  );
}

const demoEmail = 'demo.streamclub@example.com';

export default function Home() {
  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <nav>
        <a className="logo" href="#top" aria-label="Accueil Stream Club"><span>▶</span> Stream Club</a>
        <div className="nav-note"><span>3</span> services en démonstration</div>
      </nav>
      <section className="hero" id="top">
        <p className="kicker">Prototype portfolio</p>
        <h1>Les abonnements du groupe,<br /><em>dans une interface claire.</em></h1>
        <p className="intro">Un tableau de bord responsive conçu pour organiser les services partagés sans exposer de données sensibles.</p>
        <div className="members" aria-label="Compétences illustrées">
          <div className="avatars"><span>UI</span><span>TS</span><span>UX</span><span>+2</span></div>
          <p><strong>Design et code</strong><br />réunis dans un même prototype</p>
        </div>
      </section>
      <section className="cards" aria-label="Services de démonstration">
        <DemoCard brand="mail" eyebrow="Compte principal" title="Adresse du groupe" email={demoEmail} meta="Point d’entrée fictif pour la démonstration" />
        <DemoCard brand="disney" eyebrow="Streaming" title="Disney+" email={demoEmail} meta="Formule Premium · Échéance fictive" />
        <DemoCard brand="netflix" eyebrow="Streaming" title="Netflix" email={demoEmail} meta="Formule Premium · Échéance fictive" />
      </section>
      <aside className="safety">
        <span aria-hidden="true">⌁</span>
        <div>
          <strong>Démo respectueuse de la vie privée</strong>
          <p>Les informations affichées sont fictives. Aucun mot de passe ni identifiant réel n’est enregistré.</p>
        </div>
      </aside>
      <footer>
        <p>Projet frontend réalisé par Ventus652.</p>
        <span>React · TypeScript · responsive design</span>
      </footer>
    </main>
  );
}


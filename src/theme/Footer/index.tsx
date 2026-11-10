import type {ReactElement} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const repository = 'https://github.com/synentra/synentra';
const groups = [
  {title: 'Explore', links: [
    ['Getting started', '/docs/getting-started'],
    ['QuickStart', '/docs/quickstart/local-development'],
    ['Architecture', '/docs/architecture/system-overview'],
    ['API reference', '/docs/reference/api/overview'],
  ]},
  {title: 'Build', links: [
    ['HTTP integration', '/docs/integrations/http'],
    ['MCP integration', '/docs/integrations/mcp'],
    ['Troubleshooting', '/docs/reference/diagnostics/troubleshooting'],
    ['Source code', repository],
  ]},
  {title: 'Connect', links: [
    ['Discussions', `${repository}/discussions`],
    ['Report an issue', `${repository}/issues`],
    ['Design partners', '/design-partners'],
    ['LinkedIn', 'https://www.linkedin.com/company/synentra'],
  ]},
];

/** Docusaurus theme override: one shared footer for home, docs and blog. */
export default function Footer(): ReactElement {
  const logo = useBaseUrl('/img/logo.png');
  return <footer className={styles.footer}>
    <div className={`container ${styles.inner}`}>
      <div className={styles.directory}>
        <div className={styles.brand}>
          <Link to="/" className={styles.logoLink} aria-label="Synentra home"><img src={logo} alt="Synentra" width="132" height="44" loading="lazy" /></Link>
          <p>Intent-Aware Runtime Governance<br />for AI Agents.</p>
        </div>
        <nav className={styles.navigation} aria-label="Footer navigation">
          {groups.map(group => <div className={styles.linkGroup} key={group.title}><h3>{group.title}</h3><ul>{group.links.map(([label, href]) => <li key={label}>{href.startsWith('/') ? <Link to={href}>{label}</Link> : <a href={href}>{label}</a>}</li>)}</ul></div>)}
        </nav>
      </div>
      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} Synentra</span>
        <div><span>Self-hosted · HTTP + MCP</span><a href={`${repository}/blob/main/LICENSE`}>Apache 2.0</a><a href="#" aria-label="Back to top of page">Back to top ↑</a></div>
      </div>
    </div>
  </footer>;
}

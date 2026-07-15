import React, { useState } from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import styles from './index.module.css';
import Link from '@docusaurus/Link';

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(text);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <button
      className={styles.copyButton}
      onClick={copy}
      aria-label="Copy command"
    >
      {copied ? '✓ Copied' : 'Copy'}
    </button>
  );
}

function CodeBlock({
  code,
  language,
}: {
  code: string;
  language: string;
}) {
  return (
    <div className={styles.codeWrapper}>
      <pre className={styles.code}>
        <code className={`language-${language}`}>
          {code}
        </code>
      </pre>

      <CopyButton text={code} />
    </div>
  );
}

export default function InstallationBox() {
    return (
      <section className={`${styles.container} install-box`}>
        <header className={styles.header}>
          <h2>Install Synentra</h2>
        </header>
        <Tabs groupId="synentra-installation" className={`${styles.tabs} ${styles.tabList}`}>
          <TabItem value="linux-macos" label={<>Synctl (Official CLI)</>} default>
            <CodeBlock
              code="synctl init"
              language="bash"
            />
            <div className={styles.docsLink}>
              <Link to="/docs/getting-started/install-synentra-cli">
                Synctl installation guide <span className={styles.arrow}>→</span>
              </Link>
            </div>
          </TabItem>
          <TabItem value="docker" label={<>Docker (linux)</>}>
            <CodeBlock
              code="docker run -p 7080:7080 ghcr.io/synentra/synentra:latest"
              language="bash"
            />
            <div className={styles.docsLink}>
              <Link to="/docs/getting-started/initialize-synentra-docker">
                Docker deployment guide <span className={styles.arrow}>→</span>
              </Link>
            </div>
          </TabItem>
        </Tabs>
      </section>
    );
  }
import React, { useState } from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import styles from './index.module.css';

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
    <section className={styles.container}>
      <header className={styles.header}>
        <h2>Install Synentra</h2>
      </header>
      <Tabs groupId="synentra-installation" className={`${styles.tabs} ${styles.tabList}`}>
        <TabItem value="linux-macos" label={
            <>Linux / macOS</>
          }
          default
        >
          <CodeBlock
            code="curl -fsSL https://get.synentra.io/install.sh | bash"
            language="bash"
          />
        </TabItem>
        <TabItem value="windows" label={
            <>Windows</>
          }
        >
          <CodeBlock
            code="irm https://get.synentra.io/install.ps1 | iex"
            language="powershell"
          />
        </TabItem>
        <TabItem  value="docker" label={
            <>Docker</>
          }
        >
          <CodeBlock
            code="docker run -p 7080:7080 ghcr.io/synentra/synentra:latest"
            language="bash"
          />
        </TabItem>
      </Tabs>
    </section>
  );
}
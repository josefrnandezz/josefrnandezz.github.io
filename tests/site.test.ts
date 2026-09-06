import { beforeAll, describe, expect, it } from 'vitest';
import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const root = process.cwd();
const astroBin = join(root, 'node_modules', '.bin', 'astro');

/** Builds into `outDir` with an isolated content-layer cache. */
function build(outDir: string, env: Record<string, string> = {}): void {
  const cacheDir = mkdtempSync(join(tmpdir(), 'portfolio-cache-'));
  execFileSync(astroBin, ['build', '--force', '--outDir', outDir], {
    cwd: root,
    env: { ...process.env, ASTRO_CACHE_DIR: cacheDir, ...env },
    stdio: 'pipe',
  });
}

const read = (dir: string, file: string) => readFileSync(join(dir, file), 'utf8');
const asText = (html: string) =>
  html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ');

describe('home page (no posts)', () => {
  let html = '';
  let text = '';

  beforeAll(() => {
    const out = mkdtempSync(join(tmpdir(), 'portfolio-empty-'));
    build(out);
    html = read(out, 'index.html');
    text = asText(html);
  });

  it('shows the full name in the title and in the page', () => {
    expect(html).toContain('<title>Jose Fernández Alhama · Senior Product Engineer</title>');
    expect(text).toContain('Jose Fernández Alhama');
  });

  it('links the mailto contact', () => {
    expect(html).toContain('href="mailto:joseferr8@gmail.com"');
  });

  it('links LinkedIn and GitHub', () => {
    expect(html).toContain('href="https://linkedin.com/in/josefrnandezz"');
    expect(html).toContain('href="https://github.com/josefrnandezz"');
  });

  it('says where he is based', () => {
    expect(text).toContain('based in Valencia');
    expect(text).toContain('Valencia, Spain');
  });

  it('does not publish education or the phone number', () => {
    for (const forbidden of ['Education', 'Universidad', 'Groningen', '618 136 295']) {
      expect(text).not.toContain(forbidden);
    }
  });

  it('ships no client-side JavaScript', () => {
    expect(html).not.toContain('<script');
  });

  it('hides the Writing section when there are no posts', () => {
    expect(text).not.toContain('Writing');
  });

  it('renders every section in order', () => {
    const order = ['About', 'Experience', 'Skills', 'Talks & certifications'];
    const positions = order.map((s) => text.indexOf(s));
    expect(positions.every((p) => p >= 0)).toBe(true);
    expect([...positions].sort((a, b) => a - b)).toEqual(positions);
  });
});

describe('home page and post pages (with fixture posts)', () => {
  let out = '';
  let text = '';

  beforeAll(() => {
    out = mkdtempSync(join(tmpdir(), 'portfolio-posts-'));
    build(out, { POSTS_DIR: './tests/fixtures/posts' });
    text = asText(read(out, 'index.html'));
  });

  it('shows the Writing section with the published post', () => {
    expect(text).toContain('Writing');
    expect(text).toContain('Hello, world');
    expect(read(out, 'index.html')).toContain('href="/posts/hello-world/"');
  });

  it('builds the post page', () => {
    const file = join(out, 'posts', 'hello-world', 'index.html');
    expect(existsSync(file)).toBe(true);
    expect(asText(readFileSync(file, 'utf8'))).toContain('verify the Writing section');
  });

  it('never renders drafts', () => {
    expect(text).not.toContain('Unpublished draft');
    expect(existsSync(join(out, 'posts', 'unpublished'))).toBe(false);
  });
});

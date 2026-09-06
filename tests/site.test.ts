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

  it('links LinkedIn, GitHub and X as the way to get in touch', () => {
    expect(html).toContain('href="https://linkedin.com/in/josefrnandezz"');
    expect(html).toContain('href="https://github.com/josefrnandezz"');
    expect(html).toContain('href="https://x.com/jfrnandez_"');
  });

  it('says where he is based', () => {
    expect(text).toContain('based in Valencia');
    expect(text).toContain('valencia, spain');
  });

  it('does not publish education, the phone number or the email address', () => {
    for (const forbidden of ['Education', 'Universidad', 'Groningen', '618 136 295']) {
      expect(text).not.toContain(forbidden);
    }
    expect(html).not.toContain('mailto:');
    expect(html).not.toContain('joseferr8@gmail.com');
  });

  it('ships no client-side JavaScript', () => {
    expect(html).not.toContain('<script');
  });

  it('hides the writing section when there are no posts', () => {
    expect(html).not.toContain('id="writing"');
  });

  it('renders the portrait photo instead of the pending slot', () => {
    expect(html).toContain('alt="Portrait of Jose Fernández Alhama"');
    expect(html).toContain('class="portrait__img"');
    expect(text).not.toContain('portrait · pending');
  });

  it('renders every section in order', () => {
    const order = ['id="about"', 'id="experience"', 'id="talks"', 'id="contact"'];
    const positions = order.map((s) => html.indexOf(s));
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

  it('shows the writing section with the published post', () => {
    const html = read(out, 'index.html');
    expect(html).toContain('id="writing"');
    expect(text).toContain('Hello, world');
    expect(html).toContain('href="/posts/hello-world/"');
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

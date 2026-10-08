import test from 'node:test';
import assert from 'node:assert/strict';
import { resolveVideo } from '../src/lib/video.mjs';
test('empty video config preserves the placeholder', () =>
  assert.equal(resolveVideo('').kind, 'placeholder'));
test('supports local MP4 including query strings', () =>
  assert.deepEqual(resolveVideo('/videos/intro.mp4?v=2'), {
    kind: 'local',
    src: '/videos/intro.mp4?v=2',
  }));
test('normalises supported YouTube share, watch, shorts and embed URLs', () => {
  for (const url of [
    'https://youtu.be/abcdefghijk',
    'https://www.youtube.com/watch?v=abcdefghijk&t=5',
    'https://youtube.com/shorts/abcdefghijk',
    'https://www.youtube-nocookie.com/embed/abcdefghijk',
  ])
    assert.equal(
      resolveVideo(url).src,
      'https://www.youtube-nocookie.com/embed/abcdefghijk',
    );
});
test('preserves unlisted Vimeo access hashes', () => {
  assert.equal(
    resolveVideo('https://vimeo.com/123456789/abc123').src,
    'https://player.vimeo.com/video/123456789?h=abc123',
  );
  assert.equal(
    resolveVideo('https://player.vimeo.com/video/123456789?h=abc123').src,
    'https://player.vimeo.com/video/123456789?h=abc123',
  );
});
test('rejects unsupported hosts, schemes and invalid IDs during build', () => {
  for (const url of [
    'javascript:alert(1)',
    '//example.com/intro.mp4',
    'http://vimeo.com/123',
    'https://youtube.com.evil.example/watch?v=abcdefghijk',
    'https://youtu.be/bad',
    'https://example.com/video',
  ])
    assert.throws(() => resolveVideo(url));
});

/** Resolve a configured video to an accessible native player or an allowlisted embed. */
export function resolveVideo(value) {
  if (!value.trim()) return { kind: 'placeholder' };
  if (
    value.startsWith('/') &&
    !value.startsWith('//') &&
    /\.mp4(?:\?.*)?$/i.test(value)
  )
    return { kind: 'local', src: value };
  let url;
  try {
    url = new URL(value);
  } catch {
    throw new Error(
      'Video URL must be a local /videos/file.mp4, YouTube or Vimeo URL.',
    );
  }
  if (url.protocol !== 'https:')
    throw new Error('Use HTTPS for remote video URLs.');
  const host = url.hostname.replace(/^www\./, '');
  if (
    [
      'youtube.com',
      'm.youtube.com',
      'youtube-nocookie.com',
      'youtu.be',
    ].includes(host)
  ) {
    const id =
      host === 'youtu.be'
        ? url.pathname.slice(1)
        : url.searchParams.get('v') ||
          url.pathname.match(/^\/(?:embed|shorts)\/([^/]+)/)?.[1];
    if (!id || !/^[\w-]{11}$/.test(id))
      throw new Error('Invalid YouTube video ID.');
    return {
      kind: 'embed',
      src: `https://www.youtube-nocookie.com/embed/${id}`,
    };
  }
  if (['vimeo.com', 'player.vimeo.com'].includes(host)) {
    const match = url.pathname.match(
      /^\/(?:video\/)?(\d+)(?:\/([a-zA-Z0-9]+))?\/?$/,
    );
    if (!match) throw new Error('Invalid Vimeo video URL.');
    const hash = url.searchParams.get('h') || match[2];
    return {
      kind: 'embed',
      src: `https://player.vimeo.com/video/${match[1]}${hash ? `?h=${encodeURIComponent(hash)}` : ''}`,
    };
  }
  throw new Error(
    'Supported video hosts are YouTube and Vimeo; put MP4 files in public/videos.',
  );
}

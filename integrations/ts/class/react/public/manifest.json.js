
export const createManifestJson = () => {
  const data = `{
  "short_name": "S&S Integrator",
  "name": "Integrator multi Apps",
  "icons": [
    {
      "src": "favicon/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "favicon/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}
`;
  return data;
}

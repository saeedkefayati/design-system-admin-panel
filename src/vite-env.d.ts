/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_API_URL_2: string;
  readonly VITE_UNSPLASH_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_UNLEASH_KEY: string;
  readonly VITE_MIXPANEL_KEY: string;
  readonly VITE_UNLEASH_URL: string;
  readonly VITE_UNLEASH_APP_NAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

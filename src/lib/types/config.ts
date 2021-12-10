export interface PublicRuntimeConfig {
  works: { slug: string; title: string }[];
}

export type ServerRuntimeConfig = never;

export interface RuntimeConfig {
  publicRuntimeConfig: PublicRuntimeConfig;
  serverRuntimeConfig: ServerRuntimeConfig;
}

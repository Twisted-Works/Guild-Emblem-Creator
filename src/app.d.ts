// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    interface Locals {}

    interface Platform {
      env: {}
      context: {
        waitUntil(promise: Promise<any>): void;
      }
      caches: CacheStorage & { default: Cache }
    }

    interface Session {}

    interface Stuff {}
  }
}

export {}

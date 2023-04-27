import { writable, type Updater } from "svelte/store"
import { tick } from "svelte"

export class Readable {
  readonly #store = writable(this)
  #notifying?: Promise<void>

  get subscribe() {
    return this.#store.subscribe
  }

  notify() {
    return (this.#notifying ??= this.#notify())
  }

  async #notify() {
    await tick()

    this.#notifying = undefined
    this.#store.set(this)
  }
}

export class Writable extends Readable {
  set(_: this) {
    this.notify()
  }

  update(updater: Updater<this>) {
    updater(this)
    this.notify()
  }
}
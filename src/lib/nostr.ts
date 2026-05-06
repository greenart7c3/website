import { SimplePool } from 'nostr-tools/pool';
import { nip19 } from 'nostr-tools';
import type { Event } from 'nostr-tools/core';

export type { Event };

export type AppKey = 'amber' | 'citrine' | 'morganite';

export const APPS: Record<AppKey, { name: string; npub: string }> = {
  amber: {
    name: 'Amber',
    npub: 'npub1am3ermkr250dywukzqnaug64cred3x5jht6f3kdhfp3h0rgtjlpqecxrv7',
  },
  citrine: {
    name: 'Citrine',
    npub: 'npub1hqlxlq57nvlq70ugmsmu9y5lmyc5k2lh5w7y85j7dgsr5u7zwavq5agspw',
  },
  morganite: {
    name: 'Morganite',
    npub: 'npub1q2f8m7jwdkvfpz72ce0chsnx2qqhgahkrj7fpudk9wnq6ze5pvjsrvvueg',
  },
};

const RELAYS = [
  'wss://relay.damus.io',
  'wss://nos.lol',
  'wss://relay.nostr.band',
  'wss://relay.primal.net',
];

export function npubToHex(npub: string): string {
  const decoded = nip19.decode(npub);
  if (decoded.type !== 'npub') {
    throw new Error(`Expected npub, got ${decoded.type}`);
  }
  return decoded.data;
}

export function noteIdToBech32(eventId: string): string {
  return nip19.noteEncode(eventId);
}

export async function fetchReleases(
  pubkey: string,
  limit = 8,
  timeoutMs = 6000,
): Promise<Event[]> {
  const pool = new SimplePool();
  try {
    const events = (await Promise.race<Event[]>([
      pool.querySync(RELAYS, {
        kinds: [1],
        authors: [pubkey],
        limit,
      }) as Promise<Event[]>,
      new Promise<Event[]>((resolve) => setTimeout(() => resolve([]), timeoutMs)),
    ])) as Event[];
    return events
      .slice()
      .sort((a: Event, b: Event) => b.created_at - a.created_at)
      .slice(0, limit);
  } finally {
    pool.close(RELAYS);
  }
}

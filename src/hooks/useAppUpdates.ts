import { useNostr } from '@nostrify/react';
import { useQuery } from '@tanstack/react-query';
import { nip19 } from 'nostr-tools';

// App npubs
export const AMBER_NPUB = 'npub1am3ermkr250dywukzqnaug64cred3x5jht6f3kdhfp3h0rgtjlpqecxrv7';
export const CITRINE_NPUB = 'npub1hqlxlq57nvlq70ugmsmu9y5lmyc5k2lh5w7y85j7dgsr5u7zwavq5agspw';
export const DEVELOPER_NPUB = 'npub1w4uswmv6lu9yel005l3qgheysmr7tk9uvwluddznju3nuxalevvs2d0jr5';

// Decode npubs to hex pubkeys
function decodeNpub(npub: string): string {
  try {
    const decoded = nip19.decode(npub);
    return decoded.type === 'npub' ? decoded.data : '';
  } catch {
    return '';
  }
}

export const AMBER_PUBKEY = decodeNpub(AMBER_NPUB);
export const CITRINE_PUBKEY = decodeNpub(CITRINE_NPUB);
export const DEVELOPER_PUBKEY = decodeNpub(DEVELOPER_NPUB);

/**
 * Check if an event is a reply (has 'e' tags indicating it's replying to something)
 */
function isReply(event: { tags: string[][] }): boolean {
  return event.tags.some(([tag, , , marker]) => {
    if (tag === 'e') {
      if (marker === 'reply' || marker === 'root') {
        return true;
      }
      return true;
    }
    return false;
  });
}

/**
 * Fetch updates (kind 1 notes) from a pubkey, excluding replies
 */
export function useAppUpdates(pubkey: string, limit: number = 6) {
  const { nostr } = useNostr();

  return useQuery({
    queryKey: ['app-updates', pubkey, limit],
    queryFn: async (c) => {
      if (!pubkey) return [];
      
      const signal = AbortSignal.any([c.signal, AbortSignal.timeout(10000)]);

      // Fetch more events than needed since we'll filter out replies
      const events = await nostr.query([
        {
          kinds: [1],
          authors: [pubkey],
          limit: limit * 3,
        }
      ], { signal });

      // Filter out replies and sort by created_at descending
      return events
        .filter(event => !isReply(event))
        .sort((a, b) => b.created_at - a.created_at)
        .slice(0, limit);
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    enabled: !!pubkey,
  });
}

/**
 * Fetch profile metadata for a pubkey
 */
export function useAppProfile(pubkey: string) {
  const { nostr } = useNostr();

  return useQuery({
    queryKey: ['app-profile', pubkey],
    queryFn: async (c) => {
      if (!pubkey) return null;
      
      const signal = AbortSignal.any([c.signal, AbortSignal.timeout(5000)]);

      const events = await nostr.query([
        {
          kinds: [0],
          authors: [pubkey],
          limit: 1,
        }
      ], { signal });

      if (events.length > 0) {
        try {
          return JSON.parse(events[0].content);
        } catch {
          return null;
        }
      }
      return null;
    },
    staleTime: 1000 * 60 * 30, // 30 minutes
    enabled: !!pubkey,
  });
}

// Convenience hooks for each app
export function useAmberUpdates(limit: number = 6) {
  return useAppUpdates(AMBER_PUBKEY, limit);
}

export function useAmberProfile() {
  return useAppProfile(AMBER_PUBKEY);
}

export function useCitrineUpdates(limit: number = 6) {
  return useAppUpdates(CITRINE_PUBKEY, limit);
}

export function useCitrineProfile() {
  return useAppProfile(CITRINE_PUBKEY);
}

export function useDeveloperProfile() {
  return useAppProfile(DEVELOPER_PUBKEY);
}

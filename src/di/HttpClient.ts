// Transport returns unknown; the data layer validates it before creating entities.
export interface HttpClient {
  get(path: string): Promise<unknown>;
}

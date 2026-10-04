# @company/investment-platform 1.0.1

One existing design system, DI container, Logger abstraction and shared Result/Error/formatting contracts. Only four package exports exist: /design-system, /di, /observability, /common. No root export or wildcard is permitted. Internal src paths are blocked by exports, TypeScript fixtures, import checks, and the host Metro resolver.

ConsoleLogger, MockHttpClient, bootstrap, routes, AppRegistry and feature-specific tokens live in the host or their feature. DI exports HttpClient as a transport contract used by the pre-existing shared httpClient token; no transport implementation is included. Transactions does not use that token. React/RN/safe-area are peers.

Platform has its own semantic version. The earlier 1.0.0 archive was initial scaffolding; 1.0.1 is the tightened, four-path boundary, without overwriting that archive. From host: npm run package:platform -- 1.0.2 to publish a future local version. Update platform package.json version and dependants when consuming a changed API. See host PACKAGE_DELIVERY.md for versioning and delivery rules.

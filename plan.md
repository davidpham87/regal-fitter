Plan:
1.  **Refactor `app.discovery`**:
    *   Create `src/app/discovery/events.cljs` and extract `discovery`-related events from `app.events`.
    *   Create `src/app/discovery/subs.cljs` and extract `discovery`-related subs from `app.subs`.
2.  **Refactor `app.stress_test`**:
    *   Create `src/app/stress_test/events.cljs` and extract `stress_test`-related events (and power-analysis ones) from `app.events`.
    *   Create `src/app/stress_test/subs.cljs` and extract `stress_test`-related subs from `app.subs`.
3.  **Refactor `app.ui`** (panels):
    *   Create `src/app/ui/events.cljs` and extract UI-related events from `app.events` (e.g., `:update-config`, `:set-view`, `:set-enrollment-mode`).
    *   Create `src/app/ui/subs.cljs` and extract UI-related subs from `app.subs` (e.g., `:config`, `:view`, `:enrollment-mode`).
4.  **Refactor `app.views`**:
    *   Create `src/app/views/events.cljs` and `src/app/views/subs.cljs`.
    *   Extract view-specific state (like routing `:active-page` and top-level view state if any). Or if it is empty, that's fine, but the instruction is to create them for the canonical split.
5.  **Require the new namespaces**:
    *   Ensure that all these new `events.cljs` and `subs.cljs` files are required in `app.core` (or wherever they need to be loaded so the app registers them on startup).
6.  **Write Tests**:
    *   Write tests for the split events and subs using `cljs.test` to ensure they are registered and function correctly. (e.g., in a `test/app/` directory).
    *   Include tests for `app.discovery.events-test`, `app.ui.subs-test`, etc., or a single test file that requires everything and checks for basic state transitions.
7.  **Pre-commit checks**:
    *   Call `pre_commit_instructions` and follow the steps.
8.  **Submit**:
    *   Submit the changes.

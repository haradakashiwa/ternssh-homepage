## Settings & Personalization

Configure in the header **Settings**:

- **General**: Site name, language, dashboard layout import/export, reset all settings (double confirmation)
- **Personalization**: Theme, background image, widget opacity, layout spacing, terminal colors
- **AI Command**: OpenAI-compatible API base URL, API key, and model (stored in D1 per user)

Layout export downloads the current dashboard widget layout as JSON. Import replaces the layout after confirmation.

Reset all clears localStorage preferences and calls `POST /api/v1/me/reset` to wipe the user's servers, credentials, sessions, AI settings, and layout in D1, restoring the initial state.

## Architecture

```mermaid
flowchart TB
    subgraph Client["Browser"]
        UI[React Dashboard]
        Widgets[Widgets<br/>Terminal / Files / Monitoring / Server list]
        UI --> Widgets
    end

    subgraph Edge["Cloudflare Edge"]
        Access[Cloudflare Access<br/>optional]
        Worker[Workers<br/>REST API]
        DO[Durable Objects<br/>SSH Session + WebSocket]
        D1[(D1 SQLite)]
    end

    subgraph Remote["Remote host"]
        SSH[SSH Server]
    end

    Widgets -->|HTTPS| Access
    Access --> Worker
    Widgets -->|WSS| DO
    Worker --> D1
    Worker -->|route sessionId| DO
    DO -->|SSH| SSH
```

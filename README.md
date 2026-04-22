# mcp-buzzword-density

buzzword-density MCP — wraps StupidAPIs (requires X-API-Key)

Part of [Pipeworx](https://pipeworx.io) — an MCP gateway connecting AI agents to 250+ live data sources.

## Tools

| Tool | Description |
|------|-------------|
| `buzzword_density_analyze` | Analyze text for overused industry jargon. Returns buzzword count, density score (0-100), severity level, and flagged terms. Set roast_mode=true for humorous critique. |

## Quick Start

Add to your MCP client (Claude Desktop, Cursor, Windsurf, etc.):

```json
{
  "mcpServers": {
    "buzzword-density": {
      "url": "https://gateway.pipeworx.io/buzzword-density/mcp"
    }
  }
}
```

Or connect to the full Pipeworx gateway for access to all 250+ data sources:

```json
{
  "mcpServers": {
    "pipeworx": {
      "url": "https://gateway.pipeworx.io/mcp"
    }
  }
}
```

## Using with ask_pipeworx

Instead of calling tools directly, you can ask questions in plain English:

```
ask_pipeworx({ question: "your question about Buzzword Density data" })
```

The gateway picks the right tool and fills the arguments automatically.

## More

- [All tools and guides](https://github.com/pipeworx-io/examples)
- [pipeworx.io](https://pipeworx.io)

## License

MIT

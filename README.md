# mcp-buzzword-density

buzzword-density MCP — wraps StupidAPIs (requires X-API-Key)

Part of the [Pipeworx](https://pipeworx.io) open MCP gateway.

## Tools

| Tool | Description |
|------|-------------|
| `buzzword_density_analyze` | Analyze buzzword density in text. Counts industry-specific buzzwords, scores density, diagnoses severity. Optional roast mode. |

## Quick Start

Add to your MCP client config:

```json
{
  "mcpServers": {
    "buzzword-density": {
      "url": "https://gateway.pipeworx.io/buzzword-density/mcp"
    }
  }
}
```

Or use the CLI:

```bash
npx pipeworx use buzzword-density
```

## License

MIT

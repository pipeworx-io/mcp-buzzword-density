interface McpToolDefinition {
  name: string;
  description: string;
  inputSchema: {
    type: 'object';
    properties: Record<string, unknown>;
    required?: string[];
  };
}

interface McpToolExport {
  tools: McpToolDefinition[];
  callTool: (name: string, args: Record<string, unknown>) => Promise<unknown>;
}

/**
 * buzzword-density MCP — wraps StupidAPIs (requires X-API-Key)
 *
 * Analyze buzzword density in text. Counts industry-specific buzzwords, scores den
 */


const API_KEY = '6e0ddbe88486dc354370290979829dc892b0386bd789ae5a';

const tools: McpToolExport['tools'] = [
  {
    name: 'buzzword_density_analyze',
    description: 'Analyze buzzword density in text. Counts industry-specific buzzwords, scores density, diagnoses severity. Optional roast mode.',
    inputSchema: {
      type: 'object' as const,
      properties: {"content": {"type": "string", "description": "Text to analyze"}, "industry": {"type": "string", "description": "Industry dictionary to use", "enum": ["tech", "finance", "consulting", "startup", "all"]}, "roast": {"type": "boolean", "description": "Get a roast of your writing"}},
      required: ["content"],
    },
  },
];

async function callApi(url: string, args: Record<string, unknown>): Promise<unknown> {
  const params = new URLSearchParams();
  for (const [k, v] of Object.entries(args)) {
    if (v !== undefined && v !== null && v !== '') {
      params.set(k, String(v));
    }
  }
  const fullUrl = params.toString() ? url + '?' + params.toString() : url;
  const res = await fetch(fullUrl, {
    headers: { 'X-API-Key': API_KEY },
  });
  if (!res.ok) throw new Error('buzzword-density API error: ' + res.status);
  return res.json();
}

async function callTool(name: string, args: Record<string, unknown>): Promise<unknown> {
  switch (name) {
    case 'buzzword_density_analyze':
      return callApi('https://api.stupidapis.com/buzzword-density/analyze', args);
    default:
      throw new Error('Unknown tool: ' + name);
  }
}

export default { tools, callTool } satisfies McpToolExport;

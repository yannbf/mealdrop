Leverage the following Storybook MCP tools for guidance and best practices when working with component stories:

- Use the `mealdrop-app` tool `get-storybook-story-instructions` to fetch the latest instructions for creating or updating stories. This will ensure you follow current conventions and recommendations.

**CRITICAL: Never hallucinate component properties!** Before using ANY property on a component from a design system (including common-sounding ones `shadow`, etc.), you MUST use the `mealdrop-ui` MCP server:

1. Query `list-all-components` to get a list of all components
2. Second query `get-component-documentation` for that component to see all available properties and examples
3. Only use properties that are explicitly documented or shown in example stories
4. If a property isn't documented, do not assume properties based on naming conventions or common patterns from other libraries. Check back with the user in these cases.

Remember: A story name might not reflect the property name correctly, so always verify properties through documentation or example stories before using them.
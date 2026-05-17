// The queryLoop() function signature and State type initialisation from src/query.ts
async function* queryLoop(
  params: QueryParams,
  consumedCommandUuids: string[],
): AsyncGenerator<StreamEvent | Message | TombstoneMessage
         | ToolUseSummaryMessage, Terminal> {
  // Immutable parameters
  const { systemPrompt, userContext, maxTurns, querySource } = params;
  // Mutable cross-iteration state (the loop's working memory)
  let state: State = {
    messages:                    params.messages,  // full conversation history
    toolUseContext:              params.toolUseContext,
    turnCount:                   1,
    hasAttemptedReactiveCompact: false,
    maxOutputTokensRecoveryCount: 0,
    stopHookActive:              undefined,
    transition:                  undefined,  // why the last iteration continued
    // ... further fields
  };
  while (true) {
    // compress -> call API -> execute tools -> continue or exit
    // Termination: return { reason: 'completed' | 'max_turns' | ... }
  }
}

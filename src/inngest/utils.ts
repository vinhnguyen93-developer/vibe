import { Sandbox } from '@e2b/code-interpreter';
import { type Message } from '@inngest/agent-kit';

import { SANDBOX_TIMEOUT } from './type';

export async function getSandbox(sandboxId: string) {
  const sandbox = await Sandbox.connect(sandboxId);
  await sandbox.setTimeout(SANDBOX_TIMEOUT)
  return sandbox;
}

export const parseAgentOutput = (value: Message[]) => {
  const output = value[0]

  if (output.type !== "text") {
    return "Fragment"
  }

  if (Array.isArray(output.content)) {
    return output.content.map((txt) => txt).join("")
  } else {
    return output.content
  }
}

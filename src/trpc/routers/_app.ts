import { createTRPCRouter } from '../init';

import { usageRouter } from '@/modules/usage/server/procedures';
import { projectsRouter } from '@/modules/projects/server/procedures';
import { messagesRouter } from '@/modules/messages/server/procedures';

export const appRouter = createTRPCRouter({
  usage: usageRouter,
  messages: messagesRouter,
  projects: projectsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

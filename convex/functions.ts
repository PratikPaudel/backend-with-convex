import {mutation, query} from "./_generated/server";
import {v} from "convex/values";
export const listTodos = query({
    handler: async (ctx) => {
        return await ctx.db.query("todos").collect();
    }
});

export const createTodo = mutation({
    args: {
        title: v.string(),
        description: v.string(),
    },
    handler: async (ctx, args) => {
        await ctx.db.insert("todos", {title: args.title, description:args.description, completed: false});
    }
})
import { rest } from 'msw'

export const handlers = [
  rest.get('/api/posts', (req, res, ctx) => {
    return res(ctx.json([{ id: 1, title: "Mocked Post" }]))
  })
]

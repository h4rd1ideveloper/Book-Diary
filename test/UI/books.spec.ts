import { test, expect } from '@playwright/test';

test('criar e listar livro via API', async ({ request }) => {
  const create = await request.post('/api/books', {
    data: { title: 'Dune', author: 'Herbert', rating: 4 },
  });
  expect(create.ok()).toBeTruthy();

  const list = await request.get('/api/books');
  const books = await list.json();
  expect(books.length).toBeGreaterThan(0);
});

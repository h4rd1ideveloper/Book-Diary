import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('Books API (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/api/books (POST)', () => {
    return request(app.getHttpServer())
      .post('/api/books')
      .send({ title: '1984', author: 'Orwell', rating: 5 })
      .expect(201)
      .expect((res) => expect(res.body).toHaveProperty('id'));
  });

  // ... outros testes GET, PUT, DELETE
});

import { expect } from 'chai';
import { agent as request } from 'supertest';
import 'mocha';

import App from '../../index';

describe('Unit Test User', (): void => {
  it('should GET', async (): Promise<void> => {
    const res = await request(App).get('/api/users/');
    expect(res.status).to.equal(200);
    expect(res.type).to.equal('application/json');
    expect(res.body).to.be.an('array');
  });
});

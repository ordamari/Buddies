import { Test, TestingModule } from '@nestjs/testing';
import { GoogleAuthenticationResolver } from './google-authentication.resolver';

describe('GoogleAuthenticationResolver', () => {
  let resolver: GoogleAuthenticationResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GoogleAuthenticationResolver],
    }).compile();

    resolver = module.get<GoogleAuthenticationResolver>(GoogleAuthenticationResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

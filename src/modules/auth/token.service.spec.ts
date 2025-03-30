import { Test, TestingModule } from '@nestjs/testing';
import { TokenService } from './token.service';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { RedisService } from '@/database/redis/redis.service';
import { Token } from '@/common/interfaces/tokens/token.enum';
import config from '@/config';

describe('TokenService', () => {
  let service: TokenService;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let jwtService: JwtService;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let userService: UserService;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let redisService: RedisService;

  const mockJwtService = {
    signAsync: jest.fn(),
    verifyAsync: jest.fn(),
  };

  const mockUserService = {
    updateRefreshToken: jest.fn(),
  };

  const mockRedisService = {
    get: jest.fn(),
    set: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TokenService,
        {
          provide: JwtService,
          useValue: mockJwtService,
        },
        {
          provide: UserService,
          useValue: mockUserService,
        },
        {
          provide: RedisService,
          useValue: mockRedisService,
        },
      ],
    }).compile();

    service = module.get<TokenService>(TokenService);
    jwtService = module.get<JwtService>(JwtService);
    userService = module.get<UserService>(UserService);
    redisService = module.get<RedisService>(RedisService);

    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('updateRefreshToken', () => {
    it('should update refresh token', async () => {
      const userId = 'test-user-id';
      const token = 'test-refresh-token';

      await service.updateRefreshToken(userId, token);

      expect(mockUserService.updateRefreshToken).toHaveBeenCalledWith(
        userId,
        expect.any(String),
      );
    });
  });

  describe('generateTokens', () => {
    it('should generate new tokens when Redis is empty', async () => {
      const userId = 'test-user-id';
      const email = 'test@example.com';
      const mockAccessToken = 'mock-access-token';
      const mockRefreshToken = 'mock-refresh-token';

      mockRedisService.get.mockResolvedValue(null);
      mockJwtService.signAsync
        .mockResolvedValueOnce(mockAccessToken)
        .mockResolvedValueOnce(mockRefreshToken);

      const result = await service.generateTokens(userId, email);

      expect(result).toEqual({
        accessToken: mockAccessToken,
        refreshToken: mockRefreshToken,
      });
      expect(mockRedisService.set).toHaveBeenCalledTimes(2);
    });

    it('should return existing tokens from Redis', async () => {
      const userId = 'test-user-id';
      const email = 'test@example.com';
      const existingAccessToken = 'existing-access-token';
      const existingRefreshToken = 'existing-refresh-token';

      mockRedisService.get.mockImplementation((key) => {
        if (key === `access:${userId}`)
          return Promise.resolve(existingAccessToken);
        if (key === `refresh:${userId}`)
          return Promise.resolve(existingRefreshToken);
        return Promise.resolve(null);
      });

      const result = await service.generateTokens(userId, email);

      expect(result).toEqual({
        accessToken: existingAccessToken,
        refreshToken: existingRefreshToken,
      });
      expect(mockJwtService.signAsync).not.toHaveBeenCalled();
      expect(mockRedisService.set).not.toHaveBeenCalled();
    });
  });

  describe('verifyToken', () => {
    it('should verify access token', async () => {
      const token = 'test-token';
      const mockPayload = { id: 'test-id', email: 'test@example.com' };

      mockJwtService.verifyAsync.mockResolvedValue(mockPayload);

      const result = await service.verifyToken(token, Token.ACCESS);

      expect(result).toEqual(mockPayload);
      expect(mockJwtService.verifyAsync).toHaveBeenCalledWith(token, {
        secret: config.jwtAccessSecret,
      });
    });

    it('should verify refresh token', async () => {
      const token = 'test-token';
      const mockPayload = { id: 'test-id', email: 'test@example.com' };

      mockJwtService.verifyAsync.mockResolvedValue(mockPayload);

      const result = await service.verifyToken(token, Token.REFRESH);

      expect(result).toEqual(mockPayload);
      expect(mockJwtService.verifyAsync).toHaveBeenCalledWith(token, {
        secret: config.jwtRefreshSecret,
      });
    });
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { TokenService } from './token.service';
import { BadRequestException, ForbiddenException } from '@nestjs/common';
import { EXCEPTION } from '@/common/constants/exception.constant';
import { CreateUserDto } from '@/modules/user/dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { Crypto } from '@/common/utils/crypto.util';
import { Role } from '@/common/interfaces/enums/role.enum';

describe('AuthService', () => {
  let service: AuthService;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let userService: UserService;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let tokenService: TokenService;

  const mockUserService = {
    findByEmail: jest.fn(),
    findById: jest.fn(),
    create: jest.fn(),
  };

  const mockTokenService = {
    generateTokens: jest.fn(),
    updateRefreshToken: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UserService,
          useValue: mockUserService,
        },
        {
          provide: TokenService,
          useValue: mockTokenService,
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    userService = module.get<UserService>(UserService);
    tokenService = module.get<TokenService>(TokenService);

    // Reset all mocks before each test
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('register', () => {
    const createUserDto: CreateUserDto = {
      email: 'test@example.com',
      password: 'password123',
      name: 'Test User',
      role: Role.Customer,
      phone: '+1234567890',
    };

    it('should throw BadRequestException if user already exists', async () => {
      mockUserService.findByEmail.mockResolvedValue({
        id: '1',
        email: 'test@example.com',
      });

      await expect(service.register(createUserDto)).rejects.toThrow(
        new BadRequestException(EXCEPTION.USER.ALREADY_EXISTS),
      );
    });

    it('should successfully register a new user', async () => {
      const mockUser = { id: '1', email: 'test@example.com' };
      const mockTokens = { accessToken: 'access', refreshToken: 'refresh' };

      mockUserService.findByEmail.mockResolvedValue(null);
      mockUserService.create.mockResolvedValue(mockUser);
      mockTokenService.generateTokens.mockResolvedValue(mockTokens);

      const result = await service.register(createUserDto);

      expect(result).toEqual({ tokens: mockTokens });
      expect(mockUserService.create).toHaveBeenCalledWith({
        ...createUserDto,
        password: expect.any(String),
      });
    });
  });

  describe('login', () => {
    const loginUserDto: LoginUserDto = {
      email: 'test@example.com',
      password: 'password123',
    };

    it('should throw BadRequestException if user not found', async () => {
      mockUserService.findByEmail.mockResolvedValue(null);

      await expect(service.login(loginUserDto)).rejects.toThrow(
        new BadRequestException(EXCEPTION.USER.LOGIN_OR_PASSWORD_WRONG),
      );
    });

    it('should throw BadRequestException if password is wrong', async () => {
      const hashedPassword = Crypto.encrypt('wrong-password');
      const mockUser = {
        id: '1',
        email: 'test@example.com',
        password: hashedPassword,
      };

      mockUserService.findByEmail.mockResolvedValue(mockUser);

      await expect(service.login(loginUserDto)).rejects.toThrow(
        new BadRequestException(EXCEPTION.USER.LOGIN_OR_PASSWORD_WRONG),
      );
    });

    it('should successfully login user', async () => {
      const hashedPassword = Crypto.encrypt(loginUserDto.password);
      const mockUser = {
        id: '1',
        email: 'test@example.com',
        password: hashedPassword,
      };
      const mockTokens = { accessToken: 'access', refreshToken: 'refresh' };

      mockUserService.findByEmail.mockResolvedValue(mockUser);
      mockTokenService.generateTokens.mockResolvedValue(mockTokens);

      const result = await service.login(loginUserDto);

      expect(result).toEqual({ tokens: mockTokens });
    });
  });

  describe('refreshToken', () => {
    const userId = '1';
    const refreshToken = 'valid-refresh-token';
    const hashedRefreshToken = Crypto.encrypt(refreshToken);
    const mockUser = {
      id: userId,
      email: 'test@example.com',
      refreshToken: hashedRefreshToken,
    };

    it('should throw ForbiddenException if user not found', async () => {
      mockUserService.findById.mockResolvedValue(null);

      await expect(service.refreshToken(userId, refreshToken)).rejects.toThrow(
        new ForbiddenException(EXCEPTION.AUTH.TOKEN_INVALID),
      );
    });

    it('should throw ForbiddenException if refresh token is invalid', async () => {
      mockUserService.findById.mockResolvedValue(mockUser);

      await expect(
        service.refreshToken(userId, 'invalid-token'),
      ).rejects.toThrow(new ForbiddenException(EXCEPTION.AUTH.TOKEN_INVALID));
    });

    it('should successfully refresh token', async () => {
      const mockTokens = {
        accessToken: 'new-access',
        refreshToken: 'new-refresh',
      };

      mockUserService.findById.mockResolvedValue(mockUser);
      mockTokenService.generateTokens.mockResolvedValue(mockTokens);

      const result = await service.refreshToken(userId, refreshToken);

      expect(result).toEqual(mockTokens);
      expect(mockTokenService.updateRefreshToken).toHaveBeenCalledWith(
        userId,
        mockTokens.refreshToken,
      );
    });
  });
});

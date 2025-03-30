import { Crypto } from './crypto.util';

describe('Crypto', () => {
  describe('encrypt', () => {
    it('should encrypt a string', () => {
      const plaintext = 'test-password';
      const encrypted = Crypto.encrypt(plaintext);

      expect(encrypted).toBeDefined();
      expect(typeof encrypted).toBe('string');
      expect(encrypted).not.toBe(plaintext);
      expect(encrypted.length).toBeGreaterThan(plaintext.length);
    });

    it('should produce different ciphertexts for the same plaintext', () => {
      const plaintext = 'test-password';
      const encrypted1 = Crypto.encrypt(plaintext);
      const encrypted2 = Crypto.encrypt(plaintext);

      expect(encrypted1).not.toBe(encrypted2);
    });

    it('should handle empty string', () => {
      const plaintext = '';
      const encrypted = Crypto.encrypt(plaintext);

      expect(encrypted).toBeDefined();
      expect(typeof encrypted).toBe('string');
      expect(encrypted).not.toBe(plaintext);
    });

    it('should handle special characters', () => {
      const plaintext = '!@#$%^&*()_+{}[]|\\:;"<>,.?/~`';
      const encrypted = Crypto.encrypt(plaintext);

      expect(encrypted).toBeDefined();
      expect(typeof encrypted).toBe('string');
      expect(encrypted).not.toBe(plaintext);
    });

    it('should handle long strings', () => {
      const plaintext = 'a'.repeat(1000);
      const encrypted = Crypto.encrypt(plaintext);

      expect(encrypted).toBeDefined();
      expect(typeof encrypted).toBe('string');
      expect(encrypted).not.toBe(plaintext);
    });
  });

  describe('decrypt', () => {
    it('should decrypt an encrypted string', () => {
      const plaintext = 'test-password';
      const encrypted = Crypto.encrypt(plaintext);
      const decrypted = Crypto.decrypt(encrypted);

      expect(decrypted).toBe(plaintext);
    });

    it('should handle empty string', () => {
      const plaintext = '';
      const encrypted = Crypto.encrypt(plaintext);
      const decrypted = Crypto.decrypt(encrypted);

      expect(decrypted).toBe(plaintext);
    });

    it('should handle special characters', () => {
      const plaintext = '!@#$%^&*()_+{}[]|\\:;"<>,.?/~`';
      const encrypted = Crypto.encrypt(plaintext);
      const decrypted = Crypto.decrypt(encrypted);

      expect(decrypted).toBe(plaintext);
    });

    it('should handle long strings', () => {
      const plaintext = 'a'.repeat(1000);
      const encrypted = Crypto.encrypt(plaintext);
      const decrypted = Crypto.decrypt(encrypted);

      expect(decrypted).toBe(plaintext);
    });

    it('should throw error for invalid encrypted string', () => {
      const invalidEncrypted = 'invalid-base64url-string';

      expect(() => Crypto.decrypt(invalidEncrypted)).toThrow();
    });
  });

  describe('encryption properties', () => {
    it('should maintain encryption/decryption roundtrip', () => {
      const plaintext = 'test-password';
      const encrypted = Crypto.encrypt(plaintext);
      const decrypted = Crypto.decrypt(encrypted);

      expect(decrypted).toBe(plaintext);
    });

    it('should produce consistent results for same input', () => {
      const plaintext = 'test-password';
      const encrypted1 = Crypto.encrypt(plaintext);
      const encrypted2 = Crypto.encrypt(plaintext);
      const decrypted1 = Crypto.decrypt(encrypted1);
      const decrypted2 = Crypto.decrypt(encrypted2);

      expect(decrypted1).toBe(plaintext);
      expect(decrypted2).toBe(plaintext);
      expect(encrypted1).not.toBe(encrypted2);
    });

    it('should handle different input lengths', () => {
      const inputs = [
        '',
        'a',
        'ab',
        'abc',
        'a'.repeat(10),
        'a'.repeat(100),
        'a'.repeat(1000),
      ];

      inputs.forEach((plaintext) => {
        const encrypted = Crypto.encrypt(plaintext);
        const decrypted = Crypto.decrypt(encrypted);

        expect(decrypted).toBe(plaintext);
      });
    });
  });
});

import * as crypto from 'node:crypto';

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);

export class Crypto {
  public static encrypt(plaintext: string) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    const encrypted = Buffer.concat([
      iv,
      cipher.update(plaintext, 'utf8'),
      cipher.final(),
    ]);
    return encrypted.toString('base64url');
  }

  public static decrypt(text: string) {
    const ivCiphertext = Buffer.from(text, 'base64url');
    const iv = ivCiphertext.subarray(0, 16);
    const ciphertext = ivCiphertext.subarray(16);
    const cipher = crypto.createDecipheriv(algorithm, key, iv);
    const decrypted = Buffer.concat([
      cipher.update(ciphertext),
      cipher.final(),
    ]);
    return decrypted.toString('utf-8');
  }
}

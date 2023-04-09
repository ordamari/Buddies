import { Injectable } from '@nestjs/common';
import { compare, genSalt, hash } from 'bcrypt';
import { HashingService } from '../hashing/hashing.service';

@Injectable()
export class BcryptService implements HashingService {
  /**
   * @param data The original data
   * @returns Encrypted data
   */
  async hash(data: string | Buffer): Promise<string> {
    const salt = await genSalt();
    return hash(data, salt);
  }

  /**
   *
   * @param data The original data
   * @param encrypted The encrypted data
   * @returns If the data matches the encrypted data
   */
  async compare(data: string | Buffer, encrypted: string): Promise<boolean> {
    return compare(data, encrypted);
  }
}

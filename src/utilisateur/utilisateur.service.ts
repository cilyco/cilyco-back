import { Injectable } from '@nestjs/common';

interface User {
  userId: number;
  username: string;
  password: string;
}

@Injectable()
export class UtilisateurService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}

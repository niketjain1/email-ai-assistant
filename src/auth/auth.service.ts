import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  googleLogin(req) {
    if (!req.user) {
      return 'No user from google';
    }
    return {
      message: 'User information from google',
      user: req.user,
    };
  }

  outlookLogin(req) {
    if (!req.user) {
      return 'No user from outlook';
    }
    return {
      message: 'User information from outlook',
      user: req.user,
    };
  }
}

import JWT from "../helpers/jwt";
import { Data, Strategy } from "../interfaces/authContext";

export class AuthContext {
  
  constructor(private strategy: Strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy:Strategy){
    this.strategy = strategy;
  }

  signup(data: Data): string {
    return this.strategy.signup( data );
  }

  signin(data: Data): string {
    return this.strategy.signin( data );
  }
}

export class SignEmail implements Strategy {
  signup({ email, password, username }: Data): string { // extraemos email y password
    if (!email || !password || username) {
      return '';
    }
    // @ts-ignore
    const token = JWT.createToken({ email, username });

    return token as string
  }

  signin({ email, password } : Data): string {
    console.log('Signing in with Email', email, password);
    
    if (email && password ) {
      return 'success';
    }

    return 'error';
  }
}

export class SignGoogle implements Strategy {
  signup(data: Data): string {
    return 'sign google'
  }

  signin(data: Data): string {
    return 'true'
  }
}

export class SignFacebook implements Strategy {
  signup(data: Data): string {
    return 'sign facebook'
  }
  
  signin(data: Data): string {
    return 'true'
  }
}

export class SignGithub implements Strategy {
  signup(data: Data): string {
    return 'sign Github'
  }

  signin(data: Data): string {
    return 'true'
  }
}

// COMO USAR
// inicializamos con email
// const authService = new AuthContext(new SignEmail());
// authService.setStrategy(new signGoogle()); // cambiar a otra estrategia
// authService.signup({ data: { email: 'test@gmail.com', password: '123456'}}); // ejemplo


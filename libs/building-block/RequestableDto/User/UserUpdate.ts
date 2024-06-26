import { OmitType, PartialType } from '@nestjs/swagger';

import { UserCreator } from './UserCreator';

export class UserUpdate extends PartialType(
  OmitType(UserCreator, ['email'] as const),
) {}

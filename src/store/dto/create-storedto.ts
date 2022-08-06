import { IsNotEmpty, IsString } from 'class-validator';
export class CreateStoreDto {
  @IsString()
  @IsNotEmpty()
  store: string;
}

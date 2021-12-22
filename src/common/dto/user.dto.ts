import { ApiProperty } from '@nestjs/swagger';
import { JoinRequestDto } from 'src/users/dto/join.request.dto';

export class userDto extends JoinRequestDto {
  @ApiProperty({ required: true, example: 1, description: '아이디' })
  id: number;
}

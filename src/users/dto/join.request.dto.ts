import { ApiProperty } from '@nestjs/swagger';

export class JoinRequestDto {
  @ApiProperty({
    example: 'yoteamo7@naver.com',
    description: '이메일',
    required: true,
  })
  public email: string;

  @ApiProperty({
    example: '원짱',
    description: '닉네임',
    required: true,
  })
  public nickname: string;

  @ApiProperty({
    example: 'asdasd',
    description: '비밀번호',
    required: true,
  })
  public password: string;
}

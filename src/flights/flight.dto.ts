import { IsString } from 'class-validator';

class CreateFlightDto {
  @IsString()
  public departureLocation: string;
  @IsString()
  public arrivalLocation: string;
  @IsString()
  public departureTime: string;
  @IsString()
  public arrivalTime: string;
  @IsString()
  public aircraft: string;
  @IsString()
  public operator: string;
}

export default CreateFlightDto;

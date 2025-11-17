export class CreateUseDto {
  name: string;
  level: number;
  currentEnergy: number;
  maxEnergy: number;
  lastRestoreTime: number;
  currentLevel: string;
}

export class UpdateUseDto extends CreateUseDto {
  id: number;
}

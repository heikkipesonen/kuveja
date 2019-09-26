import { ErrorHolder } from "./index"

export class ApiError implements ErrorHolder {
  public readonly kind = 'ApiError'
  constructor(
    public readonly message: string
  ) {}
}
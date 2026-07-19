import { injectable } from "tsyringe";
import { ImageRepository } from "../repositories/image.repository.js";

@injectable()
export class ImageService {
  constructor(private readonly repository: ImageRepository) {}

  public getImagePath(imagePath: string): string {
    return this.repository.getImagePath(imagePath);
  }
}

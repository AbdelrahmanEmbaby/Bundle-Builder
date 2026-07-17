import path from "node:path";
import { injectable } from "tsyringe";

@injectable()
export class ImageRepository {
    public getImagePath(imagePath: string): string {
        return path.join(
            process.cwd(),
            "data",
            "images",
            imagePath
        );
    }
}
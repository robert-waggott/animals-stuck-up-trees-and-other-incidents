import { NestFactory } from "@nestjs/core";
import * as dotenv from "dotenv";
import { join } from "path";
import { AppModule } from "./app.module";

dotenv.config({
    path: join(__dirname, "..", "config.env")
});

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.enableCors();

    console.log("PORT: ");
    console.log(process.env.PORT);
    console.log(join(__dirname, "..", ".env"));

    await app.listen(parseInt(process.env.PORT, 10) || 3001);
}

bootstrap();

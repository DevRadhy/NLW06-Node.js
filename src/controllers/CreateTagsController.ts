import { Request, Response } from "express";
import { CreateTagService } from "../services/CreateTagService";

class CreateTagsController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    const createTagService = new CreateTagService();

    const tag = createTagService.execute(name);

    return response.json(tag);
  }
}

export { CreateTagsController }
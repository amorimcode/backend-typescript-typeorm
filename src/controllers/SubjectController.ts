import { Request, Response } from "express";
import { subjectRepository } from "../repositories/SubjectRepositoriy";

export class SubjectController {
  async create(req: Request, res: Response) {
    const name = req.body.name;

    if (!name) {
      return res.status(400).json({ message: "name is obrigatory" });
    }

    try {
      const newSubject = subjectRepository.create({
        name,
      });

      await subjectRepository.save(newSubject);

      return res.status(201).json(newSubject);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "internal server error" });
    }
  }
}

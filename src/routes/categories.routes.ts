/* eslint-disable consistent-return */
import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({ name, description });

  res.status(201).send(categoriesRepository.list());
});

categoriesRoutes.get("/", (req, res) => {
  const categories = categoriesRepository.list();

  return res.status(200).json(categories);
});

export { categoriesRoutes };

import { Category } from "../model/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "./ICategoriesRepository";

class PostgresCategoriesRepository implements ICategoriesRepository {
  create({ name, description }: ICreateCategoryDTO): void {
    console.log(`Creating category ${name} and ${description}`);
    return null;
  }
  list(): Category[] {
    return [];
  }
  findByName(name: string): Category {
    console.log(`Finding category ${name}`);
    return null;
  }
}

export { PostgresCategoriesRepository };

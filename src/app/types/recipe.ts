export interface Recipe {
  id: string;
  title: string;
  description: string;

  preparationTime: {
    total?: number;
    preparation: number;
    cooking: number;
  };

  ingredients: string[];

  instructions: Instruction[];

  nutrition: {
    calories: number;
    carbs: number;
    protein: number;
    fat: number;
  };
}

interface Instruction {
  title: string;
  description: string;
}

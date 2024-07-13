"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvalid(text) {
  return !text || text.trim() === "";
}

export async function shareMeal(prevState , formdata) {
  const meal = {
    title: formdata.get("title"),
    summary: formdata.get("summary"),
    instructions: formdata.get("instructions"),
    image: formdata.get("image"),
    creator: formdata.get("name"),
    creator_email: formdata.get("email"),
  };

  if (
    isInvalid(meal.title) ||
    isInvalid(meal.summary) ||
    isInvalid(meal.instructions) ||
    isInvalid(meal.creator) ||
    isInvalid(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return{
        message : "Invalid input",
    }
  }

  await saveMeal(meal);
  revalidatePath("/meals")
  redirect("/meals");
}
